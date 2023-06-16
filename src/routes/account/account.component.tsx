import { Typography, Avatar, Container } from "@mui/material";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
const Account: React.FC = () => {
  const { currentUser } = useSelector((store: any) => store.user);
  const { displayName, email } = currentUser;
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        width: "350px",
        marginTop: "40px",
      }}
    >
      <RxAvatar fontSize="75px" />
      <div>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {displayName}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {email}
        </Typography>
      </div>
    </Container>
  );
};

export default Account;
