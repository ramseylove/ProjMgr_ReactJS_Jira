import React, { useEffect, useState } from 'react';
import jira from '../Jira/Jira';
import Ibox from '../Shared/Ibox';
import Content from '../Shared/Content';

function ProjectList({ fetchUrl }) {
  const [ projects, setProjects ] = useState([]);

  const avatar = "project.lead.avatarUrls.16x16";

  useEffect(() => {
    async function getProjects () {
      const response = await jira
        .get(fetchUrl, { params: { expand: 'issueTypes' }})
        .catch((err) => console.log(err));
        console.log(response)

      if (response && response.data) {
          setProjects(response.data)
        setProjects(response.data.map(project => {
          return {
            id: project.id,
            key: project.key,
            name: project.name,
            self: project.self,
            issueTypes: project.issueTypes
          }
        })
      )
    }}

    getProjects();
  }, [fetchUrl])
    
    return (
        <Ibox>
            <Content>
        <div className="m-b-sm m-t-sm">
            <div className="input-group">
                <div className="input-group-prepend">
                    <button tabIndex="-1" className="btn btn-white btn-sm" type="button"><i className="fa fa-refresh"></i> Refresh</button>
                </div>
                <input type="text" className="form-control form-control-sm" />

                <div className="input-group-append">
                    <button tabIndex="-1" className="btn btn-primary btn-sm" type="button">Go!</button>
                </div>
            </div>
        </div>

      <div className="project-list">
        <table className="table table-hover">               
        <tbody>
        { projects.map(project => (
          <tr key={project.key}>
            <td className="project-status"><span className="label label-primary">Active</span></td>
            <td className="project-title"><a href={project.self}  target='_blank' rel='noreferrer'>{project.name}</a></td>
            <td className="project-completion">
              <small>Completion with : 48%</small>
              <div className="progress progress-mini">
              <div className="progress-bar"></div>
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
        </table>
      </div>
      </Content>
      </Ibox>
    )
  }

  export default ProjectList;