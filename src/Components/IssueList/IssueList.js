import React, { useEffect, useState } from 'react';
import jira from '../Jira/Jira';
import { requests } from '../../requests';

import Ibox from '../Shared/Ibox';

import Issue from '../Issue/Issue';

function IssueList ({ match }) {
    const [ issues, setIssues ] = useState([])
    
    useEffect(()=> {
        console.log(match)
        async function fetchIssues() {
        const response = await jira
            .get(requests.fetchIssues + 'NP')
            .catch((err) => console.log(err));

        if (response && response.data){
 
        // setIssues(response.data.issues)
        };
    }
    fetchIssues();
    }, [match])

    return(
        <Ibox title="Issues">
        <div className="project-list">
            <table className="table table-hover">
                <tbody>
                {issues.map(issue => {
                    return <Issue key={issue.id}
                                    name={issue.name}
                                    />
                })}
                </tbody>
            </table>
        </div>
        </Ibox>
        
    )
} 

export default IssueList;