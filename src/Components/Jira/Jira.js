import Axios from 'axios';

const cors = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = 'https://atriadev.atlassian.net/rest/api/2';
const username = 'ryan@atriadev.com';
const apiKey = 'LgwiZqAfFk3b5bz07X3998AB';
//  timeout: 8000

const jira = Axios.create({ 
    baseURL: baseUrl,
    auth: {
        username: username,
        password: apiKey
    },
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json' }
});

export default jira;