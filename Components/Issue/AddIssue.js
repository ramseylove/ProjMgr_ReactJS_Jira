import React, {useState} from 'react';
import ModalForm from "../Shared/ModalForm";
import Input from "../Shared/Input";

const issueTypes = [
    {bug: 'Bug'},
    {task: 'Task'},
    {Story: 'Story'}
]


const AddIssue = (props) => {
    const [ summary, setSummary ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ issueType, setIssueType ] = useState(issueTypes)
    return (
        <ModalForm>
            <Input
                id="issuetype"
                type="select"
                label="IssueType"
                value={issueType}
            />
            <Input
                id="summary"
                type="text"
                label="Summary"
                value={summary}
            />
        </ModalForm>
    )
}