import { apiKey, baseURL } from "../../../lib/tmdb";

export default async (request, response) => {
  // console.log("query", request.query);

  const result = await fetch(
    `${baseURL}/movie/${request.query.id}?api_key=${apiKey}`
  );
  const json = await result.json();
  // console.log(json);

  response.status(200).json({
    info: json,
  });
};
