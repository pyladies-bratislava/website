from fastapi import FastAPI


app = FastAPI()


@app.get("/menu")
def get_menu():
    return {"menu": ["Meetups Calendar", "Chat Bot", "Scholarships", "About us", "Vote for a topic", "One more"]}
