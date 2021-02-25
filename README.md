# Pyladies Bratislava's Website

Our website's vision is to become a lab for experimenting things, not only using Python but also other languages and frameworks.
By calling it a lab we want to give the freedom for everyone to experiment with anything being the only
golden rule: `Is has to work` :)

At the moment we have divided the frontend (visible part of the website for the user) from the backend(s) (invisible part).
In the `frontend` folder we will probably have several ways of showing the website to a user in a browser, right now
we have only a [simple react app](react.md).
In the `backends` folder we have 2 json API backends: one done with [Flask](https://flask.palletsprojects.com/en/1.1.x/)
and another with [FastAPI](https://fastapi.tiangolo.com/). Both are Python frameworks.

The way the react frontend calls one of the backends is defined in the `package.json` file in the `proxy` line.
There you can see the location of the backend. In the future we want to have several backends running simultaneously.
By default Flask runs on port 8000 and FastAPI on 5000.


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
