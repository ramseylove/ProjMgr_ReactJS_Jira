import '../../style.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import TopBar from '../TopBar/TopBar';
import {requests} from '../../requests';

// import Header from '../Header/Header';
import IssueList from '../IssueList/IssueList';
import IssueDetail from '../IssueDetail/IssueDetail';
import ProjectList from '../ProjectList/ProjectList';


function App() {
  return (
    <div id="wrapper">
      <NavBar />
      <div id="page-wrapper" className="gray-bg">
        <TopBar />
      {/* <Header title={this.props.title}/> */}
      <Router>
        <Route exact={true} path="/">
          <ProjectList fetchUrl={requests.fetchProject} />
        </Route>
        <Route path="/issues/:key">
          <IssueList fetchUrl={requests.fetchIssues} />
        </Route>
        <Route path="/issue/:key">
          <IssueDetail fetchUrl={requests.fetchIssue} />
        </Route>
      </Router>
    </div>
    </div>
  );
}

export default App;
