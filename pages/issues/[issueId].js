import { getIssueDetails } from "../../services/Jira";
import IssueDetail from "../../Components/IssueDetail/IssueDetail";

function IssueDetailPage(props) {
    return (
        <div>
            <IssueDetail issue={props.issue} />
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    const issueId = ctx.params.issueId
    const issue = await getIssueDetails(issueId)


    return {
        props:{
            issue: issue,
        }
    }
}

export default IssueDetailPage;