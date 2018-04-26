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

//first var //original top div
//second var//the current child of our firstVar setting equal to the first child by [0]
//drop down into while loop//
//while(next){ while the the div has a child again remember [0] ^ keep running this block
//node = next <-- setting up for the next run of this while loop to be the div that next(the child) refers to
//next = node.children[0] <----setting up for the next run of while loop need to define next
//                              for next run of while loop because it doesnt know
//                             that next is now in the newly nested div scope we just got into
//}
//return node  <----once it breaks out of while/ your node will now have the value of the very last child




function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++){
    let children = rankedLists[i].children

    for(let j= 0; j < children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
