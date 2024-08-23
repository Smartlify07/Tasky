import SignUpForm from "../ui/signup/sign-up-form";

const SignUpPage = () => {
  return (
    <main className="flex items-center justify-center bg-yellow-1000 flex-col min-h-screen">
      <h1 className="text-4xl text-center font-medium mb-6">Sign Up 🚀</h1>

      <SignUpForm />
    </main>
  );
};

export default SignUpPage;
