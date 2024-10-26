import React, { useContext } from "react";
import { Grid, Box, Typography, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Cartproducts } from "../Context/CartContex";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { DeleteToCart, cart, AddQuantity, MinusQuantity } = useContext(Cartproducts);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();

  return (
    <Box sx={{ p: { xs: 2, sm: 5, md: 10 } }}>
      <Typography variant="h4" align="center" sx={{m:5}} gutterBottom>
        Shopping Cart
      </Typography>

      <Grid container spacing={2}>
        {/* Left Section (Product List) */}
        <Grid item xs={12} md={8}>
          <Grid container sx={{ backgroundColor: "#f5f5f5", p: 2, display: { xs: "none", md: "flex" } }}>
            <Grid item xs={2}>
              <Typography>Product Image</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Product Title</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Price</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Quantity</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Total</Typography>
            </Grid>
          </Grid>

          {cart.length === 0 ? (
            <Typography>No items in the cart</Typography>
          ) : (
            cart.map((item) => (
              <Grid container spacing={2} sx={{ p: 2, alignItems: "center" }} key={item.id}>
                <Grid item xs={12} sm={2}>
                  <img src={item.imageUrl} alt="Product" style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography>{item.title}</Typography>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Typography>${item.price.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <div className="quantity buttons_added">
                    <input type="button" value="-" className="minus" onClick={() => MinusQuantity(item)} />
                    <input
                      type="number"
                      step="1"
                      min="1"
                      name="quantity"
                      value={item.quantity}
                      title="Qty"
                      className="input-text qty text"
                      size="4"
                      readOnly
                    />
                    <input type="button" value="+" className="plus" onClick={() => AddQuantity(item)} />
                  </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography>${(item.price * item.quantity).toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={12} textAlign="right">
                  <IconButton onClick={() => DeleteToCart(item)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))
          )}

          <Typography sx={{ mt: 3 }}>
            <Link to={"/"}>
              <a style={{ textDecoration: "none" }}>Return to Shop</a>
            </Link>
          </Typography>
        </Grid>

        {/* Right Section (Order Summary) */}
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: "#f5f5f5", p: 3 }}>
            <Typography variant="h6">Order Details</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography>Subtotal: ${subtotal.toFixed(2)}</Typography>
              <Typography>Total: ${subtotal.toFixed(2)}</Typography>
            </Box>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "black",
                "&:hover": {
                  bgcolor: "darkgray",
                  transform: "scale(1.05)",
                  transition: "transform 0.2s ease",
                },
                mt: 3,
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCart;
