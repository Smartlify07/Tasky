import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function SignIn() {
  return (
    <main
      className={`${lato.className} h-screen flex flex-col gap-2 items-center justify-center bg-gradient-to-tl from-primary `}
    >
      <h1 className="text-4xl text-dark font-medium">Join TaskBud Today!</h1>
      <p className="text-sm text-tertiary mb-4  w-5/12 text-center self-center">
        Boost your productivity, collaborate with others, and enjoy a fun task
        management experience.
      </p>
      <form className="flex flex-col gap-3 md:w-6/12 lg:w-4/12">
        <input
          type="email"
          placeholder="johndoe@email.com"
          className={` border rounded-sm py-3 transition-all px-3 focus:outline-none focus:ring-4 focus:ring-primary`}
        />
        <input
          type="password"
          placeholder="password"
          className={`${lato.className} border rounded-sm py-3 transition-all px-3 focus:outline-none focus:ring-4 focus:ring-primary`}
        />

        <button
          className={`${lato.className} bg-dark text-white rounded-md py-3 mt-1 font-semibold text-lg `}
        >
          Sign in
        </button>

        <p className="text-sm text-tertiary">Forgot your password?</p>
      </form>
    </main>
  );
}
