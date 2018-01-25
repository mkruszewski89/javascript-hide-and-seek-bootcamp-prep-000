function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < lis.length; i += 1) {
    parseInt(lis[i].innerHTML) += 1
  }
  return lis
}
