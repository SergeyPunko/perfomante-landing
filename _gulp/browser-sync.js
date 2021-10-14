const browserSync = require('browser-sync');
const server = browserSync.create();
const config = require('./_config');

function serve(done) {
  server.init({
    server: {
      baseDir: config.dist,
    },
    notify: false
  });
  done();
}

function reload(done) {
  server.reload();
  done();
}

exports.server = server;
exports.serve = serve;
exports.reload = reload;