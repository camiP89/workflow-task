import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

const apiUrl = import.meta.env.VITE_API_URL

console.log('API URL:', apiUrl)

async function fetchPosts() {
  try {
    const res = await fetch(apiUrl)
    const data = await res.json()
    console.log('Fetched posts (first 3):', data.slice(0, 3))

    const pre = document.createElement('pre')
    pre.textContent = JSON.stringify(data.slice(0, 3), null, 2)
    document.body.appendChild(pre)
  } catch (err) {
    console.error('Fetch error:', err)
  }
}

fetchPosts()
