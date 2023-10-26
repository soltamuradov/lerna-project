import axios from "axios";

const getProducts = async ({ page }) => {
  const skip = 10 * page;
  const response = await axios.get(
    `https://dummyjson.com/products?limit=10&skip=${skip}`,
  );
  return response.data;
};

export default getProducts