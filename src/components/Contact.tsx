import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const conveners = [
    {
      name: "Prof. Shuichi Torii",
      role: "Convener",
      institution: "Kurume Institute of Technology",
      country: "Japan",
      flag: "🇯🇵",
      email: "torii@kurume-it.ac.jp",
      phone: "+81 8052628896",
      profile: "/tori.jpg",
    },
    {
      name: "Prof. Katta Venkataramana",
      role: "Convener",
      institution: "NITK Surathkal (Retired Professor)",
      country: "India",
      flag: "🇮🇳",
      email: "katta@nitk.edu.in",
      phone: "+91 94484 75875",
      profile: "/katta.jpg",
    },
  ];

  const coConveners = [
    {
      name: "Dr. Raju Aedla",
      role: "Co-Convener",
      institution: "VEDIC, Sri Vishnu Educational Society",
      country: "India",
      flag: "🇮🇳",
      email: "raju.aedla@vedic.edu.in",
      phone: "+91 99855 45035",
      profile: "/raju.jpg",
    },
    {
      name: "Dr. C. M. Ravikumar",
      role: "Co-Convener",
      institution: "UBDT College of Engineering",
      country: "India",
      flag: "🇮🇳",
      email: "cmravibdt@gmail.com",
      phone: "+91 98450 01540",
      profile: "/ravi.jpg",
    },
    {
      name: "Dr. Satyanarayan",
      role: "Co-Convener",
      institution: "Alva's Institute of Engineering & Technology",
      country: "India",
      flag: "🇮🇳",
      email: "satyan.nitk@gmail.com",
      phone: "+91 99648 10960",
      profile: "/satyanarayana.jpg",
    },
    {
      name: "Dr. Manjunath R",
      role: "Co-Convener",
      institution: "Dept. of Civil Engineering, BMS College of Engineering, Bangalore",
      country: "India",
      flag: "🇮🇳",
      email: "manjunathr.civ@bmsce.ac.in",
      phone: "+91 81972 03686",
      profile: "/manjunath.jpg",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#091F4E] to-[#0d2a5e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conveners & Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E56B46] to-[#A23E3A] mx-auto mb-8"></div>
        </div>

        {/* Conveners Section */}
        <div className="mb-5">
          <h3 className="text-2xl font-bold text-[#E56B46] text-center mb-8">
            Conveners
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {conveners.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center w-full sm:w-[22rem] hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={person.profile}
                  alt={person.name}
                  className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-[#E56B46]/60"
                />
                <div className="text-center">
                  <h4 className="text-xl font-bold text-[#091F4E] mb-1">
                    {person.name}
                  </h4>
                  <p className="text-sm font-semibold text-[#E56B46] mb-1">
                    {person.role}
                  </p>
                  <p className="text-sm text-gray-600">{person.institution}</p>
                  <p className="text-sm text-gray-500 mb-4">{person.country}</p>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center justify-center gap-2 text-gray-700 hover:text-[#E56B46] transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="text-sm">{person.email}</span>
                    </a>
                    <div className="flex items-center justify-center gap-2 text-gray-700">
                      <Phone className="w-5 h-5" />
                      <span className="text-sm">{person.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Co-Conveners Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#E56B46] text-center mb-8">
            Co-Conveners
          </h3>

          {/* First Co-Convener (Full Width and Centered) */}
          <div className="flex justify-center mb-10">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col sm:flex-row items-center gap-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 max-w-3xl w-full">
              <img
                src={coConveners[0].profile}
                alt={coConveners[0].name}
                className="w-28 h-28 rounded-full object-cover border-4 border-[#E56B46]/60"
              />
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-bold text-[#091F4E] mb-1">
                  {coConveners[0].name}
                </h4>
                <p className="text-sm font-semibold text-[#E56B46] mb-1">
                  {coConveners[0].role}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {coConveners[0].institution}
                </p>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start text-gray-700 mt-2">
                  <a
                    href={`mailto:${coConveners[0].email}`}
                    className="flex items-center gap-2 hover:text-[#E56B46]"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{coConveners[0].email}</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{coConveners[0].phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining Co-Conveners in Centered Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {coConveners.slice(1).map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-full sm:w-[20rem] hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={person.profile}
                  alt={person.name}
                  className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-[#E56B46]/60"
                />
                <div className="text-center">
                  <div className="text-2xl mb-1">{person.flag}</div>
                  <h4 className="text-lg font-bold text-[#091F4E] mb-1">
                    {person.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#E56B46] mb-1">
                    {person.role}
                  </p>
                  <p className="text-xs text-gray-600 min-h-[2rem] mb-3">
                    {person.institution}
                  </p>
                  <div className="space-y-1">
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center justify-center gap-2 text-gray-700 hover:text-[#E56B46] transition-colors"
                    >
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs truncate">{person.email}</span>
                    </a>
                    <div className="flex items-center justify-center gap-2 text-gray-700">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs">{person.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Venue Section */}
        <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-[#E56B46]" />
            <h3 className="text-xl font-bold">Venue Address</h3>
          </div>
          <p className="text-lg leading-relaxed">
            Kurume Institute of Technology
            <br />
            Kurume City, Fukuoka Prefecture, 830-0052
            <br />
            JAPAN
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
