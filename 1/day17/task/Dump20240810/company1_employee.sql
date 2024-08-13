-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: company1
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `ssn` int unsigned NOT NULL,
  `bdate` date NOT NULL,
  `address` varchar(100) NOT NULL,
  `gender` enum('m','f') NOT NULL,
  `salary` decimal(7,2) DEFAULT NULL,
  `superssn` int unsigned DEFAULT NULL,
  `dno` tinyint unsigned DEFAULT NULL,
  PRIMARY KEY (`ssn`),
  KEY `fk_superssn_employee` (`superssn`),
  KEY `fk_dno_employee` (`dno`),
  CONSTRAINT `fk_dno_employee` FOREIGN KEY (`dno`) REFERENCES `department` (`dnum`),
  CONSTRAINT `fk_superssn_employee` FOREIGN KEY (`superssn`) REFERENCES `employee` (`ssn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES ('abdallh','tallat',102660,'2001-03-01','menya elqamh','m',3000.00,102672,30),('mostafa','ibrahim',102672,'2001-03-01','menya elqamh','m',2160.00,112233,30),('ahmed','ali',112233,'1965-01-01','15 Ali fahmy St.Giza','m',1300.00,102672,10),('hanaa','sobhy',123456,'1973-03-18','38 Abdel Khalik Tharwat St. Downtown.Cairo','f',800.00,321654,10),('amr','omran',321654,'1963-09-14','44 Hilopolis.Cairo','m',2500.00,112233,10),('edward','hanna',512463,'1972-08-19','18 Abaas El 3akaad St. Nasr City.Cairo','m',1500.00,321654,20),('maged','raoof',521634,'1980-04-06','18 Kholosi st.Shobra.Cairo','m',1000.00,321654,30),('mariam','adel',669955,'1982-06-12','269 El-Haram st. Giza','f',750.00,512463,20),('noha','mohamed',968574,'1975-02-01','55 Orabi St. El Mohandiseen .Cairo','f',1600.00,968574,30);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-10 23:10:35
