import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DateFormat from 'dateformat';
import jira from '../Jira/Jira';
import { requests } from '../../requests';

import Ibox from '../Shared/Ibox';
import Issue from '../Issue/Issue';

function IssueList (props) {
    const [ issues, setIssues ] = useState([])
    const { key } = useParams();
    const history  = useHistory();

    function handleGoBack() {
        history.goBack();
    }

    
//DateFormat(issue.fields.created, "mmmm dS, yyyy")
    useEffect(()=> {
        const fetchIssues = async () => {
            const response = await jira
                .get(requests.fetchIssues + key)
                .catch((err) => console.log(err));
    
            if (response && response.data){
                setIssues(response.data.issues)
                
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
                    return <Issue   
                                id={issue.id}
                                name={issue.fields.description}
                                created={DateFormat(issue.fields.created, "mmmm dS, yyyy")}
                                avatarUrl={issue.fields.creator.avatarUrls}
                                issueType={issue.fields.issuetype.name}
                                fetchUrl={props.fetchUrl}
                                />
                })}
                </tbody>
            </table>
            
        </div>
        <button className="btn btn-primary float-right"onClick={handleGoBack}>Go Back</button>
        </Ibox>
        
    )
} 

export default IssueList;