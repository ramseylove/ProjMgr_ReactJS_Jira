export const issueResponse = {
    "expand": "renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations",
    "id": "10281",
    "self": "https://atriadev.atlassian.net/rest/api/2/issue/10281",
    "key": "MEDU-17",
    "fields": {
        "statuscategorychangedate": "2020-03-06T18:47:10.452-0600",
        "issuetype": {
            "self": "https://atriadev.atlassian.net/rest/api/2/issuetype/10057",
            "id": "10057",
            "description": "Tasks track small, distinct pieces of work.",
            "iconUrl": "https://atriadev.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10318,
            "entityId": "d7d12cd6-4be5-4067-82d2-86a11b181263"
        },
        "timespent": null,
        "project": {
            "self": "https://atriadev.atlassian.net/rest/api/2/project/10019",
            "id": "10019",
            "key": "MEDU",
            "name": "MSGR_Expression_dashboard_updateCIPHP",
            "projectTypeKey": "software",
            "simplified": true,
            "avatarUrls": {
                "48x48": "https://atriadev.atlassian.net/secure/projectavatar?pid=10019&avatarId=10406",
                "24x24": "https://atriadev.atlassian.net/secure/projectavatar?size=small&s=small&pid=10019&avatarId=10406",
                "16x16": "https://atriadev.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=10019&avatarId=10406",
                "32x32": "https://atriadev.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=10019&avatarId=10406"
            },
            "projectCategory": {
                "self": "https://atriadev.atlassian.net/rest/api/2/projectCategory/10000",
                "id": "10000",
                "description": "All projects with messenger stationary",
                "name": "Messenger"
            }
        },
        "fixVersions": [],
        "aggregatetimespent": null,
        "resolution": null,
        "customfield_10027": null,
        "customfield_10028": null,
        "customfield_10029": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
            "self": "https://atriadev.atlassian.net/rest/api/2/issue/MEDU-17/watchers",
            "watchCount": 1,
            "isWatching": true
        },
        "issuerestriction": {
            "issuerestrictions": {},
            "shouldDisplay": true
        },
        "lastViewed": null,
        "created": "2020-03-06T18:47:10.190-0600",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_10022": "0|i001hr:",
        "priority": {
            "self": "https://atriadev.atlassian.net/rest/api/2/priority/3",
            "iconUrl": "https://atriadev.atlassian.net/images/icons/priorities/medium.svg",
            "name": "Medium",
            "id": "3"
        },
        "customfield_10023": [],
        "labels": [],
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": {
            "hasEpicLinkFieldDependency": false,
            "showField": false,
            "nonEditableReason": {
                "reason": "PLUGIN_LICENSE_ERROR",
                "message": "The Parent Link is only available to Jira Premium users."
            }
        },
        "customfield_10019": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "versions": [],
        "issuelinks": [],
        "assignee": {
            "self": "https://atriadev.atlassian.net/rest/api/2/user?accountId=5b10d901daa2e712a6d34917",
            "accountId": "5b10d901daa2e712a6d34917",
            "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/449341a635a1b235c147f0c9b2ce4073?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FFD-5.png",
                "24x24": "https://secure.gravatar.com/avatar/449341a635a1b235c147f0c9b2ce4073?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FFD-5.png",
                "16x16": "https://secure.gravatar.com/avatar/449341a635a1b235c147f0c9b2ce4073?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FFD-5.png",
                "32x32": "https://secure.gravatar.com/avatar/449341a635a1b235c147f0c9b2ce4073?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FFD-5.png"
            },
            "displayName": "Freelance Developer",
            "active": true,
            "timeZone": "America/Chicago",
            "accountType": "atlassian"
        },
        "updated": "2020-03-06T19:11:52.193-0600",
        "status": {
            "self": "https://atriadev.atlassian.net/rest/api/2/status/10051",
            "description": "",
            "iconUrl": "https://atriadev.atlassian.net/",
            "name": "To Do",
            "id": "10051",
            "statusCategory": {
                "self": "https://atriadev.atlassian.net/rest/api/2/statuscategory/4",
                "id": 4,
                "key": "indeterminate",
                "colorName": "yellow",
                "name": "In Progress"
            }
        },
        "components": [],
        "timeoriginalestimate": null,
        "description": "Currently we have a process on Expression Guest Registry that if the guest entries added on the iPad do not show up on the web dashboard as they are suppose to(live as they are entered). The user will push an xml file that is generated by the iPad App to the server. The files are uploaded to a folder on the server, called manual_upload/current_xml. We have a cron job set up on a 3rd party site(Setcronjob.com) to hit an endpoint on our server to process these files. The Cron job is named *ProcessXMLprimary*\n\nWe had complaints from a few users that it was taking a while for these entries to show up on the dashboard. The cron job was setup to run every 10 mins but I changed that to 4 mins because I didn’t see any errors and it may be that there is just more files being uploaded than normal.\n\nThere are quite a few files in that\n\nCan you find out a few things:\n\n* In what order the files are processed\n* What the process does if it fails\n* What happens when there is an invalid file or field\n* Are we processing these files efficiently \n\nCredentials for Live ftp and Cron site are on document in the google drive folder I shared\n\n",
        "customfield_10010": null,
        "customfield_10014": null,
        "timetracking": {},
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_10006": null,
        "customfield_10007": null,
        "security": null,
        "customfield_10008": null,
        "attachment": [],
        "aggregatetimeestimate": null,
        "customfield_10009": null,
        "summary": "Review XML processing process. Customers have been experiencing long wait times for their entries to show up on dashboard.",
        "creator": {
            "self": "https://atriadev.atlassian.net/rest/api/2/user?accountId=5c1d1d0313a8bb0b10392dfe",
            "accountId": "5c1d1d0313a8bb0b10392dfe",
            "emailAddress": "ryan@atriadev.com",
            "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/1e29ebea217c57f29f58d379d8bbfca0?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRM-4.png",
                "24x24": "https://secure.gravatar.com/avatar/1e29ebea217c57f29f58d379d8bbfca0?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRM-4.png",
                "16x16": "https://secure.gravatar.com/avatar/1e29ebea217c57f29f58d379d8bbfca0?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRM-4.png",
                "32x32": "https://secure.gravatar.com/avatar/1e29ebea217c57f29f58d379d8bbfca0?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRM-4.png"
            },
            "displayName": "Ryan Meyer",
            "active": true,
            "timeZone": "America/Chicago",
            "accountType": "atlassian"
        },
        "subtasks": [],
        "reporter": {
            "self": "https://atriadev.atlassian.net/rest/api/2/user?accountId=5c1d1d0313a8bb0b10392dfe",
            "accountId": "5c1d1d0313a8bb0b10392dfe",
            "emailAddress": "ryan@atriadev.com",
            "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/1e29ebea217c57f29f58d379d8bbfca0?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRM-4.png",
                "24x24": "https://secure.gravatar.com/avatar/1e29ebea217c57f29f58d379d8bbfca0?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRM-4.png",
                "16x16": "https://secure.gravatar.com/avatar/1e29ebea217c57f29f58d379d8bbfca0?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRM-4.png",
                "32x32": "https://secure.gravatar.com/avatar/1e29ebea217c57f29f58d379d8bbfca0?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRM-4.png"
            },
            "displayName": "Ryan Meyer",
            "active": true,
            "timeZone": "America/Chicago",
            "accountType": "atlassian"
        },
        "customfield_10000": "{}",
        "aggregateprogress": {
            "progress": 0,
            "total": 0
        },
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "environment": null,
        "duedate": null,
        "progress": {
            "progress": 0,
            "total": 0
        },
        "votes": {
            "self": "https://atriadev.atlassian.net/rest/api/2/issue/MEDU-17/votes",
            "votes": 0,
            "hasVoted": false
        },
        "comment": {
            "comments": [],
            "maxResults": 0,
            "total": 0,
            "startAt": 0
        },
        "worklog": {
            "startAt": 0,
            "maxResults": 20,
            "total": 0,
            "worklogs": []
        }
    }
}