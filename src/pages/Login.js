import React from "react";

// strapi function
// import loginUser from "../strapi/loginUser";
// import registerUser from "../strapi/registerUser";
//handle user
import { useHistory } from "react-router-dom";
// import { UserContext } from "../context/user";
 
import { AppContext } from "../context/settings";
export default function Login() {
  const history = useHistory();
  // setup user context
  // const { userLogin, alert, showAlert } = React.useContext(UserContext);
  const appContext = React.useContext(AppContext); // for reading login status

  // state values
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, confirmPassword] = React.useState("");
  const [username, setUsername] = React.useState("default");
  const [isMember, setIsMember] = React.useState(true);

  let isEmpty = !email || !password || !username || alert.show;

  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "customertest@gmail.com" && password === "2020") {
      console.log("here");
      appContext.setlogin();
      history.push("/landlord/activity");
    }
  };

  return (
    <div className="form section loginbg doorcasedark-bg">
      <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
          <img alt="dr-logo" src="/imgs/doorcase-logo.png" class="img-fluid" />
        </div>

        <div class="text-white">
          <h3>Welcome to Doorcares</h3>
          <p class="font-light">{isMember ? "Sign in" : "Register"} | Finger tip tenant management</p>
        </div>

        <form className="m-t">

          <div className="form-group">

            <input
            className="form-control"
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          
          {!isMember && (
            <div className="form-group">
              <input
                type="text"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="form-control"
                placeholder="Username"
              />
            </div>
          )}
          
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              class="form-control" placeholder="Password"
            />
          </div>
          {/* end of single input */}
          {/* single input */}
          
          {!isMember && (
            <div className="form-group">
            <input
              type="password"
              id="password"
              value={cpassword}
              onChange={e => confirmPassword(e.target.value)}
              class="form-control" placeholder="Confirm Password"
            />
          </div>
          )}
      <hr />
          {/* end of single input */}
          {/* empty form text */}
          {isEmpty && (
            <p className="form-empty text-white">please fill out all form fields</p>
          )}
          {/* submit btn */}
          {!isEmpty && (
            <button
              type="submit"
              className="btn btn-primary block full-width m-b"
              onClick={handleSubmit}
            >
              Login
            </button>
          )}
          {/* register link */}
          <small className="register-link text-white">
            {isMember ? "Not a member? Please sign up" : "Already a member? "}
            <button type="button" onClick={toggleMember} className="btn btn-link px-1">
              click here
          </button>
          </small>
        </form>
      </div>
    </div>
  );

  // return (
  //   <section className="form section">
  //     <h2 className="section-title">{isMember ? "sign in" : "register"}</h2>
  //     <form className="login-form">
  //       {/* single input */}
  //       {/* end of single input */}
  //       {/* single input */}
  //       <div className="form-control">
  //         <label htmlFor="password">password</label>
  //         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  //       </div>
  //       {/* end of single input */}
  //       {/* single input */}
  //       {!isMember && (
  //         <div className="form-control">
  //           <label htmlFor="username">username</label>
  //           <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
  //         </div>
  //       )}

  //       {/* end of single input */}
  //       {/* empty form text */}
  //       {isEmpty && <p className="form-empty">please fill out all form fields</p>}
  //       {/* submit btn */}
  //       {!isEmpty && (
  //         <button type="submit" className="btn btn-block btn-primary" onClick={handleSubmit}>
  //           submit
  //         </button>
  //       )}
  //       {/* register link */}
  //       <p className="register-link">{isMember ? "need to register" : "already a member"}</p>
  //     </form>
  //   </section>
  // );
}
