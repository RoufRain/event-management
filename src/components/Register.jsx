import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  //for show success messeage

  //   const [success, setSuccess] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    //check credential password validate
    //let regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password.length < 6) {
      swal("password should not less than 6 characters", "error");
      return;
      // } else if (!/A-Z/.test(password)) {
      //   swal("password should contain atleast one capital letter", "error");
      //   return;
      // } else if (!/@#$%^&*/.test(password)) {
      //   swal("password should contain one special character", "error");
      //   return;
    }

    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        swal("Registration Successful!", "success");
      })
      .catch((error) => {
        console.log(error);
        swal("Already Registered!", "error");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Already have account?{" "}
                <Link className="text-lg text-blue-500" to={"/login"}>
                  Login
                </Link>
              </a>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
