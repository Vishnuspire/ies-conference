import { Users, Globe, Award, Building2 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const About = () => {
  const [counts, setCounts] = useState({ edition: 0, participants: 0, institutions: 0, countries: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { edition: 11, participants: 300, institutions: 7, countries: 15 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        edition: Math.floor(targets.edition * progress),
        participants: Math.floor(targets.participants * progress),
        institutions: Math.floor(targets.institutions * progress),
        countries: Math.floor(targets.countries * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, increment);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#091F4E] mb-6">
            About IES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E56B46] to-[#A23E3A] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="inline-block p-4 bg-gradient-to-br from-[#091F4E] to-[#A23E3A] rounded-full mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#091F4E] mb-2">{counts.edition}th</div>
            <div className="text-gray-600 font-medium">International Engineering Symposium</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="inline-block p-4 bg-gradient-to-br from-[#E56B46] to-[#A23E3A] rounded-full mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#091F4E] mb-2">{counts.participants}+</div>
            <div className="text-gray-600 font-medium">Participants</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="inline-block p-4 bg-gradient-to-br from-[#091F4E] to-[#A23E3A] rounded-full mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#091F4E] mb-2">{counts.institutions}+</div>
            <div className="text-gray-600 font-medium">Partner Institutions</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="inline-block p-4 bg-gradient-to-br from-[#E56B46] to-[#A23E3A] rounded-full mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#091F4E] mb-2">{counts.countries}+</div>
            <div className="text-gray-600 font-medium">Countries</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The International Engineering Symposia (IES2011 to IES2020) were organized very successfully at
              <span className="font-semibold text-[#091F4E]"> Kumamoto University</span> during 2011 to 2020 with
              hundreds of participants from India, Japan, Indonesia, Thailand, Taiwan, Vietnam and other countries. The 10th IES 2026 was successfully organized at Kurume Institute of Technology, Kurume, Fukuoka, Japan during March 3-5, 2026 in collaboration with Vishnu Japan Outreach Centre (VJOC), Sri Vishnu Educational Society (SVES), India; UBDT College of Engineering, Karnataka, India; and Alva's Institute of Engineering & Technology, India.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With the objective of continuing the interaction initiated between the researchers during these symposia,
              it is now planned to conduct the <span className="font-semibold text-[#091F4E]">11<sup>th</sup> International Engineering Symposium (IES 2027)</span> during
              March 3-5, 2027 at Kurume Institute of Technology, Japan.
            </p>
            <div className="bg-gradient-to-r from-[#091F4E] to-[#A23E3A] text-white p-6 rounded-xl text-center">
              <p className="text-xl font-semibold italic">
                "Providing a global platform for researchers, scientists, and academicians to exchange ideas and innovations across disciplines."
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              The proposed symposium provides a common platform for bringing together researchers for expanding academic collaboration.
              It is expected that the emerging technologies and scientific advancements in these themes will be disseminated during the Symposium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
