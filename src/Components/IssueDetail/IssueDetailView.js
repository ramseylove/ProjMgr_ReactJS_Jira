import React from 'react';


function IssueDetailView(props) {
 
    return (

        <div className="row" key={props.issue.id}>
            <div className="col-lg-12">
                <div className="m-b-md">
                    <a href="edit.html" className="btn btn-white btn-xs float-right">Edit project</a>
                    <h2>{props.issue.summary}</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Type:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"><span className="label label-primary">{props.issueType.name}</span></dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Created by:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1">{props.issue.creatorName}</dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Project:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1">{props.issue.projectName}</dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Client:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"> {props.issue.clientName}</dd>
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
                                ( props.updatedAt && 
                                <dd className="mb-1">{props.updatedAt}</dd>) 
                                }
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Created:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"> {props.createdAt}</dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Assignee:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="project-people mb-1">
                                    { props.assigneeName &&
                                    <img alt={props.assigneeName} className="rounded-circle" src={props.assigneeAvatar} />
                                    }
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="col-lg-12" id="cluster_info">
                        <dl className="row mb-0">
                        
                            <div className="col-sm-4 text-sm-right">
                                <dt>Description:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"> {props.description}</dd>
                            </div>
                        </dl>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default IssueDetailView;