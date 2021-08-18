const mealFinderAPI = async ({ queryKey }) => {
    const [, baseURL, searchParameter, mealName] = queryKey;
  
    const res = await fetch(`${baseURL}${searchParameter}${mealName}`);
    return res.json();
  };
  
  export default mealFinderAPI;