## How To Run

* In the terminal, run `npm install` or `yarn` to add dependencies

* In the root directory create a `.env` file

* In that file add these 3 lines (typically you wouldn't push your environment variables to Github but for presentation purpose I've display them here)

PORT=1337

DOMAIN="http://localhost:1337"

SALT=10

* If you don't already, globally install nodemon `npm install -g nodemon` or `yarn -g nodemon`

* In one terminal window run `npm run build` or `yarn build`

* In another terminal window run `npm start` or `yarn start`

* To view app, go to `http://127.0.0.1:1337`

* For context of how the app should run please view [this gif](https://media.giphy.com/media/l0Iye9w3CFoz5rP2w/source.gif)