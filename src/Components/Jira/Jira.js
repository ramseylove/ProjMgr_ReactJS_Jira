import Axios from 'axios';

// const baseUrl = String(process.env.REACT_APP_JIRA_URL);
// const username = String(process.env.REACT_APP_JIRA_USERNAME);
// const apiKey = String(process.env.REACT_APP_JIRA_KEY);
const baseUrl = 'https://atriadev.atlassian.net/rest/api/2'
const username = 'ryan@atriadev.com'
const apiKey = '93M47hBxaXugObbAId7017B2'

const jira = Axios.create({ 
    baseURL: baseUrl,
    auth: {
        username: username,
        password: apiKey
    },
    timeout: 3000,
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json' }
});

export default jira;