export default function mainPage (insert) {
  insert.innerHTML = ''

  const logoWrapper = document.createElement('div')
  const mainLogo = document.createElement('span')
  const secondaryLogo = document.createElement('span')

  logoWrapper.classList.add('logo-wrapper')
  mainLogo.classList.add('logo-main')
  secondaryLogo.classList.add('logo-accessory')

  mainLogo.textContent = 'Incredible'
  secondaryLogo.textContent = 'The Burger Joint'

  logoWrapper.appendChild(mainLogo)
  logoWrapper.appendChild(secondaryLogo)

  insert.appendChild(logoWrapper)
}
