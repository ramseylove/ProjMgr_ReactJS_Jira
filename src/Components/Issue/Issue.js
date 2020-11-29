import React from 'react';
import { Link } from 'react-router-dom';

function Issue (props) {

    return(
            <tr>
                <td className="project-status">
                    <span className="label label-primary">Active</span>
                </td>
                <td className="project-title">
                <Link to={`/issue/${props.id}`}>
                    {props.name}
                    </Link>
                    <br />
                    <small>Created 14.08.2014</small>
                </td>
                <td className="project-completion">
                        <small>Completion with: 48%</small>
                        <div className="progress progress-mini">
                            <div style={{width: '48%'}} className="progress-bar"></div>
                        </div>
                </td>
                <td className="project-people">
                    <img alt="profile-pic" className="rounded-circle" src="http://webapplayers.com/inspinia_admin-v2.9.3/img/a3.jpg" />
                </td>
                <td className="project-actions">
                    <a href="view.html" className="btn btn-white btn-sm"><i className="fa fa-folder"></i> View </a>
                    <a href="view.html" className="btn btn-white btn-sm"><i className="fa fa-pencil"></i> Edit </a>
                </td>
            </tr>
    )
}

export default Issue;