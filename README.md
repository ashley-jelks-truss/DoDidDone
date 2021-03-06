# Setup
1. Fork and set up repo on your local machine
2. Run `npm install`
3. Install webpack and webpack-dev-server globally with: `npm install -g webpack` and `npm install -g webpack-dev-server`
1. Install Mongo

# Setting up MongoDB
1. `brew install mongodb`
2. `sudo mkdir -p /data/db`
3. ``sudo chown `id -u` /data/db``

# Running server locally

1. Run `mongod` in command line and leave it running
2. Run `npm start` from the root directory of the app in another terminal tab
3. Navigate to `localhost:3000` to view your local environment


# Running tests
1. Run `npm test`

#  Adding tests
1. If adding a new feature, create a test that addresses it, even if it's only finding that a <div> created by that component exists.
2. If altering a new feature, run `npm test` and ensure the test that addresses said feature still works; if not, please update.
3. Add .skip to a test or delete entirely if obsolete. Do not comment them out, per Mocha style.
