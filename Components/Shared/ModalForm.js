import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';
import Button from "./Button";

const portalElement = document.getElementById('overlays')

const backdropStyles = `${styles.modalBackdrop} ${styles.modal}`

const buttonStyles = `btn-sm btn-primary`

const Backdrop = (props) => {
    return <div className={backdropStyles} onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className={styles['modal-dialog']} >
            <div className={styles['modal-content']}>
                <div className={styles['modal-header']}>
                    <h4>{props.title}</h4>
                </div>
                <div className={styles['modal-body']}>
                    {props.children}
                </div>
                <div className={styles['modal-footer']}>
                    <Button bsStyle={buttonStyles} onClick={props.onClose}>Close</Button>
                    <Button bsStyle={buttonStyles} onClick={() => {}}>Save</Button>
                </div>
            </div>
        </div>
    )
}


const ModalForm = (props) => {
    return (
            <React.Fragment>
                {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
                {ReactDOM.createPortal(<ModalOverlay
                    title={props.title}
                >
                    {props.children}
                </ModalOverlay>, portalElement)}
            </React.Fragment>
    )
}

export default ModalForm