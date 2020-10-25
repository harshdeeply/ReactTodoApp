import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./AppProvider";
import Switch from "react-switch";
import { IoMdMoon as Moon, IoMdSunny as Sun } from "react-icons/io";

const ThemeSwitcher = () => {
  const { toggleTheme, themeMode } = useContext(AppContext);
  const handleThemeChange = (e) => {
    toggleTheme();
  };
  return (
    <Root>
      <h4>Toggle Theme</h4>
      <Switch
        checked={themeMode === "lightTheme" ? true : false}
        className="test"
        height={25}
        width={48}
        checkedIcon={
          <Sun
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 25,
              paddingLeft: 2,
            }}
            color={themeMode === "lightTheme" ? "white" : "grey"}
            className="light"
          />
        }
        uncheckedIcon={
          <Moon
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 22,
              paddingLeft: 3,
            }}
            color={themeMode === "darkTheme" ? "blue" : "blue"}
            className="dark"
          />
        }
        onChange={handleThemeChange}
      />
    </Root>
  );
};

export default ThemeSwitcher;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .custom-classname .react-toggle--checked .react-toggle-track {
    // background-color: red;
    // height: 200px;
    // width: 200px;
    // padding: 30px;
  }
`;
