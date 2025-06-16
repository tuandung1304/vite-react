import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 text-gray-600 dark:border-gray-800 dark:text-gray-300">
      <div className="mx-auto max-w-7xl px-3 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Company
            </h3>
            <p className="text-sm">
              Building the future of web development with modern technologies
              and best practices.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/blog"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/docs"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Documentation
                </a>
              </li>

              <li>
                <a
                  href="/privacy"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center dark:border-gray-800">
          <p className="text-sm">
            © {new Date().getFullYear()} Tuan Dung Nguyen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
