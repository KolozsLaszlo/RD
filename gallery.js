console.log('HELLO WORLD')

let container = document.querySelector('#container')

let kepek = ['delfin.png', 'kutya.webp', 'macska.jpg']

for (let kep of kepek) {
  const img = document.createElement('img')
  img.src = 'img/' + kep
  img.width = '200'
  container.appendChild(img)
  console.log(img)
}
