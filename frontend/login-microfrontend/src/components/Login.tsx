import { useState } from "react";

function SignInForm() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "0 50px",
        height: "100%",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontWeight: "bold", margin: 0 }}>Sign in</h1>
      <div
        style={{
          margin: "20px 0",
        }}
      >
        <a
          href="#"
          style={{
            border: "1px solid #DDDDDD",
            borderRadius: "50%",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 5px",
            height: "40px",
            width: "40px",
            textDecoration: "none",
            color: "#333",
          }}
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          href="#"
          style={{
            border: "1px solid #DDDDDD",
            borderRadius: "50%",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 5px",
            height: "40px",
            width: "40px",
            textDecoration: "none",
            color: "#333",
          }}
        >
          <i className="fab fa-google-plus-g" />
        </a>
        <a
          href="#"
          style={{
            border: "1px solid #DDDDDD",
            borderRadius: "50%",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 5px",
            height: "40px",
            width: "40px",
            textDecoration: "none",
            color: "#333",
          }}
        >
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
      <span style={{ fontSize: "12px" }}>or use your account</span>
      <input
        type="email"
        placeholder="Email"
        name="email"
        style={{
          backgroundColor: "#eee",
          border: "none",
          padding: "12px 15px",
          margin: "8px 0",
          width: "100%",
          borderRadius: "4px",
          outline: "none",
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        style={{
          backgroundColor: "#eee",
          border: "none",
          padding: "12px 15px",
          margin: "8px 0",
          width: "100%",
          borderRadius: "4px",
          outline: "none",
        }}
      />
      <a
        href="#"
        style={{
          color: "#333",
          fontSize: "14px",
          textDecoration: "none",
          margin: "15px 0",
        }}
      >
        Forgot your password?
      </a>
      <button
        style={{
          borderRadius: "20px",
          border: "1px solid #FF4B2B",
          backgroundColor: "#FF4B2B",
          color: "#FFFFFF",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "12px 45px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          transition: "transform 80ms ease-in",
          cursor: "pointer",
          outline: "none",
        }}
      >
        Sign In
      </button>
    </div>
  );
}

