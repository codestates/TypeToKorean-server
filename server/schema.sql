DROP DATABASE typeToKorean;
CREATE DATABASE typeToKorean;
USE typeToKorean;

CREATE TABLE users (
  id int PRIMARY KEY,
  username varchar,
  created_at VARCHAR,
  pw varchar,
  email varchar,
  phone varchar,
  loginlately VARCHAR,
  logoutlately VARCHAR,
  image varchar
);

CREATE TABLE typeInformation (
  id int PRIMARY KEY,
  typeSpeed int,
  score int,
  typo int,
  totaltime int,
  userid int
);

CREATE TABLE customData (
  id int PRIMARY KEY,
  dataname varchar,
  dataText varchar,
  userid int
);

ALTER TABLE typeInformation ADD FOREIGN KEY (userid) REFERENCES users (id);
ALTER TABLE customData ADD FOREIGN KEY (userid) REFERENCES users (id);