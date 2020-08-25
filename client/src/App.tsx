import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import { TweenMax } from "gsap";

import { PageTransitionEffect } from "./components/common/common";

import {
  Home,
  AttractionsGroup,
  Attraction,
  NotFound,
  AdminPanel,
} from "./view/view";

import Footer from "./components/layout/footer/footer";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <TransitionGroup>
        <Transition
          key={location.pathname}
          timeout={location.pathname.split("/")[1] !== "admin" ? 1000 : 0}
          mountOnEnter={true}
          unmountOnExit={true}
          onEnter={(node: any) => {
            if (location.pathname.split("/")[1] !== "admin") {
              TweenMax.to("#pageTransitionEffect", 0.5, {
                left: "100%",
                right: "0%",
                delay: 1,
              });
            }
          }}
          onExit={(node: any) => {
            if (location.pathname.split("/")[1] !== "admin") {
              TweenMax.set("#pageTransitionEffect", {
                left: "0%",
                right: "100%",
              });
              TweenMax.to("#pageTransitionEffect", 0.5, {
                right: "0%",
                left: "0%",
              });
              TweenMax.to("#pageTransitionEffect", 0.5, {
                left: "0%",
                right: "0%",
                delay: 0.5,
              });
            }
          }}
        >
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/admin" component={AdminPanel} />
              <Route exact path="/:name" component={AttractionsGroup} />
              <Route exact path="/attraction/:name" component={Attraction} />
              <Route component={NotFound} />
            </Switch>
            <PageTransitionEffect />
          </>
        </Transition>
      </TransitionGroup>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
