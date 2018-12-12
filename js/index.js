// using this file is optional
// you can also load the code snippets in using your browser's console
// document.onload = () => {
//
//
// }

const main = document.getElementById('main')

main.addEventListener('click', function(event) {
  alert('I was clicked!')
  console.log("Hey!")
})

const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    return e.preventDefault()
  } else {
  console.log(e.which)
  }
})

let divs = document.querySelectorAll('div')

function bubble(e) {
  e.stopPropagation()
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i=0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true)
}

for (let i=0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble)
}
