import Card from '@mui/material/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Cards({ title, postDate, thumbnail, postId }) {
  const navigate = useNavigate();
  const [postDateStr, setPostDateStr] = useState(
    (postDate + '').substring(0, 10)
  );

  console.log(postDateStr);
  console.log(title);

  return (
    <div className="Card">
      <Card
        className="Card__All"
        sx={{ minWidth: 800, minHeight: 100 }}
        onClick={() => navigate(`/boards/detail/${postId}`)}
      >
        <div className="Card__ImgBox">
          <img className="Card__Img" src={thumbnail} />
        </div>
        <div className="Card__Content">
          {title} <br />
          {postDateStr}
        </div>
      </Card>
    </div>
  );
}
