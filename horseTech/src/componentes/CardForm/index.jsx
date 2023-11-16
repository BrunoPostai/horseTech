import styles from "./styles.module.css";

const CardForm = () => {
  const userName = {
    name: "",
    surname: "",
    completeName: ["primeiro", "segundo"],//sem espaços vazios
    cellPhone: 0,//sem ddd
    email:['joaovitorminosso','yahoo','.com.br'],//meu e-mail é joaovitorminosso@yahoo.com.br (o @ deve ser removido)
    userName:''
  };
  console.log(userName)
  return (
    <div className={styles.container}>
      <h3>Nome</h3>
      <input className={styles.textInput} />
      <h3>Sobrenome</h3>
      <input className={styles.textInput} />
      <h3>Nome completo</h3>{/* só pode ter 30 caracteres, se tiver mais coloque um "..." no final do nome */}
      <input className={styles.textInput} />
      <h3>Telefone</h3>{/* esse número deve ter 8 dígitos, e sem - */}
      <input className={styles.textInput} />
      <h3>Email</h3>
      <input className={styles.textInput} />
      <h3>Password</h3>{/* deve ter apenas estrelinhas, se o botão ver senha for precionado ver o real conteúdo (use: type="password" no input) */}
      <input className={styles.textInput} />
      <button className={styles.seePass}>ver senha</button>
      <button className={styles.SubmitButton}>Submit</button>{/* botão deve dar console.log dentro de uma função assincrona com os dados do objeto UserName */}
    </div>
  );
};

export default CardForm;
