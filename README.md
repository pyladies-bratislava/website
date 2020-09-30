# Pyladies Bratislava's Website

## How to run the backend and frontend:
1. Create virtual environment in *'backends'* folder:
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

3. Install the requirements from *'backends'* folder:
~~~
$ pip install -r requirements.txt
~~~

4. Create *.env* file in *'backends'* folder with this text inside:
*FLASK_APP=flask_main<br>
FLASK_ENV=development*

6. Start Flask backend in *'backends'* folder:
~~~
$ flask run
~~~

7. For frontend install node.js from this [link](https://nodejs.org/en/download/).<br>
Then in *'frontend'* folder run:
~~~
$ npm install
~~~

8. Start frontend in *'frontend'* folder:
~~~
$ npm start
~~~

***
## How to create a file in windows terminal:

1. Type copy con testfile.txt, but replace testfile with the desired file name. Press Enter.
2. Type your desired text. This is rudimentary text editor, but it's good for quick notes or code. You can use the Enter key as you type to move to the next line if you wish.
3. Press Ctrl+Z when you're finished editing the file. This saves everything you've typed into the file.