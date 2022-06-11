import PostItem from '../components/PostItem';
import AppLayout from '../components/AppLayout';
const MainInfo = () => {
  return (
    <AppLayout>
      <div className="MainInfo">
        <div className="MainInfo__PostItemBtn">
          <PostItem />
        </div>
      </div>
    </AppLayout>
  );
};

export default MainInfo;
