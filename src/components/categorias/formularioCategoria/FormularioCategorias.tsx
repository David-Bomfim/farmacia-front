import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import Categoria from "../../../models/Categoria";

function FormularioCategoria() {
  const [categorias, setCategorias] = useState<Categoria>({} as Categoria);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategorias, {
      headers: {},
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategorias({
      ...categorias,
      [e.target.name]: e.target.value,
    });

    console.log(JSON.stringify(categorias));
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categorias, setCategorias, {
          headers: {},
        });

        alert("Tema atualizado com sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("O token expirou, favor logar novamente");
        } else {
          alert("Erro ao atualizar o Tema");
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categorias, setCategorias, {
          headers: {},
        });

        alert("Tema cadastrado com sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("O token expirou, favor logar novamente");
        } else {
          alert("Erro ao cadastrado o Tema");
        }
      }
    }

    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastre um novo tema" : "Editar tema"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do tema</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categorias.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? "Cadastrar" : "Editar"}
        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria;