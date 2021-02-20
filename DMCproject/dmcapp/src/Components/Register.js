import React from 'react'
import  './todo.css'

export class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        FirstName:'',
        LastName: '',
        Gender: '',
        ContactNo:'',
        Password:'',
        Address:''

     };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange=(event)=>{
        this.setState({ [event.target.name] : event.target.value});
      }
      
    
  
    handleSubmit(event) {
        var msg='Thanks '+ this.state.FirstName +' \n For your Registration \n' ;
        alert(msg);
      event.preventDefault();
    }
  
    render() {
      return (
        <div >
            <form onSubmit={this.handleSubmit}>
            
                <h1><font > Patient Registration</font> </h1>
                 <br/>   
               
                <label>FirstName  :  </label>
                <input type="text" name="FirstName" value={this.state.FirstName} onChange={this.handleChange} />
                <br/>  
                
                <label>LastName  :  </label>
                <input type="text" name="LastName" value={this.state.LastName} onChange={this.handleChange} />
                <br/> 

                <label>Gender  :  </label>
                
                    <select  onChange={this.handleChange} >  
                        <option defaultValue>--Select--</option>
                        <option value = "Male"> Male  </option>
                        <option value = "Female"> Female  </option>
                    </select> 
                 <br/> 
             
               
                <label>ContactNo  :  </label>
                <input type="text" name="ContactNo" value={this.state.ContactNo} onChange={this.handleChange} />
                <br/> 
                
                <label>Password  :  </label>
                <input type="password" id="pass" name="Password" value={this.state.Password} onChange={this.handleChange}/>
                <br/> 

                <label>  Address  :  </label>
                <textarea type="text" name="Address" value={this.state.Address} onChange={this.handleChange} />
                
                
                <br/>
            <button type="submit">Submit</button>
        </form>
        </div>
      );
    }
  }