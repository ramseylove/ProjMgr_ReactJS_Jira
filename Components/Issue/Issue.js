import React from "react";
// import { Link } from 'react-router-dom';
import Button from "../Shared/Button";

function Issue(props) {
  // let avatarUrl = props.avatarUrl['16x16']

  return (
    <tr>
      <td className="project-status">
        <span className="label label-primary">Active</span>
      </td>
      <td className="project-title">
        <Link to={`/issues/${props.id}/detail`}>{props.name}</Link>
        <br />
        <small>{props.created}</small>
      </td>
      <td className="project-people">
        <img
          alt="profile-pic"
          className="rounded-circle"
          src={props.avatarUrl}
        />
      </td>
      <td className="project-actions">
        <Button bsStyle={"white btn-sm"} onClick={props.onClick}>
          View
        </Button>
        <Button bsStyle={"white btn-sm"} onClick={props.onClick}>
          Edit
        </Button>
        {/*<a href="view.html" className="btn btn-white btn-sm"><i className="fa fa-folder"></i> View </a>*/}
        {/*<a href="view.html" className="btn btn-white btn-sm"><i className="fa fa-pencil"></i> Edit </a>*/}
      </td>
    </tr>
  );
}

export default Issue;
