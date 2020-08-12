import React from "react";
import { Route, Link } from "react-router-dom";

import "./App.css";

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push("/topics")}>Topics</button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = (props) => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`}>To 13</Link>
      <Link to={`${props.match.url}/14`}>To 14</Link>
      <Link to={`${props.match.url}/15`}>To 15</Link>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props.match.params.topicId);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blog/asdawsds/topics" component={TopicsList} />
      <Route path="/blog/asdawsds/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;
