-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: gatos_sin_hogar
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!50503 SET NAMES utf8mb4 */
;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;

/*!40103 SET TIME_ZONE='+00:00' */
;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;

CREATE DATABASE IF NOT EXISTS gatos_sin_hogar;

DROP USER IF EXISTS 'root' @'db';

DROP USER IF EXISTS 'admin' @'db';

CREATE USER 'root' @'db' IDENTIFIED BY 'G4tosS1nH0gar';

CREATE USER 'admin' @'db' IDENTIFIED BY 'G4tosS1nH0gar';

GRANT ALL PRIVILEGES ON gatos_sin_hogar.* TO 'root' @'db';

GRANT ALL PRIVILEGES ON gatos_sin_hogar.* TO 'admin' @'db';

FLUSH PRIVILEGES;

USE gatos_sin_hogar;

--
-- Table structure for table `breed`
--
DROP TABLE IF EXISTS `breed`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `breed` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `breed`
--
LOCK TABLES `breed` WRITE;

/*!40000 ALTER TABLE `breed` DISABLE KEYS */
;

INSERT INTO
  `breed`
VALUES
  (2, '4r4r');

/*!40000 ALTER TABLE `breed` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `cat`
--
DROP TABLE IF EXISTS `cat`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `cat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `gender` enum('UNKNOWN', 'MALE', 'FEMALE') NOT NULL,
  `birth_date` date DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `breed_id` int(11) DEFAULT NULL,
  `has_chip` tinyint(1) DEFAULT NULL,
  `picture` blob DEFAULT NULL,
  `description` text DEFAULT NULL,
  `personality` varchar(255) DEFAULT NULL,
  `has_passed_away` tinyint(1) NOT NULL,
  `spayed_neutered` tinyint(1) DEFAULT NULL,
  `medical_conditions` text DEFAULT NULL,
  `dietary_needs` text DEFAULT NULL,
  `clinic_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_location_id` (`location_id`),
  KEY `fk_breed_id` (`breed_id`),
  KEY `fk_clinic_id` (`clinic_id`),
  CONSTRAINT `fk_breed_id` FOREIGN KEY (`breed_id`) REFERENCES `breed` (`id`) ON DELETE
  SET
    NULL ON UPDATE NO ACTION,
    CONSTRAINT `fk_clinic_id` FOREIGN KEY (`clinic_id`) REFERENCES `clinic` (`id`) ON DELETE
  SET
    NULL ON UPDATE NO ACTION,
    CONSTRAINT `fk_location_id` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`) ON DELETE
  SET
    NULL ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 76 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `cat`
--
LOCK TABLES `cat` WRITE;

/*!40000 ALTER TABLE `cat` DISABLE KEYS */
;

INSERT INTO
  `cat`
