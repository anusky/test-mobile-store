import Breadcrumb from "../Breadcrumb";

const Header = () => {
  return (
    <header className="grid grid-cols-3 h-20 place-items-center bg-slate-900 text-slate-100">
      <div className="text-xl">TestMobileStore</div>
      <Breadcrumb />
    </header>
  );
};

export default Header;
