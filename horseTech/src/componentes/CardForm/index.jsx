import styles from "./styles.module.css";

const CardForm = () => {
  const userInfo = {
    name: "",
    surname: "",
    completeName: ["primeiro", "segundo"], //sem espaços vazios
    cellPhone: 0, //sem ddd
    email: ["joaovitorminosso", "yahoo", ".com.br"], //meu e-mail é joaovitorminosso@yahoo.com.br (o @ deve ser removido)
    userName: "",
  };

  //console.log(userName);
  const str = "Bruno";
  console.log(str.replace("B", "")); // troca uma letra por outra

  console.log(str.substring(1, 3)); //remove 3 caracter começando do segundo, se chegar no final ele volta no começo por isso tirou o B também
  //ru
  console.log(str.substring(2)); //remove só dois caracter direto no começo
  //uno
  const str2 = "O Bruno é desenvolvedor front-end React.";

  console.log(str2.length);//conta quantos caracteres tem na string

  console.log(str2.slice(33)); //removeu tudo até React, remove 33 caracter
  // React.
  console.log(str2.slice(2, 24)); //puladno os dois primeiros pegou 24 caracter pra frente
  //Bruno é desenvolvedor
  console.log(str2.slice(-7)); //pegou os 7 últimos caracteres
  // React.
  console.log(str2.slice(-16, -7));
  // front-end
  console.log(str2.split(" ")); //divide geral onde ouver espaços

  return (
    <div className={styles.container}>
      <h3>Nome</h3>
      <input className={styles.textInput} />
      <h3>Sobrenome</h3>
      <input className={styles.textInput} />
      <h3>Nome completo</h3>
      {/* só pode ter 20 caracteres, se tiver mais coloque um "..." no final do nome */}
      <input className={styles.textInput} />
      <h3>Telefone</h3>
      {/* esse número deve ter 8 dígitos, e sem - */}
      <input className={styles.textInput} />
      <h3>Email</h3>
      <input className={styles.textInput} />
      <h3>Password</h3>
      {/* deve ter apenas estrelinhas, se o botão ver senha for precionado ver o real conteúdo (use: type="password" no input) */}
      <input className={styles.textInput} />
      <button className={styles.seePass}>ver senha</button>
      <button className={styles.SubmitButton}>Submit</button>
      {/* botão deve dar console.log dentro de uma função assincrona com os dados do objeto UserName */}
    </div>
  );
};

export default CardForm;
