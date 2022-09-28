import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Cart from "../Cart";

const Header = () => {
  return (
    <header className="fixed top-0 w-full grid gap-y-2 min-h-24 bg-slate-900 text-slate-100 p-4 lg:p-6">
      <div className="inline-flex justify-between">
        <Link className="text-3xl font-extrabold text-white" to="/">
          TMS
        </Link>
        <Cart />
      </div>
      <div>
        <Breadcrumb />
      </div>
    </header>
  );
};

export default Header;
