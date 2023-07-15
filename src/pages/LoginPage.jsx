import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

// timeline imports
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
//timeline imports

import GoogleIcon from "@mui/icons-material/Google";
import { TimelineOppositeContent } from "@mui/lab";
function LoginPage() {
  const { user, signin } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div
        style={{
          margin: "20px",
        }}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            sx={{
              width: "100%",
              display: "flex",
            }}
          >
            <Button
              sx={{
                margin: "auto",
                borderRadius: 2,
                borderColor: "#eeee",
                padding: 1,
                width: "100%",
                maxWidth: "300px",
              }}
              startIcon={<GoogleIcon color="inherit" />}
              onClick={() => {
                signin();
              }}
            >
              Login With Google Account
            </Button>
          </Grid>
        </Grid>
        <div>
          <Box
            sx={{
              width: "100%",
              maxWidth: "500px",
              margin: "20px auto",
              border: 2,
              borderRadius: 2,
              padding: 2,
            }}
          >
            <Typography variant="h4">The D0 / List App</Typography>

            <ul
              style={{
                marginBottom: "20px",
              }}
            >
              <li>Uses signin with google Account</li>
              <li>Take instant Notes</li>
              <li>Take Lists for the taks with checkboxes</li>
            </ul>

            {/* TimeLine */}
            <Typography variant="h6">The Appliction Status : </Typography>

            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Learn React</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>CRUDS Using firebase</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Learn auth firebase</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Know Material UI</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Build Frontend</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Implement Functionalities</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Test with Real time user (TEJU)
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>FixBugs</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                </TimelineSeparator>
                <TimelineContent>Deploy</TimelineContent>
              </TimelineItem>
            </Timeline>

            {/* Timeline end */}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
