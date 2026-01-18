function MainContent() {
  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: '#eef2f3',
        minHeight: '300px'
      }}
    >
      <h2 style={{ color: '#333' }}>Welcome!</h2>
      <p style={{ lineHeight: '1.6' }}>
        This application displays information about users and their favorite cities.
      </p>
    </main>
  );
}

export default MainContent;