from flask import Flask, render_template, redirect
import sqlite3
from data import Releases

Releases = Releases()

app = Flask(__name__)
app.debug = True

@app.route('/')
def index():
  return render_template('home.html', releases = Releases)

@app.route('/release/<string:id>/')
def release(id):
    with sqlite3.connect("coorootmusic.db") as con:
      cur = con.cursor()
      cur.execute("SELECT * FROM releases WHERE id = ?", [id])
      release = cur.fetchone()

    return render_template('release.html', release = release)  


if __name__ == "__main__":
  app.run()
