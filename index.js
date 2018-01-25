function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const lis = document.querySelectorAll(document.getElementById('nested'))
  for (i = 0; i < lis.length; i += 1) {
    if (lis[i].className === ".target") {
      return lis[i]
    }
  }
}
