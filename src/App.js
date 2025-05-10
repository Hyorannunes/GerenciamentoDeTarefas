import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import TarefaCard from './components/TarefaCard';


function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  // Função responsável por adicionar uma nova tarefa ao estado 'tarefas'
  // Valida se o campo não está vazio, cria um novo objeto tarefa com id único e texto,
  // e atualiza o estado e limpa o campo de entrada.
  const addTarefa = () => {
    if (tarefa.trim() === '') return; // Impede adicionar tarefas vazias
    setTarefas([...tarefas, { id: Date.now(), text: tarefa }]); // Adiciona nova tarefa ao array
    setTarefa(''); // Limpa o campo de entrada após adicionar
  };

  // Função responsável por remover uma tarefa específica do estado 'tarefas'
  // Filtra o array de tarefas, removendo aquela cujo id corresponde ao parâmetro recebido.
  const removeTarefa = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id)); // Remove a tarefa com o id informado
  };

  return (
    <div className="app-container">
      <h1>Gerenciador de Tarefas</h1>
      <div className="form">
        {/* Componente de input controlado pelo estado 'tarefa' */}
        <Input value={tarefa} onChange={e => setTarefa(e.target.value)} placeholder="Digite uma nova tarefa" />
        {/* Botão que dispara a função addTarefa ao ser clicado */}
        <Button onClick={addTarefa} label="Adicionar" />
      </div>
      <div className="tarefa-lista">
        {/* Renderiza a lista de tarefas, passando a função de remoção para cada item */}
        {tarefas.map(t => (
          <TarefaCard key={t.id} text={t.text} onRemove={() => removeTarefa(t.id)} />
        ))}
      </div>
    </div>
  );
}

export default App;
