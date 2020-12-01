import React from 'react';
import DateFormat from 'dateformat';

function IssueDetailView(props) {
    const issue = props.issue.issue;
    const fields = props.issue.fields;
    const issueType = props.issueType.issueType;
    // const projectCategory = fields.project.projectCategory;
    
    return(
        <div className="row">
            <div className="col-lg-12">
                <div className="m-b-md">
                    <a href="edit.html" className="btn btn-white btn-xs float-right">Edit project</a>
                    <h2>{issue.key}</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Type:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"><span className="label label-primary">{issueType.name}</span></dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Created by:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1">{fields.creator.displayName}</dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Project:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1">{fields.project.name}</dd>
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
                    <div className="col-lg-6" id="cluster_info">

                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Last Updated:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1">{DateFormat(fields.updated, "mmmm dS, yyyy")}</dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Created:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"> {DateFormat(fields.created, "mmmm dS, yyyy")}</dd>
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

export default IssueDetailView;