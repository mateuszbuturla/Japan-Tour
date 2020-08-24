import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import { TweenMax, TweenLite } from "gsap";

import { Home, AttractionsGroup, Attraction, NotFound } from "./view/view";

import Footer from "./components/layout/footer/footer";

function App() {
  const location = useLocation();

  const completeCall = (target: any) => {
    TweenLite.set(target, { clearProps: "position, width" });
  };

  return (
    <div className="App">
      <TransitionGroup className="col-12">
        <Transition
          key={location.pathname}
          timeout={500}
          mountOnEnter={true}
          unmountOnExit={true}
          onEnter={(node: any) => {
            // first kill all tweens of the target
            TweenMax.killTweensOf(node);
            const parent = node.parentNode;
            const targetWidth =
              parent.clientWidth -
              parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;
            // set the position and properties of the entering element
            TweenLite.set(node, {
              position: "fixed",
              x: 100,
              autoAlpha: 0,
              width: targetWidth,
            });
            // animate in the element
            TweenLite.to(node, 0.5, {
              autoAlpha: 1,
              x: 0,
              onComplete: completeCall,
              onCompleteParams: [node],
            });
          }} // on enter end
          onExit={(node: any) => {
            // first kill all tweens of the target
            TweenMax.killTweensOf(node);
            const parent = node.parentNode;
            const targetWidth =
              parent.clientWidth -
              parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;
            // set the position of the element
            TweenLite.set(node, {
              position: "fixed",
              width: targetWidth,
            });
            // animate out the element
            TweenLite.to(node, 0.5, {
              position: "fixed",
              opacity: 0,
              x: -100,
            });
          }} // on exit end
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:name" component={AttractionsGroup} />
            <Route exact path="/attraction/:name" component={Attraction} />
            <Route component={NotFound} />
          </Switch>
        </Transition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
