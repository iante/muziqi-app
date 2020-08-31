// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

//code below redirects users to spotify api for purpose of authentication. once authenticated, we return them to our website
export const authEndpoint = "https://accounts.spotify.com/authorize";

//redirect url to the application as we indicated in developer/spotify under edit settings
const redirectUri = "http://localhost:3000/";

//put the client id spotify generated
const clientId = "1d364225f9f049eb90fd6582ccf184a6";


//scopes allow the user in the app to play music, check recently played songs and other features found on spotify
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  //gets the url from the const loginUrl and splits it, pulls the access token
  export const getTokenFromResponse = () => {
    return window.location.hash //splits the url at the hashtag
      .substring(1) //gets the first substring
      .split("&") //splits url at the & sign
      .reduce((initial, item) => {
          //i.e if the url looks like #accessToken=mysupersecretkey&
        var parts = item.split("="); //splits url at the = sign
        initial[parts[0]] = decodeURIComponent(parts[1]); //grabs the accessToken which is the part 0 and decodes the acces key mysupersecretkey which is part 1
  
        return initial;
      }, {});
  };

  //the uri will contain the redirect information i.e  &redirect_uri=${redirectUri} and the client id as well
  //the &response_type=token returns a token to the client when they are authenticated
  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;