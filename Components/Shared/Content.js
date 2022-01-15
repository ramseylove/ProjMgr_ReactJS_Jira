import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  render() {
    return (
      <div className="ibox-content">
        {this.props.children}
        </div>
    );
  }
}

Content.propTypes = {
  children: PropTypes.array.isRequired
};

export default Content;
