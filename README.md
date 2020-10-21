# Pyladies Bratislava's Website

Our website's vision is to become a lab for experimenting things, not only using Python but also other languages and frameworks.
By calling it a lab we want to give the freedom for everyone to experiment with anything being the only
golden rule: `Is has to work` :)

At the moment we have divided the frontend (visible part of the website for the user) from the backend(s) (invisible part).
In the `frontend` folder we will probably have several ways of showing the website to a user on a browser, right now
we have only a [simple react app](frontend/react.md).
In the `backends` folder we have 2 json API backends: one done with [Flask](https://flask.palletsprojects.com/en/1.1.x/)
and another with [FastAPI](https://fastapi.tiangolo.com/). Both are Python frameworks.

The way the react frontend calls one of the backends is defined in the `package.json` file in the `proxy` line.
There you can see the location of the backend. In the future we want to have several backends running simultaneously.
By default Flask runs on port 8000 and FastAPI on 5000.

We are managing Python versions and packages with `virtualenv` at the moment but in the future we will also introduce `poetry`.

## How to run the backends?

Common stuff:

1. Create a virtual environment called `.venv` in the `backends` folder:
~~~
$ python3 -m venv .venv
~~~
2. Activate virtual environment. (Activated virtual environment will be indicated by (.venv) in the beginning of the terminal line.)
 - on Windows:
~~~
$ .venv\Scripts\activate
~~~
 - on Linux or Mac:
~~~
$ source .venv/bin/activate
~~~
3. Install the requirements from `backends` folder:
~~~
(.venv)$ pip install -r requirements.txt
~~~
At this moment you have both Flask and FastAPI installed in your `virtualenv`.

To run Flask:
1. Create a `.env` file in `backends` folder with the following environmental variables:
~~~
FLASK_APP=flask_main
FLASK_ENV=development
~~~
2. Start Flask:
~~~
(.venv)$ flask run
~~~

To run FastAPI:
~~~
(.venv)$ uvicorn fastapi_main:app --reload
~~~ 

## How to run the frontend?

1. Install [node.js](https://nodejs.org/en/download/).

2. Then in the `frontend` folder run:
~~~
$ npm install
~~~

8. Start the frontend with:
~~~
$ npm start
~~~

### How to create a file in windows terminal:

1. Type copy con testfile.txt, but replace testfile with the desired file name. Press Enter.
2. Type your desired text. This is rudimentary text editor, but it's good for quick notes or code. You can use the Enter key as you type to move to the next line if you wish.
3. Press Ctrl+Z when you're finished editing the file. This saves everything you've typed into the file.