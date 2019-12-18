import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: '',
            passwordBis: '',
            name: '',
            lastname: ''
        }
        this.updateEmailField = this.updateEmailField.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateRepeatPassword = this.updateRepeatPassword.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateLastname = this.updateLastname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateEmailField(e) {
        this.setState({
            email: e.target.value
        })
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    updateRepeatPassword(e) {
        this.setState({
            passwordBis: e.target.value
        })
    }  

    updateName(e) {
        this.setState({
            passwordBis: e.target.value
        })
    }

    updateLastname(e) {
        this.setState({
            lastname: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        return(
            this.state.password !== this.state.passwordBis ? console.error("Your password doesn't match both fields") : console.log(JSON.stringify(this.state, 1, 1))
        )
    }

    render(){
        return( 
            <div>
                <h1>{JSON.stringify(this.state, 1, 1)}</h1>
                <form onSubmit={this.handleSubmit}>    
                    <label>
                        Email:
                        <input onChange={this.updateEmailField} type="email" name="email" />
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input onChange={this.updatePassword} type="password" name="password" />
                    </label>
                    <br/>
                    <label>
                        Repeat Password:
                        <input onChange={this.updateRepeatPassword} type="password" name="password" />
                    </label>
                    <br/>
                    <label>
                        First Name:    
                        <input onChange={this.updateName} type="text" name="name"/>
                    </label>
                    <br/> 
                    <label>  
                        Surname: 
                        <input onChange={this.updateLastname} type="text" name="lastname"/>
                    </label>
                    <br/>    
                    <input type="submit" value="Submit" />
                </form>    
            </div>    
        )
    }
}

export default SignUp