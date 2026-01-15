import { storage } from "../firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";

export default function AdminProdutos() {
  const [imagem, setImagem] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImagem(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!imagem) return alert("Escolha uma imagem");

    const storageRef = ref(storage, `produtos/${imagem.name}`);

    try {
      // Faz o upload do arquivo
      await uploadBytes(storageRef, imagem);

      // Obtém a URL pública para exibir ou salvar no Firestore
      const url = await getDownloadURL(storageRef);
      console.log("Imagem enviada. URL:", url);
      alert("Upload feito com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      alert("Erro no upload. Verifique o console.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Enviar imagem</button>
    </div>
  );
}
