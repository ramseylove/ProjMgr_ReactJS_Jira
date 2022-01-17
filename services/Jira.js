import Axios from "axios";

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
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
    // X-Atlassian-Token: "no-check",
  },
});

export default jira;
