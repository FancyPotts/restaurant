export default function menuPage (insert) {
insert.innerHTML = ''
const secondNav = document.createElement('div')
secondNav.classList.add('sidebar')
insert.appendChild(secondNav)
secondNav.innerHTML = 'Second nav'

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

insert.appendChild(wrapper)

  }
