import React, { createContext, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import HeaderBox from "./components/HeaderBox";
import SidebarBox from "./components/SidebarBox";
import FooterBox from "./components/FooterBox";
import Main from "./style/Main";
import GridLayout from "./style/GridLayout";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import GameListBox from "./containers/GameListBox";
import GameItem from "./components/GameItem";
import ProfilPage from "./containers/ProfilPage";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <GridLayout>
          <HeaderBox />

          <SidebarBox />

          <Main>
            <Switch>
              <Route path="/sign-in" component={SignInForm} />
              <Route path="/sign-up" component={SignUpForm} />
              <Route path="/game/:gameId" component={GameItem} />
              <Route path="/game-list" component={GameListBox} />
              <Route path="/profil" component={ProfilPage} />
            </Switch>
          </Main>
          <FooterBox />
        </GridLayout>
      </UserProvider>
    </Router>
  );
};

export default App;
