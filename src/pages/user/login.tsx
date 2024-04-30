import React from "react";

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <form method="post" action="/api/auth/login">
        <input type="text" name="email" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
