import React, { useState, useContext } from "react";
import data from "../data/data.json";
import Link from "next/link";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  CardActions,
  Button,
  Badge,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import NumberInput from "../../NumberInput/NumberInput";
import theme from "../../../theme";
import { useCardContext } from "../../../context/CardContext";

const useStyles = makeStyles({
  root: {
    maxWidth: theme.spacing(50),
    margin: theme.spacing(4),
  },
  image: {
    height: theme.spacing(38),
    width: theme.spacing(50),
  },
  button: {
    height: "100%",
    backgroundColor: "#efaac7",
  },
});

interface productProps {
  id?: string;
  title?: string;
  url?: string;
  price?: string;
  value?: number | string;
}

interface IFormInputs {
  [key: string]: string;
}
type SProduct = {
  [key: string]: string | number;
};

const ShoppingItems = () => {
  const classes = useStyles();
  const [count, setCount] = useState<SProduct>({});
  const { handleSubmit, control } = useForm();
  const [card, setCard] = useCardContext();

  const handleButton = ({ title, id, price }: productProps) => {
    setCard((prev) => [
      ...prev,
      { title, id, price, count: count[`${title}`] },
    ]);
  };

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    setCount(data);
    console.log("", data);
  };

  return (
    <div>
      <Card>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Link href="/ShoppingCard">
            <Badge
              badgeContent={card.length}
              style={{ margin: theme.spacing(4) }}
            >
              <IconButton aria-label="cart">
                <ShoppingCartIcon />
              </IconButton>
            </Badge>
          </Link>
        </Grid>
      </Card>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {data.map((product, index) => {
            return (
              <Card className={classes.root} key={index}>
                <img className={classes.image} src={product.url} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    <Box
                      sx={{ fontWeight: "bold", fontSize: theme.spacing(4) }}
                    >
                      {product.title}
                    </Box>
                    <Box
                      sx={{
                        fontWeight: "bold",
                        fontSize: theme.spacing(3),
                      }}
                    >
                      {product.price}
                    </Box>
                  </Typography>
                </CardContent>
                <Controller
                  name={product.title}
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <NumberInput
                      variant="outlined"
                      color="primary"
                      placeholder="مقدار"
                      size="small"
                      fullWidth
                      rounded
                      {...field}
                    />
                  )}
                />

                <Grid justifyContent="center" alignItems="center" container>
                  <CardActions>
                    <Button
                      variant="contained"
                      disableElevation
                      className={classes.button}
                      onClick={() => handleButton(product)}
                    >
                      {product.button}
                    </Button>
                  </CardActions>
                </Grid>
              </Card>
            );
          })}
        </Grid>
      </form>
    </div>
  );
};

export default ShoppingItems;
