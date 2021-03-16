# Pyladies Bratislava's Website

Our website's vision is to become a lab for experimenting, not only using Python but also other languages and frameworks.
By calling it a lab we want to give the freedom for everyone to experiment with anything - the one and only rule is: `Is has to work` :)

#### Current status
Currently the code behind the website is split into 2 repositories; the one for the backend (invisible part) and the one for the frontend (visible part of the website for the user).

This repository deals with the frontend part of our Pyladies Bratislava website.

So far we have a [simple react app](react.md) for the `frontend`. In the future we we would like to have several ways of showing the website to a user by using different languages / frameworks.

The repository of the website's backend can be found [>here<](https://github.com/pyladies-bratislava/flask-backend). In the `backends` repository we have 2 json API backends: one done with [Flask](https://flask.palletsprojects.com/en/1.1.x/) and another with [FastAPI](https://fastapi.tiangolo.com/). Both are Python frameworks.

The way the react frontend calls one of the backends is defined in the `package.json` file in the `proxy` line.
There you can see the location of the backend - by default Flask runs on port 8000 and FastAPI on 5000. In the future we would like to have several backends running simultaneously.


## How to run the frontend?

1. Install [node.js](https://nodejs.org/en/download/).

2. In the website directory create a new file called .env with:

REACT_APP_BACKEND_URL=https://bratislava-flask-backend.herokuapp.com/

3. Then in the `website` folder run:
~~~
$ npm install
~~~

4. Start the frontend with:
~~~
$ npm start
~~~

This will run the frontend code (the prettier version) calling the backend deployed in https://bratislava-flask-backend.herokuapp.com/ (the less pretty version).
