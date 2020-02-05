from flask import Flask, render_template, g
from data import Releases
import sqlite3

DATABASE = 'database.db'

def get_db():
  db = getattr(g, '_database', None)
  if db is None:
    db = g._database = sqlite3.connect(DATABASE)
  return db

Releases = Releases()

app = Flask(__name__)
app.debug = True

@app.route('/')
def index():
  return render_template('home.html', releases = Releases)

@app.route('/release/<string:id>/')
def release(id):
  return render_template('release.html', release = release)  

if __name__ == "__main__":
  app.run()
