import React from 'react'

function Login() {
    return (
        <div className="loginbg doorcasedark-bg">
            <div class="middle-box text-center loginscreen animated fadeInDown">
                <div>
                    <img alt="dr-logo" src="/imgs/doorcase-logo.png" class="img-fluid" />
                </div>
                <div class="text-white">
                    <h3>Welcome to Doorcares</h3>
                    <p class="font-light">Login | Finger tip tenant management</p>
                </div>
                <form class="m-t" action="tenancy-selection.html">
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Username" required="" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" required="" />
                    </div>
                    <button type="submit" class="btn btn-primary block full-width m-b">
                        Login </button>

                    <a href="forgotpassword.html" class="btn btn-sm btn-link btn-block"><small>Forgot password?</small></a>
                </form>
            </div>
        </div>
    )
}

export default Login
