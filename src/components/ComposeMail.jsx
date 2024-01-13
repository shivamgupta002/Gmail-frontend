import React from "react";
import {
  Dialog,
  Box,
  Typography,
  InputBase,
  TextField,
  Button,
  styled,
} from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";

// -------------------- Custom Tag ---------------------------------------
const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};
const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  "&>p": {
    fontSize: 14,
    fontWeight: 500,
  },
});

const RecipientWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "&>div": {
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
    marginTop: 10,
  },
});

const Footer = styled(Box)({
  marginTop: "auto",
  display: "flex",
  justifyContent: "space-Between",
  padding: "10px 15px",
  alignItems: "center",
});

const SendButton = styled(Button)({
  background: "#0b57d0",
  color: "#fff",
  fontWeight: 500,
  textTransform: "none",
  borderRadius: 18,
  width: 100,
});
// ######################################################
const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };
  const sendMail = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
        <Header>
          <Typography>New Message</Typography>
          <Close
            fontSize="small"
            onClick={(e) => closeComposeMail(e)}
            style={{ cursor: "pointer" }}
          />
        </Header>
        <RecipientWrapper>
          <InputBase placeholder="Recipient" />
          <InputBase placeholder="Subject" />
        </RecipientWrapper>
        <TextField
          multiline
          rows={15}
          sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
        />
        <Footer>
          <SendButton onClick={() => sendMail()}>Send</SendButton>
          <DeleteOutline
            onClick={() => setOpenDialog(false)}
            style={{ cursor: "pointer" }}
          />
        </Footer>
      </Dialog>
    </>
  );
};

export default ComposeMail;
