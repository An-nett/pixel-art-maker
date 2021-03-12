let paintColor; 



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
    let squares = document.querySelectorAll('#bl');
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }
    document.querySelector('.display').style.backgroundColor = 'white';
    paintColor = null;
})

