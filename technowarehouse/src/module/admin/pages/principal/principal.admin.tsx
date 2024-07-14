import React, { useState, useEffect } from "react";
import Menu from "../components/menu";
import { supabase } from "../../../../services/supabase";
import styles from "./principal.admin.module.css";
interface ImageObject {
  name: string;
  // Otras propiedades de la imagen, si las hay
}
function PrincipalAdmin() {
  const [imageUrl, setImageUrl] = useState(""); // Estado para almacenar la URL de la imagen
  const [imageList, setImageList] = useState<ImageObject[]>([]); // Estado para almacenar la lista de imágenes

  useEffect(() => {
    verTodasLasImagenes();
  }, []);

  async function verTodasLasImagenes() {
    const { data, error } = await supabase.storage
      .from("Technowarehouse")
      .list("public/");

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      setImageList(data);
    }
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const { data, error } = await supabase.storage
        .from("Technowarehouse")
        .upload("public/" + file.name, file);

      if (data) {
        alert("Subido");
        const url = `https://dkmcywdlzsslpgnvfxzy.supabase.co/storage/v1/object/public/Technowarehouse/public/${file.name}`; // Obtener la URL de la imagen subida
        setImageUrl(url); // Actualizar el estado con la URL de la imagen subida
        verTodasLasImagenes(); // Actualizar la lista de imágenes
      } else if (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>
      <div className={styles.content}>
        <h1>Panel de Control</h1>
        <input type="file" accept="image/*" onChange={handleUpload} />
        {imageUrl && <img src={imageUrl} alt="Imagen subida" />}
        <h2>Imágenes subidas:</h2>
        <ul>
          {imageList.map((image) => (
            <img src={image.name} alt="" />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PrincipalAdmin;
/*
import React, { useState, useEffect } from "react";
import Menu from "../components/menu";
import { supabase } from "../../../../services/supabase";
import styles from "./principal.admin.module.css";
import { verTodasLasImagenes } from "../../../../services/supabase";
function PrincipalAdmin() {
  const [imageUrl, setImageUrl] = useState(""); // Estado para almacenar la URL de la imagen

  useEffect(() => {
    verTodasLasImagenes();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const { data, error } = await supabase.storage
        .from("Technowarehouse")
        .upload("public/" + file.name, file);

      if (data) {
        alert("Subido");
        const url = `https://dkmcywdlzsslpgnvfxzy.supabase.co/storage/v1/object/public/Technowarehouse/public/${file.name}`; // Obtener la URL de la imagen subida
        setImageUrl(url); // Actualizar el estado con la URL de la imagen subida
        verTodasLasImagenes(); // Actualizar la lista de imágenes
      } else if (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>
      <div className={styles.content}>
        <h1>Panel de Control</h1>
        <input type="file" accept="image/*" onChange={handleUpload} />
        {imageUrl && <img src={imageUrl} alt="Imagen subida" />}{" "}
      </div>
    </div>
  );
}

export default PrincipalAdmin;

*/
