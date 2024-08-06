export const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "https://taskbud-git-feature-homepage-obinna-anosikes-projects.vercel.app"
      : "https://taskbud-git-feature-homepage-obinna-anosikes-projects.vercel.app";

  return base_url;
};
