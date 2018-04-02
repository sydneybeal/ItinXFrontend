import React, {Component} from 'react';

class ProposalInfo extends Component{
  constructor(props){
    super(props);
    this.state={ title: '',destination: '', date: ''};
  }
  render(){
    return(

    <div>
      <table>
        <tbody>
          <tr>
            <td className="tds">Proposal Title: </td><td className="tds"><input className="formInput" value = {this.state.title}
    onChange={event => this.onInputChange('title',event.target.value)}/></td>
          </tr>
          <tr>
            <td className="tds">Destination: </td><td className="tds"><input className="formInput" value = {this.state.destination}
    onChange={event => this.onInputChange('destination', event.target.value)}/></td>
          </tr>
          <tr>
            <td className="tds">Date (mm/yyyy): </td><td className="tds"><input className="formInput" value = {this.state.date}
    onChange={event => this.onInputChange('date',event.target.value)}/></td>
          </tr>
        </tbody>
      </table>

    </div>);
  }

onInputChange(type,term){
  if(type == 'title')
    this.setState({'title': term});
  else if(type == 'destination')
    this.setState({'destination': term});
  else {
    this.setState({'date': term});
  }
}


}


export default ProposalInfo;
