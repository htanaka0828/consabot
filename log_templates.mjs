export const LEVEL_INFO = 'INFO';
export const LEVEL_ERROR = 'ERROR';
export const LEVEL_NOTICE = 'NOTICE';

export const PLACEHOLDER_RAND_TEXT = '%RAND_TEXT%';

export default [
  // info
  {
    level: LEVEL_INFO,
    text: `create user: ${PLACEHOLDER_RAND_TEXT}`
  },
  {
    level: LEVEL_INFO,
    text: 'create joke command'
  },
  {
    level: LEVEL_INFO,
    text: 'got next step'
  },
  {
    level: LEVEL_INFO,
    text: 'got next step'
  },
  // errors
  {
    level: LEVEL_ERROR,
    text: `system error: error code: ${PLACEHOLDER_RAND_TEXT}`
  },
  // notice
  {
    level: LEVEL_NOTICE,
    text: `system error: error code: ${PLACEHOLDER_RAND_TEXT}`
  }
];
