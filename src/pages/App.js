
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () => {
    if (!currentRepo) return;
  
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
  
      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);
  
        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      }
  
      alert('Repositório já adicionado ou não encontrado');
    } catch (error) {
      alert('Erro ao buscar o repositório');
      console.error(error);
    }
  };

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);
    setRepos(prev => prev.filter(repo => repo.id !== id));
  }


  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
