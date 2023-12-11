import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Components from "../../Components/LoginComponents/Components";
import BackgroundVideo from "../../Components/LoginComponents/BackgroundVideo";
import ServiceAuth from "../../service/ServiceAuth";
import "./Styles.css";

function AuthParticipant() {
  const [signIn, toggle] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('AuthParticipant');
  
    return function cleanup() {
      document.body.classList.remove('AuthParticipant');
    };
  }, []);

  const handleLogin = async () => {
    try {
      const token = await ServiceAuth.login(email, password);
      localStorage.setItem('token', token); // Armazenar o token no localStorage
      navigate('/'); // Tentantiva de redirecionar para a página inicial
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  const handleSignup = async () => {
    try {
      await ServiceAuth.signup(email, password);
    } catch (error) {
      console.error('Erro no registro:', error);
    }
  };

  return (
    <>
    <BackgroundVideo />
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Criar Conta</Components.Title>
          <Components.Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Components.Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Components.Button onClick={handleSignup}>Registrar</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Fazer Login</Components.Title>
          <Components.Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Components.Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Components.Button onClick={handleLogin}>Entrar</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Bem vindo!</Components.Title>
            <Components.Paragraph>
              Por favor, faça login com suas credenciais válidas!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Entrar
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Olá, usuário!</Components.Title>
            <Components.Paragraph>
              Informe suas credenciais para criar sua conta!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Registrar
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
    </>
  );
}

export default AuthParticipant
