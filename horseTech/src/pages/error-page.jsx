import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();//pegando o erro que aconteceu ao entrar na tela
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Essa página Não Foi encontrada</p>
      <p>
        {error.data}
      </p>
    </div>
  );
}