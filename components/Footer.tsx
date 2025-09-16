/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { XIcon } from './icons';

const Footer: React.FC = () => {
    const socialLinks = [
        {
            name: 'X',
            href: 'https://x.com/Salem_Mosabi',
            icon: XIcon,
        }
    ];

  return (
    <footer className="w-full py-4 px-8 mt-auto">
      <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Al-Amin Ajlan on ${link.name}`}
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="text-sm">
          تطوير الأمين عجلان Ai
        </p>
      </div>
    </footer>
  );
};

export default Footer;
