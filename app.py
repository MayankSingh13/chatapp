from flask import Flask, render_template, request
#from flask_socketio import SocketIO, emit, send, join_room, leave_room

app = Flask(__name__)
app.config["SECRET_KEY"] = 'sder345#@sfhrg'
app.config['TEMPLATES_AUTO_RELOAD'] = True
#socketio = SocketIO(app)

channels = ['General', 'IT']

@app.route("/")
def index():
    return render_template("index.html", channels=channels)


if __name__ == '__main__':
    app.run()
