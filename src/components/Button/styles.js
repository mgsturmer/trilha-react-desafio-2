import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #4CAF50;  /* Cor mais viva e chamativa */
  border: none;               /* Remover borda para um visual mais limpo */
  border-radius: 8px;         /* Arredondamento suave */
  color: white;               /* Texto branco */
  height: 40px;               /* Tamanho do botão reduzido */
  width: 200px;               /* Definir largura fixada */
  font-size: 16px;            /* Tamanho da fonte */
  margin: 10px;               /* Margem menor para ajustar o espaço */

  &:hover {
    background-color: #45a049;  /* Cor de fundo mais escura ao passar o mouse */
    cursor: pointer;
  }

  &:focus {
    outline: none;  /* Remove o contorno azul do foco */
  }
`;