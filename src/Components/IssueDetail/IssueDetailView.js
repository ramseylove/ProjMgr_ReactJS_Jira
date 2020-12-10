import React from 'react';
import DateFormat from 'dateformat';

function IssueDetailView(props) {
    const issueId = props.issueId;
    const fields = props.fields;
    const issueType = props.issueType;
    // const avatar = fields.reporter.avatarUrls;
    console.log('Issue Id: ' + issueId);
    // const projectCategory = fields.project.projectCategory;
    
    return(
        <div className="row">
            <div className="col-lg-12">
                <div className="m-b-md">
                    <a href="edit.html" className="btn btn-white btn-xs float-right">Edit project</a>
                    <h2>{issueId}</h2>
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
                                { 
                                ( props.fields.updated && 
                                <dd className="mb-1">{DateFormat(props.fields.updated, "mmmm dS, yyyy")}</dd>) 
                                }
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