import ActionButtons from "./action-buttons";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";

const Navbar = () => {
  return (
    <div className="py-3 px-8">
      <div className="max-w-screen-xl flex justify-between items-center mx-auto">
        <Logo />
        <NavigationBar />
        <ActionButtons />
      </div>
    </div>
  );
};

export default Navbar;
