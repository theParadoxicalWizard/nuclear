export const ADD_TO_DOWNLOADS = 'ADD_TO_DOWNLOADS';

export const DOWNLOAD_START = 'DOWNLOAD_START';
export const DOWNLOAD_PROGRESS = 'DOWNLOAD_PROGRESS';
export const DOWNLOAD_ERROR = 'DOWNLOAD_ERROR';
export const DOWNLOAD_SUCCESS = 'DOWNLOAD_SUCCESS';

export function addToDownloads(track) {
  return {
    type: ADD_TO_DOWNLOADS,
    track
  };
}
