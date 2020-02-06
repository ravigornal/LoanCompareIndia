from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import request, make_response, jsonify
import json

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/loancompareindia"
mongo = PyMongo(app)

@app.route('/all', methods = ['GET'])
def all():
    data = mongo.db.flights.find()
    return dumps(data)

@app.route('/search', methods = ['POST'])
def search():
    originCity = request.json['originCity']
    destinationCity = request.json['destinationCity']
    departureDate = str(request.json['departureDate'])
    persons = str(request.json['persons'])

    cnt = mongo.db.flights.find({"originCity":originCity,"destinationCity":destinationCity,"departureDate":departureDate}).count()
    if(cnt > 0 ):
        data =  mongo.db.flights.find({"originCity":originCity,"destinationCity":destinationCity,"departureDate":departureDate})
        return dumps(data)
    else:
        return({"message": "No flights found"})

