import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  async function postCode() {
    try {
      await axios
        .post(process.env.REACT_APP_URL + '/oauth/kakao/login?code=' + code)
        .then((res) => {
          localStorage.setItem('accessToken', res.headers['jwtaccesstoken']);
          localStorage.setItem(
            'refreshTokenIndex',
            res.headers['refreshtokenindex']
          );
          localStorage.setItem('isLogged', true);
          navigate('/');
        });
    } catch (error) {
      console.log(error);
    }
  }
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    postCode();
  });

  return <div></div>;
};

export default Auth;
