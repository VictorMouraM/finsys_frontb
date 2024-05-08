'use client'
import React from 'react';
import { Container, Content } from "../../styles/auth/auth.styles";
import Image from 'next/image';
import logo from "../../src/assets/logo.png";
import Link from 'next/link';

const Signin = () => (
    <Container>
      <Content>
        <Image src={logo} alt="Finsys" width={130} />
          <input type="text" placeholder="Nome de usuário" autoComplete="off"/>
          <input type="password" placeholder="Senha" autoComplete="off"/>
          <button>Entrar</button>
          <p>
            Ainda não possui uma conta? <Link href={"/signup"}>Cadastre-se!</Link>
          </p>   
      </Content>
    </Container>
)

export default Signin;