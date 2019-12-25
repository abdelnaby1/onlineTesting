-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: online_test
-- ------------------------------------------------------
-- Server version	5.7.15-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answer` (
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `AnswerBody` varchar(45) NOT NULL,
  `correct` varchar(45) NOT NULL,
  `qid` int(11) DEFAULT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,'correct-1-1','1',1),(2,'inCorrect-1-2','0',1),(3,'inCorrect-1-3','0',1),(4,'inCorrect-1-4','0',1),(5,'inCorrect-2-1','0',2),(6,'inCorrect-2-2','0',2),(7,'inCorrect-2-3','0',2),(10,'correct-2-4','1',2),(11,'correct-3-1','1',3),(12,'inCorrect-3-2','0',3),(13,'inCorrect-3-3','0',3),(14,'inCorrect-3-4','0',3),(15,'inCorrect-4-1','0',4),(16,'correct-4-2','1',4),(17,'inCorrect-4-3','0',4),(18,'inCorrect-4-4','0',4),(19,'inCorrect-5-1','0',5),(20,'inCorrect-5-2','0',5),(21,'inCorrect-5-3','0',5),(22,'correct-5-4','1',5);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `applicants`
--

DROP TABLE IF EXISTS `applicants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `applicants` (
  `applicationId` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `positionId` varchar(45) NOT NULL,
  `CV` varchar(200) NOT NULL,
  PRIMARY KEY (`applicationId`),
  UNIQUE KEY `applicationId_UNIQUE` (`applicationId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applicants`
--

LOCK TABLES `applicants` WRITE;
/*!40000 ALTER TABLE `applicants` DISABLE KEYS */;
INSERT INTO `applicants` VALUES (1,'26','1',''),(5,'26','1',''),(7,'kkrem551','3','kkrem551_Full Stack Developer.pdf'),(8,'kkrem551','','kkrem551_.pdf'),(9,'kkrem551','5','kkrem551_Python Developer.pdf');
/*!40000 ALTER TABLE `applicants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam_status`
--

DROP TABLE IF EXISTS `exam_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exam_status` (
  `record_id` int(11) NOT NULL AUTO_INCREMENT,
  `examId` varchar(45) DEFAULT NULL,
  `score` int(11) DEFAULT '0',
  `finishing_date` date DEFAULT NULL,
  `process_id` varchar(45) DEFAULT NULL,
  `preference` int(11) DEFAULT NULL,
  `isFinished` int(11) DEFAULT '0',
  PRIMARY KEY (`record_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam_status`
--

LOCK TABLES `exam_status` WRITE;
/*!40000 ALTER TABLE `exam_status` DISABLE KEYS */;
INSERT INTO `exam_status` VALUES (9,'1',30,'2019-10-10','9',1,1),(10,'3',60,'2019-01-11','9',2,1),(11,'5',80,'2009-02-12','9',3,1),(12,'4',0,NULL,'11',1,1),(13,'1',2,NULL,'11',2,1),(14,'5',0,NULL,'11',3,0),(15,'7',0,NULL,'11',4,0),(16,'6',0,NULL,'11',5,0),(17,'1',0,NULL,'12',1,0),(18,'4',0,NULL,'12',2,0);
/*!40000 ALTER TABLE `exam_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exams`
--

DROP TABLE IF EXISTS `exams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exams` (
  `examID` int(50) NOT NULL AUTO_INCREMENT,
  `examTitle` varchar(100) NOT NULL,
  `Duration` int(11) NOT NULL,
  PRIMARY KEY (`examID`),
  UNIQUE KEY `examTitle` (`examTitle`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exams`
--

LOCK TABLES `exams` WRITE;
/*!40000 ALTER TABLE `exams` DISABLE KEYS */;
INSERT INTO `exams` VALUES (1,'Algorithms',10),(4,'DS',5),(5,'Data Structre',5),(6,'Design Patterns',15),(8,'Data Mining',10);
/*!40000 ALTER TABLE `exams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exams_process`
--

DROP TABLE IF EXISTS `exams_process`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exams_process` (
  `epid` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  `positionId` int(11) DEFAULT NULL,
  PRIMARY KEY (`epid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exams_process`
--

LOCK TABLES `exams_process` WRITE;
/*!40000 ALTER TABLE `exams_process` DISABLE KEYS */;
INSERT INTO `exams_process` VALUES (9,'kemo','2019-12-10',1),(10,'kemo','2019-12-09',2),(11,'kkrem551','2019-12-17',3),(12,'kkrem551','2019-12-10',5);
/*!40000 ALTER TABLE `exams_process` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `notfiID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `from` varchar(50) NOT NULL,
  `body` varchar(300) NOT NULL,
  `userName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`notfiID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (1,'accept','google','welcome to google','kkrem551');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `position`
--

DROP TABLE IF EXISTS `position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `position` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `availability` int(11) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `position`
--

LOCK TABLES `position` WRITE;
/*!40000 ALTER TABLE `position` DISABLE KEYS */;
INSERT INTO `position` VALUES (3,'Full Stack Developer ','is a web developer or engineer who works with both the front and back ends of a website or application',1),(4,'Android Developer',' Designing and developing advanced applications for the Android platform. Unit-testing code for robustness, including edge cases, usability, and general reliability. Bug fixing and improving application performance',1),(5,'Python Developer','Python Developer responsibilities include writing and testing code, debugging programs and integrating applications with third-party web services. To be successful in this role, you should have experience using server-side logic and work well in a team.',1);
/*!40000 ALTER TABLE `position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `qid` int(11) NOT NULL AUTO_INCREMENT,
  `questionBody` varchar(45) DEFAULT NULL,
  `examID` int(100) NOT NULL,
  PRIMARY KEY (`qid`),
  UNIQUE KEY `questionBody` (`questionBody`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'Question1',1),(2,'Question2',1),(3,'Question3',1),(4,'Question4',1),(5,'Question5',1),(6,'1*1',4),(7,'10*6+20',4),(8,'10*20-10',4),(9,'10*0+0-1',4),(10,'5*5',4),(11,'10-10',4),(12,'12*1',6),(13,'12+0',6),(15,'77+33',6),(16,'5*5/5*5',6),(17,'10*9',6),(18,'10*10.5',6),(19,'20==20 ?',6),(20,'1&&1',6);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (27,'$2a$10$7yAYGThimR6UYd0kahrQF.dB7VSYuHwFk5WeqEzf8WBMHS8u/TDXG','admin@admin','admin','123',NULL),(28,'$2a$10$jtcFaoCh1KCpxOo5lXwZ9uY7X7iCoXcNmhcfbQ57pwDjN7/nGEajW','eslamsaid2391998@gmail.com','eslamsaid2391998','1234',NULL),(29,'$2a$10$kbqeVX8HoKlFE32xomyiQ.WHUEY6uxZOzJoE2JfmJ9/NdOeXCx5Di','kkrem551@gmail.com','kkrem551','0102200000',NULL),(30,'$2a$10$SaOfk3VIm4HFTm0M0g54N.5Dyo290yEgdan.aBG02jFQRs4wfIeBq','hhr49@yahoo.com','hhr49','01120304050',1);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_answer`
--

DROP TABLE IF EXISTS `student_answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_answer` (
  `studentName` varchar(50) NOT NULL,
  `questionBody` varchar(50) DEFAULT NULL,
  `answerBody` varchar(50) DEFAULT NULL,
  `correct` tinyint(1) DEFAULT NULL,
  `examTitle` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_answer`
--

LOCK TABLES `student_answer` WRITE;
/*!40000 ALTER TABLE `student_answer` DISABLE KEYS */;
INSERT INTO `student_answer` VALUES ('kkrem551','Question1','correct-1-1',1,'Algorithms'),('kkrem551','Question4','inCorrect-4-1',0,'Algorithms'),('kkrem551','Question2','correct-2-4',1,'Algorithms'),('kkrem551','Question5','inCorrect-5-1',0,'Algorithms'),('kkrem551','Question3','inCorrect-3-3',0,'Algorithms');
/*!40000 ALTER TABLE `student_answer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-23 16:35:17
