export const setLocal = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const getLocal = () => {
  const token = localStorage.getItem("token");
  return token;
};
