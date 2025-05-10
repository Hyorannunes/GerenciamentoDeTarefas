function TarefaCard({ text, onRemove }) {
  return (
    <div className="tarefa-card">
      <span>{text}</span>
      <button onClick={onRemove}>
        <img
          src="https://fonts.gstatic.com/s/i/materialiconsoutlined/delete/v17/24px.svg"
          alt="Remover"
          style={{ width: 24, height: 24 }}
        />
      </button>
    </div>
  );
}

export default TarefaCard;
