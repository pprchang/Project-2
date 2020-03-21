## Notes from Bryan:

#### Add. file edits

- If we are not using "sequelize" we shouldn't need "models/index.js".

- Config.js should be written to match our database.

- What do we want to put into 'models' dir? anything? mysql model?.

#### What i still need to do

- Grab HTML file names form Hue and decide on URL path name.   --------------------------------------------------------------------> *! X ! DONE*

- Grab DB connection, seeds, config, queries from Gordon. Get together with Gordon and merge our codes to move on to next step.

- Verify server connection --------------------------------------------------------------------------------------------------------> *! X ! DONE*

- Verify Videos work accordingly. (can input test file or wait till Hue has HTML file with search bar) ----------------------------> *! X ! DONE*

- Verify we are logging our search terms. -----------------------------------------------------------------------------------------> *! X ! DONE*

#### Things to not forget

- API key stored in .env file. (similar to how we hid the key in "liri")
    * Make sure to create .env, install npm dotenv, create .gitignore (list: node_modules & .env). --------------------------------> *! X ! DONE*

- Install appropriate npm packages and remove the ones we don't need.
    * I need: path, express, axios, and dotenv ------------------------------------------------------------------------------------> *! X ! DONE (on my end)*
    * Suspect we also need: mysql

- Conflicts with file structure should be checked over once branches have been merged