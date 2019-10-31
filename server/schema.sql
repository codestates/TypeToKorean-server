DROP DATABASE typeToKorean;
CREATE DATABASE typeToKorean;
USE typeToKorean;

CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  username varchar(255),
  created_at VARCHAR(255),
  pw varchar(255),
  email varchar(255),
  phone varchar(255),
  loginlately VARCHAR(255),
  logoutlately VARCHAR(255),
  image varchar(255)
);

CREATE TABLE typeInformation (
  id int PRIMARY KEY AUTO_INCREMENT,
  typeSpeed int,
  score int,
  typo int,
  totaltime int,
  userid int
);

ALTER TABLE typeInformation ADD FOREIGN KEY (userid) REFERENCES users (id);
