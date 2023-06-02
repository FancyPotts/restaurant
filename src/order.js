export default function orderPage (insert) {
  insert.innerHTML = ''
  const psycheBody = document.createElement('div')

  const psyche = document.createElement('p')
  const psyche2 = document.createElement('p')
  const psyche3 = document.createElement('p')

  
  psyche.innerHTML = 'Here at the Incredible Burger Joint, you can call us at 000 000 0...'
  psyche2.innerHTML = 'Psyche. We realize that we serve some pretty epic burgers. With this realization, we think its not right to give anyone dibs. Come and earn it, taste an incredible burger in all its glory. Meet some people along the way.'
  psyche3.innerHTML = 'In case it wasn\'t clear, its on first come, first serve basis.'

  psycheBody.appendChild(psyche)
  psycheBody.appendChild(psyche2)
  psycheBody.appendChild(psyche3)

  insert.appendChild(psycheBody)
}
