'use client'
import React from 'react';
import { Container, Content } from "../../styles/auth/auth.styles";
import Image from 'next/image';
import logo from "../../src/assets/logo.png";
import Link from 'next/link';

const Signup = () => (
    <Container>
      <Content>
        <Image src={logo} alt="Finsys" width={130} />
          <input type="text" placeholder="Nome de usuário" autoComplete="off"/>
          <input type="email" placeholder="Email" autoComplete="off"/>
          <input type="password" placeholder="Senha" autoComplete="off"/>
          <input type="password" placeholder="Repetir Senha" autoComplete="off"/>
          <button>Cadastrar</button>
          <p>
            Já possui uma conta? <Link href={"/signin"}>Entre!</Link>
          </p>   
      </Content>
    </Container>
)

export default Signup;