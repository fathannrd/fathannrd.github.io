let addWordButton = document.getElementById('addWord')
let input = document.getElementById('inputWord')
let container = document.getElementById('wordContainer')

if(input === '') {
    alert('Please write something.')
}
addWordButton.addEventListener('click', function() {
    let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = input.value;
    container.appendChild(paragraph)
    input.value = ""
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "underline"
    })
    paragraph.addEventListener('dblclick', function(){
        container.removeChild(paragraph)
    })
})