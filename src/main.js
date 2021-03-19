import React from "react";

import { store } from "./reducer";

import { withRouter } from 'react-router';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
    this.updateid = id => {
      if (0 < Number(id) && Number(id) < 10) {
        this.setState({
          id
        });
      }
    };
    this.sendRequest = () => {
      const { id } = this.state;
      const { history } = this.props;

      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      const makeApi = async () => {
        console.log('Make API');
        const response = await fetch(url, {
          method: "GET"
        });
        if (response.ok) {
          // navigate to next page
          // store response to redux
          const details = await response.json();

          store.dispatch({
            type: "setActive",
            activeDetails: {
              email: details.email,
              lat: details.address.geo.lat,
              lng: details.address.geo.lng
            }
          });
          history.push('/details');
        } else {
          console.log("API error", response);
        }
      };
      makeApi();
    };
  }
  render() {
    const { id } = this.state;
    return (
      <div>
        <input value={id} type="text" onChange={e => this.updateid(e.target.value)} />
        <input type="button" value="Submit" onClick={this.sendRequest} />
      </div>
    );
  }
}

export default withRouter(Main);
