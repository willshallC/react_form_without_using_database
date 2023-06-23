import React from "react";

class AddContact extends React.Component{
    state = {
        name: "",
        email: ""
}
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("all fields are mandatory");
            return;
        }
        // console.log(this.state);
        this.setState({ name: this.setState.name, email: this.setState.email });
        // const result = Object.values(this.state);
        this.props.addContactHandler(this.state);
        this.setState({ name:"", email:"" });
       
    }
    render(){
    return(
        <div className="ui fixed form center">
            <h1>Add Contact</h1>
            <form className="ui form" onSubmit={this.add}>
            <div className="field ui ">
                <label>Name</label>
                <input type="text" name="name" 
                placeholder="Name"
                value={this.state.name}
                onChange={(e)=>  this.setState({name: e.target.value }) 
                }  />
            </div>
            <div className="field ui ">
                <label>Email</label>
                <input type="text" placeholder="Email" name="email"
                value={this.state.email}
                onChange={(e)=>  this.setState({email: e.target.value }) }   />
            </div>
            <button className="ui button blue">Add Contact</button>
            </form>
        </div>
    )
    }
}
export default AddContact;