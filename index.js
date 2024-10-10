

// function change(){
//     const root = document.getElementById('root')
//     root.innerText = "Hello"
//     console.log(root)
// }

// // Select the button and heading elements
// const heading = document.getElementById('heading');
// const button = document.getElementById('changeHeadingBtn');

// Add an event listener to the button to change the heading when clicked
// button.addEventListener('click', function() {
//   heading.textContent = 'New Heading Text';
// });

// const heading = document.getElementById('heading');
// const changeHeading = document.getElementById('changeHeading');

// changeHeading.addEventListener('click', function(){
//     heading.innerText = 'New Heading Text'
// })

// // console.table({'math' : 80 , 'hindi' : 80})
// // console.warn('This is warning')

// const heading1 = document.createElement('h1')
// heading1.innerText ='Hello JavaScript'
// const root = document.getElementById('root')
// root.appendChild(heading1)

// const para = document.createElement('p')
// para.innerHTML = 'JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.'
// const para1 = document.getElementById('para')
// para1.appendChild(para)



// //list
// const list = document.getElementById('list')
// let orderlist = document.createElement('ol')

// for(let i=0 ;i<5 ; i++){
//     let li = document.createElement('li')
//     li.innerText = 'List item' + ' ' + i;
//     orderlist.appendChild(li)
// }

// list.appendChild(orderlist)

//list 2
// const list1 = document.getElementById('list2')
// let  unorderlist = document.createElement('ul')

// for(let i=0 ; i<5 ; i++)
// {
//     let li = document.createElement('li')
//     li.innerHTML = 'List2 Item'+' '+ i
//      unorderlist.appendChild(li)
// }
// list1.appendChild(unorderlist)

const parent = React.createElement
("div"
    ,{id:'parent'},[
        React.createElement("div",{id:'child'},
            [React.createElement("h1",{},"this is h1 tag"),
             React.createElement("h2",{},"this is h1 tag")] 
     ),
     React.createElement("div",{id:'child'},
        [React.createElement("h1",{},"this is h1 tag"),
         React.createElement("h2",{},"this is h1 tag")] 
 ) , 
      React.createElement('div',{id:'child'},
        [
            React.createElement('h1',{},'Hey this 3rd heading'),
            React.createElement('h2',{},'Heading h2')
        ]
      )
    ]
    
)

console.log(parent)

const heading3 = React.createElement
("h1",
{id:'heading'},
"Hello World from React!  ");

const root3 = ReactDOM.createRoot(document.getElementById('root'))
root3.render(parent);