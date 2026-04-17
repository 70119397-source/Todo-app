export const AboutMe = () => {
  const skills = ["JavaScript", "Node.js", "Vite", "CSS", "Git"];

  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        background: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(10px)',
        padding: '3rem',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '700px',
        color: '#fff',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
     
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ 
            fontSize: '4rem', 
            background: '#3b82f6', 
            width: '100px', 
            height: '100px', 
            borderRadius: '50%', 
            margin: '0 auto 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            👨‍💻
          </div>
          <h1 style={{ fontSize: '2rem', margin: '0' }}>Edson Huaman</h1>
          <p style={{ color: '#94a3b8' }}>Estudiante de Frontend </p>
        </div>

        <hr style={{ border: '0', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '2rem 0' }} />

      
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#3b82f6', marginBottom: '1rem' }}>Sobre mí</h2>
          <p style={{ lineHeight: '1.6', color: '#cbd5e1' }}>
            Me gusta la tecnología y el desarrollo de paginas web. 
            Actualmente estoy estudianto React.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.2rem', color: '#3b82f6', marginBottom: '1rem' }}>Tecnologías</h2>
          <div style={{ display: 'flex', wrap: 'wrap', gap: '10px', flexWrap: 'wrap' }}>
            {skills.map(skill => (
              <span key={skill} style={{
                background: '#1e293b',
                padding: '6px 15px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                border: '1px solid #3b82f6',
                color: '#3b82f6'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};