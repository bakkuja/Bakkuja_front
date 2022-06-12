import AppLayout from '../components/AppLayout';
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const PostItemPage = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState();
  const [userLocation, setUserLocation] = useState();

  const titleChange = (e) => {
    setTitle((state) => e.target.value);
  };

  const contentsChange = (e) => {
    setContent((state) => e.target.value);
  };

  const userLocationChange = (e) => {
    setUserLocation((state) => e.target.value);
  };
  const handleFileOnChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();

    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage((state) => file);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    //페이지 리로딩 방지
    e.preventDefault();
    console.log(image);

    const data = {
      title,
      content,
      userLocation
    };

    let formData = new FormData();
    formData.append('multipartFile', image);
    formData.append(
      'params',
      new Blob([JSON.stringify(data)], { type: 'application/json' })
    );
    formData.append(
      'accessToken',
      new Blob([JSON.stringify(localStorage.getItem('accessToken'))], {
        type: 'application/json'
      })
    );
    console.log(formData.get('accessToken'));

    await fetch(process.env.REACT_APP_URL + '/boards/write', {
      method: 'POST',
      body: formData
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AppLayout>
      <div className="PostItemPage">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            제목 <input name="title" value={title} onChange={titleChange} />
            <br />
            위치{' '}
            <input
              type="text"
              name="userLocation"
              value={userLocation}
              placeholder={'서울시 성북구 길음동'}
              onChange={userLocationChange}
            />
            <br />
            내용{' '}
            <input name="contents" value={content} onChange={contentsChange} />
            <br />
            <input
              type="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              name="profileImg"
              onChange={handleFileOnChange}
            ></input>
            <br />
            <Button variant="outlined" type="submit">
              게시글 등록
            </Button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};

export default PostItemPage;
