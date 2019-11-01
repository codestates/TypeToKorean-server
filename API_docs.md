# TypeToKorean-server API docs

## describe your API server

| Method | URL               | Body                  | response                   |
| get    | /                 | null                  |                            |
| post   | /                 |                       |                            |
| ------ | ----------------- | --------------------- |--------------------------- |

| get    | /users            | null                  |
[
    {"id": 1, "email":"bnnjj@naver.com", "username": "한상훈", "pw": "81973","phone": "01000001123","created_at": "Thu Oct 31 2019 19:03:06 GMT+0900 (한국 표준시)", "loginlately": null, "logoutlately": null,"image": null,"createdAt": "2019-11-01T00:51:33.000Z","updatedAt": "2019-11-01T00:51:33.000Z"},{"id": 2,"email":"SIN@naver.com","username": "신동호","pw": "0eae1","phone": "01000001123","created_at":"Thu Oct 31 2019 19:03:06 GMT+0900 (한국 표준시)","loginlately": null,"logoutlately": null,"image": null,"createdAt": "2019-11-01T01:22:10.000Z","updatedAt": "2019-11-01T01:22:10.000Z"} ...
]   |

| get    | /users/id         | null                  |   {
"id": 4,
"email": "hoonmin@naver.com",
"username": "세종대왕",
"pw": "ca12c",
"phone": "01000001123",
"created_at": "Thu Oct 31 19:03:06 GMT+0900 (한국 표준시)",
"loginlately": null,
"logoutlately": null,
"image": null,
"createdAt": "2019-11-01T07:15:00.000Z",
"updatedAt": "2019-11-01T07:15:00.000Z"
}   |

| post   | /users            |   {
"username":"세종대왕",
"pw":"나랏말씀",
"created_at": "Thu Oct 31 19:03:06 GMT+0900 (한국 표준시)",
"email":"hoonmin@naver.com",
"phone":"01000001123"
}   |   {
"id": 4,
"email": "hoonmin@naver.com",
"username": "세종대왕",
"pw": "ca12c",
"phone": "01000001123",
"created_at": "Thu Oct 31 19:03:06 GMT+0900 (한국 표준시)",
"loginlately": null,
"logoutlately": null,
"image": null,
"createdAt": "2019-11-01T07:15:00.000Z",
"updatedAt": "2019-11-01T07:15:00.000Z"
}   |

| post   | /login            |   {
"email": "hoonmin@naver.com",
"pw":"나랏말씀"
}   |   {
"id": 4,
"username": "세종대왕",
"image": null
}   |

| post   | /logout            | null                 |   HelloWorld!, This is a TypeToKorean!   |

| get    | /typeInformation  | null                  | {{id:1, typeSpeed: 200, score: 100, typo: "" ..},{id:2, typeSpeed: 220, score: 90, typo:  ..}...}   |

| post   | /typeInformation  | {id: 2, typeSpeed: '210', score:'100',...}   | {id: 2, typeSpeed: 215, score:190,...}   |

| get    | /profile/id       | null                  | {id:1, username: '김홍식', pw: '1111', email: "kim..", phone: " 01000000000", typeSpeed: 200, score: 100, typo: "" .}   |

| get    | /statistics       | null                  | { usersAvgSpeed:  190, userSpeed: 200, ...}   |
