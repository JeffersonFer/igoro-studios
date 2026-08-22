function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src="/igoroHome.jpg"
        alt="Logo IgoroStudios"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "40px",
          transition: "all 0.3s ease",
          cursor: "pointer",
          border: "3px solid transparent",
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = "0 0 30px rgba(66, 153, 225, 0.8)";
          e.target.style.borderColor = "#4299E1";
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = "none";
          e.target.style.borderColor = "transparent";
        }}
      />

      <h1
        style={{
          fontSize: "36px",
          color: "white",
          margin: "0 0 10px 0",
          textAlign: "center",
        }}
      >
        IgoroStudios
      </h1>

      <h2
        style={{
          fontSize: "20px",
          color: "#e2e8f0",
          margin: "0",
          fontWeight: "normal",
          textAlign: "center",
        }}
      >
        Em Construção ...
      </h2>
    </div>
  );
}

export default Home;
