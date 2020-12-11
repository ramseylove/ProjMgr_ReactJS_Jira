import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectPeopleTd = styled.td
`
    text-align: right;
    vertical-align: middle;
`;

export const ProjectPeopleDd = styled.dd
`
    text-align: left;
    margin-top: 5px;
`;

export const ProjectPeopleImg = styled.dd
`
    width: 32px;
    height: 32px;
`;

export const ProjectActions = styled(ProjectPeopleTd);

export const ProjectTitle = styled(Link)
`
    font-size: 14px;
    color: #676a6c;
    font-weight: 600;
`;

export const ProjectListDiv = styled.div
`
    border-top: none;
    border-bottom: 1px solid #e7eaec;
    padding: 15px 10px;
    vertical-align: middle;
`;

export const ProjectListTable = styled.table(ProjectListDiv)

export const ProjectListTr = styled.tr(ProjectListDiv);

export const ProjectListTd = styled.td(ProjectListDiv);

export const ProjectManagerLink = styled(Link)
`
    font-size: 10px;
    background-color: white;
    padding: 5px 12px;
    color: inherit;
    border-radius: 2px;
    border: 1px solid #e7eaec;
    margin-right: 5px;
    margin-top: 5px;
    display: block;
`;

export const ProjectManagerLi = styled(ProjectManagerLink);

export const ProjectFilesLink = styled(Link)
`
    font-size: 11px;
    color: #676a6c;
    margin-left: 10px;
    line-height: 22px;
`;

export const ProjectFilesLi = styled.li(ProjectFilesLink);