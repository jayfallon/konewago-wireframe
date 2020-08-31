import style from "styled-theming";

const Colors = {
  alabaster: "#FAFAFA",
  black: "#000000",
  bluezodiac: "#11214B",
  codgray: "#101010",
  greenyellow: "#A7FF60",
  mineshaft: "#333333",
  radicalred: "#FF2468",
  white: "#FFFFFF",
};

export { Colors };

const getBackground = style("mode", {
  light: "#FAFAFA",
  dark: "#111",
});

const getColor = style("mode", {
  light: "#111",
  dark: "#fafafa",
});

const getFontSize = style("textZoom", {
  normal: "1.8rem",
  magnify: "2.1rem",
});

const getLogoColor = style("mode", {
  light: "#333",
  dark: "#fafafa",
});

export { getBackground, getColor, getFontSize, getLogoColor };
