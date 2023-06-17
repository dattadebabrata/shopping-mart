import { useSelector } from "react-redux";
import styled from "styled-components";
import { Typography, Divider, Stack } from "@mui/material";

const TotalItemCalculate = ({ children }: { children?: any }) => {
  const { cart } = useSelector((store: any) => store.cart);

  const itemTotal = cart.reduce((quantity: any, cartItem: any) => {
    return quantity + cartItem.quantity * cartItem.price;
  }, 0);

  const withGst = Math.floor(itemTotal * 0.05);

  return (
    <TotalContainer>
      <Typography sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
        Total: -{" "}
      </Typography>
      <Divider />
      <Stack direction="row" justifyContent="space-between">
        <Typography sx={{ fontWeight: "bold" }}>Sub-total:</Typography>
        <Typography>{itemTotal}</Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Typography sx={{ fontWeight: "bold" }}>GST(5%):</Typography>
        <Typography>+ {withGst}</Typography>
      </Stack>
      <Divider />
      <Typography align="right" sx={{ fontWeight: "bold" }}>
        Total: {itemTotal + withGst}
      </Typography>
      {children}
    </TotalContainer>
  );
};

export default TotalItemCalculate;

const TotalContainer = styled.div`
  padding: 5px;
  width: 100%;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
