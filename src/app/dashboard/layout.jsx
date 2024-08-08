import NavMobile from "../ui/dashboard/nav-mobile";
import SideNav from "../ui/dashboard/side-nav";

export default function Layout({ children }) {
  return (
    <main
      className="flex flex-col items-center gap-6 bg-primary  min-h-screen relative
      md:items-stretch md:flex-row md:px-4"
    >
      <SideNav />
      {children}

      <NavMobile />
    </main>
  );
}
