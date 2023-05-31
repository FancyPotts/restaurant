import './style.css'
import mainPage from './main.js'
import menuPage from './menu.js'
import orderPage from './order.js'
import contactPage from './contact.js'
import aboutPage from './about.js'

function component () {
  const body = document.createElement('div')
  const contentWrapper = document.createElement('div')
  const content = document.createElement('div')
  const footer = document.createElement('div')

  body.classList.add('body')
  contentWrapper.classList.add('content-wrapper')
  content.classList.add('content')
  footer.classList.add('footer')

  footer.innerHTML = '&copy; Grimoire Werks'

  /* Create variable if page clicked is current page. Check all other buttons to make sure they're not active. Make current page active. */

  const header = document.createElement('div')
  const btnMain = document.createElement('button')
  const btnMenu = document.createElement('button')
  const btnReserve = document.createElement('button')
  const btnAbout = document.createElement('button')
  const btnContact = document.createElement('button')
  const btnMainOverlay = document.createElement('span')
  const btnMainwrapper = document.createElement('div')

  btnMain.addEventListener('click', () => {
    mainPage(content)
  })
  btnMenu.addEventListener('click', () => {
    menuPage(content)
  })
  btnReserve.addEventListener('click', () => {
    orderPage(content)
  })
  btnAbout.addEventListener('click', () => {
    aboutPage(content)
  })
  btnContact.addEventListener('click', () => {
    contactPage(content)
  })

  btnMain.classList.add('navbtn', 'logo')
  btnMenu.classList.add('navbtn')
  btnReserve.classList.add('navbtn')
  btnAbout.classList.add('navbtn', 'about')
  btnContact.classList.add('navbtn')
  header.classList.add('navbar')
  btnMainOverlay.classList.add('overlay', 'logo-secondary')
  btnMainwrapper.classList.add('btn-wrapper')

  btnMain.addEventListener('mouseout', function () {
    btnMainOverlay.innerHTML = ''
    btnMain.innerHTML = 'The Burger Joint'
  })

  btnMain.addEventListener('mouseover', function () {
    btnMainOverlay.innerHTML = 'Incredible'
  })

  btnMain.innerHTML = 'The Burger Joint'
  btnMenu.innerHTML = 'Menu'
  btnReserve.innerHTML = 'Reserve'
  btnAbout.innerHTML = 'About'
  btnContact.innerHTML = 'Contact'

  btnMainwrapper.appendChild(btnMain)
  btnMainwrapper.appendChild(btnMainOverlay)
  header.appendChild(btnMainwrapper)
  header.appendChild(btnMenu)
  header.appendChild(btnReserve)
  header.appendChild(btnAbout)
  header.appendChild(btnContact)
  mainPage(content)

  contentWrapper.appendChild(content)
  body.appendChild(header)
  body.appendChild(contentWrapper)
  body.appendChild(footer)

  return body
}
document.body.appendChild(component())
