import React from "react";
// @ts-expect-error CSS is loaded by the bundler; TypeScript has no CSS module declaration.
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Router, Switch } from "react-router-dom";
import { About } from "./screens/About";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return <Container>Home</Container>;
}

function Users() {
  return <Container>Users</Container>;
}

export default App;
