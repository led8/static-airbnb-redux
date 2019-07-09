import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Flat from '../containers/flat.jsx';

import {setFlats} from '../actions';

class FlatList extends Component {
  componentWillMount() {
    this.props.setFlats()
    // TODO: dispatch an action to load flats!
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name}/>)}
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators( {
    setFlats: setFlats },
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (FlatList);

// export default connect(null, mapDispatchToProps)(FlatList);
