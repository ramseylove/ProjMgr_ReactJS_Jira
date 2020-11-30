import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import jira from '../Jira/Jira';


function IssueDetail (props) {
    const [ issue, setIssue ] = useState({});
    const [ comments, setComments ] = useState()
    const [ issueType, setIssueType ] = useState({})
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
                creator: issue_detail.fields.creator.displayName
            })
            setComments(issue_detail.fields.comment)
            setIssueType({issueType: issue_detail.fields.issuetype})
            console.log(issueType.issueType)
            
        };
    }
    fetchIssue();
    // eslint-disable-next-line
    }, [key])

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="m-b-md">
                    <a href="edit.html" className="btn btn-white btn-xs float-right">Edit project</a>
                    <h2>{key}</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Status:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"><span className="label label-primary">{issue.id}</span></dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Created by:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1">{issue.creator}</dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Client:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"><a href="nothing.html" className="text-navy"> Zender Company</a></dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Version:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"> v1.4.2</dd>
                            </div>
                        </dl>

                    </div>
                    <div className="col-lg-6" id="cluster_info">

                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Last Updated:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1">16.08.2014 12:15:57</dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Created:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"> 10.07.2014 23:36:57</dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Participants:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="project-people mb-1">
                                    <a href="http://webapplayers.com/inspinia_admin-v2.9.3/img/a3.jpg"><img alt="image" className="rounded-circle" src="http://webapplayers.com/inspinia_admin-v2.9.3/img/a3.jpg" /></a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IssueDetail;