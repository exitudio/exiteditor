import React, { Suspense } from "react";
import "./App.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import Header from "./Header";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const ChatAppsEditor = React.lazy(() => import("./ChatAppsEditor"));

function App() {
  return (
    <div className="app flex-grow-1">
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path={["/chat-generator/:appId", "/chat-generator"]}>
              <Suspense fallback={<div>Loading...</div>}>
                <ChatAppsEditor />
              </Suspense>
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
