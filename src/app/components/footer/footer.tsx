import { FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="college-info mb-4 md:mb-0 text-left p-4">
          <p className="college-name text-center md:text-left text-base md:text-lg">
            <br />
            Mar Athanasius College of Engineering <br />
            Kothamangalam <br />
            Kerala <br />
            India <br />
            686666 <br />
            <a href="mailto:support@takshak.in">support@takshak.in</a>
          </p>
        </div>

        <div className="contact-info flex flex-col items-center justify-center text-center gap-3">
          <h2 className="text-lg font-semibold mb-2 md:mb-0">Contact Us</h2>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <span className="flex items-center text-2xl">
              <a
                href="https://www.instagram.com/takshak.24/"
                className="text-pink-500 hover:text-pink-700 transition duration-300 mr-1"
              >
                <FaInstagram />
              </a>
            </span>
            <span className="flex items-center text-2xl">
              <a
                href="mailto:support@takshak.in"
                className="text-red-500 hover:text-red-700 transition duration-300 mr-1"
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
