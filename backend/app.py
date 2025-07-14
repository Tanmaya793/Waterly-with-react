from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS so React can call the API

@app.route('/api/info')
def waterly_info():
    return jsonify({
        "project": "Waterly",
        "description": "Smart water supply management backend is live!"
    })

if __name__ == '__main__':
    app.run(debug=True)
