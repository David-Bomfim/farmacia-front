import React, { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { buscar } from "../../../service/Service";
import Categoria from "../../../models/Categoria";
import CardCategorias from "../cardCategoria/CardCategorias";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias, {
        headers: {},
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <>
                <CardCategorias key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;