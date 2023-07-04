import { statusList, useFetch } from './UseFetch';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dog({ breed }) {
  const { data, status } = useFetch(`https://dog.ceo/api/breed/${breed}/images/random`);

  if (status === statusList.LOADING) {
    return <p>Carregando...</p>;
  }

  if (status === statusList.SUCCESS) {
    toast.success('Imagem carregada com sucesso!');
  }

  if (status === statusList.ERROR) {
    toast.error(`Erro ao buscar uma imagem para a raça: ${breed}`);
  }

  return (
    <div>
      <h2>Você buscou pela raça: {breed}</h2>
      {status === statusList.SUCCESS && <img src={data.message} alt={breed} />}
      <ToastContainer />
    </div>
  );
}

export default Dog;
