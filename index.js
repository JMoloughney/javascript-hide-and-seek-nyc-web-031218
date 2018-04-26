function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild(){
let node = document.getElementById('grand-node')
let next = node.children[0]
while (next){
  node = next
  next = node.children[0]
  }
  return node
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++){
    let children = rankedLists[i].children

    for(let j= 0; j < children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
