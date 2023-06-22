from flask import Flask, request, jsonify
import json
from bardapi import Bard, SESSION_HEADERS
import os
import requests
from flask_cors import CORS, cross_origin
import asyncio
from EdgeGPT.EdgeGPT import Chatbot, ConversationStyle

app = Flask(__name__)
CORS(app)

token = 'XQh3ZVBvMxdwNPhIAnCoKFWfAIo9V8kfd24Hdz2QEmgpPFxu2u379iHgcDSoqvDF4qjDEA.'

session = requests.Session()
session.headers = {
    "Host": "bard.google.com",
    "X-Same-Domain": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Origin": "https://bard.google.com",
    "Referer": "https://bard.google.com/",
}
session.cookies.set("__Secure-1PSID", token)

bard = Bard(token=token, session=session, timeout=30)

async def create_chatbot():
    return await Chatbot.create()

async def close_chatbot(bot):
    await bot.close()

@app.route('/', methods=['GET'])
def hello():
    return {"response": "Hello dear"}

@app.route('/bardchat', methods=['POST'])
@cross_origin(origin='*')
def bardchat():
    input_text = request.json['input']
    response = bard.get_answer(input_text)['content']
    response_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    }
    return {'response': response}, 200, response_headers

@app.route('/bingchat', methods=['POST'])
@cross_origin(origin='*')
def edgechat():
    input_text = request.json['input']
    bot = asyncio.run(create_chatbot())
    response = asyncio.run(bot.ask(prompt=input_text, conversation_style=ConversationStyle.creative, simplify_response=True))
    asyncio.run(close_chatbot(bot))

    response_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    }

    return jsonify(response), 200, response_headers