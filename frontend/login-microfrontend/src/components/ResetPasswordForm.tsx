import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/login.module.css";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd: string) => {
    return pwd.length >= 6; // mínimo 6 caracteres
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validatePassword(password)) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setSuccess("Contraseña guardada");
    setTimeout(() => {
      navigate("/reset-confirmation");
    }, 1500);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
      <input
        type="password"
        placeholder="Nueva contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
        required
      />
      <input
        type="password"
        placeholder="Confirmar contraseña"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.googleBtn}>
        Reset Password
      </button>
    </form>
  );
};

export default ResetPasswordForm;
