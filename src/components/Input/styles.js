import styled from "styled-components";

export const InputContainer = styled.div`
  border: 1px solid #FAFAFA;  /* Bordas arredondadas para o container */
  border-radius: 20px;
  height: 48px;  /* Ajustar altura para ser mais leve */
  width: 350px;  /* Largura reduzida */
  margin: 10px auto;  /* Centralizado e com margem menor */

  input {
    background: transparent;
    border: 0;  /* Remove a borda do input */
    width: 100%;  /* O input irá ocupar 100% da largura do container */
    height: 100%;  /* O input irá ocupar 100% da altura do container */
    padding: 0 15px;  /* Menos padding para dar um espaço mais equilibrado */
    color: #FFFFFF;  /* Cor do texto */
    font-size: 16px;  /* Tamanho da fonte reduzido */
  }

  /* Remove a borda de foco (outline) */
  input:focus {
    outline: none;
  }
`;