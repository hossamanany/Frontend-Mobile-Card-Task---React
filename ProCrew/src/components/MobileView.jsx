import { Grid, Typography, Card, Box, Button } from "@mui/material";
// import { IoIosWifi, IoIosBatteryFull } from "react-icons/io";
// import { BiSignal4 } from "react-icons/bi";
// import { MdOutlineKeyboardVoice } from "react-icons/md";
// import { PiSticker } from "react-icons/pi";
// import { FiCamera } from "react-icons/fi";
// import { IoAdd } from "react-icons/io5";
import { RiExternalLinkFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";

export default function MobileView() {
  const receiver = "Saudi";
  const handleDoneButtonClick = () => {
    alert("Done!");
  };

  return (
    <Grid
      container
      sx={{
        bgcolor: "#F4F4F4",
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Header */}
      {/* <Grid item xs={12} sx={{ width: "100%", height: "100%" }}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <img src="public/Group 3301.svg" alt="logo" />
          <Typography sx={{ ml: 1 }} variant="body1">
            communicate
          </Typography>
        </Box>
      </Grid> */}
      {/* Body */}
      <Grid item xs={12} sx={{ width: "100%", height: "100%" }}>
        <Card
          sx={{
            backgroundImage: "url('/wallpaper.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            boxShadow: "inset 0 6px 6px -1px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "white",
              color: "black",
              padding: { xs: "0px 10px", sm: "0px 12px", md: "0px 14px" },
              borderRadius: "50px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              marginTop: 2,
              fontWeight: "bold",
              alignSelf: "center",
              fontSize: { xs: 6, sm: 8, md: 10 },
              wordBreak: "break-word",
            }}
          >
            Today
          </Typography>
          <Box
            sx={{
              position: "relative",
              backgroundColor: "white",
              borderRadius: 4,
              padding: 1,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              maxWidth: "300px",
              mt: 2,
              mb: 6,
              mr: { xs: 4, md: 6 },
              ml: 3,
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: { xs: "10px", md: "14px" },
                left: { xs: "-25px", md: "-48px" },
                width: "0",
                height: "0",
                borderLeft: {
                  xs: "15px solid transparent",
                  md: "25px solid transparent",
                },
                borderRight: {
                  xs: "15px solid white",
                  md: "25px solid white",
                },
                borderTop: {
                  xs: "10px solid transparent",
                  md: "15px solid transparent",
                },
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
              <Typography
                sx={{
                  fontSize: { xs: 10, sm: 12, md: 14 },
                  wordBreak: "break-word",
                }}
              >
                Hello {receiver},
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 10, sm: 12, md: 14 },
                  wordBreak: "break-word",
                }}
              >
                how are you doing?
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography
                sx={{
                  color: "grey",
                  opacity: 0.5,
                  fontSize: { xs: 10, sm: 12, md: 14 },
                  wordBreak: "break-word",
                }}
              >
                Thank you for your time.
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-end">
              <Typography
                sx={{
                  color: "grey",
                  opacity: 0.5,
                  fontSize: { xs: 10, sm: 12, md: 14 },
                  wordBreak: "break-word",
                }}
              >
                10:30
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
              <Button
                variant="text"
                startIcon={<RiExternalLinkFill />}
                href="https://www.procrew.pro/"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  width: "100%",
                  fontSize: { xs: 8, sm: 14, md: 16 },
                  textTransform: "none",
                  "& .MuiButton-startIcon svg": {
                    fontSize: { xs: 12, sm: 20, md: 24 },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 10, sm: 12, md: 14 },
                    wordBreak: "break-word",
                  }}
                >
                  Visit our website
                </Typography>
              </Button>
              <Button
                variant="text"
                startIcon={<IoMdCall />}
                href="tel:+201017872054"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  width: "100%",
                  fontSize: { xs: 8, sm: 14, md: 16 },
                  textTransform: "none",
                  "& .MuiButton-startIcon svg": {
                    fontSize: { xs: 12, sm: 20, md: 24 },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 10, sm: 12, md: 14 },
                    wordBreak: "break-word",
                  }}
                >
                  Call us
                </Typography>
              </Button>
              <Button
                variant="text"
                startIcon={<TiArrowBack />}
                onClick={handleDoneButtonClick}
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  width: "100%",
                  fontSize: { xs: 8, sm: 14, md: 16 },
                  textTransform: "none",
                  "& .MuiButton-startIcon svg": {
                    fontSize: { xs: 12, sm: 20, md: 24 },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 10, sm: 12, md: 14 },
                    wordBreak: "break-word",
                  }}
                >
                  Done
                </Typography>
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
