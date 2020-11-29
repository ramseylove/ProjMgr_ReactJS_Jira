import React from 'react';

function IssueDetail () {
    return (
        <div classNameName="row">
            <div className="col-lg-12">
                <div className="m-b-md">
                    <a href="edit.html" classNameName="btn btn-white btn-xs float-right">Edit project</a>
                    <h2>Contract with Zender Company</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Status:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"><span className="label label-primary">Active</span></dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Created by:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1">Alex Smith</dd>
                            </div>
                        </dl>
                        <dl className="row mb-0">
                            <div className="col-sm-4 text-sm-right">
                                <dt>Messages:</dt>
                            </div>
                            <div className="col-sm-8 text-sm-left">
                                <dd className="mb-1"> 162</dd>
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