module.exports = function (shipit) {
  shipit.initConfig({
    leslash: {
      servers: 'serverpilot@leslash.com'
    }
  });

  shipit.task('git', function () {
    return shipit.remote('git pull', {cwd: '/srv/users/serverpilot/apps/wordplate/'});
  });

  shipit.task('pwd', function () {
    return shipit.remote('yarn production', {cwd: '/srv/users/serverpilot/apps/wordplate/'});
  });

};


// git clone
// composer install
// yarn
// yarn production
// wp db export db.sql
// replace utf8mb4_unicode_520_ci with utf8mb4_unicode_ci
