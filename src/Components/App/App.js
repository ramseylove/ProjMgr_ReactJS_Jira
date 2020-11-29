import '../../style.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import TopBar from '../TopBar/TopBar';
import {requests} from '../../requests';

import Header from '../Header/Header';
import IssueList from '../IssueList/IssueList';
import ProjectList from '../ProjectList/ProjectList';


function App() {
  return (
    <div id="wrapper">
      <NavBar />
      <TopBar />
      <Header />
      <Router>
        <Route exact={true} path="/">
          <ProjectList fetchUrl={requests.fetchProject}/>
        </Route>
        <Route path="/issues">
          <IssueList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
