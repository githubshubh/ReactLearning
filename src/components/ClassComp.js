import React from "react";

class ClassComp extends React.Component {

constructor(props){
    super(props);
}

//After initial(first) render only
componentDidMount(){
    console.log("componentDidMount method");

}

//After every render(from second)
componentDidUpdate(){
    console.log(" componentDidUpdate method");
}

//When we unmount the component(for cleanup)
componentWillUnmount(){
    console.log(" componentDidUpdate method");
}
    render(){
        return (
            <div className="bg-gray-700 text-cyan-100 text-center h-12 text">
                <h1 className="py-3">@CopyRight to Shubham</h1>
            </div>
        )
    }

}

export default ClassComp;