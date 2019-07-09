import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.css";
import logo from "./launchx.png";
import Home from './components/Home';
import Mission from './components/Mission';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="container">
        <img
          src={logo}
          alt="LaunchX"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
        <Route exact path="/" component={Home}/>
        <Route exact path="/launch/:flight_number" component={Mission}/>
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
