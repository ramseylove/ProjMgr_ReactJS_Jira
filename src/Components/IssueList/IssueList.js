import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DateFormat from 'dateformat';
import jira from '../Jira/Jira';
import { requests } from '../../requests';

import Ibox from '../Shared/Ibox';

import Issue from '../Issue/Issue';
import Loading from "../Shared/Loading";

function IssueList (props) {
    const [ issues, setIssues ] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { key } = useParams();

    // const avatar_uri = 'issue.fields.creator.avatarUrls.24x24'

    useEffect(()=> {
        const fetchIssues = async () => {
            try {
                const response = await jira
                    .get(requests.fetchIssues + `"${key}"`)
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
                    }))
                setIsLoading(false)
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`)
                }
            }
        };
        fetchIssues();
    // eslint-disable-next-line
    }, [key])

    if (isLoading) {
        return <Loading />
    }

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
                                        onClick={props.onAddIssue}
                                        />
                    })}
                    </tbody>
                </table>
            </div>
        </Ibox>
        
    )
} 

export default IssueList;