## How To Run

* In the terminal, run `npm install` or `yarn` to add dependencies

* In the root directory create a `.env` file

* In that file add these 3 lines (typically you wouldn't push your environment variables to Github but for presentation purpose I've displayed them here)

PORT=1337

DOMAIN="http://localhost:1337"

SALT=10

DB_USER='test_user'

DB_PASSWORD='test_password'

* If you don't already, globally install nodemon `npm install -g nodemon` or `yarn -g nodemon`

* In one terminal window run `npm run build` or `yarn build`

* In another terminal window run `npm start` or `yarn start`

* To view app, go to `http://127.0.0.1:1337`

* For context of how the app should run please view [this gif](https://media.giphy.com/media/l0Iye9w3CFoz5rP2w/source.gif)

* Also I wanted to point out I'm aware the code in here could be more modular and clean. I prioritized functionality over code quality. Given more bandwidth I would make the code much better.