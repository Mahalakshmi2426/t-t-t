let boxes = document.querySelectorAll('.box')
let reset = document.querySelector('.reset')
let newBtn = document.querySelector('.new-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')
let turn0 = true
let count = 0

let winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]

let resetGame = () =>{
    turn0 = true
    enableBoxes()
    msgContainer.classList.add('hide')
    count = 0

}

boxes.forEach((box) =>{
    box.addEventListener('click',() =>{
        if(turn0){
            box.innerText = 'O'
            turn0 = false
        }
        else{
            box.innerText = 'X'
            turn0 = true
        }
        box.disabled = true
        
        count++

        let isWinner = checkWinner()
        if(count==10 && !isWinner){
            gameDraw()
        }
    })

})
let disableBoxes = () =>{
    for(box of boxes){
        box.disabled = true
    }
}
let enableBoxes = () =>{
    for(box of boxes){
        box.disabled = false
        box.innerText = ''
    }
}
let gameDraw = () =>{
    msg.innerText = 'Game is Drawn'
    msgContainer.classList.remove('hide')
    disableBoxes();
}
let showWinner = (winner) =>{
    msg.innerText = `Congooo!! Winner is ${winner}`
    msgContainer.classList.remove('hide')
    disableBoxes()
}

let checkWinner = () => {
    for(pattern of winPatterns){
        let p1 = boxes[pattern[0]].innerText
        let p2 = boxes[pattern[1]].innerText
        let p3 = boxes[pattern[2]].innerText 
        
        if(p1 != '' && p2 != '' && p3 != ''){
            if(p1 === p2 && p2 === p3){
                console.log('winner is ',p1);
                showWinner(p1)
            }
        }
    }
}




newBtn.addEventListener('click',resetGame)
reset.addEventListener('click',resetGame)