VALUES
  (
    9,
    'Whisker',
    'MALE',
    '2019-03-10',
    12,
    2,
    1,
    _binary '[object Object]',
    'Friendly and playful',
    NULL,
    0,
    1,
    'None',
    'Loves fish',
    1
  ),
  (
    10,
    'Mittens',
    'FEMALE',
    '2020-05-15',
    8,
    NULL,
    0,
    _binary 'https://placehold.co/600x400',
    'Loves napping in the sun',
    NULL,
    0,
    0,
    'Allergic to grass',
    'Needs special diet',
    NULL
  ),
  (
    11,
    'Felix',
    'MALE',
    '2018-12-20',
    6,
    2,
    1,
    _binary '[object Object]',
    'Curious and adventurous',
    NULL,
    0,
    1,
    'None',
    'Enjoys wet food',
    1
  ),
  (
    12,
    'Snowball',
    'FEMALE',
    '2017-08-25',
    NULL,
    NULL,
    0,
    _binary 'https://placehold.co/600x400',
    'Independent but affectionate',
    NULL,
    1,
    1,
    'Arthritis',
    'Requires joint supplements',
    NULL
  ),
  (
    13,
    'Smokey',
    'MALE',
    '2019-11-08',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Gentle giant',
    NULL,
    0,
    1,
    'None',
    'Enjoys chicken treats',
    NULL
  ),
  (
    14,
    'Luna',
    'FEMALE',
    '2020-02-14',
    NULL,
    NULL,
    0,
    _binary 'https://placehold.co/600x400',
    'Loves to play with toys',
    NULL,
    0,
    0,
    'Sensitive stomach',
    'Needs a grain-free diet',
    NULL
  ),
  (
    15,
    'Oreo',
    'MALE',
    '2017-07-30',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Loves cuddles and belly rubs',
    NULL,
    0,
    1,
    'None',
    'Enjoys tuna',
    NULL
  ),
  (
    16,
    'Shadow',
    'MALE',
    '2018-05-19',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Shy but very affectionate',
    NULL,
    0,
    1,
    'None',
    'Needs prescription diet',
    NULL
  ),
  (
    17,
    'Cleo',
    'FEMALE',
    '2016-09-03',
    NULL,
    NULL,
    0,
    _binary 'https://placehold.co/600x400',
    'Graceful and loves high places',
    NULL,
    1,
    0,
    'Hyperthyroidism',
    'Requires regular medication',
    NULL
  ),
  (
    18,
    'Fluffy',
    'FEMALE',
    '2018-10-22',
    NULL,
    NULL,
    0,
    _binary 'https://placehold.co/600x400',
    'Likes to chase laser pointers',
    NULL,
    0,
    1,
    'None',
    'Enjoys fresh chicken',
    NULL
  ),
  (
    19,
    'Gizmo',
    'MALE',
    '2019-01-18',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Loves exploring new spaces',
    NULL,
    0,
    0,
    'Allergies to pollen',
    'Needs a hypoallergenic diet',
    NULL
  ),
  (
    20,
    'Simba',
    'MALE',
    '2017-04-05',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Regal and friendly',
    NULL,
    0,
    1,
    'None',
    'Enjoys lamb treats',
    NULL
  ),
  (
    21,
    'Mittens',
    'FEMALE',
    '2020-06-30',
    NULL,
    NULL,
    0,
    _binary 'https://placehold.co/600x400',
    'Enjoys sunbathing',
    NULL,
    1,
    1,
    'Chronic kidney disease',
    'Requires special renal diet',
    NULL
  ),
  (
    22,
    'Boots',
    'MALE',
    '2018-09-11',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Playful and loves toys',
    NULL,
    0,
    0,
    'None',
    'Enjoys a mixed diet',
    NULL
  ),
  (
    23,
    'Socks',
    'FEMALE',
    '2019-12-25',
    NULL,
    NULL,
    0,
    _binary 'https://placehold.co/600x400',
    'Affectionate and curious',
    NULL,
    0,
    1,
    'None',
    'Needs grain-free food',
    NULL
  ),
  (
    24,
    'Patch',
    'MALE',
    '2017-11-14',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Loves cuddling',
    NULL,
    0,
    1,
    'None',
    'Enjoys salmon',
    NULL
  ),
  (
    25,
    'Angel',
    'FEMALE',
    '2016-08-01',
    NULL,
    NULL,
    0,
    _binary 'https://placehold.co/600x400',
    'Gentle and calm',
    NULL,
    1,
    0,
    'Diabetes',
    'Needs insulin injections',
    NULL
  ),
  (
    26,
    'Midnight',
    'MALE',
    '2019-10-03',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Active and playful',
    NULL,
    0,
    1,
    'None',
    'Enjoys turkey treats',
    NULL
  ),
  (
    27,
    'Casper',
    'MALE',
    '2018-07-20',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Cuddly and friendly',
    NULL,
    0,
    1,
    'None',
    'Enjoys chicken and rice',
    NULL
  ),
  (
    28,
    'Lucky',
    'FEMALE',
    '2017-02-28',
    NULL,
    NULL,
    0,
    _binary 'https://placehold.co/600x400',
    'Loves to explore outdoors',
    NULL,
    0,
    0,
    'None',
    'Needs a high-protein diet',
    NULL
  ),
  (
    29,
    'Misty',
    'FEMALE',
    '2019-04-12',
    NULL,
    NULL,
    0,
    _binary 'https://placehold.co/600x400',
    'Loves to cuddle and purr',
    NULL,
    0,
    1,
    'None',
    'Enjoys salmon treats',
    NULL
  ),
  (
    30,
    'Tiger',
    'MALE',
    '2018-01-07',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Playful and energetic',
    NULL,
    0,
    0,
    'Sensitive skin',
    'Needs a hypoallergenic diet',
    NULL
  ),
  (
    31,
    'Max',
    'MALE',
    '2017-06-23',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Loves to play fetch',
    NULL,
    0,
    1,
    'None',
    'Enjoys chicken and rice',
    NULL
  ),
  (
    32,
    'Bella',
    'FEMALE',
    '2016-12-28',
    NULL,
    NULL,
    0,
    _binary 'https://placehold.co/600x400',
    'Affectionate and vocal',
    NULL,
    1,
    0,
    'Hypertension',
    'Needs low-sodium diet',
    NULL
  ),
  (
    33,
    'Rocky',
    'MALE',
    '2019-09-15',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Brave and adventurous',
    NULL,
    0,
    1,
    'None',
    'Enjoys tuna treats',
    NULL
  ),
  (
    34,
    'Princess',
    'FEMALE',
    '2018-04-20',
    NULL,
    NULL,
    0,
    _binary 'https://placehold.co/600x400',
    'Likes to be pampered',
    NULL,
    0,
    0,
    'Allergies to dust',
    'Needs a dust-free environment',
    NULL
  ),
  (
    35,
    'Oliver',
    'MALE',
    '2017-10-02',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Calm and intelligent',
    NULL,
    0,
    1,
    'None',
    'Enjoys seafood',
    NULL
  ),
  (
    36,
    'Loki',
    'MALE',
    '2016-05-19',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Mischievous but affectionate',
    NULL,
    0,
    1,
    'None',
    'Enjoys chicken and liver',
    NULL
  ),
  (
    37,
    'Sophie',
    'FEMALE',
    '2019-11-30',
    NULL,
    NULL,
    0,
    _binary 'https://placehold.co/600x400',
    'Gentle and graceful',
    NULL,
    1,
    0,
    'Chronic ear infection',
    'Requires regular ear cleaning',
    NULL
  ),
  (
    38,
    'Charlie',
    'MALE',
    '2018-08-10',
    NULL,
    NULL,
    1,
    _binary 'https://placehold.co/600x400',
    'Loves to play with toys',
    NULL,
    0,
    1,
    'None',
    'Enjoys a balanced diet',
    NULL
  ),
  (
    42,
    '',
    'UNKNOWN',
    '0000-00-00',
    NULL,
    NULL,
    0,
    NULL,
    '',
    NULL,
    0,
    NULL,
    '',
    '',
    NULL
  ),
  (
    43,
    'adaw',
    'MALE',
    '2023-12-26',
    NULL,
    NULL,
    0,
    NULL,
    'adwad',
    NULL,
    0,
    NULL,
    'awda',
    'xces',
    NULL
  ),
  (
    44,
    'aaa',
    'UNKNOWN',
    '0000-00-00',
    NULL,
    NULL,
    0,
    NULL,
    '',
    NULL,
    0,
    NULL,
    '',
    '',
    NULL
  ),
  (
    45,
    '',
    'UNKNOWN',
    '0000-00-00',
    NULL,
    NULL,
    0,
    NULL,
    '',
    NULL,
    0,
    NULL,
    '',
    '',
    NULL
  ),
  (
    48,
    '',
    'UNKNOWN',
    '0000-00-00',
    NULL,
    2,
    0,
    '',
    '',
    NULL,
    0,
    0,
    '',
    '',
    3
  ),
  (
    49,
    'sdfsedff',
    'UNKNOWN',
    '0000-00-00',
    NULL,
    2,
    0,
    '',
    '',
    NULL,
    0,
    0,
    '',
    '',
    3
  ),
  (
    50,
    '',
    'UNKNOWN',
    '0000-00-00',
    NULL,
    2,
    0,
    '',
    '',
    NULL,
    0,
    0,
    '',
    '',
    3
  ),
  (
    51,
    '',
    'UNKNOWN',
    '0000-00-00',
    NULL,
    2,
    1,
    '',
    '',
    NULL,
    0,
    0,
    '',
    '',
    3
  ),
  (
    52,
    '',
    'UNKNOWN',
    '0000-00-00',
    NULL,
    2,
    1,
    '',
    '',
    NULL,
    1,
    0,
    '',
    '',
    3
  ),
  (
    53,
    '',
    'UNKNOWN',
    '0000-00-00',
    NULL,
    2,
    1,
    '',
    '',
    NULL,
    1,
    0,
    '',
    '',
    3
  ),
  (
    54,
    '',
    'UNKNOWN',
    '0000-00-00',
    NULL,
    2,
    1,
    '',
    '',
    NULL,
    1,
    0,
    '',
    '',
    3
  ),
  (
    55,
    '',
    'UNKNOWN',
    '0000-00-00',
    NULL,
    2,
    1,
    '',
    '',
    NULL,
    1,
    0,
    '',
    '',
    3
  ),
  (
    56,
    '',
    'UNKNOWN',
    '0000-00-00',
    NULL,
    2,
    1,
    '',
    '',
    NULL,
    1,
    0,
    '',
    '',
    3
  ),
  (
    57,
    'gatoeditao',
    'MALE',
    '2023-12-28',
    NULL,
    2,
    1,
    _binary '[object Object]',
    'ghfbwecew',
    NULL,
    1,
    1,
    'rfew',
    'edaws',
    3
  ),
  (
    58,
    'g',
    'FEMALE',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    1,
    1,
    NULL,
    NULL,
    1
  ),
  (
    62,
    'Federico',
    'MALE',
    '1999-01-01',
    6,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasdfasdfasdfasdfa',
    NULL,
    1,
    1,
    'asdfasdfasdf',
    'asdfasdfas',
    1
  ),
  (
    63,
    'Federico',
    'MALE',
    '1999-01-01',
    6,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasdfasdfasdfasdfa',
    NULL,
    1,
    1,
    'asdfasdfasdf',
    'asdfasdfas',
    1
  ),
  (
    64,
    'Federico',
    'MALE',
    '1999-01-01',
    6,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasdfasdfasdfasdfa',
    NULL,
    1,
    1,
    'asdfasdfasdf',
    'asdfasdfas',
    1
  ),
  (
    65,
    'Federico',
    'MALE',
    '1999-01-01',
    6,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasdfasdfasdfasdfa',
    NULL,
    1,
    1,
    'asdfasdfasdf',
    'asdfasdfas',
    1
  ),
  (
    66,
    'Federico',
    'MALE',
    '1999-01-01',
    11,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasdfasdfasdfasdfa',
    NULL,
    1,
    1,
    'asdfasdfasdf',
    'asdfasdfas',
    1
  ),
  (
    67,
    'Federico',
    'MALE',
    '1999-01-01',
    11,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasdfasdfasdfasdfa',
    NULL,
    1,
    1,
    'asdfasdfasdf',
    'asdfasdfas',
    1
  ),
  (
    68,
    'Federico',
    'MALE',
    '1999-01-01',
    11,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasdfasdfasdfasdfa',
    NULL,
    1,
    1,
    'asdfasdfasdf',
    'asdfasdfas',
    1
  ),
  (
    69,
    'Federico',
    'MALE',
    '1999-01-01',
    11,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasdfasdfasdfasdfa',
    NULL,
    1,
    1,
    'asdfasdfasdf',
    'asdfasdfas',
    1
  ),
  (
    70,
    'Federico',
    'MALE',
    '1999-01-01',
    19,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasdfasdfasdfasdfa',
    NULL,
    1,
    1,
    'asdfasdfasdf',
    'asdfasdfas',
    1
  ),
  (
    71,
    'Federico',
    'MALE',
    '1999-01-01',
    6,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasdfasdfasdfasdfa',
    NULL,
    1,
    1,
    'asdfasdfasdf',
    'asdfasdfas',
    1
  ),
  (
    72,
    'Federico',
    'MALE',
    '1999-01-01',
    6,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasdfasdfasdfasdfa',
    NULL,
    1,
    1,
    'asdfasdfasdf',
    'asdfasdfas',
    1
  ),
  (
    73,
    'Federico',
    'MALE',
    '1999-01-01',
    8,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasdfasdfasdfasdfa',
    NULL,
    1,
    1,
    'asdfasdfasdf',
    'asdfasdfas',
    1
  ),
  (
    74,
    'Federico',
    'MALE',
    '1999-01-01',
    11,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasdfasdfasdfasdfa',
    NULL,
    1,
    1,
    'asdfasdfasdf',
    'asdfasdfas',
    1
  ),
  (
    75,
    'Lana',
    'MALE',
    '1999-01-01',
    6,
    2,
    1,
    _binary 'as;dlkfjasdl;fkjas;dlkfjasdf',
    'asdfasdfasdfasdfasgsdfgsdfgsdfgdfgdfgdfgdfgfgddfgfgddfgdfgdfg',
    NULL,
    1,
    0,
    'asdfasdfasdf',
    'asdfasdf',
    1
  );

