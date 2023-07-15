import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskBox() {
  return (
    <div>
      <Card
        sx={{
          border: 1,
          borderRadius: 2,
          borderColor: "#eeee",
          padding: 1,
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            This is the title
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum
            dolorum error necessitatibus explicabo iste possimus, modi maxime
            numquam fuga?
          </Typography>
        </CardContent>
        <CardActions>
          <Button startIcon={<DeleteIcon />}>Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default TaskBox;
