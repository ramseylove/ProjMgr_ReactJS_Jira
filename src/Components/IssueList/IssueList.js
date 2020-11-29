import React from 'react';
import Ibox from '../Shared/Ibox';
import Content from '../Shared/Content';

import Issue from '../Issue/Issue';

const issues = [
    {
      id: 'issue1',
      name: 'Issue-1',
      summary: ' this is the first summary'
    },
    {
      id: 'issue2',
      name: 'Issue-2',
      summary: ' this is the second summary'
    },
    {
      id: 'issue3',
      name: 'Issue-3',
      summary: ' this is the third summary'
    }
  ]
function IssueList (props) {

    return(
        <Content>
            <Ibox>
            <div className="project-list">
                <table className="table table-hover">
                    <tbody>
                    {issues.map(issue => {
                        return <Issue key={issue.id}
                                        name={issue.name}
                                        />
                    })}
                    </tbody>
                </table>
            </div>
            </Ibox>
        </Content>
    )
} 

export default IssueList;