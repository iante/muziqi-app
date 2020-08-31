import React from "react";
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import {useDataLayerValue} from './DataLayer';
import { getTokenFromResponse } from "./spotify";
function Sidebar() {

    const [{ playlists }, dispatch] = useDataLayerValue();//pulling playlist from the data layer
    console.log(playlists);
    return(
        <div className="sidebar">
<img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <b>Designed by Yours truly; IANTE</b>
      <br />

      <SidebarOption Icon={HomeIcon} title="Home"></SidebarOption>
      <SidebarOption Icon={SearchIcon} title="Search"></SidebarOption>
      <SidebarOption Icon={LibraryMusicIcon}  title="Library"></SidebarOption>

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />


      {playlists?.items?.map((playlist) => ( //mapping playlist items and displaying the name on the sidebar
        <SidebarOption title={playlist.name} />
        
      ))}
      
        </div>
    );
}

export default Sidebar;