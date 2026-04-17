import { useState } from 'react';

export const TodoModule = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: crypto.randomUUID(),
        text: inputValue, 
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleSaveEdit = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, text: editText } : t));
    setEditingId(null);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        background: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(10px)',
        padding: '2.5rem',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '550px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h1 className="text-xl lg:text-3xl color-white">Crea un Todo</h1>
        
        <div style={{ display: 'flex', gap: '12px', marginBottom: '2rem' }}>
          <input 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
            placeholder="¿Qué tienes pendiente?"
            autoComplete="off"
            style={{
              flex: 1, padding: '12px 18px', borderRadius: '12px', border: 'none',
              backgroundColor: '#334155', color: '#fff', outline: 'none', fontSize: '1rem'
            }}
          />
          <button onClick={handleAdd} style={{
            padding: '12px 24px', borderRadius: '12px', border: 'none',
            backgroundColor: '#3b82f6', color: '#fff', cursor: 'pointer', fontWeight: '600'
          }}>Agregar</button>
        </div>

        <h2 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Lista de tareas</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {todos.map(todo => (
            <div key={todo.id} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              backgroundColor: '#1e293b', padding: '14px 18px', borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              {editingId === todo.id ? (
                <>
                  <input 
                    value={editText} 
                    onChange={(e) => setEditText(e.target.value)}
                    style={{ flex: 1, padding: '8px', borderRadius: '6px', border: 'none', backgroundColor: '#475569', color: '#fff' }}
                  />
                  <button onClick={() => handleSaveEdit(todo.id)}>✅</button>
                </>
              ) : (
                <>
                  <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    onChange={() => toggleComplete(todo.id)}
                  />
                  <span style={{ 
                    flex: 1, color: todo.completed ? '#64748b' : '#f8fafc',
                    textDecoration: todo.completed ? 'line-through' : 'none'
                  }}>
                    {todo.text} 
                  </span>
                  <button onClick={() => { setEditingId(todo.id); setEditText(todo.text); }} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✏️</button>
                  <button onClick={() => setTodos(todos.filter(t => t.id !== todo.id))} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🗑️</button>
                </>
              )}
            </div>
          ))}
          {todos.length === 0 && <p style={{ color: '#64748b', textAlign: 'center' }}>No hay tareas aún ✨</p>}
        </div>
      </div>
    </div>
  );
};