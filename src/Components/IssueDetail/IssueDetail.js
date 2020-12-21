import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import DateFormat from 'dateformat';
import jira from '../Jira/Jira';

import IssueDetailView from './IssueDetailView';
import Comments from '../Comments/Comments';
import TabbedPanel from '../Shared/TabbedPanel';
import Ibox from '../Shared/Ibox';
import { data } from 'jquery';


function IssueDetail (props) {
    const [ issue, setIssue ] = useState({});
    const [ comments, setComments ] = useState({});
    const [ issueType, setIssueType ] = useState({});

    const { issue_key } = useParams();

    
    
    useEffect(()=> {
        async function fetchIssue () {
            const response = await jira
                .get(props.fetchUrl + issue_key)
                .catch((err) => console.log(err));

                console.log(response.data)
                const data = response.data;

                const assigneeName = (data.fields.assignee == null ? '' : data.fields.assignee.displayName);
                const assigneeAvatar = (data.fields.assignee == null ? '' : data.fields.assignee.avatarUrls["16x16"]);

                const issueObj = {
                    issueKey: data.key,
                    id: data.id,
                    creatorName: data.fields.creator.displayName,
                    summary: data.fields.summary,
                    description: data.fields.description,
                    projectName: data.fields.project.name,
                    clientName: data.fields.project.projectCategory.name,
                    status: data.fields.status.name,
                    createdAt: DateFormat(data.fields.created, "mmmm dS, yyyy"),
                    updatedAt: DateFormat(data.fields.updated, "mmmm dS, yyyy"),
                    assigneeName: assigneeName,
                    assigneeAvatar: assigneeAvatar
                }
                setIssue(issueObj);

                setIssueType({
                    id: data.fields.issuetype.id,
                    name: data.fields.issuetype.name
                })
                console.log(data.fields.comment)
                
                
                if (data.fields.comment.total > 0){
                    const commentArray = data.fields.comment.comments;
                    setComments(commentArray.map(comment => (
                        {
                            authorName: comment.author.displayName,
                            authorEmail: comment.author.emailAddress,
                            authorAvatar: comment.author.avatarUrls["16x16"],
                            commentBody: comment.body,
                            id: comment.id,
                            createdAt: DateFormat(comment.created, "mmmm dS, yyyy"),
                        }
                    )
                    ))
                }
                console.log(comments);
                return response.data;

                // const getNestedObjects = (nestedObj, PathArr) => {
                //     return PathArr.reduce((obj, key) => 
                //     (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj)
                // }

                // const issueDeNested = getNestedObjects(response.data, ['fields', 'creator']);

                
                // for (const [ key, value ] of Object.entries(response.data.fields)){
                //     console.log(`${key}: ${value}`)
                // }
            
        }
        fetchIssue();
    // eslint-disable-next-line
    }, [issue_key])

    let hasComments = '';
    if(comments.length > 0) {
        hasComments = <Comments comments={comments} tab="tabOne"/>
    }


    return (
        <div>
            <h1>IssueDetail</h1>
        <Ibox>
        <IssueDetailView
            issue={issue}
            issueType={issueType}
             />

        <TabbedPanel>
            {hasComments}
        </TabbedPanel>
        </Ibox>
    </div>
    )
}

export default IssueDetail;