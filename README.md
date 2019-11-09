# TypeToKorean-server 

## Team Name Trio

Touch Typing 원리에 기반한 외국인 대상의 한글 타자 연습 및 한국어 교육 웹 플랫폼입니다. 
Codestates IM 15 2 Weeks Project

- [https://github.com/codestates/TypeToKorean-client](https://github.com/codestates/TypeToKorean-client)   (Type To Korean client)
- [https://github.com/codestates/TypeToKorean-server](https://github.com/codestates/TypeToKorean-server)  ( Type To Korean server )

Back-end 사용 스택: Node.js(Express), MySQL(sequelize), ORM, Session, AWS ec2

How to USE
-npm install(package.json에 설치된 모듈들을 설치 해주세요.)
-check mysql(mysql -u root -p를 치면 접근이 되는지 확인해주세요.)
-in mysql, show databases;
 =>typeToKorean이 있는 지 확인 해주세요. (없으면 CREATE DATABASE typeToKorean 을 mysql에서 진행 해주세요.)

 package.json을 확인해 주세요.
 -npm run dev => run nodemon
 -npm run start => run node.js