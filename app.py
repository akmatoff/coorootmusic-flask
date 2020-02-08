from flask import Flask, render_template, redirect
from data import Releases

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
