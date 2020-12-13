import { requests } from '../../requests';

import jira from '../Jira/Jira';

export async function issueRequest(issue_key) {
    const response = await jira
        .get(requests.fetchIssue + issue_key)
        .catch((err) => console.log(err));

        console.log(response.data);

        return response.data;

}

