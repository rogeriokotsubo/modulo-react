import React from 'react';
import logo from './logo.svg';
import './App.css';

interface iUser {
  firstName: string,
  lastName: string,
  birthYear: number,
  currentYear: number
}

function formatName(user : iUser)
{
  return ` meu nome é ${user.firstName} ${user.lastName}, tenho ${user.currentYear-user.birthYear} anos e este é 
        meu primeiro contato com JSX`;
}

const user = {
  firstName: 'Harper',
  lastName: 'Kool',
  birthYear: 1997,
  currentYear: 2022
}

export default function Element() {
  const element = (
      <h1>
        Olá, {formatName(user)}!
      </h1>
  );
  return element;
}



