import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function Programs() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 overflow-hidden">
      
      {/* 1. App Development Summer Camp */}
      <section className="container mx-auto px-4 mb-32">
        <FadeIn direction="up" className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center transition-all hover:shadow-2xl">
          <div className="md:w-1/2 p-12 lg:p-16">
            <div className="inline-block px-4 py-1 bg-green-100 text-[#025a0b] font-bold rounded-full mb-4 text-sm tracking-wide">SUMMER CAMP</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Smart Kids don't just use apps, <span className="text-[#048a11]">they create!</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A fun & beginner-friendly summer camp where kids build real mobile apps from scratch! Tired of your child spending hours on mobile games? What if they could build their own apps instead?
            </p>
            <ul className="space-y-4 mb-8 text-lg text-gray-700">
              <li className="flex items-center gap-3"><svg className="w-6 h-6 text-[#048a11]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> Designing user-friendly interfaces</li>
              <li className="flex items-center gap-3"><svg className="w-6 h-6 text-[#048a11]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> Using logical blocks to build real functions</li>
              <li className="flex items-center gap-3"><svg className="w-6 h-6 text-[#048a11]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> Developing educational & game-based apps</li>
            </ul>
            <p className="font-semibold text-gray-800 mb-8 bg-orange-50 p-4 rounded-xl border border-orange-100">
              🎓 Earn a verified E-Certificate! <br/>💡 No prior coding experience required.
            </p>
            <a href="https://forms.gle/Zwbp3SxVNJWMunKAA" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#025a0b] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-800 transition-all hover:shadow-lg hover:-translate-y-1">
              Book a Free Demo Class
            </a>
          </div>
          <div className="md:w-1/2 w-full h-full relative p-8">
            <img src="/app-development-full.webp" alt="App Development" className="w-full h-auto max-h-[500px] object-contain rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"/>
          </div>
        </FadeIn>
      </section>

      {/* 2. Online IOT Internship */}
      <section className="container mx-auto px-4 mb-32">
        <FadeIn direction="up" delay={0.1} className="bg-[#0f2c59] rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row-reverse items-center transition-all hover:shadow-2xl">
          <div className="md:w-1/2 p-12 lg:p-16 text-white">
            <div className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 font-bold rounded-full mb-4 text-sm tracking-wide">2 MONTHS (60 HOURS)</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
              Online IOT <span className="text-yellow-400">Internship</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join us and gain hands-on experience working with IoT hardware and software. Create your own environments in AWS Cloud and Local Machine.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-blue-50">
              <div className="flex gap-3"><span className="text-yellow-400 font-bold">✓</span> Real-time IOT project</div>
              <div className="flex gap-3"><span className="text-yellow-400 font-bold">✓</span> Create an Android App</div>
              <div className="flex gap-3"><span className="text-yellow-400 font-bold">✓</span> IOT Kit worth Rs.1500/-</div>
              <div className="flex gap-3"><span className="text-yellow-400 font-bold">✓</span> One-on-one doubt clarification</div>
              <div className="flex gap-3"><span className="text-yellow-400 font-bold">✓</span> Course Excellence Certificate</div>
              <div className="flex gap-3"><span className="text-yellow-400 font-bold">✓</span> College projects guidance</div>
            </div>
            <a href="https://forms.gle/VvuZpfwdRPZyM6rv8" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-yellow-400/50 hover:-translate-y-1">
              Register Now
            </a>
          </div>
          <div className="md:w-1/2 w-full h-full relative p-8">
            <img src="/iot-internship-full.webp" alt="IoT Internship" className="w-full h-auto max-h-[500px] object-contain rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"/>
          </div>
        </FadeIn>
      </section>

      {/* 3. Life Ethical Education (LEE) */}
      <section className="container mx-auto px-4 mb-32">
        <FadeIn direction="up" className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#025a0b] mb-4">Life Ethical Education</h2>
          <p className="text-2xl text-gray-600 font-light mb-8">To create a better citizen, for a better nation.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://img1.wsimg.com/blobby/go/84d6469e-cdcc-4379-8457-0ec68f43540a/pamplet%20updated.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-8 py-4 bg-[#025a0b] text-white font-bold rounded-full hover:bg-green-800 transition-all shadow-sm hover:shadow-md text-xl"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download PDF
            </a>
            <Link href="/programs/lee-brochure" className="inline-block px-8 py-4 bg-green-100 text-[#025a0b] font-bold rounded-full hover:bg-green-200 transition-all shadow-sm hover:shadow-md text-xl">
              Levels of LEE syllabus &rarr;
            </Link>
          </div>
          <div className="w-24 h-1 bg-green-200 mx-auto mt-8"></div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FadeIn direction="up" delay={0.1} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-center">
            <h3 className="text-2xl font-bold text-[#025a0b] mb-4">TRIANGLE</h3>
            <p className="text-gray-600 leading-relaxed">Here comes the Golden Triangle of life. Importance of PARENTS, TEACHERS, STUDENTS and their inter-relationship.</p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-center">
            <h3 className="text-2xl font-bold text-[#025a0b] mb-4">HEXAGON</h3>
            <p className="text-gray-600 leading-relaxed mb-4">Six basic skills to lead a better life:</p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>Peruse Volume</li>
              <li>Self-Introspection</li>
              <li>Empathy</li>
              <li>Applied Psychology</li>
              <li>Rational Thinking</li>
              <li>Sustainable Growth</li>
            </ul>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-center">
            <h3 className="text-2xl font-bold text-[#025a0b] mb-4">NONAGON</h3>
            <p className="text-gray-600 leading-relaxed">Here comes the most sensitive part. These nine topics are essential for our younger generation to lead our nation towards our dream of a "Developed Nation".</p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.4} className="bg-green-50 rounded-3xl p-12 text-center shadow-inner">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Dedicated versions of LEE syllabus for all levels</h3>
          <img src="/lee-junior-senior.webp" alt="LEE Junior and Senior" className="mx-auto max-w-full h-auto max-h-[300px] object-contain rounded-xl hover:scale-105 transition-transform duration-500"/>
        </FadeIn>
      </section>

      {/* 4. Financial Literacy */}
      <section id="financial-literacy" className="container mx-auto px-4 mb-32 scroll-mt-24">
        <FadeIn direction="up" className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center transition-all hover:shadow-2xl">
          <div className="md:w-1/2 p-12 lg:p-16 text-white">
            <div className="inline-block px-4 py-1 bg-white/20 text-white font-bold rounded-full mb-4 text-sm tracking-wide">ONLINE COURSE</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              How To Make Money
            </h2>
            <p className="text-xl text-indigo-100 mb-8 font-light italic">
              "To become rich, first you need to know financial literacy."
            </p>
            <ul className="space-y-4 mb-8 text-lg text-indigo-50">
              <li className="flex items-center gap-3">✨ How to start your first Investment</li>
              <li className="flex items-center gap-3">✨ Personal Finance</li>
              <li className="flex items-center gap-3">✨ Lifetime access to 3 hours of video content</li>
              <li className="flex items-center gap-3">✨ Free Workbooks & One-on-one discussion</li>
            </ul>
            <div className="flex items-center gap-6">
              <a href="https://forms.gle/VZychpRnW5n3s6aN6" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1">
                Register Now
              </a>
              <span className="text-2xl font-black bg-pink-500 px-4 py-2 rounded-xl transform -rotate-2 text-white">@ RS.99/- ONLY</span>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-full relative p-8 flex items-center justify-center">
            <img src="/make-money.webp" alt="How To Make Money Course" className="w-full h-auto max-h-[500px] object-contain rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"/>
          </div>
        </FadeIn>
      </section>

      {/* 5. Brochures & Branches */}
      <section className="container mx-auto px-4 mb-20 text-center">
        <FadeIn direction="up">
          <h2 className="text-5xl font-extrabold text-[#025a0b] mb-12">Branches</h2>
        </FadeIn>
        
        {/* Brochures */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          <FadeIn direction="up" delay={0.1} className="border-2 border-green-700 p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow w-64">
            <p className="text-gray-500 font-medium mb-6">IoT_Internship_brochure (pdf)</p>
            <a href="https://img1.wsimg.com/blobby/go/84d6469e-cdcc-4379-8457-0ec68f43540a/downloads/IoT_Internship_brochure.pdf?ver=1762616035248" target="_blank" rel="noopener noreferrer" className="font-bold text-green-800 text-sm tracking-widest hover:underline">DOWNLOAD</a>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="border-2 border-green-700 p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow w-64">
            <p className="text-gray-500 font-medium mb-6">PYTHON CURRICULUM (pdf)</p>
            <a href="https://img1.wsimg.com/blobby/go/84d6469e-cdcc-4379-8457-0ec68f43540a/downloads/PYTHON%20CURRIULUM.pdf?ver=1762616035248" target="_blank" rel="noopener noreferrer" className="font-bold text-green-800 text-sm tracking-widest hover:underline">DOWNLOAD</a>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} className="border-2 border-green-700 p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow w-64">
            <p className="text-gray-500 font-medium mb-6">ENTREPRENEURSHIP (pdf)</p>
            <a href="https://img1.wsimg.com/blobby/go/84d6469e-cdcc-4379-8457-0ec68f43540a/downloads/ENTREPRENEURSHIP.pdf?ver=1762616035248" target="_blank" rel="noopener noreferrer" className="font-bold text-green-800 text-sm tracking-widest hover:underline">DOWNLOAD</a>
          </FadeIn>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn direction="up" delay={0.1} className="text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group">
            <div className="overflow-hidden">
              <img src="/women.webp" alt="Women's Welfare" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-[#025a0b] mb-4">Women's Welfare Program</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">Exclusively for adolescent girls, we Team PPS provide them with an opportunity to discuss with our renowned psychologist, to clarify various concerns of them in this adolescent age.</p>
              <a href="#financial-literacy" className="text-gray-400 font-bold text-sm tracking-widest hover:text-[#025a0b] mt-auto">FIND OUT MORE</a>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group">
            <div className="overflow-hidden">
              <img src="/career.webp" alt="Career Guidance" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-[#025a0b] mb-4">Career Guidance</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">Feeling unsure about your future? Team PPS, we're here to help you find clarity. Explore your strengths, discover exciting opportunities, and map out a career path that's perfect for you!</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} className="text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group">
            <div className="overflow-hidden">
              <img src="/skill.webp" alt="Skill Development" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-[#025a0b] mb-4">Skill Development Program</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">We Team PPS provide Skill Development cum Life skill program for Industrial Workers and also Corporate Training.</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.4} className="text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group">
            <div className="overflow-hidden">
              <img src="/social.webp" alt="Social Activities" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-[#025a0b] mb-4">Social Activities</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">We Team PPS reach various govt. schools across India to impart free/sponsored life skill classes. We also lend our support to charity with a few NGOs and associations.</p>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
