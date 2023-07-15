import { Box, Button, FormControl, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <Stack spacing={2}>
      <TextField
        variant="outlined"
        fullWidth
        size="small"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        variant="outlined"
        placeholder="Write here..!"
        multiline
        fullWidth
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <Stack direction={"row"}>
        <Button
          onClick={(e) => {
            setTitle("");
            setDesc("");
          }}
        >
          Cancel
        </Button>
        <Button>Add</Button>
      </Stack>
    </Stack>
  );
}

export default TodoForm;
