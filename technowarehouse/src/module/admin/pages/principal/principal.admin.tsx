import React, { useState, useEffect } from "react";
import Menu from "../components/menu";
import { supabase } from "../../../../services/supabase";
import styles from "./principal.admin.module.css";
//HAcer que se muestre la imagen
function PrincipalAdmin() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const { data, error } = await supabase.storage
        .from("Technowarehouse")
        .upload("public/" + file.name, file);

      if (data) {
        const publicUrl = data.path; // Verifica la propiedad correcta en el objeto de respuesta
        setImageUrl(publicUrl);
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
        {imageUrl && (
          <img src={imageUrl} alt="Imagen subida" className={styles.img} />
        )}
      </div>
    </div>
  );
}

export default PrincipalAdmin;
/*
//import { Link } from "react-router-dom";
import styles from "./principal.admin.module.css";
import React, { ChangeEvent } from "react";
import Menu from "../components/menu";
import { supabase } from "../../../../services/supabase";

function PrincipalAdmin() {
  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
      .from("Technowarehouse")
      .upload("public" + file?.name, file as File);

    if (data) {
      console.log(data);
    } else if (error) {
      console.log(error);
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
      </div>
    </div>
  );
}

export default PrincipalAdmin;

*/
