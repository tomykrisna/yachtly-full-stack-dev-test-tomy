import React, {Component} from 'react';

class AddUser extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user: {
                name: '',
                email: '',
                phone: '',
                address: ''
            }
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log('event', event);
        fetch('http://localhost:3000/api/user/add', {
            method: 'POST',
            body: this.state.user
        })
            .then(response => response.json())
            .then((json) => {
                console.log('json', json);
                // this.setState({
                //     users: json.result
                // })
            });
        // alert('A name was submitted: ' + this.state.value);
    }

    handleChange(event) {
        let formFields = {...this.state.user};
        formFields[event.target.name] = event.target.value;
        this.setState({
            formFields
        });
    }

    // componentDidMount() {
        // ajax call
        // fetch('http://localhost:3000')
        //     .then(response => response.json())
        //     .then((json) => {
        //         console.log('json', json);
        //         this.setState({
        //             users: json.result
        //         })
        //     })
    // }

    // renderUsers(item, index) {
    //     return (
    //         <tr key={index}>
    //             <td>{item.name}</td>
    //             <td>{item.email}</td>
    //             <td>{item.phoneNumber}</td>
    //             <td>{item.address}</td>
    //         </tr>
    //     );
    // }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Name"  required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="email" id="email" placeholder="Email" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Phone Number</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="phone" id="phone" placeholder="Phone Number"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" name="address" id="adress" placeholder="Address"></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Add User</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddUser;