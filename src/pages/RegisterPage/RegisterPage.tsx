import { useRef } from "react";
// import Header from "../../components/Header/Header";
import "./RegisterPage.scss";
// import { AuthContext } from "../../App";

interface RegisterInfo {
  email: string;
  password: string;
}

const RegisterPage = (): JSX.Element => {
//   const API_URL_LOGIN = `${process.env.REACT_APP_API_URL as string}/user/login`;
//   const authInfo = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitForm = (event: React.FormEvent): void => {
    event.preventDefault();

    const registerInfo: RegisterInfo = {
      email: emailRef?.current?.value as string,
      password: passwordRef?.current?.value as string,
    };

    if (!registerInfo.email || !registerInfo.password) {
      alert("Email y la contraseña son obligatorios!");
    } else {
    //   doLoginRequest(loginInfo);
    }
  };

  //   const doLoginRequest = (loginInfo: LoginInfo): void => {
  //     fetch(API_URL_LOGIN, {
  //       method: "POST",
  //       body: JSON.stringify(loginInfo),
  //       headers: { "Content-type": "application/json; charset=UTF-8" },
  //     })
  //       .then(async (response) => {
  //         if (response.status !== 200) {
  //           alert("Login incorrecto");
  //         }
  //         return await response.json();
  //       })
  //       .then((data) => {
  //         // Login OK -> Guardamos las credenciales
  //         if (data.token && data.user && authInfo.login) {
  //           authInfo.login(data.token, data.user);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         alert("Ha ocurrido un error en la petición");
  //       });
  //   };

  return (
    <div className="register-page page">
      {/* <Header></Header> */}
      <div className="register-page__container">
        <div>
          <p className="register-page__welcome">BIENVENIDO</p>
          <p className="register-page__title">SIGN IN</p>
          <p className="register-page__subtitle">Introduce tus credenciales para acceder</p>
          {/* <button>Log out</button> */}
        </div>
        <form onSubmit={submitForm} className="register-page__form">
          <label className="register-page__label register-page__form--label" htmlFor="email">Email:</label>
          <input className="register-page__input" ref={emailRef} type="text" id="email" />

          <label className="register-page__label register-page__form--label" htmlFor="password">Password:</label>
          <input className="register-page__input" ref={passwordRef} type="text" id="password" />

          <label className="register-page__label register-page__form--label" htmlFor="password">Nombre</label>
          <input className="register-page__input" ref={passwordRef} type="text" id="password" />

          <label className="register-page__label register-page__form--label" htmlFor="password">Apellidos</label>
          <input className="register-page__input" ref={passwordRef} type="text" id="password" />

          <button className="register-page__form btn--green" type="submit">ACCEDER</button>
          <button className="register-page__form btn" type="submit">REGISTRARSE</button>
        </form>
      </div>

