import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      rocket {
        rocket_name
        rocket_id
        rocket_type
      }
    }
  }
`;

export class Mission extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);

    return (
      <React.Fragment>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <iframe
                  title="loading"
                  src="https://giphy.com/embed/tXLpxypfSXvUc"
                  width="480"
                  height="441"
                  frameBorder="0"
                  style={{ margin: "auto", display: "block" }}
                  className="giphy-embed"
                />
              );
            if (error) console.log(error);
            const {
              mission_name,
              flight_number,
              launch_year,
              launch_success,
              rocket: { rocket_name, rocket_id, rocket_type }
            } = data.launch;
            return (
              <div>
                <h3 className="display-4 my-3">Mission: {mission_name}</h3>
              
                <ul className="list-group">
                  <li className="list-group-item">
                    Launch Number: {flight_number}
                  </li>
                  <li className="list-group-item">
                    Launch Year: {launch_year}
                  </li>
                  <li className="list-group-item">
                    <span
                      className={classNames({
                        "text-success": launch_success,
                        "text-danger": !launch_success
                      })}
                    >
                      Launch Success: {launch_success ? "Yes" : "No"}
                    </span>
                  </li>
                </ul>
                <h4 className="my-3">Rocket</h4>
                <ul className="list-group">
                  <li className="list-group-item">ID: {rocket_id}</li>
                  <li className="list-group-item">Name: {rocket_name}</li>
                  <li className="list-group-item">Type: {rocket_type}</li>
                </ul>
                <hr/>
                <Link to="/" className="btn btn-secondary">Home</Link>
              </div>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default Mission;
