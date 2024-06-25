// consabot
import chalk from 'chalk';
import { setTimeout } from 'timers/promises';
import LOG_TEMPLATES, { LEVEL_INFO, LEVEL_ERROR, LEVEL_NOTICE, PLACEHOLDER_RAND_TEXT } from './log_templates.mjs'

const rundLog = () => {
  const template = getTemplate();
  const chalkColor = getChalkColor(template.level);
  const text = template.text.replace(PLACEHOLDER_RAND_TEXT, generateRandText())

  return chalkColor(`[${template.level}]${text}`);
}

const getTemplate = () => {
  const index = Math.floor(Math.random() * (LOG_TEMPLATES.length));
  return LOG_TEMPLATES[index];
}

const getRandTimeout = () => {
  return Math.floor(Math.random() * 8) * 100;
}

const generateRandText = () => {
  // via. https://qiita.com/fukasawah/items/db7f0405564bdc37820e
  var S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  var N = 16
  return Array.from(Array(N)).map(() => S[Math.floor(Math.random() * S.length)]).join('')
}

const getChalkColor = (level) => {
  switch(level) {
    case LEVEL_INFO:
      return chalk.blue;
      break;
    case LEVEL_ERROR:
      return chalk.red;
      break;
    case LEVEL_NOTICE:
      return chalk.yellow;
      break;
    default:
      return chalk.blue;
  }

}

while(true) {
  console.log('[', new Date(), ']', rundLog());
  await setTimeout(getRandTimeout());
}
