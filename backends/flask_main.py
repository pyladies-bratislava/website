from flask import Flask
from .scraping import pyladies_url, get_pyladies_about_info
from .events import SCOPES, get_google_cal_events


app = Flask(__name__)

@app.route("/menu")
def get_menu():
    return {"menu": ["Meetups Calendar", "Chat Bot", "Scholarships", "About us", "Vote for a topic"]}

@app.route("/about")
def get_about():
    pyladies_about_info = get_pyladies_about_info()
    return {"about": "From international Pyladies website:" + pyladies_about_info}

@app.route("/events")
def get_events():
    events = get_google_cal_events()
    return {"events": events}
