import FadeIn from "@/components/FadeIn";

export default function TeamPPS() {
  return (
    <>
      {/* Intro Hero Section */}
      <section className="max-w-[1000px] mx-auto px-6 mb-20 text-center pt-20">
        <FadeIn direction="up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#025a0b] mb-10 tracking-tight">Team PPS</h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} className="relative">
          <div className="absolute -left-12 -top-12 w-24 h-24 bg-green-50 rounded-full -z-10 animate-pulse"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            <strong>Paruvaththe Payir Sei</strong> is founded by people who believe in social upliftment. With the world transforming into a competitive arena, the younger generation must be prepared to face it with much-expected zeal and enthusiasm. We expertise in imparting life skills, leadership quality, and ethics by providing quality training to the students. We also have an auxiliary wing that specializes in teaching high-edged technical topics so that the graduates become highly competent and intellectual to face the demanding world. We owe our initiative to make India the best among the world nations in humanity, social, technological and economic well-being.
          </p>
          <div className="absolute -right-8 -bottom-8 w-16 h-16 bg-[#025a0b] opacity-10 rounded-full -z-10"></div>
        </FadeIn>
      </section>

      {/* Vision & Mission Bento Grid-ish Layout */}
      <section className="max-w-7xl mx-auto px-6 mb-32 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <FadeIn direction="left" delay={0.3} className="group p-10 bg-gray-50 rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#025a0b] flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed italic">
              "To bring changes in the younger generations perspective of thinking, understanding, attitude and life skill by providing them quality trainings. Thus transforming our nation, a better one."
            </p>
          </FadeIn>

          {/* Mission Card */}
          <FadeIn direction="right" delay={0.4} className="group p-10 bg-[#025a0b] rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
              <svg className="w-48 h-48 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd"></path></svg>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#025a0b]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Mission</h2>
              </div>
              <p className="text-lg text-green-100 leading-relaxed">
                "To enrich and expertise the students all over India with ethical and technical education."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
