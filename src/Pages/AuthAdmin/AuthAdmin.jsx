import React, { useState, useEffect } from 'react';
import * as Components from "../../Components/LoginComponents/Components"
import BackgroundVideo from "../../Components/LoginComponents/BackgroundVideo";
import './styles.css';

function AuthAdmin() {
  const [signIn, toggle] = useState(true);

  return (
    <>
    <BackgroundVideo />
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Criar Conta</Components.Title>
          <Components.Input type="text" placeholder="Nome" />
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Senha" />
          <Components.Button>Registrar</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Fazer Login</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Senha" />
          <Components.Button>Entrar</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Bem vindo Admin!</Components.Title>
            <Components.Paragraph>
              Por favor, faça login com suas credenciais válidas!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Entrar
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Olá, Admin!</Components.Title>
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

export default AuthAdmin
