import { FullPage, Slide } from 'react-full-page';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const HomeScrolls = () => {
  return (
    <div>
      <FullPage control controlProps={{ className: 'slide-navigation' }}>
        <Slide>
          <div className="Home__Section1">
            <h1>바꾸자</h1>
            <br />
            <br />
            <Link to="./mainInfo" style={{ textDecoration: 'none' }}>
              <Button variant="outlined">교환 물품 보러 가기</Button>
            </Link>
          </div>
        </Slide>
        <Slide className="Home__Section2">
          집에 안 쓰는 물건이 있죠?
          <br />
          버리지 말고 여기서 바꿔봐요.
        </Slide>
      </FullPage>
    </div>
  );
};

export default HomeScrolls;
