# 
# Copyright 2016 Google Inc.
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# 
# http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# 

from predict import generate_midi
import os
from flask import send_file, request,send_from_directory
import pretty_midi
import sys
if sys.version_info.major <= 2:
    from cStringIO import StringIO
else:
    from io import StringIO
import time
import json
#packaging

from flask import Flask

app = Flask(__name__, static_url_path='', static_folder=os.path.abspath('../static'))


@app.route('/predict', methods=['POST'])
def predict():
    now = time.time()
    global jsonData
    jsonData = request.data
    values = json.loads(request.data)
    midi_data = pretty_midi.PrettyMIDI(StringIO(''.join(chr(v) for v in values)))
    duration = float(request.args.get('duration'))
    ret_midi = generate_midi(midi_data, duration)
    return send_file(ret_midi, attachment_filename='return.mid', 
        mimetype='audio/midi', as_attachment=True)


@app.route('/', methods=['GET', 'POST'])
def index():
    return send_file('../static/index.html')

@app.route('/demo', methods=['GET', 'POST'])
def demo():
    return send_file('../static/demo.html')

@app.route('/download/midi',methods=['GET','POST'])
def download():
    directory = os.getcwd()
    return send_from_directory('../static/midi/','midTest.mid')

@app.route('/json',methods=['GET','POST'])
def jsonTry():
    #directory = os.getcwd()
    # jsonData = request.data
    # jsonData = json.dumps([ { 'a' : 111, 'b' : 2, 'c' : 3, 'd' : 4, 'e' : 5 } ])
    fileObject = open('testJson.json', 'w')
    fileObject.write(jsonData)
    fileObject.close()

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080)
