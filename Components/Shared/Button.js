import React from "react";
// import PropTypes from 'prop-types';

const Button = (props) => {
  // const { style, bsStyle, onClick } = props;
  // const className = bsStyle ? `btn btn-${bsStyle}` : 'btn';
  return (
    <button
      type={props.type || "button"}
      className={`btn ${props.bsStyle}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

// Button.propTypes = {
//   style: PropTypes.element,
//   bsStyle: PropTypes.element.isRequired,
//   children: PropTypes.element.isRequired,
//   onClick: PropTypes.element.isRequired
// };

export default Button;
