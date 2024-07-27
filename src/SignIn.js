import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('authenticated', 'true');
        navigate('/dashboard');
    };

    return (
        <html>
            <head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="author" content="AdminKit"/>

                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="shortcut icon" href="../public/img/icons/icon-48x48.png" />

                <link rel="canonical" href="https://demo-basic.adminkit.io/pages-sign-in.html" />

                <title>Sign In</title>

                <link href="css/app.css" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
            </head>
                <body>
                    <main class="d-flex w-100">
                        <div class="container d-flex flex-column">
                            <div class="row vh-100">
                            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div className="d-table-cell align-middle">
                                <div className="card">
                                    <div className="text-center mt-5">
                                        <h1 className="h2 fw-bold">Welcome back!</h1>
                                        <p className="lead" style={{ marginBottom: '-8px' }}>
                                            Sign in to your account to continue
                                        </p>
                                    </div>
                                    <div className="card-body mb-2 mt-0">
                                        <div className="m-sm-4">
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Password</label>
                                                    <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" />
                                                </div>
                                                <div>
                                                    <label className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="remember-me" name="remember-me" defaultChecked />
                                                        <span className="form-check-label">
                                                            Remember me next time
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="text-center mt-4">
                                                    <button type="submit" className="btn btn-lg btn-primary w-100" onClick={handleSubmit}>Sign in</button>
                                                </div>
                                            </form>
                                            <div className="col-12">
                                                <p className="mt-4 text-secondary text-center">Don't have an account? <a href="#!" className="link-primary text-decoration-none">Sign up</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                    </main>
                    <script src="../public/js/app.js"></script>
                    </body>
        </html>
        );
};

export default SignIn;
