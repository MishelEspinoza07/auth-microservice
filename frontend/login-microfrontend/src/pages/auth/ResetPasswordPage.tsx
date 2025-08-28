import React, { useState } from "react";
import SocialLogin from "../../components/SocialLogin";
import upbLogo from "/upblogo.jpeg";
import figuraIzq from "../../assets/fotito.png";
import figuraDer from "../../assets/fotito.png";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordPage({ position = "center" }: { position?: string }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const validate = (): string[] => {
    const errs: string[] = [];
    if (password.length < 8) {
      errs.push("La contraseña debe tener al menos 8 caracteres.");
    }
    if (!/[A-Z]/.test(password)) {
      errs.push("La contraseña debe contener al menos una letra mayúscula.");
    }
    if (!/[a-z]/.test(password)) {
      errs.push("La contraseña debe contener al menos una letra minúscula.");
    }
    if (!/[0-9]/.test(password)) {
      errs.push("La contraseña debe contener al menos un número.");
    }
    if (password !== confirm) {
      errs.push("Las contraseñas no coinciden.");
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (v.length > 0) {
      setErrors(v);
      return;
    }
    navigate("/reset-confirmation", { state: { message: "Contraseña guardada" } });
  };

  return (
    <div className="login-background">
      <div className="login-layout two-columns">
        {position == "left" && (
          <div className="figure-col">
            <img src={figuraIzq} alt="Figura izquierda" />
          </div>
        )}

        <div className="form-col">
          <img src={upbLogo} alt="UPB Logo" className="logo" />
          <h2>Reset Password</h2>

          {errors.length > 0 && (
            <div style={{ width: "100%", marginBottom: "1rem", color: "#c53030" }}>
              {errors.map((err, i) => (
                <div key={i}>{err}</div>
              ))}
            </div>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Nueva contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            <button type="submit" className="login-btn">
              Reset Password
            </button>
          </form>

          <SocialLogin />
        </div>

        {position == "right" && (
          <div className="figure-col">
            <img src={figuraDer} alt="Figura derecha" />
          </div>
        )}
      </div>
    </div>
  );
}
