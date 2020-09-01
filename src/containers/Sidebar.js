import React, { useState, useContext } from "react";
import { GameListContext } from "../context/GameListContext";
import SidebarMenu from "../style/SidebarMenu";
import SidebarSubMenu from "../style/SidebarSubMenu";
import SidebarItemMenu from "../style/SidebarItemMenu";
import Linked from "../style/Linked";
import Searchbar from "../components/SearchBar";

const Sidebar = () => {
  const { setData } = useContext(GameListContext);
  const [platformFilters, setPlatformFilters] = useState([]);
  const [genresFilters, setGenresFilters] = useState([]);
  const defaultCall =
    "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 50; where total_rating_count>=80;";
  const filteredSearch = `fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 100; where genres=(${genresFilters}) & release_dates.platform=(${platformFilters});`;
  setData(filteredSearch);

  const platforms = [
    { id: 130, name: "Nintendo Switch" },
    { id: 6, name: "PC (Microsoft Windows)" },
    { id: 48, name: "PlayStation 4" },
    { id: 167, name: "PlayStation 5" },
    { id: 169, name: "Xbox Series X" },
    { id: 49, name: "Xbox One" },
  ];

  const modes = [
    { id: 31, name: "Adventure" },
    { id: 33, name: "Arcade" },
    { id: 35, name: "Card & Board Game" },
    { id: 4, name: "Fighting" },
    { id: 25, name: "Hack and slash/Beat 'em up" },
    { id: 36, name: "MOBA" },
    { id: 10, name: "Racing" },
    { id: 11, name: "Real Time Strategy (RTS)" },
    { id: 12, name: "Role-playing (RPG)" },
    { id: 5, name: "Shooter" },
    { id: 14, name: "Sport" },
    { id: 15, name: "Strategy" },
  ];

  const handlePlatforms = (event) => {
    event.persist();
    if (event.target.checked) {
      setPlatformFilters((platformFilters) => [
        ...platformFilters,
        event.target.id,
      ]);
    } else {
      if (platformFilters.length === 1 && genresFilters === 1) {
        setPlatformFilters([]);
        setData(defaultCall);
      } else {
        const removedPlatform = platformFilters.filter(
          (filter) => filter !== event.target.id
        );
        setPlatformFilters(removedPlatform);
      }
    }
  };

  const handleGenres = (event) => {
    event.persist();
    if (event.target.checked) {
      setGenresFilters((genresFilters) => [...genresFilters, event.target.id]);
    } else {
      if (platformFilters.length === 1 && genresFilters === 1) {
        setGenresFilters([]);
        setData(defaultCall);
      } else {
        const removedGenre = genresFilters.filter(
          (filter) => filter !== event.target.id
        );
        setGenresFilters(removedGenre);
      }
    }
  };

  return (
    <>
      <SidebarMenu>
        <SidebarItemMenu>
          <Linked to="/" issidebar="true">
            HOME
          </Linked>
        </SidebarItemMenu>
      </SidebarMenu>
      <SidebarMenu>
        <SidebarItemMenu>GAMES</SidebarItemMenu>
        <SidebarSubMenu>
          <SidebarItemMenu>Search</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <Searchbar />
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>
        <SidebarSubMenu>
          <SidebarItemMenu>PLATEFORMS</SidebarItemMenu>
          <SidebarSubMenu>
            {platforms.map((item) => (
              <SidebarItemMenu key={item.id}>
                <input
                  type="checkbox"
                  key={item.id}
                  name={item.name}
                  id={item.id}
                  onChange={handlePlatforms}
                />{" "}
                {item.name}
              </SidebarItemMenu>
            ))}
          </SidebarSubMenu>
        </SidebarSubMenu>

        <SidebarSubMenu>
          <SidebarItemMenu>MODES</SidebarItemMenu>
          <SidebarSubMenu>
            {modes.map((item) => (
              <SidebarItemMenu key={item.id}>
                <input
                  type="checkbox"
                  key={item.id}
                  name={item.name}
                  id={item.id}
                  onChange={handleGenres}
                />{" "}
                {item.name}
              </SidebarItemMenu>
            ))}
          </SidebarSubMenu>
        </SidebarSubMenu>

        <SidebarSubMenu>
          <SidebarItemMenu>GENRES</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> ACTION{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> AVENTURE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> COURSE{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>
      </SidebarMenu>

      <SidebarMenu>
        <SidebarItemMenu>GAMOVORES</SidebarItemMenu>
        <SidebarSubMenu>
          <SidebarItemMenu>GAMING MODE</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> MMO{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> CO-OPERATIVE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> MULTIPLAYERS{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>

        <SidebarSubMenu>
          <SidebarItemMenu>DISPONIBILITIES</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> MORNING{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> DAY{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> SOIREE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> NIGHT{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>

        <SidebarSubMenu>
          <SidebarItemMenu>GENRES</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> ACTION{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> AVENTURE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> COURSE{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
