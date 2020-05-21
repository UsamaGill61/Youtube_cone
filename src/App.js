import React, { Component } from "react";
import Youtube from "./Api/Youtube";
import Searchbar from "./components/Searchbar";
import Vediodetail from "./components/Vediodetail";
import { VedioList } from "./components/VedioList";
class App extends Component {
  state={
    vedio:[],
    selectvedio:null
  }
componentDidMount(){
  this.onformsubmit(" EVERY HOSTEL STORY || UNI LIFE VLOG  ")
}
  onformsubmit= async (searchterm)=>{
      const response = await Youtube.get('search', {  params:{
        part:'snippet',
        maxResults:15,
        key:'AIzaSyBBLuQIrDNKiYrRJoW1PRuHsWHYXCMGG4s',
        q:searchterm
    }})
      this.setState({
        vedio:response.data.items, selectvedio:response.data.items[0]
      });
  }
  onVideoSelect=(video)=>{
    this.setState({
      selectvedio:video
    })
  }

  render() {
    return <div className="container-fluid">
      <div className="row ">
        <div className="col px-5">
        <Searchbar onformsubmit={this.onformsubmit}></Searchbar>
        </div>
        
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <Vediodetail video={this.state.selectvedio}></Vediodetail>
        </div>
        <div className="col-xl-4 col-lg-4  col-sm-12 col-12">
         <VedioList vedios={this.state.vedio} onVideoSelect={this.onVideoSelect}></VedioList>
        </div>
      </div>
      
    </div>;
  }
}

export default App;
