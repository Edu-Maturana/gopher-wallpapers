const apiUrl = "http://ec2-54-234-224-87.compute-1.amazonaws.com:8080/wallpapers";

export const getWallpapers = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};
