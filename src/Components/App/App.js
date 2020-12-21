import '../../style.css';
import {BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import TopBar from '../TopBar/TopBar';
import {requests} from '../../requests';

import Header from '../Header/Header';
import IssueList from '../IssueList/IssueList';
import IssueDetail from '../IssueDetail/IssueDetail';
import ProjectList from '../ProjectList/ProjectList';


function App() {
  

  return (
    <div id="wrapper">
      <Router>
        <NavBar />
      <div id="page-wrapper" className="gray-bg">
        <TopBar />
      
      <Header />
      
        <Switch>
          <Route path="/" exact>
            <ProjectList fetchUrl={requests.fetchProject} />
          </Route>
          <Route path={`/issueList/:key`}>
            <IssueList fetchUrl={requests.fetchIssues} />
          </Route>
          <Route path={`/issueDetail/:issue_key`}>
            <IssueDetail fetchUrl={requests.fetchIssue} />
          </Route>
        </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
