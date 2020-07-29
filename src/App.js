import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import BookPage from "./pages/book/BookPage";
import BookDetailPage from "./pages/book/BookDetailPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={BookPage} />
      <Route path="/book/:id" component={BookDetailPage} />
    </Switch>
  );
}

export default App;
