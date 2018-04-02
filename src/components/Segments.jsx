import React, {Component} from 'react';
import request from 'superagent';
import AddButton from './AddButton';
import TravelLeg from './TravelLeg';

class Segment extends Component {
  constructor(props){
    super(props);
    this.state={properties: [],propertyName:"",travelLegs:[],numNights:"",roomType:"",gameActivities:""};
  }



  onPropertyChange(term){
    var properties = [];
    this.setState({propertyName: term});

    if (term.length < 3){
      this.setState({properties});
    }
    else{
      request
        .post('http://localhost/searchProperties')
        .set('Content-Type', 'application/json')
        .send({ searchTerm: term})
        .end((err, res) => {
          var response = JSON.parse(res.text).rows;
          //console.log(response.rows);
          response.map((propertyName) =>{
          properties.push(propertyName.property_name)
        });
        this.setState({properties});
      });
    }
    this.props.onUpdateData(this.props.segNum,"property",term);

  }

  spawnTravel(){
    var travelLegs = this.state.travelLegs;
    var i;
    if(travelLegs.legnth === 0){
      i = 0;
    }
    else{
      i = travelLegs.length;
    }

    var newLeg = {key: i, type: 'leg'};
    travelLegs.push(newLeg);
    this.setState({travelLegs});
  }

  render(){
    const availProperties = this.state.properties.map((property) => {
      return <option value={property} />
    });
    const travelLegs = this.state.travelLegs.map((leg) => {
      return <TravelLeg key={leg.key}/>
    });
    return(<div>
    <div className="segment">
      <u><h4>Segment {this.props.segNum}</h4></u>
      <table>
        <tbody>
          <tr>
            <td>
              Property Name: <input value={this.state.propertyName} onChange={event => this.onPropertyChange(event.target.value)} list="propertyList" />
            <datalist id="propertyList">
              {availProperties}
            </datalist>
            </td>
            <td>
            Number of Nights: <input onChange={event => this.setState({numNights: event.target.value})} /></td>
          </tr>
          <tr>
            <td>
              Room Type: <input onChange={event => this.setState({roomType: event.target.value})} />
            </td>
            <td>
              Game Activities:
              <select onChange={event => this.setState({gameActivities: event.target.value})}>
                <option value="NA">N/A</option>
                <option value="shared">Shared</option>
                <option value="private">Private</option>
              </select>

            </td>
          </tr>
        </tbody>
      </table>
      </div>
      {travelLegs}
      <AddButton text="Add Travel" onAddButtonClicked={this.spawnTravel.bind(this)}/>

    <br/>
    </div>);
  }
}

export default Segment;
