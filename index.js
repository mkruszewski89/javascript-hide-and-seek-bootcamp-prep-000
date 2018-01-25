function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  //return document.querySelectorAll(document.getElementById('nested'))
  return document.querySelector(document.getElementById('nested').target)
}
