export default function menuPage (insert) {
insert.innerHTML = ''
const secondNav = document.createElement('div')
const appBtn = document.createElement('button')
const entreesBtn = document.createElement('button')
const dessertsBtn = document.createElement('button')
secondNav.classList.add('sidebar')
appBtn.classList.add('menubutton')
entreesBtn.classList.add('menubutton')
dessertsBtn.classList.add('menubutton')

insert.appendChild(secondNav)
appBtn.innerHTML = 'Apps'
entreesBtn.innerHTML = 'Entrees'
dessertsBtn.innerHTML = 'Desserts'
secondNav.appendChild(appBtn)
secondNav.appendChild(entreesBtn)
secondNav.appendChild(dessertsBtn)

const wrapper = document.createElement('div')
const apps = document.createElement('ol')
const entrees = document.createElement('ol')
const desserts = document.createElement('ol')

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

insert.appendChild(wrapper)
  }
