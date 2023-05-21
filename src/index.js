console.log('Up and running!')

function component() {
  const body = document.createElement('div')
  const header = document.createElement('div')
  const content = document.createElement('div')
  const footer = document.createElement('div')

  header.innerHTML = 'Nav'
  content.innerHTML = 'Content'
  footer.innerHTML = 'Footer'

  body.appendChild(header)
  body.appendChild(content)
  body.appendChild(footer)

  return body
}

document.body.appendChild(component())g