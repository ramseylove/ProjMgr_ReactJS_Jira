import './App.css';
import IssueList from '../IssueList/IssueList';
import {BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/issues">
        <IssueList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
