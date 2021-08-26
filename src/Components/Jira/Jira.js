import Axios from 'axios';

const baseUrl = String(process.env.REACT_APP_JIRA_URL);
const username = String(process.env.REACT_APP_JIRA_USERNAME);
const apiKey = String(process.env.REACT_APP_JIRA_KEY);

console.log(apiKey)
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