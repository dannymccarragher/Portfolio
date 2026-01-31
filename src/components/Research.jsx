import { siGithub } from "simple-icons";

const Research = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0.5rem 1rem",
        textAlign: "left",
      }}
    >
      <h2
        style={{
          margin: "0 0 0.8rem 0",
          textAlign: "left",
          fontSize: "1.5em",
          fontWeight: "600",
        }}
      >
        Research
      </h2>

      <div
        style={{
          marginBottom: "1.5rem",
          padding: "2rem",
          background: "#F8FAFC",
          borderRadius: "16px",
          border: "1px solid rgba(37, 99, 235, 0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "100px",
            height: "100px",
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <h3
            style={{
              margin: "0 0 0.5rem 0",
              fontSize: "1.2em",
              fontWeight: "600",
              color: "#0F172A",
            }}
          >
            Salamander Tracker
          </h3>

          <p
            style={{
              margin: "0 0 0.8rem 0",
              fontSize: "0.9em",
              color: "#475569",
              fontStyle: "italic",
            }}
          >
            In Collaboration with The Ohio State University
          </p>

          <p
            style={{
              margin: "0 0 0.8rem 0",
              fontSize: "0.9em",
              color: "#475569",
              fontStyle: "italic",
            }}
          >
            Technologies: React, Next.js, Docker, Maven, Java, JavaCV, REST API,
            Postman
          </p>

          <div style={{ marginBottom: "0.8rem" }}>
            <a
              href="https://github.com/Jameson789/salamander-next"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.7rem",
                padding: "0.8rem 1.8rem",
                background: "#2563EB",
                color: "white",
                textDecoration: "none",
                borderRadius: "10px",
                fontSize: "1em",
                fontWeight: "600",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(37, 99, 235, 0.3)",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 30px rgba(37, 99, 235, 0.4)";
                e.target.style.background = "#1d4ed8";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 20px rgba(37, 99, 235, 0.3)";
                e.target.style.background = "#2563EB";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={`#${siGithub.hex}`}
                style={{ marginRight: "0.3rem" }}
              >
                <path d={siGithub.path} />
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          <ul
            style={{
              margin: "0",
              padding: "0 0 0 1rem",
              fontSize: "0.95em",
              color: "#0F172A",
              lineHeight: "1.5",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              Reduced manual tracking effort by 90%, enabling researchers to
              analyze 10+ experiments in the time previously required for a
              single video
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Containerized a multi-service architecture with Docker and
              deployed to production using Maven, enabling non-technical
              researchers to process videos and analyze salamander movement
              patterns in seconds instead of hours, supporting 25+ experiments
              per day without manual tracking
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Research;
