import React from 'react';

function Comments (props) {
    const comments = props.comments.comments;
    return(
        <div className="tab-pane active" id="tab-1">
            <div className="feed-activity-list">

                {comments && comments.map(comment => (
                    <div className="feed-element">
                    <a href="index.html" className="float-left">
                        <img alt="owner" className="rounded-circle" src="img/a2.jpg" />
                    </a>

                    <div className="media-body ">
                        <small className="float-right">2h ago</small>
                        <strong>Mark Johnson</strong> posted message on <strong>Monica Smith</strong> site. <br />
                        <small className="text-muted">Today 2:10 pm - 12.06.2014</small>
                        <div className="well">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </div>
                    </div>
                </div>
                ))}

                
            </div>

    </div>
    );
}

export default Comments;