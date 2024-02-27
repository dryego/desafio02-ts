import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Importar para usar as extensões de expect do jest-dom
import { LoginCard } from "./Card";

// Mock para window.alert
global.alert = jest.fn();

describe("LoginCard", () => {
  test("exibe mensagem de boas-vindas ao clicar no botão", () => {
    const { getByLabelText, getByText } = render(
      <LoginCard username="" password="" />
    );

    const usernameInput = getByLabelText("Usuário:");
    fireEvent.change(usernameInput, { target: { value: "john_doe" } });

    const passwordInput = getByLabelText("Senha:");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    const enterButton = getByText("Entrar");
    fireEvent.click(enterButton);

    // Verifica se a mensagem de alerta foi chamada com o valor do nome de usuário
    expect(global.alert).toHaveBeenCalledWith("Seja bem vindo john_doe");
  });
});
