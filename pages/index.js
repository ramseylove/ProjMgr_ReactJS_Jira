import React, { useState } from "react";
import Axios from "axios";
import NavBar from "../Components/NavBar/NavBar";
import TopBar from "../Components/TopBar/TopBar";
import { requests } from "../src/requests";

// import Header from '../Header/Header';
// import IssueList from "../Components/IssueList/IssueList";
// import Issue from "../Issue/Issue";
// import ProjectList from "../ProjectList/ProjectList";
// import IssueDetail from "../IssueDetail/IssueDetail";

import ProjectList from "../Components/ProjectList/ProjectList";
// import ModalForm from "../Components/Shared/ModalForm";

function HomePage() {
  const [issueModalIsShown, setIssueIsShown] = useState(false);

  const showIssueModalHandler = () => {
    setIssueIsShown(true);
  };
  const hideIssueModalHandler = () => {
    setIssueIsShown(false);
  };

  return (
    <div id="wrapper">
      <NavBar />
      <div id="page-wrapper" className="gray-bg">
        <TopBar />
        <ProjectList fetchUrl={requests.fetchProject} />
        {/* <Header title={this.props.title}/>
        {issueModalIsShown && (
          <ModalForm onClose={hideIssueModalHandler} className="show" />
        )}
        <Router>
          <Route exact={true} path="/">
            <ProjectList fetchUrl={requests.fetchProject} />
          </Route>
          <Route exact={true} path="/issues/:key">
            <IssueList
              fetchUrl={requests.fetchIssues}
              onAddIssue={showIssueModalHandler}
            />
          </Route>
          <Route path="/issues/:key/detail">
            <IssueDetail fetchUrl={requests.fetchIssue} />
          </Route>
        </Router> */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const jira = Axios.create({
    baseURL: "https://atriadev.atlassian.net/rest/api/2",
    auth: {
      username: process.env.JIRA_USER,
      password: process.env.JIRA_KEY,
    },
    timeout: 3000,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      // X-Atlassian-Token: "no-check",
    },
  });
}

export default HomePage;
