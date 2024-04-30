console.log('HELLO WORLD')

let container = document.querySelector('#container')
let targetImage = document.querySelector('#targetImage')

let kepek = ['delfin.png', 'kutya.webp', 'macska.jpg']

for (let kep of kepek) {
  const img = document.createElement('img')
  img.src = 'img/' + kep
  img.width = '200'
  container.appendChild(img)
  console.log(img)
  img.addEventListener('click', function () {
    targetImage.src = img.src
  })
}
