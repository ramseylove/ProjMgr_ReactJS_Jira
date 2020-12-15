import React from 'react';

function Comments (props) {
    const comments = props.comments;
    return(
        <div className="tab-pane active" id="tab-1">
            <div className="feed-activity-list">

                {props.comments && comments.map(comment => (
                    <div className="feed-element" >
                    <a href="index.html" className="float-left">
                        <img alt={comment.authorName} className="rounded-circle" src={comment.authorAvatar} />
                    </a>

                    <div className="media-body ">
                        <small className="float-right">2h ago</small>
                        <strong>{comment.authorName}</strong> posted a message <br />
                        <small className="text-muted">{comment.createdAt}</small>
                        <div className="well">
                            {comment.commentBody}
                        </div>
                    </div>
                </div>
                ))}

                
            </div>

    </div>
    );
}

export default Comments;