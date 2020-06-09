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

import Buffer from 'Tone/core/Buffer'
import 'style/splash.css'
import events from 'events'
import Loader from 'interface/Loader'

class Splash extends events.EventEmitter{
	constructor(container){

		super()
		const splash = this._splash = document.createElement('div')
		splash.id = 'splash'
		container.appendChild(splash)

		// the title
		const titleContainer = document.createElement('div')
		titleContainer.id = 'titleContainer'
		splash.appendChild(titleContainer)

		const title = document.createElement('div')
		title.id = 'title'
		title.textContent = 'A.I. 钢琴'
		titleContainer.appendChild(title)

		const subTitle = document.createElement('div')
		subTitle.id = 'subTitle'
		titleContainer.appendChild(subTitle)
		subTitle.textContent = '一架可以回应你的AI钢琴'

		this._clicked = false
		const loader = this._loader = new Loader(titleContainer)
		loader.on('click', () => {
			splash.classList.add('disappear')
			this._clicked = true
			this.emit('click')
		})

		//demo toggle button
		this._toggleButton = document.createElement('div')
		this._toggleButton.id = 'demoBtn'
		titleContainer.appendChild(this._toggleButton)
		const demoBtnText = document.createElement('div')
		demoBtnText.id = 'demoBtnText'
		this._toggleButton.appendChild(demoBtnText)
		demoBtnText.textContent = 'Demo'
		this._toggleButton.addEventListener('click', (e) => {
			e.preventDefault()
			this.jumpToDemo()
		})

	}

	get loaded(){
		return this._loader.loaded
	}

	isOpen(){
		return !this._clicked
	}

	show(){
		this._splash.classList.remove('disappear')
	}

	hide(){
		this._splash.classList.add('disappear')
	}

	jumpToDemo(){
		window.location.href = "http://127.0.0.1:8080/demo"
	}
}

export {Splash}