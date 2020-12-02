from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer


bot = ChatBot(
    "Saga",
    storage_adapter="chatterbot.storage.SQLStorageAdapter",
    database_uri="sqlite:///database.sqlite3",
    logic_adapters=[
        "chatterbot.logic.BestMatch",
        "chatterbot.logic.TimeLogicAdapter",
    ],
)

trainer = ChatterBotCorpusTrainer(bot)

trainer.train('chatterbot.corpus.english')
