import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, Plus } from "lucide-react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const API = "https://to-dos-api.softclub.tj/api/to-dos";

export default function Blog() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: null,
  });

  const getData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAdd = async () => {
    try {
      const fd = new FormData();
      fd.append("Name", form.name);
      fd.append("Description", form.description);
      if (form.image) {
        fd.append("Images", form.image);
      }
      await axios.post(API, fd);
      getData();
      handleClose();
    } catch (err) {
      console.log("ADD ERROR:", err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}?id=${id}`);
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditOpen = (item) => {
    setEditItem(item);
    setForm({
      name: item.name,
      description: item.description,
      image: null,
    });
    setOpen(true);
  };

  const handleEditSave = async () => {
    try {
      await axios.put(API, {
        id: editItem.id,
        name: form.name,
        description: form.description,
      });
      getData();
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpen = () => {
    setEditItem(null);
    setForm({ name: "", description: "", image: null });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#1c1c1c] min-h-screen text-white px-4 md:px-10 py-10">

      <h1 className="text-2xl md:text-3xl font-bold mb-6">Blog</h1>

      {/* SEARCH + ADD */}
      <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-10">

        <div className="relative w-full md:max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent border border-gray-600 px-4 py-2 pr-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
        </div>

        <button
          onClick={handleOpen}
          className="flex items-center gap-2 bg-[#FCD54C] text-black px-5 py-2 font-semibold hover:scale-105 transition"
        >
          <Plus size={18} /> Add New
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {filtered.map((item, index) => (
          <div
            key={item.id}
            className="border border-yellow-500/50 bg-[#222] hover:scale-105 transition duration-300"
            style={{
              animation: `fadeUp 0.4s ease forwards`,
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
            }}
          >

            <img
              src={`https://to-dos-api.softclub.tj/images/${item.images[0]?.imageName}`}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col justify-between h-[180px]">

              <div>
                <h3 className="text-sm font-semibold mb-2">{item.name}</h3>
                <p className="text-xs text-gray-400 mb-3">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-between">

                <button className="text-yellow-400 text-xs hover:underline">
                  Learn more →
                </button>

                <div className="flex gap-2">

                  <button
                    onClick={() => handleEditOpen(item)}
                    className="text-xs bg-blue-500 px-2 py-1"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-xs bg-red-500 px-2 py-1"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* DIALOG */}
      <Dialog open={open} onClose={handleClose} fullWidth>

        <DialogTitle>
          {editItem ? "Edit Item" : "Add Item"}
        </DialogTitle>

        <DialogContent className="flex flex-col gap-4 mt-2">

          <TextField
            label="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <TextField
            label="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          {/* ✅ IMAGE INPUT (IMPORTANT) */}
          {!editItem && (
            <input
              type="file"
              onChange={(e) =>
                setForm({ ...form, image: e.target.files[0] })
              }
            />
          )}

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          {editItem ? (
            <Button onClick={handleEditSave} variant="contained">
              Save
            </Button>
          ) : (
            <Button onClick={handleAdd} variant="contained">
              Add
            </Button>
          )}

        </DialogActions>

      </Dialog>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>

    </div>
  );
}
