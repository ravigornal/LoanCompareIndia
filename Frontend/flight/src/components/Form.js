import React from 'react'
import Axios from 'axios'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            from : "",
            to : "",
            date: "",
            persons : "",
            data : []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        Axios.post('http://127.0.0.1:5000/search',{
            originCity:this.state.from,
            destinationCity: this.state.to,
            departureDate: this.state.date,
            persons:this.state.persons
        })
        .then(res1 => {
            this.setState({
                data : res1.data
            })
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col-4 col-sm-12 col-md-5 col-lg-3">
                            <form className="form-container">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Enter Origin City" required name="from" value={this.state.from} onChange={this.handleChange}/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Enter Destination City" required name="to" value={this.state.to} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <input type="date" class="form-control" placeholder="Departure Date" required name="date" value={this.state.date} onChange={this.handleChange}/>
                            </div>
                            <select className="form-control" name="country" value={this.state.persons} required name="persons" onChange={(e)=>this.handleChange(e)} required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <button type="submit" class="btn btn-primary mt-2 container" onClick={this.handleClick}>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row m-2">
                    {
                        this.state.data.map((e) => {
                            console.log(e)
                            return(
                                <div className="col-sm-12 col-md-8 col-lg-4 mt-5">
                                    <div class="card" id="card">
                                        <div class="card-header">
                                            <b>{e.originCity} > {e.destinationCity}</b>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title"><b>Flight Name : </b>{e.name}</h5>
                                            <p class="card-text"><b>Departure Date : </b>{e.departureDate}</p>
                                            <p class="card-text"><b>Departure Time : </b>{e.departureTime}</p>
                                            <p class="card-text"><b>Price : </b>₹ {e.price}</p>   
                                        </div>
                                    </div>
                                 </div>
                             )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Form