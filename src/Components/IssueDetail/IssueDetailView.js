import React from 'react';
import DateFormat from 'dateformat';

function IssueDetailView(props) {
    const issue = props.issue;
    // const fields = issue.fields;
    // console.log(fields)
    // const issueType = props.issueType.issueType;
    // const avatar = fields.reporter.avatarUrls;
    // const projectCategory = fields.project.projectCategory;
    
    // const issueType = props.issue.issue.fields.issuetype.name;
    return (
        
        <div className="row">
            <div className="col-lg-12">
                <div className="m-b-md">
                    <a href="edit.html" className="btn btn-white btn-xs float-right">Edit project</a>
                    <h2>{}</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Type:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"><span className="label label-primary">{}</span></dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Created by:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1">{issue}</dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Project:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1">{}</dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Client:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"> {}</dd>
                            </div>
                        </dl>

                    </div>
                    {/* right column */}
                    {/* DateFormat(props.fields.updated, "mmmm dS, yyyy") */}
                    {/* DateFormat(fields.created, "mmmm dS, yyyy") */}
                    <div className="col-lg-6" id="cluster_info">

                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Last Updated:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                { 
                                // ( props.fields.updated && 
                                // <dd className="mb-1">{}</dd>) 
                                }
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Created:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"> {}</dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Participants:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="project-people mb-1">
                                    {/* <img alt="reporter" className="rounded-circle" src={} /> */}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IssueDetailView;