import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import jira from '../Jira/Jira';

import { requests } from '../../requests';

import IssueDetailView from './IssueDetailView';
import Comments from '../Comments/Comments';
import TabbedPanel from '../Shared/TabbedPanel';


function IssueDetail (props) {
    const [ issue, setIssue ] = useState([]);
    // const [ comments, setComments ] = useState([]);
    // const [ issueType, setIssueType ] = useState({});
    const { issue_key } = useParams();

    const fetchIssue = async () => {
        const response = await jira
            .get(requests.fetchIssue + issue_key)
            .catch((err) => console.log(err));

        if (response && response.data){ 
            const issue_detail = response.data; 
            setIssue(response.data);
            // setComments(issue_detail.fields.comment);
            // setIssueType({issueType: issue_detail.fields.issuetype});
            console.log('Issue Detail: ');
            console.log(response.data);
        };
    }
    useEffect(()=> {
        fetchIssue();
    // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1>IssueDetail</h1>
        <IssueDetailView 
            issue={issue.id}
            issueType={issue.fields.issuetype}
            fields={issue.fields} />

        <TabbedPanel>
            {/* <Comments comments={comments} tab="tabOne"/> */}
        </TabbedPanel>
        </div>
    )
}

export default IssueDetail;