import Link from "next/link";
import React, { Fragment, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import TopBar from "../Components/TopBar/TopBar";
import { requests } from "../src/requests";

// import Header from '../Header/Header';
// import IssueList from "../Components/IssueList/IssueList";
// import Issue from "../Issue/Issue";
// import ProjectList from "../ProjectList/ProjectList";
// import IssueDetail from "../IssueDetail/IssueDetail";

// import ModalForm from "../Components/Shared/ModalForm";

function HomePage(props) {
  const [issueModalIsShown, setIssueIsShown] = useState(false);

  const showIssueModalHandler = () => {
    setIssueIsShown(true);
  };
  const hideIssueModalHandler = () => {
    setIssueIsShown(false);
  };

  return (
    <Fragment>
      <h2>Welcome to the Home Page</h2>
      <Link href="/projects">Go to Projects</Link>
      {/* <ul>
          {props.data.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul> */}

      {/* <Header title={this.props.title}/>
        // {issueModalIsShown && (
        //   <ModalForm onClose={hideIssueModalHandler} className="show" />
        // )}
      */}
    </Fragment>
  );
}

export default HomePage;
