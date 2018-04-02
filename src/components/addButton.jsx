import React, {Component} from 'react';

class AddButton extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(<button type="button" className="guibutton" onClick={event => this.onButtonClicked()}>{this.props.text}</button>);
  }



  onButtonClicked(){
    this.props.onAddButtonClicked();
  }
}


export default AddButton;
