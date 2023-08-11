'use strict'

function openPage(event, pageName) {
    let i, tabcontent, buttons;

    tabcontent = document.getElementsByClassName('tabcontent');
    for(i = 0; i < tabcontent.length; ++i) {
        tabcontent[i].style.display = 'none';
    }

    buttons = document.getElementsByClassName('buttons');
    for(i = 0; i < buttons.length; ++i) {
        buttons[i].className = buttons[i].className.replace('active', '');
    }
    
    document.getElementById(pageName).style.display = 'block';
    event.currentTarget.className += 'active';
}   