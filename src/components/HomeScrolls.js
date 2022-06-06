import { FullPage, Slide } from 'react-full-page';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const HomeScrolls = () => {
  return (
    <div>
      <FullPage control controlProps={{ className: 'slide-navigation' }}>
        <Slide>
          <div className="Home__Section1">
            Home Section 1
            <br />
            <Link to="./mainInfo" stype={{ textDecoration: 'none' }}>
              <Button variant="outlined">goTo MainInfo</Button>
            </Link>
          </div>
        </Slide>
        <Slide className="Home__Section2">HomeSection 2</Slide>
      </FullPage>
    </div>
  );
};

export default HomeScrolls;
