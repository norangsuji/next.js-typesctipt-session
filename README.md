## HUFS Global LikeLion 11/14 FE 세션 과제 설명
----------------

##### 1. 이 레포지토리를 포크합니다
##### 2. 자기 이름의 브랜치를 생성하고 이동합니다.
##### 예시:
```
git checkout -b nayeong
```
##### 3. postman으로 (서버주소)/movie/now_playing API에 대한 통신 테스트를 합니다.
##### 4. .env.local 파일을 생성합니다. (.gitignore에는 이미 등록되어있습니다.)
##### 5. 서버주소, API key를 .env.local 파일에 저장합니다.
```
NEXT_PUBLIC_API_BASE_URL=https://api.themoviedb.org/3 // 서버주소
NEXT_PUBLIC_API_KEY=(발급받은 key)
```
##### 6. lib/apiClient.ts 파일에 API 호출 함수를 작성합니다. 응답값 중 result를 return하도록 합니다.
##### 7. 6번에서 만든 API 호출함수와, moviepage/components의 컴포넌트를 이용해, 상영 중인 영화를 그리드로 출력하도록 화면을 완성합니다.
##### 8. "포크한 레포지토리의 내 브랜치" 에서 "원본 레포지토리의 main 브랜치" 로 PR을 보냅니다.
##### 9. 구현한 화면 + F12 화면을 동시에 띄워 스크린샷을 촬영합니다. 개발자 도구에서 아무런 경고가 뜨지 않아야 합니다.
##### 10. 9번의 스크린샷과 PR 주소를 노션에 제출합니다.
##### 11. 과제 끝!

```
채점기준:
1. 기한 내 제출을 잘 했는가?
2. 세션에서 설명한대로, Next.JS의 client/server 파일 구조를 잘 지켜서 코드를 작성했는가?
3. 개발자 도구에서 아무런 경고가 뜨지 않는가?
```