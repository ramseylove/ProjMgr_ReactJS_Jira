import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
// import jira from "../../services/Jira";
import Ibox from "../Shared/Ibox";
import IboxSearch from "../Shared/IboxSearch";
import Loading from "../Shared/Loading";
import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  const { projects } = props;
  // const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const title = "Project List";

  const avatar = "project.lead.avatarUrls.16x16";

  function getRandomInt() {
    return Math.floor(Math.random() * 99);
  }
  // TODO: manage loading state
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Ibox title={title}>
      <IboxSearch />
      <div className="project-list">
        <table className="table table-hover">
          <tbody>
            {projects.map((project) => (
              <ProjectItem
                id={project.id}
                key={project.key}
                name={project.name}
                percentage={project.percentage}
                avatar={avatar}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Ibox>
  );
}

export default ProjectList;
