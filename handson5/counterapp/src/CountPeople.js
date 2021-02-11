import React,{Component} from 'react';
class CountPeople extends Component{
    state={
        entrycount: 0,
        exitcount: 0,
    }

    updateEntry = () =>{
        this.setState({
            entrycount:this.state.entrycount+1
        })
    }

    updateExit = () =>{
        this.setState({
            exitcount:this.state.exitcount+1
        })
    }

    render(){
        return(
            <div>
                
                <button onClick={this.updateEntry} style={{backgroundColor:'greenyellow'}}>Login</button>
                <span style={{marginLeft:'5px'}}>{this.state.entrycount} People Entered!!!!</span>
            
                <button onClick={this.updateExit} style={{backgroundColor:'greenyellow'}}>Exit</button>
                <span style={{marginLeft:'5px'}}>{this.state.exitcount} People Left!!!</span>
                        
            </div>

        )
    }
}
export default CountPeople;