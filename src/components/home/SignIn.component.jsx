import SignInForm from "../SignInForm/signinform.component";
import SignUpForm from "../SignUpForm/signupform.component";
const SignIn = () => {
  return (
    <>
      <main className="flex justify-between items-start w-[85%] mt-[4rem] mx-auto">
        <SignInForm />
        <SignUpForm />
      </main>
    </>
  );
};

export { SignIn };
