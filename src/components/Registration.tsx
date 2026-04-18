import { DollarSign, CheckCircle2, FileText } from 'lucide-react';
import { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    affiliation: '',
    country: '',
    email: '',
    paperTitle: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! Your registration has been recorded. You will receive a confirmation email shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#091F4E] mb-6">
            Registration
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E56B46] to-[#A23E3A] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#091F4E] to-[#0d2a5e] rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-8 h-8 text-[#E56B46]" />
              <h3 className="text-2xl font-bold">Registration Fee</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-[#E56B46] mb-2">¥50,000</div>
                <div className="text-lg opacity-90">Japanese Yen</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E56B46] flex-shrink-0 mt-1" />
                  <span>4-night accommodation (March 2-5, 2027)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E56B46] flex-shrink-0 mt-1" />
                  <span>Symposium materials and proceedings</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E56B46] flex-shrink-0 mt-1" />
                  <span>All sessions and keynote lectures</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E56B46] flex-shrink-0 mt-1" />
                  <span>Campus tour and laboratory visits</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E56B46] flex-shrink-0 mt-1" />
                  <span>Refreshments and networking events</span>
                </div>
              </div>
              <div className="bg-[#E56B46]/20 backdrop-blur-sm rounded-lg p-4 mt-6">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 flex-shrink-0 mt-1" />
                  <p className="text-sm">
                    Payment accepted in cash at the registration desk on March 3, 2027
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-[#091F4E] mb-6">Register Your Interest</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E56B46] focus:border-transparent outline-none transition"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="affiliation" className="block text-sm font-semibold text-gray-700 mb-2">
                  Affiliation *
                </label>
                <input
                  type="text"
                  id="affiliation"
                  name="affiliation"
                  required
                  value={formData.affiliation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E56B46] focus:border-transparent outline-none transition"
                  placeholder="Your institution/organization"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E56B46] focus:border-transparent outline-none transition"
                  placeholder="Your country"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E56B46] focus:border-transparent outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="paperTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                  Paper Title (if applicable)
                </label>
                <textarea
                  id="paperTitle"
                  name="paperTitle"
                  rows={3}
                  value={formData.paperTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E56B46] focus:border-transparent outline-none transition"
                  placeholder="Title of your research paper"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#E56B46] to-[#A23E3A] text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Secure Your Spot at IES 2026
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
