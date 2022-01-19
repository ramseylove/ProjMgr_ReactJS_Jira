import ProjectList from "../../Components/ProjectList/ProjectList";
import { getAllProjects } from "../../services/Jira";

function ProjectListView(props) {
  return (
    <div>
      <ProjectList projects={props.projects} />
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const projects = await getAllProjects();

  return {
    props: {
      projects: projects,
    },
    revalidate: 1000,
  };
};

export default ProjectListView;
