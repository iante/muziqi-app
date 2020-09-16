//redirecting to spotify API
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";


const clientId = "1d364225f9f049eb90fd6582ccf184a6";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  //gets the url from the const loginUrl and splits it, pulls the access token
  export const getTokenFromResponse = () => {
    return window.location.hash 
      .substring(1) 
      .split("&") 
      .reduce((initial, item) => {
        //splits url at the = sign
        initial[parts[0]] = decodeURIComponent(parts[1]); 
  
        return initial;
      }, {});
  };
  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
