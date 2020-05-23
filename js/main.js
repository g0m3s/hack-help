// esta eh apenas um MVP e ainda tem muito a melhorar em DIVERSOS fatores como refatoracao, atuacao de forma dinamica em diversos trechos e etc mas desejamos muito melhora-lo com o tempo 

var chat1 = document.querySelector('#chatDestaque1')
var destaque1 = document.querySelector('#destaque1')

var chat2 = document.querySelector('#chatDestaque2')
var destaque2 = document.querySelector('#destaque2')

var chat3 = document.querySelector('#chatDestaque3')
var destaque3 = document.querySelector('#destaque3')

var chat4 = document.querySelector('#chatDestaque4')
var destaque4 = document.querySelector('#destaque4')

var chat5 = document.querySelector('#chatDestaque5')
var destaque5 = document.querySelector('#destaque5')

var chat6 = document.querySelector('#chatDestaque6')
var destaque6 = document.querySelector('#destaque6')


function abreChat(id){

    switch (id){

        case 1:
            chat1.style.display = 'block'
            destaque1.style.display = 'none'
        break
        case 2:
            chat2.style.display = 'block'
            destaque2.style.display = 'none'
        break
        case 3:
            chat3.style.display = 'block'
            destaque3.style.display = 'none'
        break
        case 4:
            chat4.style.display = 'block'
            destaque4.style.display = 'none'
        break
        case 5:
            chat5.style.display = 'block'
            destaque5.style.display = 'none'
        break
        case 6:
            chat6.style.display = 'block'
            destaque6.style.display = 'none'
        break

    }

}

function fechaChat(id){

    switch (id){

        case 1:
            chat1.style.display = 'none'
            destaque1.style.display = 'block'
        break
        case 2:
            chat2.style.display = 'none'
            destaque2.style.display = 'block'
        break
        case 3:
            chat3.style.display = 'none'
            destaque3.style.display = 'block'
        break
        case 4:
            chat4.style.display = 'none'
            destaque4.style.display = 'block'
        break
        case 5:
            chat5.style.display = 'none'
            destaque5.style.display = 'block'
        break
        case 6:
            chat6.style.display = 'none'
            destaque6.style.display = 'block'
        break

    }

}