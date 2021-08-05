-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 05, 2021 at 02:27 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mvc_framework`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `password` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `firstname`, `lastname`, `created_at`, `password`) VALUES
(1, 'mohammadjasemmzj@gmail.com', 'Muhammad', 'Jassem', '2021-04-12 02:13:27', '$2y$10$j1c9uHvMhWw7Ll0HZRxLd.e6Wl/OUcH1DG2HXpcHorOOiVoF2UcSu'),
(2, 'MJ1995@caesar.elte.hu', 'Muhammad', 'Jassem', '2021-04-12 02:25:46', '$2y$10$A2zcvcNVMH/cUKIGFaNGneMxUbZmb9Lahn3PP.7I3Q6cBaIwrqQu6'),
(3, 'mmm@mmm.com', 'MMM', 'MMM', '2021-07-28 17:24:50', '$2y$10$HcBHKLr643KjIQyDTUZyauEk9NN4ecqL4oT/Qle6CTMJPjjbsaecK'),
(4, 'mhmd@gmail.com', 'Muhammad', 'Jassem', '2021-08-02 01:25:31', '$2y$10$iAXyCCDDXd7uF1nRUAa/nOqyi37jS5LS6xcdA0OGMiSi/5cSmX8em');

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
