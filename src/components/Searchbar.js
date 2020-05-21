import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    searchterm: "",
  };

  handlechange=(e)=>{
       this.setState({
           searchterm:e.target.value
           
       })
  }
  Submithandler=(event)=>{
      
      const { searchterm }=this.state;
      const { onformsubmit }=this.props;

      onformsubmit(searchterm);
      event.preventDefault();
     
      
  }
  render() {
    return (
      <div>
        <form onSubmit={this.Submithandler}>
          <div class="form-group">
            <label className="pt-4">Search AnyThing</label>
            <input
              onChange={this.handlechange}
              type="text"
              class="form-control w-100 d-inline"
             
              placeholder="Search"
            />
               <button className="btn btn-danger mt-4">search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
