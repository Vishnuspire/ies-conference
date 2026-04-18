import { Plane, Hotel, MapPin, Info } from 'lucide-react';

const Travel = () => {
  return (
    <section id="travel" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#091F4E] mb-6">
            Travel & Accommodation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E56B46] to-[#A23E3A] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#091F4E] to-[#0d2a5e] rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-8 h-8 text-[#E56B46]" />
              <h3 className="text-2xl font-bold">Getting There</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold mb-2 text-[#E56B46]">Nearest Airport</div>
                <p>Fukuoka International Airport</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold mb-2 text-[#E56B46]">From Fukuoka Airport</div>
                <p>Airport limousine buses available to Kurume City</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold mb-2 text-[#E56B46]">Alternative Routes</div>
                <p>Connect via Tokyo or Osaka with domestic flights to Fukuoka</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#E56B46] to-[#A23E3A] rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Hotel className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Accommodation</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold mb-2">Included in Registration</div>
                <p>4-night accommodation (March 2-5, 2027)</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold mb-2">Location</div>
                <p>Hotels near Kurume Institute of Technology</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold mb-2">For International Delegates</div>
                <p>Full accommodation covered by registration fee</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Info className="w-8 h-8 text-[#091F4E]" />
            <h3 className="text-2xl font-bold text-[#091F4E]">Venue Location</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#E56B46] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-[#091F4E] mb-1">Kurume Institute of Technology</div>
                    <p className="text-gray-700">Kurume City, Fukuoka Prefecture, Japan</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#091F4E]/5 to-[#E56B46]/5 rounded-lg p-4">
                  <p className="text-gray-700 leading-relaxed">
                    Located in the heart of the Chikugo region, surrounded by the scenic Chikugo River
                    and Mino Mountain Range. Just 30 minutes from Fukuoka City by train.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.6754389997957!2d130.54461731522!3d33.32092198079823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35418e8c3c3c3c3d%3A0x3c3c3c3c3c3c3c3c!2sKurume%20Institute%20of%20Technology!5e0!3m2!1sen!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kurume Institute of Technology Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
