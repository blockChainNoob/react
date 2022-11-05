import React from "react";

/*Example of Class Component*/
class AddContact extends React.Component {

    state = {
        name: '',
        email: '',
    };

    add = (e) => {
        e.preventDefault();

        if (this.state.name === '' || this.state.email === '') {
            alert('All fields are mandatory');
            return
        }
        this.props.AddContactHandler(this.state);
        this.setState({name: '', email: ''}); /*This line of code will refresh the Name & Email field.*/
    };

    render () {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type = 'text' 
                            placeholder = 'Name' 
                            name = 'name' 
                            value = {this.state.name}
                            onChange = {(e) => this.setState({name: e.target.value})}>
                        </input>
                    </div>
                    <div className="field">
                        <label>Emal</label>
                        <input 
                            type = 'text' 
                            placeholder = 'Email' 
                            name = 'email' 
                            value = {this.state.email}
                            onChange = {(e) => this.setState({email: e.target.value})}>     
                        </input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
};

export default AddContact;