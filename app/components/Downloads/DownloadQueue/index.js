import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import styles from './styles.scss';

const DownloadsItem = props => {
  return (
    <tr>
      <td>
        { props.artist }
      </td>
      <td>
        { props.title }
      </td>
      <td>
        { props.progress }
      </td>
      <td>
        { props.status }
      </td>
    </tr>
  );
};

DownloadsItem.propTypes = {
  artist: PropTypes.string,
  title: PropTypes.string,
  progress: PropTypes.string,
  status: PropTypes.string
};

DownloadsItem.defaultProps = {
  artist: '',
  title: '',
  progress: '',
  status: 'Unknown'
};

const DownloadQueue = props => {
  let { downloads } = props;
  return (
    <table className={styles.download_queue}>
      <thead>
        <tr>
          <th><FontAwesome name='hashtag'/></th>
          <th>Artist</th>
          <th>Title</th>
          <th>Progress</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          downloads.map((item, i ) => {
            return <DownloadsItem { ...item } key={i} />;
          })
        }
      </tbody>
    </table>
  );
};

DownloadQueue.propTypes = {
  downloads: PropTypes.array
};

DownloadQueue.defaultProps = {
  downloads: []
};

export default DownloadQueue;
