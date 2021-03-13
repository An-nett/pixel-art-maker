let paintColor; 
let squares = document.querySelectorAll('#bl');
let mouseDown = false;



document.querySelector('.canva').addEventListener('click', function(e) {
    if (e.target && e.target.id == 'bl') {
        e.target.style.backgroundColor = paintColor;
    }
})



document.querySelector('.palette').addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('br')) {
        let compStyle = getComputedStyle(e.target);
        paintColor = compStyle.backgroundColor;
        document.querySelector('.display').style.backgroundColor = paintColor;
        return paintColor;
    }  
    
})

document.querySelector('.button').addEventListener('click', function() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }
    document.querySelector('.display').style.backgroundColor = 'white';
    paintColor = null;
})


for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mousedown', function() {
        squares[i].style.backgroundColor = paintColor;
        mouseDown = true;
    })
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseenter', function() {
        if (mouseDown) squares[i].style.backgroundColor = paintColor;
    })
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseup', function() {
        if (mouseDown) squares[i].style.backgroundColor = paintColor;
        mouseDown = false;
    })    
}

document.querySelector('#picker').addEventListener('change', function(e) {
    paintColor = e.target.value;
    document.querySelector('.display').style.backgroundColor = paintColor;
    return paintColor;
})
