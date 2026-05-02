import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const theme = extendTheme({
    config, colors: {
        gray: 

{
  50: '#d8ffff',
  100: '#acf9ff',
  200: '#7df3ff',
  300: '#4defff',
  400: '#27eafe',
  500: '#17d1e5',
  600: '#00a2b3',
  700: '#007481',
  800: '#00474f',
  900: '#00191e',
}
    }
});

export default theme;