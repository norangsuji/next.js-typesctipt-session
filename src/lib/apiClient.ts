export async function fetchNowPlayingMovies() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/now_playing`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await response.json();
  return data.results;
}
