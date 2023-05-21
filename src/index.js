import './style.css'

console.log('Up and running!')

function component() {
  const body = document.createElement('div')
  const header = document.createElement('div')
  const content = document.createElement('div')
  const footer = document.createElement('div')
  const btn = document.createElement('button')

  body.classList.add('body')
  header.classList.add('navbar')
  content.classList.add('content')
  footer.classList.add('footer')
  btn.classList.add('navbtn')

  btn.innerHTML = 'Rando'
  header.innerHTML = 'Nav'
  content.innerHTML = 'Content'
  footer.innerHTML = 'Footer'

  header.appendChild(btn)
  body.appendChild(header)
  body.appendChild(content)
  body.appendChild(footer)

  return body
}

document.body.appendChild(component())