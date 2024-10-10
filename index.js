

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
