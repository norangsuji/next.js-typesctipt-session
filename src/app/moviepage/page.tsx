"use client";

import { useState, useEffect } from "react";
import StyledFont from "./components/StyledFont";
import StyledColumn from "./components/StyledColumn";
import StyledGrid from "./components/StyledGrid";
import { fetchNowPlayingMovies } from "@/lib/apiClient";
import styled from "styled-components";

// 영화 데이터를 정의하는 타입
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

// 스크롤바를 제거하는 컨테이너 스타일
const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: scroll; /* 스크롤은 가능하지만, 스크롤바는 숨김 */
  scrollbar-width: none; /* Firefox 스크롤바 제거 */
  -ms-overflow-style: none; /* IE 스크롤바 제거 */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari 스크롤바 제거 */
  }
`;

export default function MoviePage() {
  const [movies, setMovies] = useState<Movie[] | null>(null); // 초기값을 `null`로 설정해 서버/클라이언트 일치를 보장
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function loadMovies() {
      try {
        const moviesData: Movie[] = await fetchNowPlayingMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error(error);
      }
    }

    loadMovies();
  }, []);

  // 데이터가 로드되기 전 로딩 상태 표시
  if (!movies) {
    return (
      <PageContainer>
        <StyledFont $color="white" $font="1.5rem" style={{ textAlign: "center", marginTop: "2rem" }}>
          Loading...
        </StyledFont>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <StyledColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="1rem" $margin="4rem 0rem">
        <StyledFont $color="white" $font="1.5rem">
          영화 페이지
        </StyledFont>
        <StyledColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="1rem">
          <StyledFont $color="white" $font="2rem" $fontweight="bold">
            현재 상영 중인 영화
          </StyledFont>
        </StyledColumn>
        <StyledGrid $columns="repeat(auto-fill, minmax(150px, 1fr))" $gap="2rem" style={{ width: "80%" }}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              <img
                src={`${imageBaseUrl}${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ margin: "0.5rem 0", fontSize: "1rem" }}>{movie.title}</h3>
              <p style={{ fontSize: "0.8rem", opacity: 0.8 }}>{movie.release_date}</p>
            </div>
          ))}
        </StyledGrid>
      </StyledColumn>
    </PageContainer>
  );
}
