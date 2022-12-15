import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Box,
  Divider,
} from "@chakra-ui/react";
import userLogo from "../../Assets/userLogo.png";
export const UserDetail = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <img style={{ marginLeft: "-13px" }} src={userLogo} alt="" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>User Details!</PopoverHeader>
        <PopoverBody>
          <Box>
            <Box display={"flex"}>
              <img
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "10px",
                  //   marginLeft: "34%",
                  objectFit:"cover"
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/VijayKedia.jpg/330px-VijayKedia.jpg"
                alt=""
              />
              <h1
                style={{
                  fontSize: "20px",
                  marginTop: "10px",
                  fontWeight: "700",
                  marginLeft: "10px",
                }}
              >
                {" "}
                Mr. Vijay Kedia
              </h1>
            </Box>

            <br />
            <Divider orientation="horizontal" />

            <h1
              style={{
                fontSize: "17px",
                marginTop: "10px",
                fontWeight: "400",
              }}
            >
              {" "}
              +91 85964 75896
            </h1>
            <h1
              style={{
                fontSize: "17px",
                marginTop: "10px",
                fontWeight: "400",
              }}
            >
              {" "}
              vijay@gmail.com
            </h1>
            <h1
              style={{
                fontSize: "17px",
                marginTop: "10px",
                fontWeight: "400",
              }}
            >
              {" "}
              Kedia Securities Pvt. Ltd.
            </h1>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
