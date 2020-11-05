from flask import Flask, request

from .chatbot import bot
from .events import get_google_cal_events
from .scraping import get_pyladies_about_info


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


@app.route("/chatbot", methods=["POST"])
def post_interaction():
    interaction = request.json["interaction"]
    response = bot.get_response(interaction)
    return response.text
