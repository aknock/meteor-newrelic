# meteor-newrelic
Meteor package for new relic

This uses version 1.29.3 of the NewRelic package.

#### To Install

    meteor add aknock:newrelic

#### To Configure

To enable the plugin, you should set the following environment variables:

    NEW_RELIC_NO_CONFIG_FILE    TRUE
    NEW_RELIC_LICENSE_KEY       YOURKEYID
    NEW_RELIC_APP_NAME          YOURAPPNAME
    NEW_RELIC_LOG_LEVEL         ONE OF error, warn, info, debug, or trace

#### Other informations

You can access the Newrelic plugin with the ```Newrelic``` variable exposed on server.
The plugin doesn't report anything to newrelic itself by default. We're currently working on that.

You can see the full list of node-newrelic options at https://github.com/newrelic/node-newrelic/blob/master/README.md
