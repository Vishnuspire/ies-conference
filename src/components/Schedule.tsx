import { Calendar, Clock, MapPin } from 'lucide-react';

const Schedule = () => {
  const schedule = [
    {
      day: 'March 3',
      sessions: [
        {
          time: 'Forenoon',
          events: ['Opening Ceremony', 'Invited Speeches & Keynote Lectures']
        },
        {
          time: 'Afternoon',
          events: ['Keynote Lectures', 'Campus Tour', 'Laboratory Visits']
        }
      ],
      color: 'from-[#091F4E] to-[#E56B46]'
    },
    {
      day: 'March 4',
      sessions: [
        {
          time: 'Forenoon',
          events: ['Technical Sessions']
        },
        {
          time: 'Afternoon',
          events: ['Technical Sessions']
        }
      ],
      color: 'from-[#E56B46] to-[#A23E3A]'
    },
    {
      day: 'March 5',
      sessions: [
        {
          time: 'Full Day',
          events: ['Field Visits', 'Closing Session']
        }
      ],
      color: 'from-[#A23E3A] to-[#091F4E]'
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#091F4E] mb-6">
            Program Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E56B46] to-[#A23E3A] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700">Three days of innovation, collaboration, and knowledge exchange</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {schedule.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${day.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">{day.day}</h3>
                </div>
                <div className="text-white/90">2027</div>
              </div>

              <div className="p-6 space-y-6">
                {day.sessions.map((session, sessionIndex) => (
                  <div key={sessionIndex} className="border-l-4 border-[#E56B46] pl-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-[#091F4E]" />
                      <span className="font-semibold text-[#091F4E]">{session.time}</span>
                    </div>
                    <ul className="space-y-2">
                      {session.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-[#E56B46] flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
