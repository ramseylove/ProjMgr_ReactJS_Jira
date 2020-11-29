import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  render() {
    return (
      <div className="wrapper wrapper-content animated fadeIn">
        <div class="row">
            <div class="col-lg-12"></div>
        {this.props.children}
      </div>
      </div>
    );
  }
}

Content.propTypes = {
  children: PropTypes.array.isRequired
};

export default Content;
