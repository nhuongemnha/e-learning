import React, { Component } from "react";
import Detail from "./views/Detail";
import Home from "./views/Home";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/detail" element={<Detail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
