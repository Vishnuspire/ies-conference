import { Building2, MapPin } from 'lucide-react';

const Organizers = () => {
  const mainOrganizer = {
    name: 'Kurume Institute of Technology',
    location: 'Kurume, Fukuoka',
    country: 'JAPAN',
    flag: '🇯🇵',
    logo: '/k.png',
    type: 'main'
  };

  const partners = [
    {
      name: 'Vishnu Japan Outreach Centre (VJOC)',
      location: 'Hyderabad',
      country: 'India',
      flag: '🇮🇳',
      logo: '/vjoc.png'
    },
    {
      name: 'Sri Vishnu Educational Society',
      location: 'Hyderabad',
      country: 'INDIA',
      flag: '🇮🇳',
      logo: '/vishnu.png'
    },
    {
      name: 'University BDT College of Engineering',
      location: 'Davanagere',
      country: 'INDIA',
      flag: '🇮🇳',
      logo: '/vtu.png'
    },
    {
      name: "Alva's Institute of Engineering & Technology",
      location: 'Moodbidri',
      country: 'INDIA',
      flag: '🇮🇳',
      logo: '/alva.png'
    },
    {
      name: 'B.M.S. College of Engineering',
      location: 'Bangalore, Karnataka',
      country: 'INDIA',
      flag: '🇮🇳',
      logo: '/bms.jpg'
    }
  ];

  return (
    <section id="organizers" className="py-20 bg-gradient-to-br from-[#091F4E] to-[#0d2a5e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Organizers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E56B46] to-[#A23E3A] mx-auto mb-8"></div>
        </div>
 
        {/* Main Organizer */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#E56B46] text-center mb-8">Main Organizer</h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center mb-4">
                <img
                  src={mainOrganizer.logo}
                  alt={mainOrganizer.name}
                  className="h-20 w-auto mb-4 animate-float object-contain"
                />
                <h4 className="text-2xl font-bold text-[#091F4E] text-center mb-4">
                  {mainOrganizer.name}
                </h4>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">
                    {mainOrganizer.location}, {mainOrganizer.country} {mainOrganizer.flag}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#E56B46] text-center mb-8">
            In Association With
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto mb-4 animate-float object-contain"
                />
                <h4 className="text-lg font-bold text-[#091F4E] text-center mb-3 min-h-[3rem]">
                  {partner.name}
                </h4>
                <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {partner.location}, {partner.country} {partner.flag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;
