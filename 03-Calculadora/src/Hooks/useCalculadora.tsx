import React, { useRef, useState } from 'react'

enum Operadores {
    sumar, restar, multiplicar, dividir,
}

export const useCalculadora = () => {
  
    const [numero, setnumero] = useState('0')
    const [anterior, setanterior] = useState('0')
    const ultimaOperacion = useRef<Operadores>()
    
    const limpiar = () =>{
      setnumero('0');
      setanterior('0')
    }
    
    const armarNumero = (numeroTexto : string)=>{
      //setnumero(numero+numeroTexto);
      // No aceptar doble punto
      if(numero.includes('.')&& numeroTexto === '.')return;
      if(numero.startsWith('0')||numero.startsWith('-0')){
        // Punto decimal
        if(numeroTexto==='.'){
          setnumero(numero + numeroTexto);  
        }else if(numeroTexto === '0' && numero.includes('.')){
          setnumero(numero + numeroTexto);
        }else if(numeroTexto !== '0' && !numero.includes('.')){
          setnumero(numeroTexto);
        }else if(numeroTexto === '0' && !numero.includes('.')){
          setnumero(numero);
        }else{
          setnumero(numero + numeroTexto);  
        }
      }else{
        setnumero(numero + numeroTexto);
      }
    }
  
    const positivoNegativo = () => {
      if(numero.includes('-') ){
        setnumero(numero.replace('-', ''));
      }else{
        setnumero('-'+numero);
      }
    }
  
    const delNum = () => {
      if(numero.includes('-') && numero.length<=2){
        setnumero('0');
      } else if (!numero.includes('-') && numero.length<=1){
        setnumero('0');
      } else {
        setnumero(numero.slice(0,-1));
      }
    }
  
    const cambiarNumAnterior = (num1:string) => {
      if(num1.endsWith('.')){
        setanterior(num1.slice(0,-1));
      } else {
        setanterior(num1);
      }
      setnumero('0');
    }
  
    const btnDividir = () => {
        if(anterior==='0'){
            cambiarNumAnterior(numero);
            ultimaOperacion.current = Operadores.dividir;  
        }else{
            calcular(false);
            ultimaOperacion.current = Operadores.dividir;
            setnumero('0');
        }
    }

    const btnSumar = () => {
        if(anterior==='0'){
            cambiarNumAnterior(numero);
            ultimaOperacion.current = Operadores.sumar;
        }else{
            calcular(false);
            ultimaOperacion.current = Operadores.sumar;
            setnumero('0');
        }
    }
    const btnRestar = () => {
        if(anterior==='0'){
            cambiarNumAnterior(numero);
            ultimaOperacion.current = Operadores.restar;
        }else{
            calcular(false);
            ultimaOperacion.current = Operadores.restar;
            setnumero('0');
        }
    }
    const btnMultiplicar = () => {
        if(anterior==='0'){
            cambiarNumAnterior(numero);
            ultimaOperacion.current = Operadores.multiplicar;
        }else{
            calcular(false);
            ultimaOperacion.current = Operadores.multiplicar;
            setnumero('0');
        }
    }

    const btnIgual = () => {
        calcular(true);
        setanterior('0');
    }
  
    const calcular = (bol:boolean) => {
        const num1 = Number(numero);
        const num2 = Number(anterior);
        if(bol){
            switch(ultimaOperacion.current){
                case Operadores.sumar:
                setnumero(`${num1+num2}`);
                break;
                case Operadores.restar:
                setnumero(`${num2-num1}`);
                break;
                case Operadores.dividir:
                if(num1 === 0){
                    setnumero('Error');
                }else{
                    setnumero(`${num2/num1}`);
                }
                break;
                case Operadores.multiplicar:
                setnumero(`${num1*num2}`);
                default:
                break;
            }
        }else{
            switch(ultimaOperacion.current){
                case Operadores.sumar:
                    setanterior(`${num1+num2}`);
                break;
                case Operadores.restar:
                    setanterior(`${num2-num1}`);
                break;
                case Operadores.dividir:
                if(num1 === 0){
                    setanterior('Error');
                }else{
                    setanterior(`${num2/num1}`);
                }
                break;
                case Operadores.multiplicar:
                    setanterior(`${num1*num2}`);
                default:
                break;
            }
        }
        
    }
  

    return (
        {
            anterior,
            numero,
            armarNumero,
            limpiar,
            positivoNegativo,
            delNum,
            btnDividir,
            btnMultiplicar,
            btnRestar,
            btnSumar,
            btnIgual,
        }
    )
}
