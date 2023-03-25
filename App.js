const parent = React.createElement("div",{id:"parent"}, [
               React.createElement("div",{id:"child1"},[
                    React.createElement("h1",{},"Heading 1 from 1st div"),
                    React.createElement("h2",{},"Heading 2 from 1st div")
               ]),
               React.createElement("div",{id:"child2"},[
                    React.createElement("h1",{},"Heading 1 from 2st div"),
                    React.createElement("h2",{},"Heading 2 from 2st div")
               ])
            ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);