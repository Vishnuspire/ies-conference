import { FileText, Calendar, Mail, CheckCircle2 } from "lucide-react";

const CallForPapers = () => {
  const areas = [
    "Mechanical Engineering, Materials, Metallurgical and Production Engineering",
    "Civil Engineering, Architecture, Ocean Engineering, Earth Sciences",
    "Electrical Engineering, Electronics, Communications Engineering",
    "Computer Science & Engineering, Artificial Intelligence, Information Technology",
    "Applied Chemistry, Chemical Engineering, Biotechnology",
    "Engineering Physics, Engineering Mathematics and Computational Sciences",
    "Health Sciences, Social Sciences and Management",
  ];

  const timeline = [
    { date: "July 31, 2026", event: "Abstract Submission Deadline" },
    { date: "August 15, 2026", event: "Acceptance Notification" },
    { date: "September 30, 2026", event: "Full Paper Submission" },
  ];

  return (
    <section id="call-for-papers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#091F4E] mb-6">
            Call for Papers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E56B46] to-[#A23E3A] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The 11<sup>th</sup> International Engineering Symposium (IES 2027)
            invites contributions from researchers, scientists, and academicians
            across diverse fields of engineering, technology, and applied
            sciences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-[#E56B46]" />
              <h3 className="text-2xl font-bold text-[#091F4E]">
                Broad Areas of Interest
              </h3>
            </div>
            <ul className="space-y-4">
              {areas.map((area, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E56B46] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#091F4E] to-[#0d2a5e] rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-[#E56B46]" />
                <h3 className="text-2xl font-bold">Important Dates</h3>
              </div>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                  >
                    <div
                      className={`text-lg font-bold bg-gradient-to-r from-[#E56B46] to-[#A23E3A] bg-clip-text text-transparent mb-2`}
                    >
                      {item.date}
                    </div>
                    <div className="text-gray-200">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E56B46] to-[#A23E3A] rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Submission Information</h3>
              </div>
              <p className="mb-4 leading-relaxed">
                Submit abstracts (100-150 words) including paper title, authors'
                names, designations, affiliations, and contact information.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 space-y-2">
                <div className="font-semibold">Email to:</div>
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
              <p className="mt-4 text-sm opacity-90">
                All papers will be peer-reviewed and published in the Symposium
                Proceedings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