/*!40000 ALTER TABLE `cat` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `category`
--
DROP TABLE IF EXISTS `category`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `category`
--
LOCK TABLES `category` WRITE;

/*!40000 ALTER TABLE `category` DISABLE KEYS */
;

INSERT INTO
  `category`
VALUES
  (1, 'Voluntariado', 'red');

/*!40000 ALTER TABLE `category` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `clinic`
--
DROP TABLE IF EXISTS `clinic`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `clinic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `phone` int(9) NOT NULL,
  `email` varchar(150) NOT NULL,
  `address` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `clinic`
--
LOCK TABLES `clinic` WRITE;

/*!40000 ALTER TABLE `clinic` DISABLE KEYS */
;

INSERT INTO
  `clinic`
VALUES
  (
    1,
    'Cliniqui3665',
    2147483647,
    'click2',
    '34sdfsrre'
  ),
  (
    2,
    'Cliniquita2',
    2147483647,
    'click2',
    '34sdfsrre'
  ),
  (
    3,
    'Cliniquita2',
    2147483647,
    'click2',
    '34sdfsrre'
  );

/*!40000 ALTER TABLE `clinic` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `location`
--
DROP TABLE IF EXISTS `location`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `description` text DEFAULT NULL,
  `x_coord` double NOT NULL,
  `y_coord` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 20 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `location`
--
LOCK TABLES `location` WRITE;

/*!40000 ALTER TABLE `location` DISABLE KEYS */
;

