# This file scrapes the official pyladies 
# website 'https://pyladies.com/about/'
# and assigns about info text to 
# str type variable 'about_info'
# which can be further used in our website

# in case the structure is of official pyladies
# website is changed in future, link to the website
# as str is assigned to 'about_info' variable

import requests
from bs4 import BeautifulSoup   # for web scraping

pyladies_url="https://pyladies.com/about/"

def get_pyladies_about_info(url=pyladies_url):
    """ scrapes official pyladies website;
    returns pyladies_about_info str variable
    with info about pyladies;
    if the structure of the scraped website is changed,
    assigns url address as str instead """

    page = requests.get(pyladies_url)
    soup = BeautifulSoup(page.content, 'html.parser')

    # getting the desired text from scraped html page
    div_class_page = soup.find("div", {"class": "page"})
    pyladies_about_info = div_class_page.find("p")

    if pyladies_about_info:
        pyladies_about_info = pyladies_about_info.text.strip()
    # in case the website's structure is changed
    else:
        pyladies_about_info=pyladies_url 

    return pyladies_about_info
