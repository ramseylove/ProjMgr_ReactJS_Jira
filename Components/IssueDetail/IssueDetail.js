import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jira from "../../services/Jira";
import { requests } from "../../src/requests";
import DateFormat from "dateformat";

import Ibox from "../Shared/Ibox";
import Loading from "../Shared/Loading";

function IssueDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [issue, setIssue] = useState();
  const { key } = useParams();

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const response = await jira
          .get(requests.fetchIssue + key)
          .then((res) => {
            console.log("Response from main API: ", res);
            setIssue(res.data);
            console.log(issue);
          });
        setIsLoading(false);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchIssue();
    // eslint-disable-next-line
  }, [key]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Ibox title="Issue">
      <div className="row">
        <div className="col-lg-12">
          <div className="m-b-md">
            <button className="btn btn-white btn-xs float-right">
              Edit Issue
            </button>
            <h2>{issue.fields.summary}</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <dl className="row mb-0">
                <div className="col-sm-4 text-sm-right">
                  <dt>Status:</dt>
                </div>
                <div className="col-sm-8 text-sm-left">
                  <dd className="mb-1">
                    <span className="label label-primary">
                      {issue.fields.status.name}
                    </span>
                  </dd>
                </div>
              </dl>
              <dl className="row mb-0">
                <div className="col-sm-4 text-sm-right">
                  <dt>Created by:</dt>
                </div>
                <div className="col-sm-8 text-sm-left">
                  <dd className="mb-1"> {issue.fields.creator.displayName}</dd>
                </div>
              </dl>
              <dl className="row mb-0">
                <div className="col-sm-4 text-sm-right">
                  <dt>Client:</dt>
                </div>
                <div className="col-sm-8 text-sm-left">
                  <dd className="mb-1">
                    {" "}
                    {issue.fields.project.projectCategory.name}
                  </dd>
                </div>
              </dl>
              <dl className="row mb-0">
                <div className="col-sm-4 text-sm-right">
                  <dt>Project:</dt>
                </div>
                <div className="col-sm-8 text-sm-left">
                  <dd className="mb-1"> {issue.fields.project.name}</dd>
                </div>
              </dl>
            </div>
            <div className="col-lg-6" id="cluster_info">
              <dl className="row mb-0">
                <div className="col-sm-4 text-sm-right">
                  <dt>Last Updated:</dt>
                </div>
                <div className="col-sm-8 text-sm-left">
                  <dd className="mb-1">
                    {" "}
                    {DateFormat(issue.fields.updated, "mmmm dS, yyyy")}
                  </dd>
                </div>
              </dl>
              <dl className="row mb-0">
                <div className="col-sm-4 text-sm-right">
                  <dt>Created:</dt>
                </div>
                <div className="col-sm-8 text-sm-left">
                  <dd className="mb-1">
                    {" "}
                    {DateFormat(issue.fields.created, "mmmm dS, yyyy")}
                  </dd>
                </div>
              </dl>
              <dl className="row mb-0">
                <div className="col-sm-4 text-sm-right">
                  <dt>Participants:</dt>
                </div>
                <div className="col-sm-8 text-sm-left">
                  <dd className="project-people mb-1">
                    <img
                      alt="image"
                      className="rounded-circle"
                      src={issue.fields.creator.avatarUrls["16x16"]}
                    />
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Ibox>
  );
}

export default IssueDetail;
