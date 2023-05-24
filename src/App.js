import "./reset.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NuevoVideo from "./pages/NuevoVideo";
import { useState } from "react";
import Categoria from "./components/Categoria";

function App() {
  const categorias = [
    {
      titulo: "Front End",
      descripcion: "Formación Front End de Alura Latam",
      color: "#6BD1FF",
    },
    {
      titulo: "Back End",
      descripcion: "Formación Back End de Alura Latam",
      color: "#00C86F",
    },
    {
      titulo: "Innovación y Gestión",
      descripcion: "Formación Innovación y Gestión de Alura Latam",
      color: "#FF8C2A",
    },
  ];
  const [videos, setVideos] = useState([
    {
      titulo: "Titulo1",
      linkVideo: "https://www.youtube.com/watch?v=XM98fQFQYc8",
      linkImage:
        "https://i.ytimg.com/vi/AG2QssLpQzI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPvr5Y1ihWx4uYVPEtWtf8MD7TzA",
      categoria: "Back End",
      codigo: "1",
    },
  ]);

  const registrarVideo = (nuevoVideo) => {
    console.log("nuevo video= ", nuevoVideo);
    setVideos([...videos, nuevoVideo]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              videos={videos}
              categorias={categorias}
            />
          }
        />
        <Route
          path="nuevoVideo"
          element={
            <NuevoVideo
              categorias={categorias.map((categoria) => categoria.titulo)}
              registrarVideo={registrarVideo}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
