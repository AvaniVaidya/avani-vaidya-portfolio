import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <Head>
        <title>Avani Vaidya | Portfolio</title>
        <meta name="description" content="Avani Vaidya's one-page portfolio" />
      </Head>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#ffffffee",
          borderBottom: "1px solid #ececec",
          backdropFilter: "blur(6px)",
          padding: "16px 20px",
          minHeight: "50px",
          width: "100%",
          left: 0,
          right: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              fontSize: "20px",
              alignItems: "right",
            }}
          >
            {[
              ["About", "#about"],
              ["Education", "#education"],
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{ textDecoration: "none", color: "#111" }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        <section
          id="about"
          style={{ maxWidth: 1080, margin: "0 auto", padding: "24px 16px" }}
        >
          <Header title="Hi there ! 👋" />
          <p style={{ margin: "0 0 8px", fontSize: "1.5rem" }}>I’m Avani</p>
          <p
            style={{
              margin: "20px 0 0",
              fontSize: "1.25rem",
              color: "030303ff",
              // maxWidth: 760,
            }}
          >
            I am a results-driven{" "}
            <strong>Full Stack Software Engineer with 4 years</strong> of
            experience building scalable, high-performance systems. Experienced
            in taking ownership of complex problems end-to-end, from design
            through implementation and optimization.
          </p>
          <p
            style={{
              margin: "12px 0 0",
              fontSize: "1.25rem",
              color: "#030303ff",
            }}
          >
            Strong background in backend development, microservices, and cloud
            deployments, with a proven ability to improve system reliability,
            performance, and user experience.
          </p>
          <p
            style={{
              margin: "12px 0 0",
              fontSize: "1.25rem",
              color: "#030303ff",
            }}
          >
            Passionate about building efficient systems and continuously
            learning new technologies.
          </p>
          <p
            style={{
              margin: "12px 0 0",
              fontSize: "1.25rem",
              fontStyle: "italic",
              color: "rgb(198, 37, 48)",
            }}
          >
            <br />I am actively seeking software engineering opportunities.
            Would love to connect and explore how I can contribute to your
            team!{" "}
          </p>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "18px",
            }}
          >
            <a
              href="https://drive.google.com/file/d/13G1F8VU9HqUhu9xPyHWDzZywZpB__Hc8/view"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                background: "#111",
                color: "#fff",
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: 6,
                fontWeight: 600,
              }}
            >
              Download Resume
            </a>
            <a
              href="https://github.com/avanivaidya"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                border: "1px solid #111",
                color: "#111",
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: 6,
                fontWeight: 600,
              }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/avanivaidya"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                border: "1px solid #0A66C2",
                color: "#0A66C2",
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: 6,
                fontWeight: 600,
              }}
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section
          id="education"
          style={{
            maxWidth: 1080,
            margin: "40px auto",
            padding: "24px 16px",
            borderTop: "1px solid #eee",
          }}
        >
          <Header title="Education 🎓" />
          <div style={{ display: "grid", gap: "14px", rowGap: "40px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "185px 1px 1fr auto",
                gap: "6px",
                alignItems: "start",
              }}
            >
              <div style={{ fontSize: "1.25rem", marginTop: 2 }}>
                Sept 2023 - June 2025
              </div>
              <div
                style={{
                  backgroundColor: "#444",
                  width: 2,
                  minHeight: "100%",
                  borderRadius: 999,
                }}
              />
              <div style={{ paddingLeft: 6 }}>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                  }}
                >
                  M.S. Computer Engineering · GPA: 3.75/4.0
                </p>
                <p
                  style={{
                    margin: "0 0 4px",
                    color: "#333",
                    fontSize: "1.15rem",
                  }}
                >
                  Santa Clara University · Santa Clara, CA
                </p>
                <p style={{ margin: 0, color: "#333", fontSize: "1.15rem" }}>
                  Coursework: Data Structures & Algorithms, OS, Distributed
                  Systems, Computer Architecture.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "185px 1px 1fr auto",
                gap: "6px",
                alignItems: "start",
              }}
            >
              <div style={{ fontSize: "1.25rem", marginTop: 2 }}>
                July 2016 - May 2020
              </div>
              <div
                style={{
                  backgroundColor: "#444",
                  width: 2,
                  minHeight: "100%",
                  borderRadius: 999,
                }}
              />
              <div style={{ paddingLeft: 6 }}>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                  }}
                >
                  B.Tech, Computer Engineering · GPA: 3.9/4.0
                </p>
                <p
                  style={{
                    margin: "0 0 4px",
                    color: "#333",
                    fontSize: "1.15rem",
                  }}
                >
                  Pune University · Pune, India
                </p>
                <p style={{ margin: 0, color: "#333", fontSize: "1.15rem" }}>
                  Coursework: Databases, Object-Oriented Analysis and Design,
                  Computer Networks, Information Security.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          style={{
            maxWidth: 1080,
            margin: "40px auto",
            padding: "24px 16px",
            borderTop: "1px solid #eee",
          }}
        >
          <Header title="Experience 💻" />
          <div style={{ display: "grid", gap: "14px", rowGap: "40px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "185px 1px 1fr auto",
                gap: "6px",
                alignItems: "start",
              }}
            >
              <div style={{ fontSize: "1.25rem", marginTop: 2 }}>
                June 2025 - Present
              </div>
              <div
                style={{
                  backgroundColor: "#444",
                  width: 2,
                  minHeight: "100%",
                  borderRadius: 999,
                }}
              />
              <div style={{ paddingLeft: 6 }}>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                  }}
                >
                  Full Stack Software Engineer
                </p>
                <p
                  style={{
                    margin: "0 0 4px",
                    color: "#333",
                    fontSize: "1.15rem",
                  }}
                >
                  SCU Frugal Innovation Lab · Santa Clara, CA
                </p>
                <p
                  style={{
                    margin: "10px 0",
                    color: "#333",
                    fontSize: "1.10rem",
                    fontStyle: "italic",
                  }}
                >
                  <br />
                  {" · "}Developed an{" "}
                  <strong>
                    {" "}
                    academic data management and AI learning platform
                  </strong>{" "}
                  that digitized records and reduced manual administrative
                  workload by <strong>60%</strong>. <br />
                  <br />
                  {" · "} Built a <strong>Python-based</strong> AI Teaching
                  Assistant and automated quiz engine using{" "}
                  <strong>
                    LangChain RAG, HuggingFace embeddings, ChromaDB
                  </strong>
                  , and <strong>LangGraph</strong> to support concept
                  explanations and chapter-level assessments.
                  <br />
                  <br /> {" · "}Engineered Spring Boot REST APIs with MySQL,
                  containerized with Docker, and deployed on AWS EC2, reducing
                  environment setup time by <strong>70%</strong> while
                  collaborating in Agile Scrum teams.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "185px 1px 1fr auto",
                gap: "6px",
                alignItems: "start",
              }}
            >
              <div style={{ fontSize: "1.25rem", marginTop: 2 }}>
                July 2020 - Aug 2023
              </div>
              <div
                style={{
                  backgroundColor: "#444",
                  width: 2,
                  minHeight: "100%",
                  borderRadius: 999,
                }}
              />
              <div style={{ paddingLeft: 6 }}>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                  }}
                >
                  Backend Software Engineer
                </p>
                <p
                  style={{
                    margin: "0 0 4px",
                    color: "#333",
                    fontSize: "1.15rem",
                  }}
                >
                  Avaya · Pune, India
                </p>
                <p
                  style={{
                    margin: "10px 0",
                    color: "#333",
                    fontSize: "1.15rem",
                    fontStyle: "italic",
                  }}
                >
                  <br />
                  {" · "}Developed a <strong>microservices-based</strong>{" "}
                  platform using <strong>Java Spring Boot</strong> to configure
                  Avaya-managed servers and call-flow entities, reducing manual
                  administration by 35%.
                  <br />
                  <br /> {" · "}Designed contract-first{" "}
                  <strong>REST APIs</strong> with <strong>OpenAPI</strong> and
                  implemented schema-based multi-tenancy with{" "}
                  <strong>PostgreSQL</strong>, cutting integration defects by{" "}
                  <strong>30%</strong> and lowering infrastructure costs by{" "}
                  <strong>40%</strong>.<br />
                  <br /> {" · "}Integrated <strong>Kafka</strong> event
                  streaming to improve system throughput and reliability, and
                  built <strong>React-based</strong> admin interfaces that
                  increased code reusability by 40%.
                  <br />
                  <br /> {" · "}Applied <strong>TDD</strong> with JUnit/Mockito,
                  achieved <strong>80% unit test coverage</strong>, resolved
                  200+ performance bottlenecks, and mentored junior engineers to
                  maintain high code quality.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "185px 1px 1fr auto",
                gap: "6px",
                alignItems: "start",
              }}
            >
              <div style={{ fontSize: "1.25rem", marginTop: 2 }}>
                May 2019 - July 2019
              </div>
              <div
                style={{
                  backgroundColor: "#444",
                  width: 2,
                  minHeight: "100%",
                  borderRadius: 999,
                }}
              />
              <div style={{ paddingLeft: 6 }}>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                  }}
                >
                  Software Engineer Intern
                </p>
                <p
                  style={{
                    margin: "0 0 4px",
                    color: "#333",
                    fontSize: "1.15rem",
                  }}
                >
                  Deutsche Bank · Pune, India
                </p>
                <p
                  style={{
                    margin: "10px 0",
                    color: "#333",
                    fontSize: "1.15rem",
                    fontStyle: "italic",
                  }}
                >
                  <br />
                  Built an event-driven, real-time notification plugin in{" "}
                  <strong>JavaScript (jQuery)</strong> leveraging{" "}
                  <strong>Server-Sent Events (SSE)</strong> with persistent HTTP
                  connections and application-level heartbeats.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          style={{
            maxWidth: 1080,
            margin: "40px auto",
            padding: "24px 16px",
            borderTop: "1px solid #eee",
          }}
        >
          <Header title="Projects 🛠️" />
          <div
            style={{
              display: "grid",
              gap: "12px",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            }}
          >
            {[
              {
                title: "AI Teaching Assistant",
                desc: "Syllabus-grounded AI assistant for student Q&A and personalized learning.",
                tech: ["Python", "LangChain", "LangGraph", "RAG", "MCP"],
                github:
                  "https://github.com/AvaniVaidya/AI_Teaching_Assistant.git",
              },
              {
                title: "Distributed Message Broker System",
                desc: "A custom Message Broker System with a multi-topic Publish-Subscribe model.",
                tech: [
                  "Java",
                  "Socket Programming",
                  "Multithreading",
                  "Async I/O",
                ],
                github:
                  "https://github.com/AvaniVaidya/Message-Broker-System-Publish-Subscribe.git",
              },
              {
                title: "Real-time Notification System",
                desc: "Plug-and-play notification plugin to receive real-time updates using Server-Sent Events.",
                tech: [
                  "JQuery",
                  "JavaScript",
                  "HTML/CSS",
                  "Server-Sent Events (SSE)",
                ],
                github:
                  "https://github.com/AvaniVaidya/Notification-Plugin.git",
              },
              {
                title: "Chatbot Conversation Summarization and Classification",
                desc: "NLP-based summarization of customer chatbot conversations using extractive TextRank algorithm and categorization with Naive Bayes.",
                tech: ["Python", "HTML/CSS"],
                github:
                  "https://github.com/AvaniVaidya/Text-Extraction-And-Classification.git",
              },
            ].map((p) => (
              <article
                key={p.title}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 10,
                  padding: 14,
                  background: "#fff",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#111",
                  }}
                >
                  {p.title}
                </p>
                <p
                  style={{
                    margin: "8px 0 10px",
                    color: "#0b3c72",
                    fontSize: "1.15rem",
                  }}
                >
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#2839ec", textDecoration: "none" }}
                  >
                    GitHub
                  </a>
                </p>
                <p
                  style={{
                    margin: "8px 0 10px",
                    color: "#333",
                    fontSize: "1.15rem",
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: 10,
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "1.0rem",
                        background: "#eef6ff",
                        color: "#0b3c72",
                        border: "1px solid #d9e9ff",
                        borderRadius: 999,
                        padding: "4px 10px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          style={{
            maxWidth: 1080,
            margin: "40px auto",
            padding: "24px 16px",
            borderTop: "1px solid #eee",
          }}
        >
          <Header title="Skills 📚" />
          <div
            style={{
              display: "grid",
              gap: "12px",
              gridTemplateColumns: "1fr",
            }}
          >
            {[
              {
                title: "Programming Languages",
                chips: ["Java", "JavaScript", "HTML5", "CSS", "SQL"],
              },
              {
                title: "Frameworks & Technologies",
                chips: [
                  "Spring Boot",
                  "Java EE",
                  "React.js",
                  "WebSockets",
                  "Git",
                  "Jira",
                  "Postman",
                  "Swagger",
                ],
              },
              {
                title: "Databases & Stores",
                chips: ["MySQL", "PostgreSQL", "MongoDB"],
              },
              {
                title: "Cloud & DevOps",
                chips: [
                  "Docker",
                  "Kubernetes",
                  "Azure",
                  "AWS EC2",
                  "AWS ECS",
                  "S3",
                  "ALB",
                  "Lambda",
                  "Security Groups",
                  "Auto Scaling",
                  "AMI",
                ],
              },
              {
                title: "Software Engineering",
                chips: [
                  "CI/CD",
                  "Agile",
                  "Scrum",
                  "SDLC",
                  "Microservices",
                  "MVC",
                  "REST API",
                ],
              },
              {
                title: "AI & Agentic Systems",
                chips: [
                  "LLMs",
                  "RAG",
                  "AI Agents",
                  "LangChain",
                  "LangGraph",
                  "MCP",
                  "Prompt Engineering",
                ],
              },
            ].map((block) => (
              <article
                key={block.title}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 10,
                  padding: 14,
                  background: "#fff",
                  boxShadow: "0 1px 10px rgba(0,0,0,0.04)",
                }}
              >
                <p style={{ margin: 0, fontWeight: 700, fontSize: "1.25rem" }}>
                  {block.title}
                </p>
                <div
                  style={{
                    marginTop: 10,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {block.chips.map((chip) => (
                    <span
                      key={chip}
                      style={{
                        fontSize: "1.05rem",
                        background: "#eef6ff",
                        color: "#0b3c72",
                        border: "1px solid #d9e9ff",
                        borderRadius: 999,
                        padding: "4px 10px",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div
            style={{
              marginTop: 14,
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 14,
              background: "#fff",
              boxShadow: "0 1px 10px rgba(0,0,0,0.04)",
            }}
          >
            <p style={{ margin: 0, fontWeight: 700, fontSize: "1.25rem" }}>
              Certification
            </p>
            <p
              style={{ margin: "8px 0 0", fontSize: "1.15rem", color: "#333" }}
            >
              AWS Certified Solutions Architect – Associate {" · "}
              <a
                href="https://www.credly.com/badges/bca9de2d-013b-4f43-ac51-bdf829c247ea/public_url"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#2839ec", textDecoration: "none" }}
              >
                Certificate Link
              </a>
            </p>
          </div>

          <div
            style={{
              marginTop: 14,
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 14,
              background: "#fff",
              boxShadow: "0 1px 10px rgba(0,0,0,0.04)",
            }}
          >
            <p style={{ margin: 0, fontWeight: 700, fontSize: "1.25rem" }}>
              Publication
            </p>
            <p
              style={{ margin: "8px 0 0", fontSize: "1.15rem", color: "#333" }}
            >
              Text Summarization and Classification of Conversation Data between
              Service Chatbot and Customer {" · "}
              <a
                href="https://ieeexplore.ieee.org/document/9210289"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#2839ec", textDecoration: "none" }}
              >
                Publication Link
              </a>
            </p>
          </div>
        </section>

        <section
          id="contact"
          style={{
            maxWidth: 1080,
            margin: "40px auto",
            padding: "40px 16px",
            textAlign: "center",
            borderTop: "1px solid #eee",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
            Let's Connect 🤝
          </h2>

          <p
            style={{
              fontSize: "1.15rem",
              color: "#444",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            If you'd like to discuss opportunities, collaborate on projects, or
            just say hello.. <br />
            feel free to reach out.
          </p>

          <div
            style={{
              marginTop: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              fontSize: "1.15rem",
            }}
          >
            <p style={{ margin: 0 }}>
              📞{" "}
              <a style={{ color: "#111", textDecoration: "none" }}>
                +1 (669) 304-0216
              </a>
            </p>

            <p style={{ margin: 0 }}>
              📧{" "}
              <a
                href="mailto:avanivaidya1997@gmail.com"
                style={{ color: "#111", textDecoration: "none" }}
              >
                avanivaidya1997@gmail.com
              </a>
            </p>
          </div>

          <p style={{ marginTop: "20px", color: "#111", fontSize: "1.15rem" }}>
            Santa Clara, CA · Open to Relocation
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
