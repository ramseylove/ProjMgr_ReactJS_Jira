import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import jira from '../Jira/Jira';
import Project from '../Project/Project';
import Ibox from '../Shared/Ibox';
import IboxSearch from '../Shared/IboxSearch';

function ProjectList({ fetchUrl }) {
  const [ projects, setProjects ] = useState([]);
  const { url } = useRouteMatch();
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
        <Project projects={projects}/>
      </Ibox>
    )
  }

  export default ProjectList;