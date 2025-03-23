function themeButton (color){
    document.body.style.backgroundColor = color;
};

const changeButton = document.getElementById('theme-button');
changeButton.addEventListener('click', function(){
    if(document.body.style.backgroundColor === 'white'){
        themeButton('blue')
    } else {
        themeButton('white')
    }
});

