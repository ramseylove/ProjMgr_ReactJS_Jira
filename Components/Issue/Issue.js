import React from "react";
import Link from "next/link";
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
        <Link href={`/issues/${props.id}`}>{props.name}</Link>
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
        <Link href={'/issues/' + props.id}><Button bsStyle={"white btn-sm"}>
          View
        </Button></Link>
        <Button bsStyle={"white btn-sm"} >
          Edit
        </Button>
        {/*<a href="view.html" className="btn btn-white btn-sm"><i className="fa fa-folder"></i> View </a>*/}
        {/*<a href="view.html" className="btn btn-white btn-sm"><i className="fa fa-pencil"></i> Edit </a>*/}
      </td>
    </tr>
  );
}

export default Issue;