INSERT INTO
  `location`
VALUES
  (
    6,
    'Las Canteras',
    'efjwejnwekfnw',
    28.134747,
    -15.441128
  ),
  (
    8,
    'asdasd',
    'dsd',
    28.13394539964642,
    -15.44209420681
  ),
  (
    9,
    'test',
    'dwd',
    28.132512018421508,
    -15.448021888732912
  ),
  (
    10,
    'adw',
    'fd',
    28.134314385769418,
    -15.440291762351992
  ),
  (
    11,
    'Biblioteca',
    NULL,
    28.134253493181138,
    -15.440510889566685
  ),
  (
    12,
    'Biblioteca12',
    NULL,
    28.13401635861493,
    -15.440511703491213
  ),
  (
    13,
    'Lana',
    NULL,
    28.134366422171706,
    -15.44057607650757
  ),
  (
    14,
    'Lana35',
    'sdfsdfsdf',
    28.134762478813887,
    -15.44028985023033
  ),
  (15, 'lana36', NULL, 28.134747, -15.441128),
  (16, 'oleole', NULL, 28.134747, -15.441128),
  (17, 'laolol', NULL, 28.134747, -15.441128),
  (
    18,
    'mememem',
    NULL,
    28.134858401453535,
    -15.437443256378176
  ),
  (
    19,
    'bazar',
    'esta es la zona de bazar',
    28.134219785431842,
    -15.43984115123749
  );

