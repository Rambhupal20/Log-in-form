import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username.trim() || !formData.password.trim()) {
      setError('Please fill in both name and password.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      alert(`Welcome back, ${formData.username}!`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Name or Email</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="e.g. John Doe"
              value={formData.username}
              onChange={handleChange}
              className="form-input"
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <div className="password-label-row">
              <label htmlFor="password">Password</label>
              <a href="#forgot" className="forgot-link">Forgot?</a>
            </div>
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>

        <p className="signup-prompt">
          Don't have an account? <a href="#signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;