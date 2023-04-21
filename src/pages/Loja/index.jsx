import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Loja() {
  const [dadosLoja, setDadosLoja] = useState(null);

  useEffect(() => {
    async function fetchDadosLoja() {
      try {
        const response = await axios.get('https://api-ecommerce-gamaxp47.herokuapp.com/configLoja', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjgxMjExNTI2LCJleHAiOjE2ODE4MTYzMjZ9.M3JRpt6owSIo9QB4pqg7J9ByVqMPS3UJZbna6FsXAnE',
          },
        });
        setDadosLoja(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDadosLoja();
  }, []);

  if (!dadosLoja) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{dadosLoja.nomeLoja}</h1>
      <p>{dadosLoja.descricao}</p>
      {/* ...exiba outros dados da loja... */}
    </div>
  );
}

export default Loja;
