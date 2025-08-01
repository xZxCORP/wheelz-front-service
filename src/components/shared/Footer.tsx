import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { WheelZ } from '../main/home/icons/WheelZ';

export const Footer = () => {
  return (
    <footer className="border-t border-primary-700 bg-primary-900 text-primary-200">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Logo et nom de l'application */}
          <div className="flex items-center space-x-3">
            <WheelZ className="size-10 text-secondary-500" />
            <h2 className="text-xl font-bold text-primary-100">WheelZ</h2>
          </div>

          {/* Texte de copyright */}
          <div className="text-center text-sm text-primary-400">
            <p>&copy; 2025 WheelZ. Tous droits réservés.</p>
          </div>

          {/* Icônes sociales */}
          <div className="flex space-x-4">
            <Link
              to="https://github.com/xZxCORP/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-primary-400 transition-all duration-300 hover:scale-110 hover:text-secondary-500"
              aria-label="GitHub"
            >
              <FaGithub className="size-6 transition-transform duration-300 group-hover:rotate-12" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-primary-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                GitHub
              </span>
            </Link>

            <Link
              to="https://www.instagram.com/wheelzofficiel/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-primary-400 transition-all duration-300 hover:scale-110 hover:text-secondary-500"
              aria-label="Instagram"
            >
              <FaInstagram className="size-6 transition-transform duration-300 group-hover:rotate-12" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-primary-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Instagram
              </span>
            </Link>
            <Link
              to="https://www.linkedin.com/company/wheelzz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-primary-400 transition-all duration-300 hover:scale-110 hover:text-secondary-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="size-6 transition-transform duration-300 group-hover:rotate-12" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-primary-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                LinkedIn
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
