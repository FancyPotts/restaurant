export default function menuPage (insert) {
  insert.innerHTML = ''
  // const secondNav = document.createElement('div')
  // const appBtn = document.createElement('button')
  // const entreesBtn = document.createElement('button')
  // const dessertsBtn = document.createElement('button')
  // secondNav.classList.add('sidebar')
  // appBtn.classList.add('menubutton', 'page-link')
  // entreesBtn.classList.add('menubutton', 'page-link')
  // dessertsBtn.classList.add('menubutton')

  // insert.appendChild(secondNav)
  // appBtn.innerHTML = 'Apps'
  // entreesBtn.innerHTML = 'Entrees'
  // dessertsBtn.innerHTML = 'Desserts'
  // secondNav.appendChild(appBtn)
  // secondNav.appendChild(entreesBtn)
  // secondNav.appendChild(dessertsBtn)

  const wrapper = document.createElement('div')
  const apps = document.createElement('ul')
  const appsList = document.createElement('li')
  const entrees = document.createElement('ul')
  const entreesList = document.createElement('li')
  const desserts = document.createElement('ul')
  const dessertsList = document.createElement('li')

  appsList.textContent = 'Apps list goes here'
  entreesList.textContent = 'Entrees list goes here'
  dessertsList.textContent = 'Desserts list goes here'

  wrapper.classList.add('wrapper')

  apps.id = 'apps'
  entrees.id = 'entrees'
  desserts.id = 'desserts'

  apps.innerHTML = 'Apps'
  entrees.innerHTML = 'Entrees'
  desserts.innerHTML = 'Desserts'

  apps.appendChild(appsList)
  entrees.appendChild(entreesList)
  desserts.append(dessertsList)

  wrapper.appendChild(apps)
  wrapper.appendChild(entrees)
  wrapper.appendChild(desserts)

  insert.appendChild(wrapper)
}
