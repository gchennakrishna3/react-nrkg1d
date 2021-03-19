import React from "react";

import { connect } from 'react-redux';

class Details extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { email, lng, lat } = this.props;
    return (
      <div>
        <span>Email: {email} </span>
        <span>Lat: {lat} </span>
        <span> lang: {lng} </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
return {
    email: state.activeDetails.email,
    lat: state.activeDetails.lat,
    lng: state.activeDetails.lng
  }
}
export default connect(mapStateToProps)(Details);
