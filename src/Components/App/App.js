import '../../style.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import TopBar from '../TopBar/TopBar';
import {requests} from '../../requests';

// import Header from '../Header/Header';
import IssueList from '../IssueList/IssueList';
import Issue from '../Issue/Issue';
import ProjectList from '../ProjectList/ProjectList';
import IssueDetail from "../IssueDetail/IssueDetail";
import {useState} from "react";
import ModalForm from "../Shared/ModalForm";


function App() {
    const [issueModalIsShown, setIssueIsShown] = useState(false)

    const showIssueModalHandler = () => {
        setIssueIsShown(true)
    }
    const hideIssueModalHandler = () => {
        setIssueIsShown(false)
    }

  return (
    <div id="wrapper">
      <NavBar />
      <div id="page-wrapper" className="gray-bg">
        <TopBar />
      {/* <Header title={this.props.title}/> */}
          {issueModalIsShown && <ModalForm onClose={hideIssueModalHandler} className='show' />}
      <Router>
        <Route exact={true} path="/">
          <ProjectList fetchUrl={requests.fetchProject} />
        </Route>
        <Route exact={true} path="/issues/:key">
          <IssueList fetchUrl={requests.fetchIssues} onAddIssue={showIssueModalHandler}/>
        </Route>
          <Route path="/issues/:key/detail">
          <IssueDetail fetchUrl={requests.fetchIssue} />
        </Route>
      </Router>
    </div>
    </div>
  );
}

export default App;
