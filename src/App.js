import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      guests: [],
      firstname: "",
      lastname: ""
    }

    this.addGuest = this.addGuest.bind(this)
    this.addFirstName = this.addFirstName.bind(this)
    this.addLastName = this.addLastName.bind(this)
  }

  addGuest(e) {
    const objID = this.state.guests.length === 0 ? 1 : this.state.guests.length + 1

    this.setState({
      guests: this.state.guests.concat({ id: objID, firstname: this.state.firstname, lastname: this.state.lastname })
    })

    e.preventDefault()
  }

  addFirstName(e) {
    this.setState({
      firstname: e.target.value
    })
  }

  addLastName(e) {
    this.setState({
      lastname: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={ this.addGuest }>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" onChange={ this.addFirstName } name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" onChange={ this.addLastName } name="last-name" />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                { this.state.guests.map((guest) => 
                  <tr key={ guest.id }>
                    <td>{ guest.firstname }</td>
                    <td>{ guest.lastname }</td>
                  </tr>
                ) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


