import { soma, div, mult, sub } from "../calc.js";
// exemple to use
describe("Testes de Unidade ", () => {
  it("Deve retornar a soma de 1 + 1 com toBe", () => {
    expect(1 + 1).toBe(2); // igual
  });

  it("Deve retornar a igualdade de um objeto com toEqual", () => {
    const obj1 = { one: 1 };
    obj1.two = 2;
    expect(obj1).toEqual({ one: 1, two: 2 }); // igualdade em objetos
  });

  it("Deve retornar se a string e existe na palavra teste com toMach", () => {
    expect("teste").toMatch(/e/);
  });
});

describe("calculadora tests inteiros", () => {
  it("deve somar dois números", () => {
    const esperado = 10;
    const retorno = soma(5, 5);
    expect(retorno).toBe(esperado);
  });

  it("deve subtrair dois números", () => {
    const esperado = 20;
    const retorno = sub(30, 10);

    // expect -> função / tobe -> o retorno esperado
    expect(retorno).toBe(esperado);
  });

  it("deve multiplicar dois números", () => {
    const esperado = 50;
    const retorno = mult(10, 5);
    expect(retorno).toBe(esperado);
  });

  it("deve dividir dois números", () => {
    const esperado = 10;
    const retorno = div(100, 10);
    // expect (func) -> tobe (result)
    expect(retorno).toBe(esperado);
  });
});

describe("calculadora tests decimais", () => {
  it("soma de dois numeros", () => {
    const esperado = 9;
    const retorno = soma(4.5, 4.5);
    expect(retorno).toBeCloseTo(esperado);
  });
  it("subtração de dois numeros", () => {
    const esperado = 3;
    const retorno = sub(4.5, 1.5);
    expect(retorno).toBeCloseTo(esperado);
  });
  it("multiplicação de dois numeros", () => {
    const esperado = 9.5;
    const retorno = mult(2.5, 3.8);
    expect(retorno).toBeCloseTo(esperado);
  })
  it("divisao de dois numeros", () => {
    const esperado = 35.6;
    const retorno = div(89, 2.5);
    expect(retorno).toBeCloseTo(esperado);
  })
});
