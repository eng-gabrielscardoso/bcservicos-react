const { _app_port } = require('./config/vars');
const app = require('./config/server');

app.listen(_app_port, async () => {
  try {
    await console.log(`Server running on port ${_app_port}`);
  } catch (e) {
    await console.log(`Unexpected error. ${e}`);
  }
});

module.exports = app;
