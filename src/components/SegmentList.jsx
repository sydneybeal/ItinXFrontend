import React, {Component} from 'react';
import Segment from './Segments';

class SegmentList extends Component {
  constructor(props){
    super(props);
  }

  updatingSegment(){
    this.props.onUpdateData();
  }


  render(){
    const AllSegments = this.props.segments.map((segment) => {
      return <Segment onUpdateData={this.updatingSegment.bind(this)} key={segment.key} segNum={segment.key + 1} />
    });
    return(<ul>
      {AllSegments}
    </ul>);
  }
}

export default SegmentList;
