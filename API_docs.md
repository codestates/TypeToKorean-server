# TypeToKorean-server API docs

## describe your API server

| Method | URL               | Body                  | response                   |
| get    | /                 | null                  |                            |
| post   | /                 |                       |                            |
| ------ | ----------------- | --------------------- |--------------------------- |

| get    | /users            | null                  | {{id:1, username: '김홍식', pw: '1111', email: "kim..", phone: " 01000000000"},{id:2, username: '신동호' ....}...}   |

| get    | /users/id         | null                  | {id:1, username: '김홍식', pw: '1111', email: "kim..", phone: " 01000000000"}   |

| post   | /users            | {username:'한상훈', pw:"0000", email:"han@...", phone: "01010001000"}               | {id:3, username:'한상훈', pw:"0000", email:"han@...", phone: "01010001000"}   |

| post   | /login            | { email:"kim..", pw:'1111' }   | {id:1, username: '김홍식', email: "kim..", loginlately: "2019-10-29-16-32"}   |

| post   | /logout            | {id:1, username: '김홍식', email: "kim..", loginlately: "2019-10-29-16-32"}   | {id:1, username: '김홍식', email: "kim..", logoutlately: "2019-10-29-18-32"}   |

| get    | /typeInformation  | null                  | {{id:1, typeSpeed: 200, score: 100, typo: "" ..},{id:2, typeSpeed: 220, score: 90, typo:  ..}...}   |

| post   | /typeInformation  | {id: 2, typeSpeed: '210', score:'100',...}   | {id: 2, typeSpeed: 215, score:190,...}   |

| get    | /profile/id       | null                  | {id:1, username: '김홍식', pw: '1111', email: "kim..", phone: " 01000000000", typeSpeed: 200, score: 100, typo: "" .}   |

| get    | /statistics       | null                  | { usersAvgSpeed:  190, userSpeed: 200, ...}   |
