import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useEffect, useState } from 'react';
import { minHeight } from '@mui/system';
export default function Cards({ title, postDate, thumbnail }) {
  const [postDateStr, setPostDateStr] = useState(
    (postDate + '').substring(0, 10)
  );

  console.log(postDateStr);
  console.log(title);

  return (
    <div className="Card">
      <Card className="Card__All" sx={{ minWidth: 800, minHeight: 100 }}>
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
