import React from "react";
// import { FaWindowClose } from "react-icons/fa";

// import PostsList from "../../components/PostsList";
// import PostsListFilter from "../../components/PostsListFilter";

import Footer from "./../components/static/Footer";
import Header from "./../components/Header";
import SiteMap from "./../components/SiteMap";
 import { AppContext } from "./../context/settings";
import LeftMenu from "../components/navigation/LeftMenu";

export default function StandardPage({ children: Page, ...rest }) {
  // const { alert, hideAlert } = React.useContext(UserContext);
  const [expanded, set_expanded] = React.useState(false);
  const appContext = React.useContext(AppContext);

  React.useEffect(() => {
    if (appContext.settings.leftMenuExpanded) {
      set_expanded("ml300");
    } else {
      set_expanded("");
    }
  });

  return (
    <React.Fragment>
      {/* Left Menu */}
      <LeftMenu />

      {/* Page */}
      <div id="page-wrapper" className={"gray-bg " + expanded} style={{ border: "0px solid red" }}>
        <div className="border-bottom white-bg">
          <div className="container-fluid">
            <Header />
          </div>
        </div>

        <div className="wrapper border-bottom page-heading">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <SiteMap title="Dashboard" />
              </div>
            </div>
          </div>
        </div>

        {Page}

        <Footer />
      </div>
    </React.Fragment>
  );
}