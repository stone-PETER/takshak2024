import { FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-12 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-12">
        {/* College Info */}
        <div className="college-info text-left p-4 flex-1 md:w-1/3">
          <p className="college-name text-base md:text-lg">
            Mar Athanasius College of Engineering <br />
            Kothamangalam <br />
            Kerala <br />
            India <br />
            686666 <br />
            <a href="mailto:support@takshak.in" className="text-blue-400 hover:underline">support@takshak.in</a>
          </p>
        </div>

        {/* Useful Links */}
        <div className="useful-links text-left p-4 flex-1 md:w-1/3">
          <h2 className="text-lg font-semibold mb-2">Useful Links</h2>
          <ul className="text-sm md:text-base space-y-2">
            <li>
              <a href="#hero" className="hover:text-gray-400 transition duration-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400 transition duration-300">About</a>
            </li>
            <li>
              <a href="/events" className="hover:text-gray-400 transition duration-300">Events</a>
            </li>
            <li>
              <a href="https://takshak-mca.in/" className="hover:text-gray-400 transition duration-300">MCA WEBSITE</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="contact-info flex flex-col items-center text-center p-4 flex-1 md:w-1/3">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <div className="flex flex-row gap-4">
            <span className="flex items-center text-2xl">
              <a
                href="https://www.instagram.com/takshak.24/"
                className="text-pink-500 hover:text-pink-700 transition duration-300"
              >
                <FaInstagram />
              </a>
            </span>
            <span className="flex items-center text-2xl">
              <a
                href="mailto:support@takshak.in"
                className="text-red-500 hover:text-red-700 transition duration-300"
              >
                <FaEnvelope />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Takshak 24. All rights reserved.
        </p>
        <p className="text-sm md:text-base">
          Designed and developed by Takshak 24 Webteam.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
