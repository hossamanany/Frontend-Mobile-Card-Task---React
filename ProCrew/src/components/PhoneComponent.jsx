import "../App.css";
import { Box } from "@mui/material";
import MobileView from "./MobileView";
import { BiSignal4 } from "react-icons/bi";
import { IoIosWifi, IoIosBatteryFull } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { PiSticker } from "react-icons/pi";
import { FiCamera } from "react-icons/fi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { useEffect, useState } from "react";

const PhoneComponent = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="scene">
      <Box className="phone-container right-third">
        <Box className="phone">
          <Box className="phone-buttons">
            <Box className="left">
              <Box className="button"></Box>
              <Box className="button"></Box>
              <Box className="button"></Box>
            </Box>
            <Box className="right">
              <Box className="button"></Box>
            </Box>
          </Box>
          <Box className="camera"></Box>
          <Box className="screen-container">
            <Box className="notch-container" tabIndex="0">
              <Box className="clock">{time}</Box>
              <Box className="notch">
                <Box className="content">
                  <Box className="right"></Box>
                </Box>
              </Box>
              <Box className="header-icons">
                <BiSignal4 className="header-icon" />
                <IoIosWifi className="header-icon" />
                <IoIosBatteryFull className="header-icon" />
              </Box>
            </Box>
            <Box className="screen">
              <MobileView />
            </Box>
            <Box className="footer-container">
              <Box className="footer">
                <Box className="footer-icons">
                  <IoAdd className="footer-icon" />
                  <Box className="attachment-box">
                    <PiSticker className="footer-icon" />
                  </Box>
                  <FiCamera className="footer-icon" />
                  <MdOutlineKeyboardVoice className="footer-icon" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PhoneComponent;
