/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import 'style/about.css'
import YouTubeIframeLoader from 'youtube-iframe'
import events from 'events'

// const magentaLink = 'https://magenta.tensorflow.org/'
// const tfLink = 'https://www.tensorflow.org/'
// const toneLink = 'https://github.com/Tonejs/Tone.js'
// const sourceCode = 'https://github.com/googlecreativelab/aiexperiments-ai-duet'
/*YouTube视频控件说明文本
const blurbCopy = `Built by Yotam Mann with friends on the Magenta and Creative Lab teams at Google. 
					It uses <a target='_blank' href='${tfLink}'>TensorFlow</a>,
					<a target='_blank' href='${toneLink}'>Tone.js</a> and tools 
					from the <a target='_blank' href='${magentaLink}'>Magenta project</a>. 
					The open-source code is <a target='_blank' href='${sourceCode}'>available here</a>.
					Click the keyboard, use your computer keys, or even plug in a MIDI keyboard.`
*/
export class About extends events.EventEmitter{
	constructor(container){

		super()

		this._container = document.createElement('div')
		this._container.id = 'about'
		container.appendChild(this._container)

		this._toggleButton = document.createElement('div')
		this._toggleButton.id = 'aboutButton'
		this._toggleButton.classList.add('open')
		container.appendChild(this._toggleButton)
		this._toggleButton.addEventListener('click', (e) => {
			e.preventDefault()
			this.downloadMidi()
			/*if (this.isOpen()){
				this.close()
			} else {
				this.open()
			}*/
		})

		const content = document.createElement('div')
		content.id = 'content'
		this._container.appendChild(content)

		const title = document.createElement('div')
		title.id = 'title'
		title.textContent = 'A.I. Duet'
	}
	showButton(){
		this._toggleButton.classList.add('show')
	}
	downloadMidi(){
		// alert("is pressed");
		const elt = document.createElement('iframe');
		elt.src = "http://127.0.0.1:8080/download/midi"
		elt.style.display = 'none';
		document.body.appendChild(elt);
	}
}