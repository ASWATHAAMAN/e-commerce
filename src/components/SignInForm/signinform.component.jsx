import { googleSignInPopUp ,createEcommerceDb} from "../../utils/firebase";

const SignInForm = () => {
  const googleSignIn = async () => {
    const {user}= await googleSignInPopUp();
    const userRef = await createEcommerceDb(user)
    console.log(userRef);
  };

  return (
    <>
      <main className="flex flex-col justify-center ">
        <h2 className="text-[22px] font-[800] ">Don't have an account?</h2>
        <span className="text-[16px] font-[500]">
          Sign up with your email and password
        </span>
        <div className="flex flex-col gap-4 my-8">
          <div>
            <label htmlFor="mail" className="font-[500]">
              Email
            </label>
            <br />
            <input
              type="email"
              id="mail"
              className="border-b-2 border-black pr-32 outline-none"
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
              className="border-b-2 border-black pr-32 outline-none"
            />
          </div>
        </div>
        <div className="flex gap-4 text-[14px]">
          <button
            type="submit"
            className="border-2 border-black px-4 py-1 bg-black text-white"
          >
            SIGN IN
          </button>
          <button
            type="submit"
            className="border-2 border-blue-600 px-4 py-1 bg-blue-600 text-white"
            onClick={googleSignIn}
          >
            GOOGLE SIGN IN
          </button>
        </div>
      </main>
    </>
  );
};

export default SignInForm;
