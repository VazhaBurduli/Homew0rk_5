


// Task 1 

const button = document.getElementById('btn')      
const myDiv = document.getElementById('div')

button.addEventListener('click', (e) => {
    myDiv.classList.toggle('disappear')
    e.target.style.color = 'red'
    e.target.style.backgroundColor = 'blue'
    e.target.style.display = 'inline-block'
    e.target.style.padding = '5px'
    e.target.style.padding = '15px'
}); 


// Task 2 

const card = document.createElement('div')
const heading = document.createElement('h2')
const headingText = document.createTextNode('Gandalf')
const a = document.createElement('a')
const link = document.createTextNode('Go to Profile')

card.style.backgroundColor = 'blue'
card.style.width = '200px'
card.style.height = '200px'
heading.style.color = 'white'
heading.style.textAlign = 'center'
heading.style.color = 'white'
heading.style.paddingTop = '50px'
a.setAttribute('href', ' ')
a.style.color = 'red'
a.style.color = 'red'
a.style.margin = '0 50px'

card.append(heading, a)
heading.append(headingText)
a.append(link)
document.body.prepend(card)



// Task 3

// 1-ლი კითხვა 

const correct = document.querySelector('.correct') 
// const incorrect = document.querySelectorAll('.incorrect')

const incorrect1 = document.querySelector('.incorrect1')
const incorrect2 = document.querySelector('.incorrect2')
const incorrect3 = document.querySelector('.incorrect3')

correct.addEventListener('click', () => {
    correct.style.color = 'green'
    correct.style.fontWeight = 'bold'
    correct.style.fontSize = '20px'
    incorrect1.style.color = 'black'
    incorrect2.style.color = 'black'
    incorrect3.style.color = 'black'
})

incorrect1.addEventListener('click', () => {
    incorrect1.style.color = 'red'
    incorrect1.style.fontWeight = 'bold'
    incorrect1.style.fontSize = '20px'
    correct.style.color = 'black'
    incorrect2.style.color = 'black'
    incorrect3.style.color = 'black'
})

incorrect2.addEventListener('click', () => {
    incorrect2.style.color = 'red'
    incorrect2.style.fontWeight = 'bold'
    incorrect2.style.fontSize = '20px'
    correct.style.color = 'black'
    incorrect1.style.color = 'black'
    incorrect3.style.color = 'black'
})

incorrect3.addEventListener('click', () => {
    incorrect3.style.color = 'red'
    incorrect3.style.fontWeight = 'bold'
    incorrect3.style.fontSize = '20px'
    correct.style.color = 'black'
    incorrect1.style.color = 'black'
    incorrect2.style.color = 'black'
})

// მე-2 კითხვა 

const correct_c = document.querySelector('.correct_c') 
const incorrect11 = document.querySelector('.incorrect11')
const incorrect22 = document.querySelector('.incorrect22')
const incorrect33 = document.querySelector('.incorrect33')

correct_c.addEventListener('click', () => {
    correct_c.style.color = 'green'
    correct_c.style.fontWeight = 'bold'
    correct_c.style.fontSize = '20px'
    incorrect11.style.color = 'black'
    incorrect22.style.color = 'black'
    incorrect33.style.color = 'black'
})

incorrect11.addEventListener('click', () => {
    incorrect11.style.color = 'red'
    incorrect11.style.fontWeight = 'bold'
    incorrect11.style.fontSize = '20px'
    correct_c.style.color = 'black'
    incorrect22.style.color = 'black'
    incorrect33.style.color = 'black'
})

incorrect22.addEventListener('click', () => {
    incorrect22.style.color = 'red'
    incorrect22.style.fontWeight = 'bold'
    incorrect22.style.fontSize = '20px'
    correct_c.style.color = 'black'
    incorrect11.style.color = 'black'
    incorrect33.style.color = 'black'
})

incorrect33.addEventListener('click', () => {
    incorrect33.style.color = 'red'
    incorrect33.style.fontWeight = 'bold'
    incorrect33.style.fontSize = '20px'
    correct_c.style.color = 'black'
    incorrect11.style.color = 'black'
    incorrect22.style.color = 'black'
})

// მე-3 კითხვა 

const correct_cc = document.querySelector('.correct_cc') 
const incorrect111 = document.querySelector('.incorrect111')
const incorrect222 = document.querySelector('.incorrect222')
const incorrect333 = document.querySelector('.incorrect333')

correct_cc.addEventListener('click', () => {
    correct_cc.style.color = 'green'
    correct_cc.style.fontWeight = 'bold'
    correct_cc.style.fontSize = '20px'
    incorrect111.style.color = 'black'
    incorrect222.style.color = 'black'
    incorrect333.style.color = 'black'
})

incorrect111.addEventListener('click', () => {
    incorrect111.style.color = 'red'
    incorrect111.style.fontWeight = 'bold'
    incorrect111.style.fontSize = '20px'
    correct_cc.style.color = 'black'
    incorrect222.style.color = 'black'
    incorrect333.style.color = 'black'
})

incorrect222.addEventListener('click', () => {
    incorrect222.style.color = 'red'
    incorrect222.style.fontWeight = 'bold'
    incorrect222.style.fontSize = '20px'
    correct_cc.style.color = 'black'
    incorrect111.style.color = 'black'
    incorrect333.style.color = 'black'
})

incorrect333.addEventListener('click', () => {
    incorrect333.style.color = 'red'
    incorrect333.style.fontWeight = 'bold'
    incorrect333.style.fontSize = '20px'
    correct_cc.style.color = 'black'
    incorrect111.style.color = 'black'
    incorrect222.style.color = 'black'
})


// მასივის (არასწორი პასუხების) შემთხვევაში ვერც ერთი ტიპის ციკლით მარტივად ვერ გავაკეთე და რცელი კოდის დაწერა მომიხდა. მიწერს, რომ ესენი ფუნქციები არ არის, მიზეზი ვერ გავარკვიე.  

// incorrect.addEventListener('click', () => {
   
//     for (let i = 0; i < incorrect.length; i++) {
//         incorrect[i].style.color = 'red'
//     }
// })

// incorrect.addEventListener('click', myFunction() {
   
//     for (const i = 0; i < incorrect.length; i++) {
//         incorrect[i].style.color = 'red'
//     }
// })


// incorrect.addEventListener('click', () => {

//     for (const element of incorrect) {
//         element.style.color = 'red'
//     }

// })

