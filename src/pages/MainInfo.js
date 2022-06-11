import PostItem from '../components/PostItem';
import AppLayout from '../components/AppLayout';
import Items from '../components/Items';
const MainInfo = () => {
  return (
    <AppLayout>
      <div className="MainInfo">
        <div className="MainInfo__PostItemBtn">
          {localStorage.getItem('accessToken') && <PostItem />}
        </div>
        <div className="MainInfo__Items">
          <Items />
        </div>
      </div>
    </AppLayout>
  );
};

export default MainInfo;
