import { Grid, Typography, Card, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Message from "./Message";
import { IoIosWifi, IoIosBatteryFull } from "react-icons/io";
import { BiSignal4 } from "react-icons/bi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { PiSticker } from "react-icons/pi";
import { FiCamera } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";

export default function MobileView() {
  const receiver = "Saudi";
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Grid item xs={12} md={8} sx={{ bgcolor: "blue" }}></Grid>
      <Grid
        item
        container
        xs={12}
        md={4}
        sx={{
          bgcolor: "#F4F4F4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundImage: "url('/public/pngwing.com@2x.png')",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <Grid item xs={12} sx={{ width: "100%", height: "100%" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {" "}
              10:38{" "}
            </Typography>
            <Box display="flex" alignItems="center">
              <BiSignal4 style={{ marginRight: 8 }} />
              <IoIosWifi style={{ marginRight: 8 }} />
              <IoIosBatteryFull />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <img src="public/Group 3301.svg" alt="logo" />
            <Typography sx={{ ml: 1 }} variant="body1">
              communicate
            </Typography>
          </Box>
        </Grid>
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
              variant="secondary"
              sx={{
                backgroundColor: "white",
                color: "black",
                padding: "0px 20px",
                borderRadius: "50px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                marginTop: 2,
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              Today
            </Typography>
            <Message receiver={receiver} />
          </Card>
        </Grid>
        {/* Footer */}
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Box display="flex" alignItems="center">
            <IoAdd style={{ marginRight: 8 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                bgcolor: "white",
                borderRadius: "50px",
                flexGrow: 1,
                pr: 1,
                m: 1,
              }}
            >
              <PiSticker />
            </Box>
            <FiCamera style={{ marginRight: 8 }} />
            <MdOutlineKeyboardVoice />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Divider
              sx={{
                bgcolor: "black",
                borderRadius: 1,
                width: "30%",
                height: 5,
                mt: 2,
                mb: 1,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
