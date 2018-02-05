module.exports = function (shipit) {
  shipit.initConfig({
    leslash: {
      servers: 'serverpilot@leslash.com'
    }
  });

  shipit.blTask('git', function () {
    return shipit.remote('git pull', {cwd: '/srv/users/serverpilot/apps/wordplate/'});
  });

  shipit.blTask('composer', function () {
    return shipit.remote('composer install', {cwd: '/srv/users/serverpilot/apps/wordplate/'});
  });

  shipit.task('build', function () {
    return shipit.remote('yarn production', {cwd: '/srv/users/serverpilot/apps/wordplate/'});
  });

  shipit.task('deploy', function () {
    shipit.start('git', 'composer', 'build');
  });

};

