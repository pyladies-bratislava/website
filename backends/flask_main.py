from flask import Flask
from .official_pyladies_about_scraping import official_pyladies_url, get_official_pyladies_about_info


app = Flask(__name__)


@app.route("/menu")
def get_menu():
    return {"menu": ["Meetups Calendar", "Chat Bot", "Scholarships", "About us", "Vote for a topic"]}


@app.route("/about")
def get_about():
    official_pyladies_about_info = get_official_pyladies_about_info()
    return {"official_pyladies_about_info": "From official international Pyladies website:\n\n"+ official_pyladies_about_info}
