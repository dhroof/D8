import React from "react";
import "./signup-style.css";

const SignUp = () => {
  return (
    <div id="signup_body">
      <h2>Register with us to explore the content on our website</h2>

      <form>
        <div>
          *Name
          <input type="text" name="name" className="signup_inputs" required />
        </div>
        <br />

        <div>
          *Email Address
          <input type="email" name="email" className="signup_inputs" required />
        </div>
        <br />

        <div>
          *Username
          <input
            type="text"
            name="username"
            className="signup_inputs"
            required
          />
        </div>
        <br />

        <div>
          *Password
          <input
            type="text"
            name="password"
            className="signup_inputs"
            required
          />
        </div>
        <br />

        <div>
          Mobile Number <br />
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    value="+91"
                    disabled
                    className="number signup_inputs"
                    id="num1"
                  />
                </td>
                <td>
                  <input
                    type="tel"
                    className="number signup_inputs"
                    placeholder="10 digit number"
                    maxLength="10"
                    pattern="[0-9]{10}"
                    id="mnum"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        <div>
          *Date of Birth <input type="date" id="dob" name="dob" required />
          <br />
          <b>Note: </b>
          you should be at least 16 to register with us
        </div>
        <br />

        <div>
          City
          <input type="text" className="signup_inputs" id="city" name="city" />
        </div>
        <br />

        <div>
          State
          <select>
            <option>Chandigarh</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Punjab</option>
          </select>
        </div>
        <br />

        <div>
          Country
          <input
            type="text"
            id="country"
            name="country signup_inputs"
            value="India"
            disabled
          />
        </div>
        <br />

        <div>
          *Gender <br />
          <br></br>
          <input
            type="radio"
            id="male"
            className="signup_inputs"
            name="gender"
            required
          />
          <label htmlFor="male">Male</label>
          <br />
          <input
            type="radio"
            id="female"
            name="gender"
            className="signup_inputs"
          />
          <label htmlFor="female">Female</label>
          <br />
          <input
            type="radio"
            id="other"
            name="gender"
            className="signup_inputs"
          />
          <label htmlFor="other">Other</label>
          <br />
        </div>
        <br />

        <div id="language-div">
          Choose the computer languages you know :
          <br />
          <table>
            <tr>
              <td>Python</td>
              <td>
                <input
                  type="checkbox"
                  className="signup_inputs lang"
                  name="course"
                />
              </td>
            </tr>
            <tr>
              <td>Java</td>
              <td>
                <input
                  type="checkbox"
                  className="signup_inputs lang"
                  name="course"
                />
              </td>
            </tr>
            <tr>
              <td>C</td>
              <td>
                <input
                  type="checkbox"
                  className="signup_inputs lang"
                  name="course"
                />
              </td>
            </tr>
            <tr>
              <td>C++</td>
              <td>
                <input
                  type="checkbox"
                  className="signup_inputs lang"
                  name="course"
                />
              </td>
            </tr>
          </table>
          <br></br>
        </div>

        <br></br>

        <div id="buttons">
          <button type="submit" id="submit" name="submit">
            Submit
          </button>
          <button type="reset" id="reset" name="reset">
            Reset
          </button>
        </div>

        <br></br>

        <p id="footer-link">
          Click <a href="signin.html">here</a> to go to Sign In page.
        </p>
      </form>
    </div>
  );
};

export default SignUp;
