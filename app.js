let paragraph1 = document.querySelector('.paragraph1')
let paragraph2 = document.querySelector('.paragraph2')
let paragraph3 = document.querySelector('.paragraph3')

// event listener for paragraph 1

paragraph1.addEventListener('mouseover', function(){
    paragraph1.style.color = 'white'
})
paragraph1.addEventListener('mouseleave',function(){
    paragraph1.style.color = 'black'
})

// event listener for paragraph 2

paragraph2.addEventListener('mouseover', function(){
    paragraph2.style.color = 'white'
})
paragraph2.addEventListener('mouseleave',function(){
    paragraph2.style.color = 'black'
})

// event listener for paragraph 3

paragraph3.addEventListener('mouseover', function(){
    paragraph3.style.color = 'white'
})
paragraph3.addEventListener('mouseleave',function(){
    paragraph3.style.color = 'black'
})
