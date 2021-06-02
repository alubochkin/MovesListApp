export const moviesGet = async (path, query, param) => {
  const response = await fetch(
    `https://yts.mx/api/v2/${path}.json?${query}=${param}`
  );
  return response.json();
};
