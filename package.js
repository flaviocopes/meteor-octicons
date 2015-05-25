Package.describe({
  name: 'flaviocopes:octicons',
  version: '2.2.3',
  // Brief, one-line summary of the package.
  summary: "Meteor package of GitHub's icon font",
  git: 'http://github.com/flaviocopes/meteor-octicons.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles([
    'octicons/octicons.css',
    'octicons/octicons.eot',
    'octicons/octicons.svg',
    'octicons/octicons.ttf',
    'octicons/octicons.woff'
  ], 'client');
});
