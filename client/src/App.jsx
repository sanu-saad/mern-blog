import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Header from "./components/Header";
import { AuthProvider } from "../context/authContext.jsx";
import Posts from "./components/Posts";
import PostDetails from "./pages/PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
