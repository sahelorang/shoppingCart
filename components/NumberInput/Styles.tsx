import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const Styles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      textAlign: "center",
    },
    rounded: {
      borderRadius: theme.spacing(7),
    },
    noRounded: {
      borderRadius: theme.spacing(2),
    },

    button: {
      minWidth: theme.spacing(5),
      padding: 0,
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
  })
);

export default Styles;
