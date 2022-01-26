import { Fragment } from "react";
import IssueListPage from "../issues";
import { getProjectIssues } from "../../services/Jira";

function ProjectIssuesList(props) {
  return (
    <Fragment>
      <IssueListPage issues={props.issues} />
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
