import AppLayout from '../components/AppLayout';
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import { request } from '../components/config/axios';
import { format } from 'prettier';

class PostItemPage extends Component {
  state = {
    title: '',
    contents: '',
    image: '',
    previewURL: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFileOnChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();

    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image: file,
        previewURL: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  handleSubmit = async (e) => {
    //페이지 리로딩 방지
    e.preventDefault();
    console.log(this.state.image);

    const data = {
      categorytId: 0
    };

    const accessToken = localStorage.getItem('accessToken');
    let formData = new FormData();
    formData.append('multipartFile', this.state.image);
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

  render() {
    let profile_preview = null;
    if (this.state.image !== '') {
      profile_preview = (
        <img className="Profile__Preview" src={this.state.previewURL} />
      );
    }
    return (
      <AppLayout>
        <div className="PostItemPage">
          <form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <div>
              제목{' '}
              <input
                name="title"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <br />
              내용{' '}
              <input
                name="contents"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <br />
              <input
                type="file"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                name="profileImg"
                onChange={this.handleFileOnChange}
              ></input>
              <br />
              {this.profile_preview}
              <Button variant="outlined" type="submit">
                게시글 등록
              </Button>
            </div>
          </form>
        </div>
      </AppLayout>
    );
  }
}

export default PostItemPage;
