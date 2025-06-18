// This file helps resolve ESM import issues with react-icons and react-router-dom
// Using relative imports to access node_modules via symlinks
import * as FaIcons from '../node_modules/react-icons/fa';
import * as SiIcons from '../node_modules/react-icons/si';
import * as ReactRouter from '../node_modules/react-router-dom';

// Extract specific icons from FA
const {
  FaBriefcase, FaHome, FaEnvelope, FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaPhone, FaMapMarkerAlt,
  FaPaperPlane, FaExclamationCircle, FaLinkedin, FaTwitter, FaArrowRight,
  FaExternalLinkAlt, FaCalendarAlt, FaHeart
} = FaIcons;

// Extract specific icons from SI
const {
  SiExpress, SiMongodb, SiPostgresql, SiBootstrap, SiFigma,
  SiNotion, SiGooglesheets, SiPython, SiC
} = SiIcons;

// Extract router components
const { HashRouter: Router, Link, useLocation, Routes, Route } = ReactRouter;

// Export all icons for easy import
export {
  FaBriefcase, FaHome, FaEnvelope, FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaPhone, FaMapMarkerAlt,
  FaPaperPlane, FaExclamationCircle, FaLinkedin, FaTwitter, FaArrowRight,
  FaExternalLinkAlt, FaCalendarAlt, FaHeart,
  SiExpress, SiMongodb, SiPostgresql, SiBootstrap, SiFigma,
  SiNotion, SiGooglesheets, SiPython, SiC,
  Router, Link, useLocation, Routes, Route
};
