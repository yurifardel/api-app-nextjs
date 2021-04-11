import { apiKey, baseURL } from "../../lib/tmdb";

export default async (request, response) => {
  let q = request.query.q;
  // console.log(q);

  const result = await fetch(
    `${baseURL}/search/movie?api_key=${apiKey}&query=${q}`
  );
  const json = await result.json();

  response.status(200).json({
    list: json.results,
  });
};
