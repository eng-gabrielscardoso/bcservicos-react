const path = require('path');

require('dotenv-safe').config({
  allowEmptyValues: true,
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  example: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  _app_port: process.env.APP_PORT,
  _mail_host: process.env.MAIL_HOST,
  _mail_port: process.env.MAIL_PORT,
  _mail_user: process.env.MAIL_USER,
  _mail_pass: process.env.MAIL_PASS,
}