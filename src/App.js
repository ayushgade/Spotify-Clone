import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player"
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  //? to get TOKEN From URL
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type:'SET_TOKEN',
        token: _token,
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      //? to get Playlists of user
      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists:playlists,
        });
      });

      spotify.getPlaylist('7C1uCBkgMDqEa9T9XtmT27').then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );

    }
    console.log("I HAVE A TOKEN >>>", token);
  }, []);

  console.log("ME>>>",user);
  console.log("TOKEN>>>",token);

  return (
    //BEM
    <div className="app">
      {
        token ? <Player spotify={spotify}/> : <Login />      /*ternary operatar*/
      }
    </div>
  );
}

export default App;
