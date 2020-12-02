import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jira from '../Jira/Jira';
import Ibox from '../Shared/Ibox';
import IboxSearch from '../Shared/IboxSearch';
import Project from '../Project/Project';

function ProjectList({ fetchUrl }) {
  const [ projects, setProjects ] = useState([]);
  const title = "Project List";

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
                issueTypes: project.issueTypes
            }
        })
      )
    }}

    getProjects();
  }, [fetchUrl])
    
    return (
        <Ibox title={title}>
        <IboxSearch />
      <div className="project-list">
        <table className="table table-hover">               
        <tbody>
        <Project projects={projects} />
        </tbody>
        </table>
      </div>
      </Ibox>
    )
  }

  export default ProjectList;