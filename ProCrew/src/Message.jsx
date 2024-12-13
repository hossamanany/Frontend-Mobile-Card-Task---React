import { Box, Typography, Button } from "@mui/material";
import { RiExternalLinkFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import PropTypes from "prop-types";

export default function Message({ receiver }) {
  const handleDoneButtonClick = () => {
    alert("Done!");
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "white",
        borderRadius: 4,
        padding: 2,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
        maxWidth: "300px",
        m: 6,
        mt: 2,
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "14px",
          left: "-48px",
          width: "0",
          height: "0",
          borderLeft: "25px solid transparent",
          borderRight: "25px solid white",
          borderTop: "15px solid transparent",
          borderBottom: "0px solid transparent",
        },
      }}
    >
      <Box>
        <img
          src="public/MainImage.jpg"
          alt="SaudiNationalDay"
          style={{ width: "100%", height: "auto", borderRadius: "16px" }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        sx={{ my: 2 }}
      >
        <Typography variant="body1">Hello {receiver},</Typography>
        <Typography variant="body1">how are you doing?</Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Typography variant="body2" sx={{ color: "grey", opacity: 0.5 }}>
          Thank you for your time.
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <Typography variant="body2" sx={{ color: "grey", opacity: 0.5 }}>
          10:30
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        <Button
          variant="text"
          startIcon={<RiExternalLinkFill />}
          href="https://www.procrew.pro/"
          sx={{ borderTop: "1px solid #e0e0e0", width: "100%" }}
        >
          Visit our website
        </Button>
        <Button
          variant="text"
          startIcon={<IoMdCall />}
          href="tel:+201017872054"
          sx={{ borderTop: "1px solid #e0e0e0", width: "100%" }}
        >
          Call us
        </Button>
        <Button
          variant="text"
          startIcon={<TiArrowBack />}
          onClick={handleDoneButtonClick}
          sx={{ borderTop: "1px solid #e0e0e0", width: "100%" }}
        >
          Done
        </Button>
      </Box>
    </Box>
  );
}

Message.propTypes = {
  receiver: PropTypes.string.isRequired,
};
