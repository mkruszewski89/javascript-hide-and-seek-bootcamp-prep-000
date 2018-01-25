function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const lis = document.getElementById('nested').querySelectorAll()
  for (var i = 0; i < lis.length; i += 1) {
    if (lis[i].innerHTML = `target`) {
      return lis[i]
    }
  }
}
