import React from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if(loading || loadingGoogle) {
    return <Loading></Loading>;
  }
  let errorMessage;
  if(error || errorGoogle) {
    errorMessage = <p className="pb-2 text-red-500">{error?.message || errorGoogle?.message}</p>
  }
  const onsubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
  }
  if(user || userGoogle) {
    console.log(user || userGoogle);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Email</span>
              </label>
              <input
                {...register("email", {
                    required: {
                        value: true,
                        message: 'Email is Required'
                    },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide A Valid Email",
                  },

                })}
                type="email"
                placeholder="Email"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
              {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                    required: {
                        value: true,
                        message: 'Password is Required'
                    },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or Longer",
                  },
                })}
                type="password"
                placeholder="Password"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
              {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
              {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>
            {errorMessage}
            <input type="submit" value="Login" className="btn w-full" />
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
