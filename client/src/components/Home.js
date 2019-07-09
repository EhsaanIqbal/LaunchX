import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";
import Loading from "./loading.gif";
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      tbd
    }
  }
`;

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <img
                  src={Loading}
                  alt="Loading.."
                  style={{ display: "block", margin: "auto" }}
                />
              );
            if (error) console.log(error);

            return (
              <Fragment>
                <MissionKey />
                {data.launches.reverse().map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Home;
