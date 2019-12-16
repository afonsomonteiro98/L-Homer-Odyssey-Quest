import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state= {
            email: ''
        }
        this.updateEmailField = this.updateEmailField.bind(this);
    }

    updateEmailField(e) {
        this.setState({
            email: e.target.value
        })
    }

    render(){
        return( 
            <div>
                <h1>{this.state.email}</h1>
                <input onChange={this.updateEmailField} type="email" name="email"/>
            </div>    
        )
    }
}

export default SignUp