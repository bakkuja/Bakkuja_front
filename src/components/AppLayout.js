import Header from './Header';
const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="AppLayout">{children}</div>
    </div>
  );
};
export default AppLayout;
