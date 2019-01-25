import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Downloads from '../../components/Downloads';

class DownloadsContainer extends React.Component {
  render() {
    return (
      <Downloads />
    );
  }
}

function mapStateToProps(state) {
  return {
    downloads: state.downloads
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsContainer);
