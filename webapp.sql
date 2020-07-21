DROP TABLE IF EXISTS `my_db`.`jobs244`;

CREATE TABLE `my_db`.`jobs244` (
  `jobName` varchar(255) NOT NULL,
  `partId` varchar(255) NOT NULL,
  `qty` varchar(255) NOT NULL,
  PRIMARY KEY (`jobName`,`partId`)
  );
 
INSERT INTO `my_db`.`jobs244`(`jobName`,`partId`,`qty`)VALUES('job1244','P1244','40');
INSERT INTO `my_db`.`jobs244`(`jobName`,`partId`,`qty`)VALUES('job1244','P2244','20');
INSERT INTO `my_db`.`jobs244`(`jobName`,`partId`,`qty`)VALUES('job2244','P2244','10');
INSERT INTO `my_db`.`jobs244`(`jobName`,`partId`,`qty`)VALUES('job3244','P3244','10');
INSERT INTO `my_db`.`jobs244`(`jobName`,`partId`,`qty`)VALUES('job1244','P3244','40');
INSERT INTO `my_db`.`jobs244`(`jobName`,`partId`,`qty`)VALUES('job4244','P1244','60');
INSERT INTO `my_db`.`jobs244`(`jobName`,`partId`,`qty`)VALUES('job4244','P2244','70');