function SignUpForm() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "0 50px",
        height: "100%",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontWeight: "bold", margin: 0 }}>Create Account</h1>
      <div
        style={{
          margin: "20px 0",
        }}
      >
        <a
          href="#"
          style={{
            border: "1px solid #DDDDDD",
            borderRadius: "50%",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 5px",
            height: "40px",
            width: "40px",
            textDecoration: "none",
            color: "#333",
          }}
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          href="#"
          style={{
            border: "1px solid #DDDDDD",
            borderRadius: "50%",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 5px",
            height: "40px",
            width: "40px",
            textDecoration: "none",
            color: "#333",
          }}
        >
          <i className="fab fa-google-plus-g" />
        </a>
        <a
          href="#"
          style={{
            border: "1px solid #DDDDDD",
            borderRadius: "50%",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 5px",
            height: "40px",
            width: "40px",
            textDecoration: "none",
            color: "#333",
          }}
        >
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
      <span style={{ fontSize: "12px" }}>
        or use your email for registration
      </span>
      <input
        type="text"
        name="name"
        placeholder="Name"
        style={{
          backgroundColor: "#eee",
          border: "none",
          padding: "12px 15px",
          margin: "8px 0",
          width: "100%",
          borderRadius: "4px",
          outline: "none",
        }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        style={{
          backgroundColor: "#eee",
          border: "none",
          padding: "12px 15px",
          margin: "8px 0",
          width: "100%",
          borderRadius: "4px",
          outline: "none",
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        style={{
          backgroundColor: "#eee",
          border: "none",
          padding: "12px 15px",
          margin: "8px 0",
          width: "100%",
          borderRadius: "4px",
          outline: "none",
        }}
      />
      <button
        style={{
          borderRadius: "20px",
          border: "1px solid #FF4B2B",
          backgroundColor: "#FF4B2B",
          color: "#FFFFFF",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "12px 45px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          transition: "transform 80ms ease-in",
          cursor: "pointer",
          outline: "none",
          marginTop: "10px",
        }}
      >
        Sign Up
      </button>
    </div>
  );
}

export default function Login() {
  const [type, setType] = useState<"signIn" | "signUp">("signIn");

  const handleOnClick = (text: "signIn" | "signUp") => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  const isRightPanelActive = type === "signUp";

  return (
    <div
      style={{
        background: "#f6f5f7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Montserrat, sans-serif",
        height: "100vh",
        margin: "-20px 0 50px",
      }}
    >
      <h2>Sign in/up Form</h2>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow:
            "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
          position: "relative",
          overflow: "hidden",
          width: "768px",
          maxWidth: "100%",
          minHeight: "480px",
        }}
      >
        {/* Sign Up Form */}
        <div
          style={{
            position: "absolute",
            top: 0,
            height: "100%",
            transition: "all 0.6s ease-in-out",
            left: 0,
            width: "50%",
            opacity: isRightPanelActive ? 1 : 0,
            zIndex: isRightPanelActive ? 5 : 1,
            transform: isRightPanelActive
              ? "translateX(100%)"
              : "translateX(0)",
          }}
        >
          <SignUpForm />
        </div>

        {/* Sign In Form */}
        <div
          style={{
            position: "absolute",
            top: 0,
            height: "100%",
            transition: "all 0.6s ease-in-out",
            left: 0,
            width: "50%",
            zIndex: 2,
            transform: isRightPanelActive
              ? "translateX(100%)"
              : "translateX(0)",
          }}
        >
          <SignInForm />
        </div>

        {/* Overlay Container */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: "50%",
            height: "100%",
            overflow: "hidden",
            transition: "transform 0.6s ease-in-out",
            zIndex: 100,
            transform: isRightPanelActive
              ? "translateX(-100%)"
              : "translateX(0)",
          }}
        >
          <div
            style={{
              background: "linear-gradient(to right, #FF4B2B, #FF416C)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "0 0",
              color: "#FFFFFF",
              position: "relative",
              left: "-100%",
              height: "100%",
              width: "200%",
              transform: isRightPanelActive
                ? "translateX(50%)"
                : "translateX(0)",
              transition: "transform 0.6s ease-in-out",
            }}
          >
            {/* Left Overlay Panel */}
            <div
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "0 40px",
                textAlign: "center",
                top: 0,
                height: "100%",
                width: "50%",
                transform: isRightPanelActive
                  ? "translateX(0)"
                  : "translateX(-20%)",
                transition: "transform 0.6s ease-in-out",
                left: 0,
              }}
            >
              <h1 style={{ fontWeight: "bold", margin: 0 }}>Welcome Back!</h1>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 100,
                  lineHeight: "20px",
                  letterSpacing: "0.5px",
                  margin: "20px 0 30px",
                }}
              >
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => handleOnClick("signIn")}
                style={{
                  borderRadius: "20px",
                  border: "1px solid #FFFFFF",
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: "bold",
                  padding: "12px 45px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  transition: "transform 80ms ease-in",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                Sign In
              </button>
            </div>

            {/* Right Overlay Panel */}
            <div
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "0 40px",
                textAlign: "center",
                top: 0,
                height: "100%",
                width: "50%",
                transform: isRightPanelActive
                  ? "translateX(20%)"
                  : "translateX(0)",
                transition: "transform 0.6s ease-in-out",
                right: 0,
              }}
            >
              <h1 style={{ fontWeight: "bold", margin: 0 }}>Hello, Friend!</h1>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 100,
                  lineHeight: "20px",
                  letterSpacing: "0.5px",
                  margin: "20px 0 30px",
                }}
              >
                Enter your personal details and start journey with us
              </p>
              <button
                onClick={() => handleOnClick("signUp")}
                style={{
                  borderRadius: "20px",
                  border: "1px solid #FFFFFF",
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: "bold",
                  padding: "12px 45px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  transition: "transform 80ms ease-in",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
