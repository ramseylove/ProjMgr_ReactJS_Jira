import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jira from '../Jira/Jira';
import Ibox from '../Shared/Ibox';
import IboxSearch from '../Shared/IboxSearch';

function ProjectList({ fetchUrl, percentage }) {
  const [ projects, setProjects ] = useState([]);
  const title = "Project List";

  const avatar = "project.lead.avatarUrls.16x16";

    function getRandomInt() {
        return Math.floor(Math.random() * 99);
    }

  useEffect(() => {
    async function getProjects () {
      const response = await jira
        .get(fetchUrl, { params: { expand: 'issueTypes' }})
        .catch((err) => console.log(err));

      if (response && response.data) {
        setProjects(response.data.map(project => {

            return {
                id: project.id,
                key: project.key,
                name: project.name,
                self: project.self,
                issueTypes: project.issueTypes,
                percentage: getRandomInt()
            }
        })
        
      )
    }}

    getProjects();
  }, [fetchUrl])
    let projectProgress = 0;
    return (
        <Ibox title={title}>
        <IboxSearch />
      <div className="project-list">
        <table className="table table-hover">               
        <tbody>
        { projects.map(project => (
          <tr key={project.key}>
            <td className="project-status"><span className="label label-primary">Active</span></td>
            <td className="project-title"><Link to={`/issues/${project.key}`}>{project.name}</Link></td>
            <td className="project-completion">
              <small>Completion with : ${project.percentage}%</small>
              <div className="progress progress-mini">
              <div className="progress-bar" style={{width: project.percentage + '%' }}></div>
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
      </Ibox>
    )
  }

  export default ProjectList;