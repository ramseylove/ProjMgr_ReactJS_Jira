import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import jira from '../Jira/Jira';

import IssueDetailView from './IssueDetailView';
import Comments from '../Comments/Comments';
import TabbedPanel from '../Shared/TabbedPanel';


function IssueDetail (props) {
    const [ issue, setIssue ] = useState({});
    const [ comments, setComments ] = useState()
    const [ issueType, setIssueType ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const { key } = useParams();

    useEffect(()=> {
        async function fetchIssue() {
        const response = await jira
            .get(props.fetchUrl + key)
            .catch((err) => console.log(err));

        if (response && response.data){ 
            const issue_detail = response.data; 
            setIssue({
                issue: issue_detail,
                fields: issue_detail.fields,
                creator: issue_detail.fields.creator
            })
            setComments(issue_detail.fields.comment)
            setIssueType({issueType: issue_detail.fields.issuetype})
            console.log(issue.issue)
            setIsLoading(false)
            
        };
    }
    fetchIssue();
    // eslint-disable-next-line
    }, [key])

    return (
        <div>
        <IssueDetailView 
            issue={issue}
            issueType={issueType} />

        <TabbedPanel>
            <Comments comments={comments} tab="tabOne"/>
        </TabbedPanel>
        </div>
    )
}

export default IssueDetail;