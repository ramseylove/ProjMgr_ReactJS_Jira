import React from 'react';
import { Link } from 'react-router-dom';
import {
  ProjectPeopleTd,
  ProjectPeopleDd,
  ProjectPeopleImg,
  ProjectActions,
  ProjectTitle,
  ProjectListDiv,
  ProjectListTable,
  ProjectListTr,
  ProjectListTd,
  ProjectManagerLink,
  ProjectManagerLi,
  ProjectFilesLink,
  ProjectFilesLi
} from '../../Styled/Projects';
import {
  Table
} from 'react-bootstrap';

function Project (props) {
    let projectProgress = '50%';
    const avatar = "project.lead.avatarUrls.16x16";

    return (
        <ProjectListDiv>
        <Table hover>               
        <tbody>
        { props.projects.map(project => (
          <tr key={project.key}>
            <td className="project-status"><span className="label label-primary">Active</span></td>
            <td className="project-title">
              <Link to={`/issueList/${project.key}`}>{project.name}</Link>
            </td>
            <td className="project-completion">
              <small>Completion with : {projectProgress}</small>
              <div className="progress progress-mini">
              <div className="progress-bar" style={{width: projectProgress}}></div>
              </div>
            </td>
            <td className="project-people">
              <img alt="Ryan Meyer" src={avatar} className="rounded-circle"  />
              </td>
            <td className="project-actions">
            <button href="#" className="btn btn-white btn-sm"><i className="fa fa-folder"></i> View </button>
            <button href="#" className="btn btn-white btn-sm"><i className="fa fa-pencil"></i> Edit </button>
            </td>
            </tr>
        ))
        }
        </tbody>
        </Table>
        </ProjectListDiv>
    )
}
export default Project;