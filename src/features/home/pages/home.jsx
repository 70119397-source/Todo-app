import React from 'react';
import { Link } from "react-router"; 

const cardStyle = {
  background: 'rgba(30, 41, 59, 0.7)',
  padding: '1.5rem',
  borderRadius: '15px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  transition: 'transform 0.2s', 
};

const cardTitleStyle = {
  fontSize: '1.1rem',
  color: '#3b82f6',
  marginBottom: '10px'
};

export const Home = () => {
  const date = new Date().toLocaleDateString('es-ES', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          ¡Hola,soy Edson! 
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Hoy es {date}</p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px' 
      }}>
        
         <div style={cardStyle}>
          <h3 style={cardTitleStyle}>Tareas</h3>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
            Programar tareas a realizar
          </p>

          <Link 
            to="/todo" 
            style={{ 
              marginTop: '15px', 
              display: 'inline-block',
              color: '#3b82f6', 
              fontWeight: 'bold',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >
            Ir a HACER →
          </Link>
        </div>

      </div>
    </div>
  );
};