const URL = "http://localhost:1313";

export const cheeseLoader = async () => {
  const response = await fetch(URL + "/cheese");
  const cheese = await response.json();
  return cheese;
};

export const showCheeseLoader = async ({ params }) => {
  const response = await fetch(URL + "/cheese/" + params.id);
  const oneCheese = await response.json();
  return oneCheese;
};
