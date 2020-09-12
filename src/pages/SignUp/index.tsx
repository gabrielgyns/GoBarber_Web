import React from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input
            name="name"
            type="text"
            placeholder="Nome"
            icon={FiUser}
            autoComplete="off"
          />
          <Input
            name="email"
            type="text"
            placeholder="E-mail"
            icon={FiMail}
            autoComplete="off"
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
            autoComplete="off"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Voltar para LogIn
        </a>
      </Content>
    </Container>
  );
};

export default SignIn;
