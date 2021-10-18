import { createTheme } from "@material-ui/core";
const theme = createTheme({
  direction: "rtl",
  spacing: 4,
  palette: {
    type: "light",
  },
});

theme.overrides = {
  ...theme.overrides,
  MuiOutlinedInput: {
    adornedStart: {
      paddingRight: 0,
      paddingLeft: 0,
    },
    adornedEnd: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  
  
};

export default theme;
