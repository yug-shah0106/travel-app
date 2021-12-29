import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import AddTour from "./components/AddTours";
import AddPackages from "./components/AddPackages";
import AddDetails from "./components/AddDetails";
const HomeComp = lazy(() => import("./Home"));
const LoginComp = lazy(() => import("./Login"));
const AllDestination = lazy(() => import("./Component/AllDestination/AllDestination"));
const Destination = lazy(() => import("./Component/Destination/Destination"));

function App() {
  return (
   <Router>
     <Navbar/>
     <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomeComp} />
        <Route exact path="/login" component={LoginComp} />
        <Route exact path='/addTour' component={AddTour} />
        <Route exact path='/addPackages' component={AddPackages} />
        <Route exact path='/addDetails' component={AddDetails} />
        <Route exact path="/allDestination" component={AllDestination} />
        <Route exact path="/singleDestination" component={Destination} />
        <Route exact path="/singleDestination/:id" component={Destination} />
      </Switch>
     </Suspense>
   </Router>
 );
}
export default App;