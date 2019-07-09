import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import logo from "./launchx.png";
import Missions from './components/Missions';
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="LaunchX"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
        <Missions/>
      </div>
    </ApolloProvider>
  );
}

export default App;
