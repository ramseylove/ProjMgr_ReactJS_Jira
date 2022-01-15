import Axios from "axios";

// const baseUrl = String(process.env.REACT_APP_JIRA_URL);
// const username = String(process.env.REACT_APP_JIRA_USERNAME);
// const apiKey = String(process.env.REACT_APP_JIRA_KEY);
const baseUrl = "https://atriadev.atlassian.net/rest/api/2";
const username = "ryan@atriadev.com";
const apiKey = "0CntQ6RHgkZZAfrkkWsqCD7F";

// const buff = Buffer.from(username + ":" + apiKey);
// const base64 = buff.toString("base64");

const jira = Axios.create({
  baseURL: baseUrl,
  auth: {
    username: username,
    password: apiKey,
  },
  timeout: 3000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
    // X-Atlassian-Token: "no-check",
  },
});

export default jira;
