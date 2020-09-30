# Website
Pyladies Bratislava's Website

## How to run the backend and frontend: <br />

1. Create virtual environment in 'backends' folder: 
$python3 -m venv .venv <br />

2. Activate virtual environment:
  - on Windows: $.venv\Scripts\activate <br />
  - on Linux: $ source .venv/bin/activate <br />

3. Install the requirements:
$pip install -r requirements.txt <br />

4. Create .env file in 'backends' folder <br />

5. To the .env file save this information: <br />
FLASK_APP=flask_main <br />
FLASK_ENV=development <br />

6. Start backend:
(.venv)......\website\backend\flask run <br />

7. For frontend install node.js from (https://nodejs.org/en/download/) <br />
then run:<br/>
(.venv)......\website\frontend\npm install <br />

8. Start frontend:
(.venv)......\website\frontend\npm start <br />


## How to create a file in windows terminal: <br />

1. Type copy con testfile.txt, but replace testfile with the desired file name. Press Enter.  

2. Type your desired text. This is rudimentary text editor, but it's good for quick notes or code. You can use the Enter key as you type to move to the next line if you wish.  

3. Press Ctrl+Z when you're finished editing the file. This saves everything you've typed into the file.  
