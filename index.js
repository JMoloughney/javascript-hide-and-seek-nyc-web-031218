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

//1.first var //original top div
//2.second var//the current child of our firstVar setting equal to the first child by [0]
//3.drop down into while loop//
//  while(next){ while the the div has a child again remember [0] ^ keep running this block
//  3a. node = next <-- setting up for the next run of this while loop to be the div that next(the child) refers to
//  3b. next = node.children[0] <----setting up for the next run of while loop need to define next
//                              for next run of while loop because it doesnt know
//                             that next is now in the newly nested div scope we just got into
//} <-- dont forget to close out of while before returning (friendly reminder)
//4.return node  <----once it breaks out of while/ your node will now have the value of the very last child




function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++){
    let children = rankedLists[i].children

    for(let j= 0; j < children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
//1. Creating a constant of of ranked lists that is equal to a collection of all the rankedLists class tags
//2. Drop into for loop and go until the length of total collection
//    set variable children = to itself via index of for loop
//3. So I can go even deeper and call another for loop  within the original for loop
//  now every child within the ranked list can get their inner HTML to get increased by n
//*3* must make the .innerHTML = to parseInt(itself) to add because the number inside the inner html is not
// an integer {i think its a string/ if not just know its not a number at first when doing any math}
