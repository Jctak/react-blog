import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Data from "./data/data";

import PostLayout from "./components/postLayout";
import Header from "./components/header";
import ListLayout from "./components/listLayout";
import Footer from "./components/footer";

//Shared components
import Wrapper from "./sharedComponents/wrapper";

import "./App.css";

function App() {
    console.log("data should be here", Data);
    return (
        <Router>
            <div className="App">
                <Header />
                <Wrapper>
                    <Route
                        path="/"
                        exact
                        render={() => <ListLayout posts={Data} />}
                    />
                    <Route
                        path="/post/:id?"
                        render={routeProps => (
                            <PostLayout posts={Data} {...routeProps} />
                        )}
                    />
                </Wrapper>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
