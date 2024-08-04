import SideNav from "../ui/dashboard/side-nav";

export default function Layout({ children }) {
  return (
    <main className="flex gap-5 bg-primary from-primary min-h-screen">
      <SideNav />
      {children}
    </main>
  );
}
