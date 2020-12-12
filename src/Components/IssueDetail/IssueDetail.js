import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import jira from '../Jira/Jira';

import { requests } from '../../requests';

import IssueDetailView from './IssueDetailView';
import Comments from '../Comments/Comments';
import TabbedPanel from '../Shared/TabbedPanel';


function IssueDetail (props) {
    const [ issue, setIssue ] = useState([]);
    // const [ comments, setComments ] = useState({});
    const [ issueType, setIssueType ] = useState([]);
    const { issue_key } = useParams();
    const fetchUrl = requests.fetchIssue;

    
    useEffect(()=> {
        const fetchIssue = async () => {
            const response = await jira
                .get(fetchUrl + issue_key)
                .catch((err) => console.log(err));

            if (response && response.data){ 
                setIssue(response.data);
            //     // const issue_detail = response.data;
            //     // setIssue({issue: response.data});
            //     // setComments(issue.issue.fields.comment);
            //     // setIssueType(response.data.fields.issuetype);
            //     console.log('Issue Detail: ');
            //     // console.log(issue.issue);
            //     // console.log(issue.data.fields);
            };
            console.log(issue);
        }
        fetchIssue();
    // eslint-disable-next-line
    }, [fetchUrl, issue_key])

    return (
        <div>
            <h1>IssueDetail</h1>
        <IssueDetailView 
            issue={issue}
             />

        {/* <TabbedPanel>
            <Comments comments={comments} tab="tabOne"/>
        </TabbedPanel> */}
        </div>
    )
}

export default IssueDetail;