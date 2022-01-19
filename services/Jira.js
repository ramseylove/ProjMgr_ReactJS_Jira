import Axios from "axios";
import DateFormat from "dateformat";
// const baseUrl = "https://atriadev.atlassian.net/rest/api/2";
// const username = process.env.JIRA_USER;
// const apiKey = process.env.JIRA_KEY;

const jira = Axios.create({
  baseURL: "https://atriadev.atlassian.net/rest/api/2",
  auth: {
    username: process.env.JIRA_USER,
    password: process.env.JIRA_KEY,
  },
  timeout: 3000,
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    "Content-Type": "application/json",
    // Accept: "application/json",
    "X-Atlassian-Token": "no-check",
  },
});

export async function getAllProjects() {
  const response = await jira.get("/project/search", {
    params: { expand: "issueTypes" },
  });

  const data = await response.data;
  // no need for this call with axios/async call
  // const data = response.json();

  const projects = data.values.map((project) => ({
    id: project.id,
    key: project.key,
    name: project.name,
    self: project.self,
    issueTypes: project.issueTypes.map((issueType) => issueType.name),
    percentage: 7,
  }));

  return projects;
}

export async function getProjectIssues(projectId) {
  const response = await jira.get("/search?jql=project%20%3D%20" + projectId);

  const data = await response.data;
  // console.log(data.issues[0].fields);
  const issues = data.issues.map((issue) => ({
    id: issue.id,
    key: issue.key,
    description: issue.description || "No Description",
    summary: issue.fields.summary,
    project_id: issue.fields.project.id,
    created: DateFormat(issue.fields.created, "mmmm dS, yyyy"),
    avatarUrl: issue.fields.creator.avatarUrls["24x24"],
  }));

  return issues;
}
