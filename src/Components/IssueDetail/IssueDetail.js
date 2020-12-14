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
        async function fetchIssue () {
            const response = await jira
                .get(fetchUrl + issue_key)
                .catch((err) => console.log(err));

                // const issueArray = [response.data];

                // console.log(issueArray);
                setIssue({issue: response.data})

                // const issueData = issueArray.map(issue => {
                //         return {
                //             id: issue.id,
                //             key: issue.key,
                //             description: issue.fields.description,
                //             summary: issue.fields.summary,
                //             project: issue.fields.project,
                //             created: issue.fields.created,
                //             updated: issue.fields.updated,
                //             priority: issue.fields.priority,
                //             assignee: issue.fields.assignee,
                //             status: issue.fields.status,
                //             creator: issue.fields.creator
                //         }});
                // setIssue(issueData)


                // const getNestedObjects = (nestedObj, PathArr) => {
                //     return PathArr.reduce((obj, key) => 
                //     (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj)
                // }

                // const issueDeNested = getNestedObjects(response.data, ['fields', 'creator']);

                // console.log(issueDeNested)

                // for (const [ key, value ] of Object.entries(response.data)){
                //     console.log(`${key}: ${value}`)
                // }
                // for (const [ key, value ] of Object.entries(response.data.fields)){
                //     console.log(`${key}: ${value}`)
                // }
                // setIssue(response.data.map(issue => {
                //     return {
                //         id: issue.id,
                //         key: issue.key,
                //         description: issue.fields.description,
                //         summary: issue.fields.summary,
                //         project: issue.fields.project,
                //         created: issue.fields.created,
                //         updated: issue.fields.updated,
                //         priority: issue.fields.priority,
                //         assignee: issue.fields.assignee,
                //         status: issue.fields.status,
                //         creator: issue.fields.creator
                //     }}
                // ))
            
        }
        fetchIssue();
    // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1>IssueDetail</h1>
        <IssueDetailView 
            issue={...issue}
             />

        {/* <TabbedPanel>
            <Comments comments={comments} tab="tabOne"/>
        </TabbedPanel> */}
        </div>
    )
}

export default IssueDetail;