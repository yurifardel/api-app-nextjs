import { apiKey, baseURL } from "../../lib/tmdb";

export default async (request, response) => {
  const result = await fetch(
    `${baseURL}/trending/movie/week?api_key=${apiKey}`
  );
  const json = await result.json();

  response.status(200).json({
    list: json.results,
  });
};
