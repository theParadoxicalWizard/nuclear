import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import DownloadQueue from './DownloadQueue';

import styles from './styles.scss';

const Downloads = props => {
  return (
    <div className={styles.downloads_container}>
      <Header>
        Downloads
      </Header>
      <DownloadQueue />
    </div>
  );
};

Downloads.propTypes = {

};

export default Downloads;
