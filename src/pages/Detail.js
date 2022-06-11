import AppLayout from '../components/AppLayout';
import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';
import { request } from '../components/config/axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [data, setData] = useState();
  const { postId } = useParams();

  const getData = async () => {
    await request
      .get(`/boards/detail/${postId}`)
      .then((res) => {
        console.log(res.data.image[0].imagePath);
        console.log(res.data.post);
        setData((data) => res.data);
      })

      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log(postId);
    getData();
  }, []);

  return (
    <AppLayout>
      <div className="Detail">
        <Card className="Detail__Card" sx={{ width: 1100, height: 500 }}>
          <div className="Detail__ImgBox">
            <img
              className="Detail__Img"
              src={data && data.image[0].imagePath}
            />
          </div>
          <div className="Detail__Contents">
            <div className="Detail__Title">{data && data.post.title}</div>
            <div className="Detail__Date">{data && data.post.postDate}</div>
            <div className="Detail__Location">
              {data && data.post.userLocation}
            </div>
            <div className="Detail__Content">{data && data.post.content}</div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Detail;
