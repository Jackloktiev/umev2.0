import React, { useEffect, useState } from 'react';
import './App.css';
import MainContent from "./components/containers/mainContent";
import Header from "./components/other/header";
import Footer from "./components/other/footer";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import UserProfile from "./components/auth/userprofile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./components/welcome";


function App() {
  // Token State
  const [token, setToken] = useState();
 
  const getToken = (token) => {
    setToken(token);
  }

  // Charts State
  const [chartUpdate, setChartUpdate] = useState(0);
  const [userData, setUserData] = useState({
    normCalories: 0,
    normFats: 0,
    normProteins: 0,
    normCarbs: 0,
    totalCarbs: 0,
    totalCalories: 0,
    totalFats: 0,
    totalProteins: 0
  });


  //Fetch userData from the server
  useEffect(() => {
    if (token) {
      fetch("/userData?token=" + token.token)
        .then(response => {
          return response.json();
        }).then(result => {
          setUserData(result);
        })
    }
  }, [token, chartUpdate]);



  //If user profile is not completed yet - there are no norms and charts show the mess
  //If user profile is not completed instead of charts show prompt to complete the profile - normSet prop
  const Display = token ?
    <MainContent
      userData={userData}
      token={token.token}
      setChartUpdate={setChartUpdate}
      normsSet = {userData.normCalories > 0.01? true: false}
    /> :
    <Login tokenTransfer={getToken} />

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="Chart">
          <Switch>
            <Route path="/" component={Welcome} exact />
            <Route path="/login" render={()=><Login tokenTransfer={getToken} />} />
            <Route path="/user-profile" render={()=><UserProfile username = {token.username} />}/>
            <Route path="/app" render={() => Display} />
            <Route path="/register" component={Register} />
          </Switch>

        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
