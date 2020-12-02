import Axios from 'axios';

const cors = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = 'https://atriadev.atlassian.net/rest/api/2';
const username = 'ryan@atriadev.com';
const apiKey = 'LgwiZqAfFk3b5bz07X3998AB';

const jira = Axios.create({ 
    baseURL: cors + baseUrl,
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