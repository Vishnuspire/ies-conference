import { Mail, Globe, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#091F4E] to-black text-white">
      <div className="h-1 bg-gradient-to-r from-[#091F4E] via-[#E56B46] to-[#A23E3A]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#E56B46]">IES 2027</h3>
            <p className="text-gray-300 leading-relaxed">
              11<sup>th</sup> International Engineering Symposium bringing
              together researchers and innovators from around the world.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E56B46]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About IES
                </a>
              </li>
              <li>
                <a
                  href="#call-for-papers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Call for Papers
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Registration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E56B46]">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-1 text-[#E56B46]" />
                <div>
                  <a
                    href="mailto:torii@kurume-it.ac.jp"
                    className="block hover:underline"
                  >
                    torii@kurume-it.ac.jp
                  </a>
                  <a
                    href="mailto:katta@nitk.edu.in"
                    className="block hover:underline"
                  >
                    katta@nitk.edu.in
                  </a>
                  <a
                    href="mailto:raju.aedla@vedic.edu.in"
                    className="block hover:underline"
                  >
                    raju.aedla@vedic.edu.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-[#E56B46]" />
                <span className="text-gray-300 text-sm">
                  Kurume Institute of Technology
                  <br />
                  Kurume, Fukuoka, Japan
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E56B46]">
              Partners
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.saga-u.ac.jp/en/news/20250930555/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  Vishnu Japan Outreach Centre (VJOC)
                </a>
              </li>
              <li>
                <a
                  href="https://www.srivishnu.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  Sri Vishnu Educational Society (SVES)
                </a>
              </li>
              <li>
                <a
                  href="https://www.ubdtce.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  University BDT College of Engineering
                </a>
              </li>
              <li>
                <a
                  href="https://www.aiet.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  Alva's Institute of Engineering & Technology
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 International Engineering Symposium. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              March 3-5, 2026 | Kurume, Fukuoka, Japan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
