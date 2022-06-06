import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

const KakaoLoginOut = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const [isLogged, setIsLogged] = useState(false);

  const logOutClick = () => {
    localStorage.removeItem('isLogged');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshTokenIndex');
  };
  useEffect(() => {
    if (localStorage.getItem('isLogged') !== null) setIsLogged((state) => true);
  });
  return (
    <div>
      <Button
        onClick={() => {
          isLogged === false
            ? (window.location.href = KAKAO_AUTH_URL)
            : logOutClick();
        }}
      >
        {isLogged === true ? 'LOGOUT' : 'LOGIN'}
      </Button>
    </div>
  );
};
export default KakaoLoginOut;
