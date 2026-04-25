import miFoto from '../../../assets/foto.jpeg';

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
          {/* Contenedor de la foto real */}
          <div style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            margin: '0 auto 1rem',
            overflow: 'hidden',
            border: '3px solid #3b82f6',
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1e293b'
          }}>
            <img 
              src={miFoto} 
              alt="Edson Huaman" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <h1 style={{ fontSize: '2rem', margin: '0' }}>Edson Huaman</h1>
          <p style={{ color: '#94a3b8' }}>Estudiante de Frontend</p>
        </div>

        <hr style={{ border: '0', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '2rem 0' }} />

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#3b82f6', marginBottom: '1rem' }}>Sobre mí</h2>
          <p style={{ lineHeight: '1.6', color: '#cbd5e1' }}>
            Me gusta la tecnología y el desarrollo de páginas web. 
            Actualmente estoy estudiando React.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.2rem', color: '#3b82f6', marginBottom: '1rem' }}>Tecnologías</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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