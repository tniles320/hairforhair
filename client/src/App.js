import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import AUTH from "./utils/AUTH";
import UserContext from "./utils/UserContext";

function App() {
  const [user, setUser] = useState();

  // sets user state when the page is loaded
  // const handleUser = async () => {
  //   await AUTH.getUser().then((res) => {
  //     if (res.data._id) {
  //       return setUser(res.data);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   handleUser();
  // }, []);

  // logout function with axios call utilizing API
  const handleLogout = async () => {
    await AUTH.logout().then((res) => {
      console.log("successfully logged out!");
      if (res.status === 200) {
        setUser({ loggedIn: false });
      }
    });
  };

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
