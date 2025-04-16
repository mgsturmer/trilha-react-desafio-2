import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  background: #2b2f3a;
  padding: 16px;
  margin: 16px 0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 16px;
    border: 2px solid #fafafa40;
  }

  .info {
    flex: 1;
  }

  h3 {
    margin: 0;
    color: #fff;
  }

  p {
    margin: 4px 0 12px;
    color: #ccc;
    font-size: 14px;
  }

  .buttons {
    display: flex;
    gap: 12px;
  }

  .view {
    background-color: #4caf50;
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      background-color: #45a049;
    }
  }

  .remove {
    background-color: transparent;
    color: #f44336;
    border: 1px solid #f44336;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background-color: #f44336;
      color: white;
    }
  }
`;
