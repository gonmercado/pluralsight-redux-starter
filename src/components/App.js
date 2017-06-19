import React from 'react';
import Header from './common/Header';
import AppBody from './common/AppBody';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
        />
        <AppBody />
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default withRouter(connect(mapStateToProps)(App));
