import { Fragment } from "react";

import NavBar from "../NavBar/NavBar";

function Layout(props) {
  return (
    <Fragment>
      <div id="wrapper">
        <NavBar />
        <div id="page-wrapper" className="gray-bg">
          {props.children}
        </div>
      </div>
    </Fragment>
  );
}

export default Layout;
