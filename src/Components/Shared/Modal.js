import React from 'react';

const Modal = (props) => {

    return (
        <div className="modal inmodal fade show">
            <div className="modal-dialog">
                <div className="modal-content animated bounceInRight">
                    <div className="modal-header">
                        {props.header}
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        {props.footer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal