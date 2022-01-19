import { Fragment } from "react";
import IssueList from "../../Components/IssueList/IssueList";
import { getProjectIssues } from "../../services/Jira";

function ProjectIssuesList(props) {
  return (
    <Fragment>
      <IssueList issues={props.issues} />
    </Fragment>
  );
}

export const getServerSideProps = async (ctx) => {
  const projectId = ctx.params.projectId;
  const issues = await getProjectIssues(projectId);

  return {
    props: {
      issues: issues,
    },
  };
};

export default ProjectIssuesList;
