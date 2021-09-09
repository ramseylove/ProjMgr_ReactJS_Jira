import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DateFormat from 'dateformat';
import jira from '../Jira/Jira';
import { requests } from '../../requests';

import Ibox from '../Shared/Ibox';

import Issue from '../Issue/Issue';

function IssueList () {
    const [ issues, setIssues ] = useState([])
    const { key } = useParams();

    // const avatar_uri = 'issue.fields.creator.avatarUrls.24x24'

    useEffect(()=> {
        async function fetchIssues() {
            const response = await jira
                .get(requests.fetchIssues + `"${key}"`)
                .catch((err) => console.log(err));

        if (response && response.data){

            setIssues(response.data.issues.map(issue => {

                return {
                    id: issue.id,
                    key: issue.key,
                    description: issue.description,
                    summary: issue.fields.summary,
                    project_id: issue.fields.project.id,
                    created: DateFormat(issue.fields.created, "mmmm dS, yyyy"),
                    avatarUrl: issue.fields.creator.avatarUrls['24x24'],
                }
            })
            )
            console.log(response)

        };
    }
    fetchIssues();
    // eslint-disable-next-line
    }, [key])

    return(
        <Ibox title="Issues">
        <div className="project-list">
            <table className="table table-hover">
                <tbody>
                {issues.map(issue => {
                    return <Issue key={issue.key}
                                    id={issue.key}
                                    name={issue.summary}
                                    created={issue.created}
                                    avatarUrl={issue.avatarUrl}
                                    />
                })}
                </tbody>
            </table>
        </div>
        </Ibox>
        
    )
} 

export default IssueList;