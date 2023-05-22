import './style.css'

console.log('Up and running!')

function component () {
  const body = document.createElement('div')
  const header = document.createElement('div')
  const content = document.createElement('div')
  const footer = document.createElement('div')
  const btnMain = document.createElement('button')
  const btnMenu = document.createElement('button')
  const btnOrder = document.createElement('button')
  const btnAbout = document.createElement('button')
  const btnContact = document.createElement('button')

  body.classList.add('body')
  header.classList.add('navbar')
  content.classList.add('content')
  footer.classList.add('footer')
  btnMain.classList.add('navbtn')
  btnMenu.classList.add('navbtn')
  btnOrder.classList.add('navbtn')
  btnAbout.classList.add('navbtn', 'about')
  btnContact.classList.add('navbtn')

  btnMain.innerHTML = 'Main'
  btnMenu.innerHTML = 'Menu'
  btnOrder.innerHTML = 'Order'
  btnAbout.innerHTML = 'About'
  btnContact.innerHTML = 'Contact'
  content.innerHTML = 'Content'
  footer.innerHTML = 'Footer'

  function showMain () {
    content.innerHTML = 'Main page'
  }

  function showMenu () {
    content.innerHTML = ''
    const secondNav = document.createElement('div')
    secondNav.classList.add('sidebar')
    content.appendChild(secondNav)
    secondNav.innerHTML = 'Second nav'
  }

  function menuListing () {
    const wrapper = document.createElement('div')
    const apps = document.createElement('div')
    const entrees = document.createElement('div')
    const desserts = document.createElement('div')

    wrapper.classList.add('wrapper')

    apps.id = 'apps'
    entrees.id = 'entrees'
    desserts.id = 'desserts'

    apps.innerHTML = 'Apps'
    entrees.innerHTML = 'Entrees'
    desserts.innerHTML = 'Desserts'

    wrapper.appendChild(apps)
    wrapper.appendChild(entrees)
    wrapper.appendChild(desserts)

    content.appendChild(wrapper)
  }

  btnMain.addEventListener('click', showMain)
  btnMenu.addEventListener('click', function () {
    showMenu()
    menuListing()
  })

  header.appendChild(btnMain)
  header.appendChild(btnMenu)
  header.appendChild(btnOrder)
  header.appendChild(btnAbout)
  header.appendChild(btnContact)
  body.appendChild(header)
  body.appendChild(content)
  body.appendChild(footer)

  return body
}

document.body.appendChild(component())