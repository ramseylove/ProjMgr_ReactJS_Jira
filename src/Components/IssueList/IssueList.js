import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DateFormat from 'dateformat';
import jira from '../Jira/Jira';
import { requests } from '../../requests';

import Ibox from '../Shared/Ibox';

import Issue from '../Issue/Issue';

function IssueList () {
    const [ issues, setIssues ] = useState([])
    const { key } = useParams();

    useEffect(()=> {
        async function fetchIssues() {
        const response = await jira
            .get(requests.fetchIssues + key)
            .catch((err) => console.log(err));

        if (response && response.data){
            setIssues(response.data.issues)
            console.log(issues)
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
                    return <Issue key={issue.id}
                                    name={issue.fields.summary}
                                    created={DateFormat(issue.fields.created, "mmmm dS, yyyy")}
                                    avatarUrl={issue.fields.creator.avatarUrls}
                                    />
                })}
                </tbody>
            </table>
        </div>
        </Ibox>
        
    )
} 

export default IssueList;