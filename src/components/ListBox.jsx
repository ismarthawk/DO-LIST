import React from "react";
import {
  Box,
  CardContent,
  Card,
  CardActions,
  Typography,
  Stack,
  FormControlLabel,
  IconButton,
  Button,
  Checkbox,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";

function ListBox() {
  const items = ["one", "two", "three", "four", "this is a very big one"];
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
          <Stack padding={1}>
            {items &&
              items.map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                  }}
                >
                  <FormControlLabel
                    sx={{ flexGrow: 1 }}
                    label={item}
                    control={<Checkbox />}
                  />
                  <IconButton>
                    <ClearIcon color="inherit" />
                  </IconButton>
                </Box>
              ))}
          </Stack>
        </CardContent>
        <CardActions>
          <Button startIcon={<DeleteIcon />}>Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ListBox;
