CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `created_at` timestamp,
  `password` varchar(255),
  `email` varchar(255),
  `phone` varchar(255),
  `image` varchar(255)
);

CREATE TABLE `typeInformation` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `typeSpeed` int,
  `score` int,
  `typo` int,
  `totaltime` int,
  `userid` int
);

ALTER TABLE `typeInformation` ADD FOREIGN KEY (`userid`) REFERENCES `users` (`id`);
