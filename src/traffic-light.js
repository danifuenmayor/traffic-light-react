import React from 'react';

class TrafficLight extends React.Component {
    constructor() {
        super();
           this.state = {
               color: ""
           };
    }

    shine = (e) =>{
        if(e.target.classList.contains('red')){
            this.setState({
                color:"red"
            })
        }else if(e.target.classList.contains('yellow')){
            this.setState({
                color:"yellow"
            })
        }else if(e.target.classList.contains('green')){
            this.setState({
                color:"green"
            })
        }
    
    }
    render() {
        return (
            <>
                <div className="top"></div>
                <div className="container">
                    <div onClick={this.shine} className={"red "+(this.state.color == 'red' ? "shiny1": "")}></div>
                    <div onClick={this.shine} className={"yellow "+(this.state.color == 'yellow' ? "shiny2": "")}></div>
                    <div onClick={this.shine} className={"green "+(this.state.color == 'green' ? "shiny3": "")}></div>
                </div>
            </>
        );
    }


}
export default TrafficLight;