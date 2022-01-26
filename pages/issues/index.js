import React, { useEffect, useState } from "react";
// import { useParams, Link } from 'react-router-dom';
import DateFormat from "dateformat";
// import jira from "../../services/Jira";
// import { requests } from "../../src/requests";

import IssueList from "../../Components/IssueList/IssueList";
import Ibox from "../../Components/Shared/Ibox";

// import Issue from '../Issue/Issue';
import Loading from "../../Components/Shared/Loading";

function IssueListPage(props) {
  // const [issues, setIssues] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const { key } = useParams();

  // const avatar_uri = 'issue.fields.creator.avatarUrls.24x24'

  // useEffect(() => {
  //   const fetchIssues = async () => {
  //     try {
  //       const response = await jira.get(requests.fetchIssues + `"${key}"`);
  //       setIssues(
  //         response.data.issues.map((issue) => {
  //           return {
  //             id: issue.id,
  //             key: issue.key,
  //             description: issue.description,
  //             summary: issue.fields.summary,
  //             project_id: issue.fields.project.id,
  //             created: DateFormat(issue.fields.created, "mmmm dS, yyyy"),
  //             avatarUrl: issue.fields.creator.avatarUrls["24x24"],
  //           };
  //         })
  //       );
  //       setIsLoading(false);
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   };
  //   fetchIssues();
  //   // eslint-disable-next-line
  // }, [key]);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <IssueList issues={props.issues}/>
  );
}

export default IssueListPage;
