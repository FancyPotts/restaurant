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
  const btnOrder = document.createElement('button')
  const btnAbout = document.createElement('button')
  const btnContact = document.createElement('button')

  btnMain.addEventListener('click', () => {
    mainPage(content)
  })
  btnMenu.addEventListener('click', () => {
    menuPage(content)
  })
  btnOrder.addEventListener('click', () => {
    orderPage(content)
  })
  btnAbout.addEventListener('click', () => {
    aboutPage(content)
  })
  btnContact.addEventListener('click', () => {
    contactPage(content)
  })

  btnMain.classList.add('navbtn')
  btnMenu.classList.add('navbtn')
  btnOrder.classList.add('navbtn')
  btnAbout.classList.add('navbtn', 'about')
  btnContact.classList.add('navbtn')
  header.classList.add('navbar')

  btnMain.innerHTML = 'Main'
  btnMenu.innerHTML = 'Menu'
  btnOrder.innerHTML = 'Order'
  btnAbout.innerHTML = 'About'
  btnContact.innerHTML = 'Contact'

  header.appendChild(btnMain)
  header.appendChild(btnMenu)
  header.appendChild(btnOrder)
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
