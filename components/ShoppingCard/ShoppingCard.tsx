import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCardContext } from "../../context/CardContext";
import theme from "../../theme";

const ShoppingCard = () => {
  const [card] = useCardContext();

  return (
    <Box>
      <IconButton aria-label="cart">
        <ShoppingCartIcon />
      </IconButton>

      <>
        {card.map((product, index) => (
          <Box key={index}>
            <Grid>
              <Box
                sx={{
                  width: theme.spacing(75),
                  margin: theme.spacing(1),
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: theme.spacing(4),
                    background: "#63ff6d",
                    borderRadius: 2,
                  }}
                >
                  {product.title} {"  "}به سبد خرید اضافه شد
                </Typography>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: theme.spacing(4),
                  }}
                >
                  عنوان محصول:{product.title}
                </Box>
                <Box
                  sx={{
                    fontSize: theme.spacing(3),
                  }}
                >
                  تعداد:{product.count}
                </Box>
                <Box
                  sx={{
                    fontSize: theme.spacing(3),
                  }}
                >
                  قیمت:{product.price}
                </Box>
              </Box>
            </Grid>
          </Box>
        ))}
      </>
    </Box>
  );
};

export default ShoppingCard;
