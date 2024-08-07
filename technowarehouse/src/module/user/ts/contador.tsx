import React, { createContext, useContext, useState } from "react";

// Define el tipo del contexto
interface ContadorContextType {
  contador: number;
  setContador: React.Dispatch<React.SetStateAction<number>>;
}

// Crear el contexto con un valor predeterminado
const ContadorContext = createContext<ContadorContextType | undefined>(
  undefined
);

// Proveedor del contexto
export const ContadorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [contador, setContador] = useState(0);

  return (
    <ContadorContext.Provider value={{ contador, setContador }}>
      {children}
    </ContadorContext.Provider>
  );
};

// Hook para usar el contexto
export const useContador = () => {
  const context = useContext(ContadorContext);
  if (!context) {
    throw new Error("useContador debe ser usado dentro de un ContadorProvider");
  }
  return context;
};
