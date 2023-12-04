import { createAuthUserWithEmailAndPassword } from "../../utils/firebase";
import { useState } from "react";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const submitHandler = async (e) => {
    e.preventDefault();
     if (!displayName || !email) {
       alert(`Fill all the fields`);
       return;
     }
    if (!password || !confirmPassword) {
      alert(`password do not match`);
      return;
    }
   
    try {
      const res = await createAuthUserWithEmailAndPassword(email, password);
      console.log(res);
    } catch (err) {
      console.log(`error occurred`).err.message;
      console.log(err.code);
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <>
      <main className="flex flex-col justify-center ">
        <h2 className="text-[22px] font-[800] ">Don't have an account?</h2>
        <span className="text-[16px] font-[500]">
          Sign up with your email and password
        </span>
        <form className="flex flex-col gap-4 my-8" onSubmit={submitHandler}>
          <div>
            <label htmlFor="name" className="font-[500]">
              Display Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={displayName}
              onChange={changeHandler}
              className="border-b-2 border-black pr-32 outline-none"
            />
          </div>
          <div>
            <label htmlFor="mail" className="font-[500]">
              Email
            </label>
            <br />
            <input
              type="email"
              id="mail"
              name="mail"
              value={email}
              onChange={changeHandler}
              className="border-b-2 border-black pr-32 outline-none "
            />
          </div>
          <div>
            <label htmlFor="password" className="font-[500]">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={changeHandler}
              className="border-b-2 border-black pr-32 outline-none"
            />
          </div>
          <div>
            <label htmlFor="pass" className="font-[500]">
              Confirm Password
            </label>
            <br />
            <input
              type="password"
              id="pass"
              name="pass"
              value={confirmPassword}
              onChange={changeHandler}
              className="border-b-2 border-black pr-32 outline-none"
            />
          </div>
          <div className="flex gap-4 text-[14px]"></div>
          <button
            type="submit"
            className="border-2 border-black px-4 py-1 bg-black text-white"
          >
            SIGN UP
          </button>
        </form>
      </main>
    </>
  );
};

export default SignUpForm;
