-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2015 at 03:28 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_tavares`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_company`
--

CREATE TABLE IF NOT EXISTS `tbl_company` (
  `company_id` mediumint(4) unsigned NOT NULL AUTO_INCREMENT,
  `company_name` varchar(80) NOT NULL,
  `company_address` varchar(80) NOT NULL,
  `company_phone` varchar(30) NOT NULL,
  `company_email` varchar(80) NOT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_company`
--

INSERT INTO `tbl_company` (`company_id`, `company_name`, `company_address`, `company_phone`, `company_email`) VALUES
(1, 'Test Company', '123 Fake St.', '555-555-5555', 'fake@company.test');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_criteria`
--

CREATE TABLE IF NOT EXISTS `tbl_criteria` (
  `criteria_id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `criteria_name` varchar(30) NOT NULL,
  PRIMARY KEY (`criteria_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_criteria`
--

INSERT INTO `tbl_criteria` (`criteria_id`, `criteria_name`) VALUES
(1, 'Environment'),
(2, 'Community'),
(3, 'Operating Practices'),
(4, 'Products & Services');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_facility`
--

CREATE TABLE IF NOT EXISTS `tbl_facility` (
  `facility_id` int(5) unsigned NOT NULL AUTO_INCREMENT,
  `facility_name` varchar(40) NOT NULL,
  `company_id` mediumint(4) NOT NULL,
  PRIMARY KEY (`facility_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_facility`
--

INSERT INTO `tbl_facility` (`facility_id`, `facility_name`, `company_id`) VALUES
(1, 'Test Facility', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_form_input`
--

CREATE TABLE IF NOT EXISTS `tbl_form_input` (
  `metricstep_id` smallint(3) unsigned NOT NULL AUTO_INCREMENT,
  `metric_id` smallint(2) NOT NULL,
  `step_id` smallint(3) NOT NULL,
  `metricstep_principle` tinyint(2) NOT NULL,
  `metricstep_description` text NOT NULL,
  `metricstep_gaps` text NOT NULL,
  `metricstep_actions` text NOT NULL,
  `metricstep_responsibility` tinyint(2) NOT NULL,
  `metricstep_completiondate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `metricstep_comments` text NOT NULL,
  `metricstep_status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`metricstep_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_form_input`
--

INSERT INTO `tbl_form_input` (`metricstep_id`, `metric_id`, `step_id`, `metricstep_principle`, `metricstep_description`, `metricstep_gaps`, `metricstep_actions`, `metricstep_responsibility`, `metricstep_completiondate`, `metricstep_comments`, `metricstep_status`) VALUES
(1, 1, 1, 1, 'environment description - air emissions - step 1 - level A - again', 'environment gaps - air emissions - step 1 - level A', 'environment actions - air emissions - step 1 - level A', 1, '2015-11-24 04:10:49', 'environment comments - air emissions - step 1 - level A', 1),
(2, 1, 14, 1, 'test desc - AA', 'test gaps - AA', 'test actions - AA', 1, '2015-03-03 03:02:21', 'test comments - AAA', 1),
(3, 1, 27, 1, 'test description - AAA', 'test gaps - AAA', 'test actions - AAA', 1, '2015-03-03 03:03:38', 'test comments - AAA', 1),
(4, 11, 1, 0, 'test description - Adfgsdfg', 'test gaps - A', 'test actions - A', 1, '2015-03-23 00:07:36', 'test comments - A', 1),
(5, 13, 1, 0, 'test description - Aqwedfqwedf', 'test gaps - A', 'test actions - A', 1, '2015-03-23 00:09:14', 'test comments - A', 1),
(6, 11, 14, 0, 'test description - Aertehbrtg', 'test gaps - A', 'test actions - A', 1, '2015-03-23 00:10:20', 'test comments - A', 1),
(7, 10, 1, 0, 'testing again yosdfgsdf', 'test gaps - A', 'test actions - A', 1, '2015-03-23 03:22:57', 'test comments - A', 1),
(8, 18, 1, 0, 'test description - Aasdfasdf', 'test gaps - A', 'test actions - A', 1, '2015-03-23 00:16:05', 'test comments - A', 1),
(9, 19, 1, 0, 'test description - Aasdfasdfas3 333', 'test gaps - A', 'test actions - A', 1, '2015-03-23 00:21:28', 'test comments - A', 1),
(10, 2, 1, 0, 'environment - biodiversity - step 1 - level A', 'changed', 'changed', 1, '2015-03-23 23:55:25', 'changed', 1),
(11, 1, 2, 0, 'environment description - air emissions - step 2 - level A', 'environment gaps - air emissions - step 2 - level A', 'environment actions - air emissions - step 2 - level A', 1, '2015-03-24 00:11:17', 'environment comments - air emissions - step 2 - level A', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_level`
--

CREATE TABLE IF NOT EXISTS `tbl_level` (
  `level_id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `level_name` varchar(10) NOT NULL,
  `level_desc` varchar(30) NOT NULL,
  PRIMARY KEY (`level_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_level`
--

INSERT INTO `tbl_level` (`level_id`, `level_name`, `level_desc`) VALUES
(1, 'A', 'Core Requirements'),
(2, 'AA', 'Continual Improvement'),
(3, 'AAA', 'Leadership');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_l_companyuser`
--

CREATE TABLE IF NOT EXISTS `tbl_l_companyuser` (
  `companyuser_id` mediumint(4) unsigned NOT NULL AUTO_INCREMENT,
  `company_id` mediumint(4) NOT NULL,
  `user_id` mediumint(4) NOT NULL,
  PRIMARY KEY (`companyuser_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_l_criteriametric`
--

CREATE TABLE IF NOT EXISTS `tbl_l_criteriametric` (
  `criteriametric_id` smallint(2) unsigned NOT NULL AUTO_INCREMENT,
  `criteria_id` tinyint(1) NOT NULL,
  `metric_id` smallint(2) NOT NULL,
  PRIMARY KEY (`criteriametric_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_l_criteriametric`
--

INSERT INTO `tbl_l_criteriametric` (`criteriametric_id`, `criteria_id`, `metric_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 2, 10),
(11, 2, 11),
(12, 2, 12),
(13, 2, 13),
(14, 3, 14),
(15, 3, 15),
(16, 3, 16),
(17, 3, 17),
(18, 3, 18),
(19, 3, 19),
(20, 3, 20),
(21, 4, 21),
(22, 4, 22),
(23, 4, 23),
(24, 4, 24);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_l_phasestep`
--

CREATE TABLE IF NOT EXISTS `tbl_l_phasestep` (
  `phasestep_id` smallint(3) unsigned NOT NULL AUTO_INCREMENT,
  `phase_id` tinyint(1) NOT NULL,
  `step_id` smallint(3) NOT NULL,
  PRIMARY KEY (`phasestep_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_l_phasestep`
--

INSERT INTO `tbl_l_phasestep` (`phasestep_id`, `phase_id`, `step_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 2, 6),
(7, 2, 7),
(8, 3, 8),
(9, 3, 9),
(10, 4, 10),
(11, 4, 11),
(12, 4, 12),
(13, 4, 13),
(14, 1, 14),
(15, 1, 15),
(16, 1, 16),
(17, 1, 17),
(18, 1, 18),
(19, 2, 19),
(20, 2, 20),
(21, 3, 21),
(22, 3, 22),
(23, 4, 23),
(24, 4, 24),
(25, 4, 25),
(26, 4, 26),
(27, 1, 27),
(28, 1, 28),
(29, 1, 29),
(30, 1, 30),
(31, 1, 31),
(32, 2, 32),
(33, 2, 33),
(34, 3, 34),
(35, 3, 35),
(36, 4, 36),
(37, 4, 37),
(38, 4, 38),
(39, 4, 39);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_l_principlestep`
--

CREATE TABLE IF NOT EXISTS `tbl_l_principlestep` (
  `principlestep_id` mediumint(4) unsigned NOT NULL AUTO_INCREMENT,
  `principle_id` tinyint(2) NOT NULL,
  `metricstep_id` smallint(3) NOT NULL,
  PRIMARY KEY (`principlestep_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_l_principlestep`
--

INSERT INTO `tbl_l_principlestep` (`principlestep_id`, `principle_id`, `metricstep_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_l_steplevel`
--

CREATE TABLE IF NOT EXISTS `tbl_l_steplevel` (
  `steplevel_id` smallint(3) unsigned NOT NULL AUTO_INCREMENT,
  `level_id` tinyint(1) NOT NULL,
  `step_id` smallint(3) NOT NULL,
  PRIMARY KEY (`steplevel_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_l_steplevel`
--

INSERT INTO `tbl_l_steplevel` (`steplevel_id`, `level_id`, `step_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13),
(14, 2, 14),
(15, 2, 15),
(16, 2, 16),
(17, 2, 17),
(18, 2, 18),
(19, 2, 19),
(20, 2, 20),
(21, 2, 21),
(22, 2, 22),
(23, 2, 23),
(24, 2, 24),
(25, 2, 25),
(26, 2, 26),
(27, 3, 27),
(28, 3, 28),
(29, 3, 29),
(30, 3, 30),
(31, 3, 31),
(32, 3, 32),
(33, 3, 33),
(34, 3, 34),
(35, 3, 35),
(36, 3, 36),
(37, 3, 37),
(38, 3, 38),
(39, 3, 39);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_l_userstep`
--

CREATE TABLE IF NOT EXISTS `tbl_l_userstep` (
  `userstep_id` mediumint(4) unsigned NOT NULL AUTO_INCREMENT,
  `metricstep_responsibility` tinyint(2) NOT NULL,
  `user_id` mediumint(4) NOT NULL,
  PRIMARY KEY (`userstep_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_l_userstep`
--

INSERT INTO `tbl_l_userstep` (`userstep_id`, `metricstep_responsibility`, `user_id`) VALUES
(1, 1, 1),
(2, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_metric`
--

CREATE TABLE IF NOT EXISTS `tbl_metric` (
  `metric_id` smallint(2) unsigned NOT NULL AUTO_INCREMENT,
  `metric_name` varchar(40) NOT NULL,
  `metric_desc` text NOT NULL,
  PRIMARY KEY (`metric_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_metric`
--

INSERT INTO `tbl_metric` (`metric_id`, `metric_name`, `metric_desc`) VALUES
(1, 'Air Emissions', '<li>Use of, and emissions of ozone-depleting substances (ODS)</li>\r\n<li>Generation of particulate matter, particularly PM10 and PM2.5</li>\r\n<li>Other air contaminants, include nitrogen oxides (NOx), sulphur oxides (SOx), and volatile organic compounds (VOCs)</li>'),
(2, 'Biodiversity', '<li>Where applicable, efforts should be made to assess the impacts of operations on biodiversity (especially areas of high biodiversity or protected habitats or species), and develop strategies for protection or restoration</li>'),
(3, 'Energy', '<li>Energy sources include renewable fuels (e.g. bio-diesel, wood chips), non renewable fuels (e.g. natural gas, diesel), electricity, and steam</li>\r\n<li>Energy consumption can be stationary (within facilities) or mobile (transportation-based)</li>'),
(4, 'Greenhouse Gas<br>(GHG) Emissions', '<li>Direct GHG emissions (Scope 1): From sources directly controlled by your organization, including fossil fuel consumption, fugitive emissions, and industrial processes</li>\r\n<li>Energy indirect GHG emissions (Scope 2): From the consumption of purchased electricity or steam</li>\r\n<li>Other indirect GHG emissions (Scope 3): From sources not controlled but influenced by your organization (e.g. business travel, supply chain, employee commuting)</li>'),
(5, 'Hazardous Substances', '<li>The responsible use and disposal of hazardous/toxic or controlled materials</li>'),
(6, 'Materials', '<li>Volume or weight of packaging materials</li>\r\n<li>Use of recycled and responsibly sourced materials in the manufacture of products or provision of services</li>\r\n<li>Re-use or recycling of products at the end of their life (e.g. packaging, electronics)</li>'),
(7, 'Waste', '<li>Includes solid waste, wastewater discharge, and waste heat</li>\r\n<li>Solid waste categorization according to disposal method: hazardous waste, recycled, landfill, organic, and re-use</li>\r\n<li>Consideration should be given to the waste reduction hierarchy: prevention (material substitution), reduction, re-use, recovery (e.g. waste heat), recycling, and disposal</li>'),
(8, 'Water', '<li>Water consumption from all sources (e.g. utilities, groundwater extraction)</li>\r\n<li>Conservation initiatives: reduction of water demand within facilities, recovery or re-use of water</li>'),
(9, 'Other Considerations', '<li>Other environmental impacts not listed above should also be considered and assigned as a metric if deemed relevant, for example: light pollution, noise pollution, invasive species</li>'),
(10, 'Stakeholder Engagement', '<li>Stakeholders include all individuals and groups who have an interest in, or believe they may be affected by, decisions respecting the management of the organization. They include, but are not restricted to: - Neighbors; - Aboriginal or indigenous peoples; - Suppliers; - Customers; - Contractors; - Shareholders; - Advocacy groups; and - Government or other regulatory bodies</li>\r\n<li>Efforts should be made to identify all stakeholders</li>\r\n<li>Processes should be in place to engage with stakeholders and respond to concerns about the organization’s actions that could impact them</li>'),
(11, 'Community Development', '<li>Support for community development programs (e.g. training and educational opportunities, access to technology, health care access, local supplier development) can have a very big impact as it builds capacity within the community</li>\r\n<li>Building community capacity (e.g. employment and/or skills creation) takes precedence over philanthropic efforts or volunteerism</li>'),
(12, 'Philanthropy', '<li>Should not be used to replace integration of sustainability within an organization</li>\r\n<li>Includes donations, sponsorships, or support for community development initiatives</li>\r\n<li>Philanthropic efforts should be aligned with the organization’s mandate, services, or products for example, a food production company should consider supporting programs that combat hunger</li>\r\n<li>Partnerships with other organizations should be investigated to leverage resources and maximize impact  </li>'),
(13, 'Volunteerism', '<li>Employees should be encouraged to volunteer for local community causes</li>\r\n<li>Volunteering provides needed assistance to the local community cause, but also can increase employee pride, job satisfaction, and retention</li>\r\n<li>One option is for employees to donate their professional expertise to help disadvantaged organizations (e.g. provision of pro bono services)</li>'),
(14, 'Diversity & Equal Oppurtunity', '<li>Ratio of renumeration of men to women by employment category</li>\r\n<li>Organizational procedures to ensure negative impacts are not experienced due to pregnancy or parental leaves</li>'),
(15, 'Employment', '<li>Breakdown of the organization’s work force by employment type (e.g. full-time, contract, seasonal), location, and gender</li>\r\n<li>Employee turnover rate, an indication of both employee satisfaction, and financial stability</li>'),
(16, 'Ethics', '<li>Development of organizational policies that address how ethics are maintained, and integration of ethics considerations into an organizational ‘Code of Conduct’</li>\r\n<li>Key corporate ethics issues: anti-corruption, con?ict of interest, anti-trust, anti-bribery, information disclosure, whistleblower protection, intellectual property protection, and confidentiality</li>'),
(17, 'Human Rights', '<li>Key human rights issues include harassment, abuse, discrimination, child labour, forced labour, disciplinary, and grievance procedures</li>'),
(18, 'Labor Relations', '<li>Freedom of association and collective bargaining (rights at work)</li>\r\n<li>Minimum wage or prevailing industry wage payment, with increased pay for overtime</li>\r\n<li>Limits to hours worked per week with mandatory provisions for time off</li>\r\n<li>Provision of benefits (e.g. medical, dental, life insurance), retirement savings, and vacation time/pay</li>'),
(19, 'Occupational Health & Safety', '<li>Common indicators include incident rates or days-away rates</li>\r\n<li>Employee training on health and safety processes, industrial hygiene, hazards identification, injury prevention, emergency preparedness and response, and monitoring and reporting</li>'),
(20, 'Training & Education', '<li>Empowerment and professional development of employees through investments in educational and training opportunities</li>'),
(21, 'Consumer Health & Safety', '<li>Minimize the use of hazardous materials in product manufacturing</li>\r\n<li>Design and develop products with a consideration of consumer health and safety improvements (e.g. nutritional value of foods, ergonomics, safety precautions)</li>'),
(22, 'Life Cycle Considerations', '<li>Increasing expectations that organizations should consider the ‘life cycle’ impacts of their products and/or services</li>\r\n<li>Product life cycle management is the process of managing the entire life cycle of a product, from raw material extraction through end-of-life. This approach can be referred to as ‘cradle to grave’ when materials are destined for disposal at end-of-life, or ‘cradle to cradle’ when materials are re-purposed as inputs to other products. The life cycle management approach is a major focus of many supply chain sustainability programs being introduced by major corporations.</li>'),
(23, 'Responsible Sourcing', '<li>Develop a responsible sourcing policy to obtain input materials from ethical and sustainable suppliers</li>\r\n<li>Where feasible, source from local suppliers to reduce the costs and environmental impact of transporting input materials and to support the local community</li>\r\n<li>If available, utilize input materials that have achieved a recognized sustainability certi?cation (e.g. Forest Stewardship Council, Marine Stewardship Council, etc.)</li>'),
(24, 'Supplier Engagement', '<li>Identify specific issues relevant to your industry sector (e.g. animal welfare, conflict mineral use, etc.) and engage with your suppliers to ensure all appropriate actions are being taken to properly address the issue</li>\r\n<li>Initiate dialogue and processes (e.g. audits) with suppliers to obtain feedback and data on the management of sustainability within their operations</li>\r\n<li>Circulate your organization’s ‘Code of Conduct’ to your suppliers and require that they observe and follow the principles and practices described within</li>\r\n<li>Ensure that supplier engagement is a continuous process and that procedures are in place to address any instances of non-conformance with the ‘Code of Conduct’</li>');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_phase`
--

CREATE TABLE IF NOT EXISTS `tbl_phase` (
  `phase_id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `phase_name` varchar(10) NOT NULL,
  PRIMARY KEY (`phase_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_phase`
--

INSERT INTO `tbl_phase` (`phase_id`, `phase_name`) VALUES
(1, 'Plan'),
(2, 'Do'),
(3, 'Check'),
(4, 'Act');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_principle`
--

CREATE TABLE IF NOT EXISTS `tbl_principle` (
  `principle_id` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `principle_name` varchar(20) NOT NULL,
  PRIMARY KEY (`principle_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_principle`
--

INSERT INTO `tbl_principle` (`principle_id`, `principle_name`) VALUES
(1, 'Accountability'),
(2, 'Compliance'),
(3, 'Ethical Behaviour'),
(4, 'Stakeholder'),
(5, 'Transparency');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_privileges`
--

CREATE TABLE IF NOT EXISTS `tbl_privileges` (
  `privileges_id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `privileges_level` varchar(20) NOT NULL,
  PRIMARY KEY (`privileges_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_privileges`
--

INSERT INTO `tbl_privileges` (`privileges_id`, `privileges_level`) VALUES
(1, 'User'),
(2, 'Administrator');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_status`
--

CREATE TABLE IF NOT EXISTS `tbl_status` (
  `status_id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `status_type` varchar(20) NOT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_status`
--

INSERT INTO `tbl_status` (`status_id`, `status_type`) VALUES
(1, 'Not Started'),
(2, 'Started'),
(3, 'Complete');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_step`
--

CREATE TABLE IF NOT EXISTS `tbl_step` (
  `step_id` smallint(3) unsigned NOT NULL AUTO_INCREMENT,
  `step_num` smallint(2) NOT NULL,
  `step_desc` text NOT NULL,
  PRIMARY KEY (`step_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_step`
--

INSERT INTO `tbl_step` (`step_id`, `step_num`, `step_desc`) VALUES
(1, 1, 'Identify stakeholders and assess their sustainability priorities:\r\n• Stakeholder needs \r\n• Benchmark'),
(2, 2, 'Assess and prioritize risk of each criteria and define / identify relevant metrics'),
(3, 3, 'Establish baseline for each metric'),
(4, 4, 'Develop supporting policies for each criteria'),
(5, 5, 'Develop action plan for all / each criteria and / or metric and set targets'),
(6, 6, 'Implement processes / procedures for each sustainability metric, assigning responsibility and authority'),
(7, 7, 'Implement communication / training to support processes for each sustainability metric'),
(8, 8, 'Monitor metrics / indicators'),
(9, 9, 'Audit policies, plans, procedures and self-correct'),
(10, 10, 'Report results of objectives / plans, performance and audits internally to senior management'),
(11, 11, 'Influence supply chain by advising of your policies and procedures and encourage their participation in similar programs'),
(12, 12, 'Report results to stakeholders via website, CSR / investor reports, community engagement, etc.'),
(13, 13, 'Internal / External Recognition'),
(14, 1, 'Review the following on a regular basis:\n• Relevance of stakeholders\n• Sustainability priorities of stakeholders \n• Benchmarking assessment'),
(15, 2, 'Assessment and prioritization of risk is regularly reviewed and revised as necessary'),
(16, 3, 'Regular re-evaluation of metrics to ensure relevant risks are being addressed'),
(17, 4, 'Policies are reviewed regularly and updated as required'),
(18, 5, 'Regular review and update of Action Plan'),
(19, 6, 'Processes / procedures are reviewed for accuracy and updated as required'),
(20, 7, 'Formal assessments of core competency are conducted on a regular basis'),
(21, 8, 'Performance reviewed regularly and programs developed / adjusted to ensure attainment of targets'),
(22, 9, 'Audits are carried out annually and an audit programme developed'),
(23, 10, 'Management of criteria / metrics have been integrated into formal business planning and reporting'),
(24, 11, 'Request relevant sustainability information from suppliers'),
(25, 12, 'Enhanced voluntary progress reporting through public corporate sustainability report or webpage'),
(26, 13, 'Performance-based incentives (e.g. staff bonuses) in place to recognize progress'),
(27, 1, 'Procedures are in place to actively and regularly engage with stakeholders and consider their interests in decision-making'),
(28, 2, 'Metrics that incorporate the life cycle impacts of products and/or services are identified and managed through engagement with suppliers and other value chain components'),
(29, 3, 'Baseline data is established for the life cycle impacts of products and/or services through engagement with suppliers and other value chain components'),
(30, 4, 'Corporate policies are communicated to major suppliers as a requirement that must be adopted and monitored accordingly'),
(31, 5, 'Action plan incorporates processes to manage the life cycle impacts of products and/or services'),
(32, 6, 'Support is provided to suppliers developing processes to manage relevant sustainability metrics'),
(33, 7, '• Staff are provided with continuing education opportunities to increase skills and competency\n• Education of value chain on sustainability issues'),
(34, 8, 'Performance targets are aligned with industry sector leaders'),
(35, 9, 'Systems are externally audited / certified'),
(36, 10, 'Life cycle impacts of products and/or services are a consideration in business planning decisions of senior management'),
(37, 11, '• Integrate supplier sustainability performance into purchasing decisions  \n• Audit supplier to confirm sustainability information'),
(38, 12, '• Results are reported through public sustainability reporting programs (e.g. Carbon Disclosure Project, GRI)\n• External assurance of reporting'),
(39, 13, 'Recognition from external organizations (e.g. government agency programs, associations, community organizations, NGOs, etc.)');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` mediumint(4) unsigned NOT NULL AUTO_INCREMENT,
  `user_username` varchar(16) NOT NULL,
  `user_firstname` varchar(25) NOT NULL,
  `user_lastname` varchar(30) NOT NULL,
  `user_position` varchar(30) NOT NULL,
  `user_department` varchar(30) NOT NULL,
  `user_phone` varchar(30) NOT NULL,
  `user_email` varchar(80) NOT NULL,
  `user_address` varchar(80) NOT NULL,
  `user_password` varchar(30) NOT NULL,
  `user_privileges` tinyint(1) NOT NULL,
  `facility_id` int(5) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_username`, `user_firstname`, `user_lastname`, `user_position`, `user_department`, `user_phone`, `user_email`, `user_address`, `user_password`, `user_privileges`, `facility_id`) VALUES
(1, 'testuser', 'testfirst', 'testlast', 'testposition', 'testdepartment', '555-555-5555', 'test@test.com', '321 Blast Off.', 'password', 2, 1),
(5, 'Testuser2', 'Testy', 'McTesterson', 'Testing', '0', '', 'asdf@aasdf.asdf', '', 'password', 0, 1),
(6, 'Testuser3', 'Testy', 'McTesterson', 'Testing', '0', '', 'testuser@asdf.asdf', '', 'password', 2, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
