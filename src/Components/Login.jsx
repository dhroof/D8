import React from "react";
import "./login-style.css";

const Login = () => {
  return (
    <div className="body_login">
      <table align="center">
        <tbody>
          <tr>
            <td id="login-td" colSpan="2">
              <center>
                <div id="logo-icon"></div>
              </center>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <form>
                <p id="login-text">Login</p>
                <div>
                  <input
                    type="text"
                    required
                    className="userpass"
                    id="username"
                  />
                  <label htmlFor="username">Your username</label>
                </div>
                <div>
                  <input
                    type="password"
                    required
                    id="password"
                    className="userpass"
                  />
                  <label htmlFor="password">Your password</label>
                </div>
                <br />
                <div>
                  <button type="submit" class="generic_button" id="login">
                    LOGIN
                  </button>
                </div>
                <p style={{ color: "rgb(160, 158, 158)" }}>
                  If you're new, click <a href="signup.html">here</a> to
                  register.
                </p>
              </form>
            </td>
            <td id="social-td">
              <h3>You can also login with:</h3>
              <div>
                <button
                  onClick={() => (window.location.href = "www.google.com")}
                  className="generic_button social-button"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                    alt="google"
                    className="social-img"
                  />
                  Continue with Google
                </button>
                <button
                  onClick={() => (window.location.href = "www.fb.com")}
                  className="generic_button social-button"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="facebook"
                    className="social-img"
                  />
                  Continue with Facebook
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Login;
