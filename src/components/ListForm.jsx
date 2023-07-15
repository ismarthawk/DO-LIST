import React, { useState, useRef } from "react";
import {
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import { v4 as genuid } from "uuid";
function ListForm() {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAdd = (e) => {
    const item = newItem.trim();
    setItems((prev) => [
      ...prev,
      { id: genuid(), item: item, completed: false },
    ]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    var things = [];
    items.forEach((item) => {
      if (item.id !== id) {
        things.push(item);
      }
    });
    setItems(things);
  };

  const handleChange = (id) => {
    var item;
    var completed;
    var things = [];
    items.forEach((item) => {
      if (item.id !== id) {
        things.push(item);
      } else {
        things.push({
          ...item,
          completed: !item.completed,
        });
      }
    });
    setItems(things);
  };

  const handleCancel = () => {
    setTitle("");
    setNewItem("");
    setItems([]);
  };

  return (
    <div>
      <Stack spacing={1}>
        <TextField
          size="small"
          placeholder="List Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Stack padding={1}>
          {items &&
            items.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                }}
              >
                <FormControlLabel
                  sx={{ flexGrow: 1 }}
                  label={item.item}
                  control={
                    <Checkbox
                      checked={item.completed}
                      onChange={() => handleChange(item.id)}
                    />
                  }
                />
                <IconButton onClick={() => deleteItem(item.id)}>
                  <ClearIcon color="inherit" />
                </IconButton>
              </Box>
            ))}
        </Stack>
        <Box
          sx={{
            display: "flex",
            padding: "4px",
            width: "100%",
          }}
        >
          <TextField
            size="small"
            variant="standard"
            placeholder="Add Item.!"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            multiline
            sx={{
              flexGrow: 1,
            }}
          />
          <IconButton onClick={handleAdd}>
            <AddIcon color="inherit" />
          </IconButton>
        </Box>
        <Stack
          direction={"row"}
          style={{
            marginTop: "10px",
          }}
        >
          <Button onClick={handleCancel}>Cancel</Button>
          <Button>Add List</Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default ListForm;
