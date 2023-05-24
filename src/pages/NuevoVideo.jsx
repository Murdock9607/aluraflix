import CampoTexto from "../components/CampoTexto";
import Button from "../components/Button";
import styled from "styled-components";
import ListaOpciones from "../components/ListaOpciones";
import { useState } from "react";

const Titulo = styled.h1`
  font-size: 60px;
  text-align: center;
  padding: 3rem 0 3rem 0;
  font-family: "Roboto", sans-serif;
`;

const StyledForm = styled.div`
  padding-left: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;
const StyledButtons = styled.div`
  padding-left: 3rem;
  padding-right: 7rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`;

export default function NuevoVideo(props) {
  const [titulo, setTitulo] = useState("");
  const [link, setlink] = useState("");
  const [imagen, setimagen] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [codigo, setcodigo] = useState("");
  const [categoria, setcategoria] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    const datosAEnviar = {
      titulo: titulo,
      link: link,
      imagen: imagen,
      categoria: categoria,
      descripcion: descripcion,
      codigo: codigo,
    };
    props.registrarVideo(datosAEnviar);
  };

  return (
    <form onSubmit={manejarEnvio} style={{backgroundColor: "#000000E5"}}>
      <Titulo>Nuevo Video</Titulo>
      <StyledForm>
        <CampoTexto
          placeholder="Titulo"
          required
          valor={titulo}
          setValor={setTitulo}
        />
        <CampoTexto
          placeholder="Link del video"
          required
          valor={link}
          setValor={setlink}
        />
        <CampoTexto
          placeholder="Link de la imagen del video"
          required
          valor={imagen}
          setValor={setimagen}
        />
        <ListaOpciones valor={categoria} setcategoria={setcategoria} categorias={props.categorias} />
        <CampoTexto
          placeholder="Descripción"
          valor={descripcion}
          setValor={setdescripcion}
        />
        <CampoTexto
          placeholder="Código de seguridad"
          required
          valor={codigo}
          setValor={setcodigo}
        />
      </StyledForm>
      <StyledButtons>
        <div style={{ backgroundColor: "transparent" }}>
          <Button primary>Guardar</Button>
          <Button>Limpiar</Button>
        </div>
        <Button primary>Nueva categoría</Button>
      </StyledButtons>
    </form>
  );
}
