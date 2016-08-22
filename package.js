Package.describe({
  name: 'aknock:newrelic',
  version: '1.29.0',
  // Brief, one-line summary of the package.
  summary: 'Newrelic package for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/aknock/meteor-newrelic.git',
  homepage: 'https://github.com/aknock/meteor-newrelic',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
	"newrelic": "1.29.0"
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');

	if (api.export) {
  	  api.export('Newrelic', 'server');
  }

	api.add_files('lib/server.js', 'server');
});
