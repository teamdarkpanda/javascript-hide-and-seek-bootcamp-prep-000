function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list li')
  var count = list.length
  
  for(let i = 0; i < count; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild() {
  var list = document.querySelectorAll('#grand-node div')
  return list[list.length - 1]
}