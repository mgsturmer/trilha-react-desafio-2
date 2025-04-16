import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <img src={repo.owner.avatar_url} alt="avatar" />
      <div className="info">
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <div className="buttons">
          <a href={repo.html_url} rel="noreferrer" target="_blank" className="view">
            Ver repositório
          </a>
          <button onClick={handleRemove} className="remove">
            Remover
          </button>
        </div>
      </div>
    </ItemContainer>
  );
}

export default ItemRepo;
