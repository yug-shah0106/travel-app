import React, { useCallback, useEffect, useState } from "react";
import { Switch ,BrowserRouter as Router, Route } from "react-router-dom";
import CategoryAPI from "./restAPI/CategoryAPI";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import "./App.css";

function App() {
  const [data, setData] = useState([])
  console.log(data)

  const fetchCategory = useCallback( async() => {
    const res = await CategoryAPI.getAllCategory()
    setData(res.data)
  },[])

  useEffect(() => {
    fetchCategory()
  }, [])
  return (
    <>
    <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' render={props => (
              <div className="container">
                <h1>Travel Package</h1>
                <ul>
                  {data.map(item => <li>{item.location}-{item.price}</li>)}
                </ul>
              </div>    
            )} />
            {/* <Route path='' component={Page404} /> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
