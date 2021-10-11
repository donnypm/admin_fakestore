import NaviBar from "./Navigation-bar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <NaviBar />
      {children}
    </div>
  );
};

export default Layout;
