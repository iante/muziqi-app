import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./Login";

const spotify = new SpotifyWebApi();

function App() {
    
    //defining variables in react we use useState

//grabbing objects from the DataLayer.js
  const [{ token }, dispatch] = useDataLayerValue();

     //useEffects is used to run a piece of code based on certain conditions
  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
      // console.log('i have a token', hash);
    window.location.hash = "";//removes the access token frm url, for security purposes
    let _token = hash.access_token; //returns the access token once the page loads

    if (_token) {
      spotify.setAccessToken(_token); //gives the access token to the spotify API

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
        
        // setToken(_token); //storing the stripped token in a state setToken

        spotify.getPlaylist("37i9dQZF1DWWhBhYl3ZMvY").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => { //gets the user who is logged in from the spotify API
          
          /* once user is fetched by the function abover, the user is dispatched 
to the data layer*/
        dispatch({
          type: "SET_USER",
          user,  //from the reducer.js
        });
      });
        

        //pulling users playlist from spotify api
        spotify.getUserPlaylists().then((playlists) => {
          
          //dispatching playlists to data layer
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
     {token ? <Player spotify={spotify} /> : <Login></Login>}
    </div>
  );
}

export default App;
