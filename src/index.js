import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ProposalInfo from './components/ProposalInfo';
import AddButton from './components/AddButton';
import Segment from './components/Segments';



class App extends Component {
  constructor(props) {
    super(props);
    this.state={segments: []};
  }

  spawnSegment(){
    var segments = this.state.segments;
    var i;
    if(segments.legnth === 0){
      i = 0;
    }
    else{
      i = segments.length;
    }

    var newSeg = {key: i, type: 'property'};
    segments.push(newSeg);
    this.setState({segments});

  }
  updateSegmentData(segNum,type,term){
    var segments = this.state.segments;
    switch (type) {
      case "property":
        segments[segNum-1].property = term;
        break;
      default:

    }
    console.log(segments);
    this.setState({segments});
  }


  finished(){
    console.log('we outta here');
    var segments = this.state.segments;
    console.log(segments);
  }


  render(){
    const AllSegments = this.state.segments.map((segment) => {
      return <Segment onUpdateData={this.updateSegmentData.bind(this)} key={segment.key} segNum={segment.key + 1} />
    });
    return(<div><div className="proposal-head">
      <ProposalInfo/>
      </div>
      <div>
        {AllSegments}

      </div>
      <div>
      <AddButton text="Add Segment" onAddButtonClicked={this.spawnSegment.bind(this)}/>
    </div>
    <br />
    <AddButton text="BUILD PROPOSAL" onAddButtonClicked={event => this.finished()}/>
  </div>);
  }
}




ReactDOM.render(<App/>, document.querySelector('.container'));