/*!40000 ALTER TABLE `location` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `log`
--
DROP TABLE IF EXISTS `log`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_id` int(11) NOT NULL,
  `event` varchar(150) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_cat_id_log` (`cat_id`),
  CONSTRAINT `fk_cat_id_log` FOREIGN KEY (`cat_id`) REFERENCES `log` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `log`
--
LOCK TABLES `log` WRITE;

/*!40000 ALTER TABLE `log` DISABLE KEYS */
;

/*!40000 ALTER TABLE `log` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `phone`
--
DROP TABLE IF EXISTS `phone`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `phone` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone_number` int(11) NOT NULL,
  `type` enum('HOME', 'WORK') NOT NULL,
  `volunteer_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_volunteer_id` (`volunteer_id`),
  CONSTRAINT `fk_volunteer_id` FOREIGN KEY (`volunteer_id`) REFERENCES `volunteer` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 12 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `phone`
--
LOCK TABLES `phone` WRITE;

/*!40000 ALTER TABLE `phone` DISABLE KEYS */
;

/*!40000 ALTER TABLE `phone` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `task`
--
DROP TABLE IF EXISTS `task`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category_id` (`category_id`),
  CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE
  SET
    NULL
) ENGINE = InnoDB AUTO_INCREMENT = 6 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `task`
--
LOCK TABLES `task` WRITE;

/*!40000 ALTER TABLE `task` DISABLE KEYS */
;

INSERT INTO
  `task`
VALUES
  (1, 'gerg', 'fef', 1);

/*!40000 ALTER TABLE `task` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `volunteer`
--
DROP TABLE IF EXISTS `volunteer`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `volunteer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `email` varchar(150) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 14 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `volunteer`
--
LOCK TABLES `volunteer` WRITE;

/*!40000 ALTER TABLE `volunteer` DISABLE KEYS */
;

INSERT INTO
  `volunteer`
VALUES
  (12, 'ghrt', 'hgrtg', 'dtrger'),
  (13, 'trger', 'hytrh', 're');

/*!40000 ALTER TABLE `volunteer` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `volunteer_task`
--
DROP TABLE IF EXISTS `volunteer_task`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `volunteer_task` (
  `volunteer_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  KEY `fk_volunteer_id_tasks` (`volunteer_id`),
  KEY `fk_task_id` (`task_id`),
  CONSTRAINT `fk_task_id` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_volunteer_id_tasks` FOREIGN KEY (`volunteer_id`) REFERENCES `volunteer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `volunteer_task`
--
LOCK TABLES `volunteer_task` WRITE;

/*!40000 ALTER TABLE `volunteer_task` DISABLE KEYS */
;

/*!40000 ALTER TABLE `volunteer_task` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Dumping routines for database 'gatos_sin_hogar'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;

-- Dump completed on 2024-07-01 18:53:54