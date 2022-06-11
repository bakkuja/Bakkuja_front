import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const PostItem = () => {
  const navigate = useNavigate();
  const btnOnClick = (e) => {
    if (localStorage.getItem('isLogged') !== null) {
      navigate('/mainInfo/PostItem');
    } else {
      alert('로그인을 해주세요!');
    }
  };
  return (
    <div>
      <Button onClick={btnOnClick}>게시글 작성</Button>
    </div>
  );
};

export default PostItem;
