const proceedings = [
  { year: 2011, file: "/previous/IES-2011-Proceedings.pdf" },
  { year: 2012, file: "/previous/IES-2012-Proceedings.pdf" },
  { year: 2013, file: "/previous/IES-2013-Proceedings.pdf" },
  { year: 2015, file: "/previous/IES-2015-Proceedings.pdf" },
  { year: 2016, file: "/previous/IES-2016-Proceedings.pdf" },
  { year: 2017, file: "/previous/IES-2017-Proceedings.pdf" },
  { year: 2018, file: "/previous/IES-2018-Proceedings.pdf" },
  { year: 2019, file: "/previous/IES-2019-Proceedings.pdf" },
  { year: 2020, file: "/previous/IES-2020-Proceedings.pdf" },
  { year: 2026, file: "/previous/IES-2026-Proceedings.pdf" },
];

const IESProceedings = () => {
  return (
    <div className="px-4 py-10 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        IES Proceedings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {proceedings.map((item) => (
          <a
            key={item.year}
            href={item.file}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-gradient-to-br from-[#A23E3A]/20 via-[#091F4E]/10 to-white shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="font-semibold text-gray-800">
              IES {item.year} Proceedings
            </span>
            <button className="text-blue-700 font-semibold hover:underline">
              Download
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default IESProceedings;
