import React, {Component} from 'react';


class TravelLeg extends Component {
  constructor(props){
    super(props);
    this.state={type: "",depart:"",arrive:""};
  }
  changeTravel(type){
    this.setState({type});
  }
  setDeparture(depart){
    this.setState({depart});
  }
  setArrival(arrive){
    this.setState({arrive});
  }
  getTransferData(){
    var type = this.state.type;
    var element = "";

    switch (type) {
      case "commercial":
        element = <div>Departure Airport City:
          <input onChange={event => this.setDeparture(event.target.value)}/><br/>
          Arrival Airport City:
          <input /><br/>
        </div>;
        break;
      case "shared":
        element = <div>Depart Airstrip:
        <input /><br/>
        Arrival Airstrip:
        <input /><br/>
      </div>;
        break;
      case "private":
      element = <div>Depart Airstrip:
      <input /><br/>
      Arrival Airstrip:
      <input /><br/>
    </div>;
        break;
      default:
    }

    return element;
  }

  render(){
    var TransferData = this.getTransferData();
    return(<div className="segment">
      <u><h3>Travel</h3></u>
      Type:
      <select onChange={event => this.changeTravel(event.target.value)}>
        <option value="road">Private Road</option>
        <option value="commercial">Commercial Flight</option>
        <option value="shared">Shared Light Aircraft Flight</option>
        <option value="private">Private Charter Flight</option>
      </select>
      {TransferData}
      <br/>

    </div>);
  }
}

export default TravelLeg;
