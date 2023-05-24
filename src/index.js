import './style.css'
import mainPage from './main.js'
import menuPage from './menu.js'
import orderPage from './order.js'
import contactPage from './contact.js'
import aboutPage from './about.js'

function component () {
  const body = document.createElement('div')
  const content = document.createElement('div')
  const footer = document.createElement('div')

  body.classList.add('body')

  content.classList.add('content')
  footer.classList.add('footer')

  content.innerHTML = 'Content'
  footer.innerHTML = '&copy; Grimoire Werks'

  // function generateNavbarButton(pageName, currentPage) {
  //   const button = document.createElement('button');
  //   button.innerText = pageName;
    
  //   // Add active class to the button if it corresponds to the current page
  //   if (pageName === currentPage) {
  //     button.classList.add('active');
  //   }
    
  //   // Add an event listener to handle button clicks
  //   button.addEventListener('click', function() {
  //     // Remove the active class from all buttons in the navbar
  //     const buttons = document.querySelectorAll('.navbar button');
  //     buttons.forEach(function(btn) {
  //       btn.classList.remove('active');
  //     });
      
  //     // Add the active class to the clicked button
  //     button.classList.add('active');
      
  //     // Redirect to the corresponding page
  //     window.location.href = pageName + '.html';
  //   });
    
  //   return button;
  // }

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

  body.appendChild(header)
  body.appendChild(content)
  body.appendChild(footer)

  const btns = document.querySelectorAll('button')
  console.log(btns)
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log(btn.textContent)
    })
  })

  return body
}
document.body.appendChild(component())