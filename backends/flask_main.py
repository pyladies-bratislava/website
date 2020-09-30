from flask import Flask
from .scraping import pyladies_url, get_pyladies_about_info


app = Flask(__name__)


@app.route("/menu")
def get_menu():
    return {"menu": ["Meetups Calendar", "Chat Bot", "Scholarships", "About us", "Vote for a topic"]}


@app.route("/about")
def get_about():
    pyladies_about_info = get_pyladies_about_info()
    return {"pyladies_about_info": "From international Pyladies website:"+ pyladies_about_info}
