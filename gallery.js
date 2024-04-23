console.log('HELLO WORLD')

let container = document.querySelector('#container')
// console.log(ujDiv)

let ujDiv = document.createElement('div')
ujDiv.innerText = 'HELLO WORLD'
container.appendChild(ujDiv)

let tomb = ['alma', 'körte', 'kutya', 'macska']

for (let elem of tomb) {
  console.log(elem)
  let tempDiv = document.createElement('div')
  tempDiv.innerHTML = elem
  container.appendChild(tempDiv)
}
