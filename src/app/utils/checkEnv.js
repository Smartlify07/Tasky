export const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://taskbud-git-feature-homepage-obinna-anosikes-projects.vercel.app/";

  return base_url;
};
