const path = require('path');

require('dotenv-safe').config({
  allowEmptyValues: true,
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  example: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  _app_port: process.env.APP_PORT,
}