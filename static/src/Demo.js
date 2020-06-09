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

// import {Glow} from 'interface/Glow'
// import 'babel-polyfill'
//
//
// /////////////// GLOW ///////////////////
//
// const container = document.createElement('div')
// container.id = 'container'
// document.body.appendChild(container)
//
// const glow = new Glow(container)
// glow.user();
import Buffer from 'Tone/core/Buffer'
import 'style/demo.css'
import events from 'events'
class Demo extends events.EventEmitter {
    constructor(container) {
        super();

    }
}
function onDemoCreate(){
    var body = document.body
    const titleContainer = document.createElement('div')
    titleContainer.id = 'titleContainer'
    body.appendChild(titleContainer)

    const title = document.createElement('div')
    title.id = 'title'
    title.textContent = 'A.I. 钢琴'
    titleContainer.appendChild(title)
}

function alertDemo(){
    alert("alert in Demo.js")
}

