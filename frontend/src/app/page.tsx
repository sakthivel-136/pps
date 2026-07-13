import Link from "next/link";
import ReviewSlider from "@/components/ReviewSlider";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h1 
              className="font-extrabold mb-4 md:mb-6 tracking-tight leading-tight md:leading-tight break-words" 
              style={{ 
                color: '#025a0b', 
                fontSize: 'clamp(2.25rem, 8vw, 4.5rem)',
                willChange: 'transform, opacity'
              }}
            >
              TRANSFORMING HUMAN VALUES
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto px-2">
              At PPS, we believe true education goes beyond textbooks.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4} className="mb-12">
            <a href="#what-we-do" className="inline-block px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-300" style={{ backgroundColor: '#025a0b', color: 'white' }}>
              HELP US SHAPE YOUR CHILD’S FUTURE
            </a>
          </FadeIn>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" className="text-center mb-12 md:mb-16">
            <h2 
              className="font-extrabold mb-4 leading-tight break-words"
              style={{ color: '#025a0b', fontSize: 'clamp(2rem, 6vw, 3rem)' }}
            >
              What We Do
            </h2>
            <div className="w-24 h-1 bg-gray-200 mx-auto"></div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Life Ethical Education (LEE)",
                desc: "Because skills without values are incomplete. Our signature LEE program nurtures students, ensuring growth with character and confidence.",
                img: "/lee.webp"
              },
              {
                title: "IOT & Cloud",
                desc: "From smart homes to connected devices, we introduce students to the Internet of Things empowering them to build solutions that make everyday life better.",
                img: "/iot.webp"
              },
              {
                title: "ML / AI",
                desc: "We simplify the complex world of AI/ML with hands-on projects. Students not only learn how these systems work but also explore how they impact society.",
                img: "/ml.webp"
              },
              {
                title: "Mobile App Development",
                desc: "Every student has ideas, we give them the right tools to turn those ideas into real, usable apps that can create change in their communities.",
                img: "/app.webp"
              },
              {
                title: "Robotics & Drones",
                desc: "Machines that move, fly, and solve problems! Students learn how to design, program, and innovate while discovering technology applications.",
                img: "/robotics.webp"
              },
              {
                title: "AR / VR",
                desc: "Step into the future of learning with Augmented and Virtual Reality. From immersive classrooms to real-world simulations, see how AR/VR transforms industries.",
                img: "/arvr.webp"
              }
            ].map((item, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow p-8 flex flex-col items-center text-center h-full">
                  <h3 className="text-2xl font-bold text-[#025a0b] mb-6">{item.title}</h3>
                  <img alt={item.title} className="w-full h-48 object-cover rounded-2xl mb-6" src={item.img} />
                  <p className="text-gray-600 mb-8 flex-grow">{item.desc}</p>
                  <a href="tel:+917904317292" className="inline-block bg-[#025a0b] text-white px-8 py-3 rounded-full font-bold hover:bg-green-800 transition-colors">
                    LEARN THIS PROGRAM
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#025a0b] mb-4">Impact Metrics</h2>
            <div className="w-24 h-1 bg-gray-200 mx-auto"></div>
          </FadeIn>
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto relative">
            <FadeIn direction="right" className="flex flex-col items-end text-right w-64">
              <h4 className="text-2xl font-bold text-blue-500 mb-2">Projects Build</h4>
              <p className="text-gray-600">Guided students to build over 150+ real-world projects.</p>
            </FadeIn>
            <FadeIn direction="up" className="relative w-80 h-80 flex items-center justify-center">
              <img alt="Impact Metrics Graphic" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" src="/impactmetrics.webp" />
            </FadeIn>
            <FadeIn direction="left" className="flex flex-col items-start text-left w-64">
              <h4 className="text-2xl font-bold text-green-500 mb-2">Students Trained</h4>
              <p className="text-gray-600">Over 2,500 students trained in various skills.</p>
            </FadeIn>
            <div className="w-full flex justify-center gap-12 -mt-12">
              <FadeIn direction="up" delay={0.2} className="flex flex-col items-end text-right w-64">
                <h4 className="text-2xl font-bold text-yellow-500 mb-2">ATAL Marathon Prizes Won</h4>
                <p className="text-gray-600">Success in winning 5+ National Level Atal Marathon prizes.</p>
              </FadeIn>
              <FadeIn direction="up" delay={0.3} className="flex flex-col items-start text-left w-64">
                <h4 className="text-2xl font-bold text-lime-600 mb-2">Institutions Partnered</h4>
                <p className="text-gray-600">In collaboration with 20+ educational institutions.</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-4xl font-extrabold text-[#025a0b]">Our Partners</h2>
          </FadeIn>
        </div>
        <FadeIn direction="none" delay={0.2}>
          <div className="flex w-max animate-marquee hover:paused">
            {[...Array(11), ...Array(11)].map((_, i) => (
              <div key={i} className="flex-none w-48 md:w-64 mx-4 md:mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={`/partners/partner_${(i % 11) + 1}.webp`} 
                  alt="Partner Logo" 
                  className="max-h-24 w-auto object-contain opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Transformation Highlights */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#025a0b] mb-4">Transformation Highlights</h2>
            <div className="w-24 h-1 bg-gray-200 mx-auto"></div>
          </FadeIn>
          
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Highlight 1 */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <FadeIn direction="right" className="w-full md:w-1/2 aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/REFGO0PysEQ" 
                  title="Atal Marathon" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </FadeIn>
              <FadeIn direction="left" className="w-full md:w-1/2">
                <h3 className="text-3xl font-extrabold text-[#025a0b] mb-4">Atal Marathon Projects</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  JNV Atal Innovation Mission Projects: is a curated playlist showcasing inspiring videos from JNV students, featuring projects under the Atlas program. Students, mentored by Team PPS, designed winning projects tackling real-world challenges.
                </p>
              </FadeIn>
            </div>

            {/* Highlight 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <FadeIn direction="left" className="w-full md:w-1/2 aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/5mMnY0Vrnr8" 
                  title="TMJ Book Publishing" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </FadeIn>
              <FadeIn direction="right" className="w-full md:w-1/2">
                <h3 className="text-3xl font-extrabold text-[#025a0b] mb-4">TMJ book publishing event @ SP modern school on 28/10/2022</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  இளம் எழுத்தாளர்களை உருவாக்கும் முயற்சியின் வெளிப்பாடே இந்த புத்தகம். திருவள்ளுவரின் அறநெறி விளக்கத்திற்கு இணையான ஒரு அறநெறி கதையை தங்களது கைவண்ணத்தில் நமது மாணவர்கள் அளித்துள்ளனர். மாணவர்களின் படைப்பினை இந்த புத்தகத்தின் வாயிலாக அனைத்து தமிழ் நெஞ்சங்களுக்கும் கொண்டு சேர்ப்பதில் பெருமிதம் கொள்கிறோம்.
                </p>
              </FadeIn>
            </div>

            {/* Highlight 3 */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <FadeIn direction="right" className="w-full md:w-1/2 aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/KF-zqxzpmkk" 
                  title="Drone Workshop" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </FadeIn>
              <FadeIn direction="left" className="w-full md:w-1/2">
                <h3 className="text-3xl font-extrabold text-[#025a0b] mb-4">Drone Workshop by Team PPS</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Students went from curious beginners to confident innovators in just days. Team PPS presented drone workshop @ JNV Urban school on 07/05/2022
                </p>
              </FadeIn>
            </div>

            {/* Highlight 4 */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <FadeIn direction="left" className="w-full md:w-1/2 aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/GOHi5h5vigQ" 
                  title="LEE Workshop" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </FadeIn>
              <FadeIn direction="right" className="w-full md:w-1/2">
                <h3 className="text-3xl font-extrabold text-[#025a0b] mb-4">One day workshop on LEE in Yadhava College Madurai</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Team PPS presented One day workshop on LEE @ commerce department of Yadhava College on 09/03/2020
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Slider */}
      <ReviewSlider />

      {/* Join Team PPS */}
      <section className="bg-[#025a0b] py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center text-white">
          <FadeIn direction="up">
            <h2 className="text-5xl font-extrabold mb-8">Be a Part of Team PPS</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Join our growing community of students, parents, and educators who believe in Transforming Human Values through Technology.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="flex justify-center">
            <Link href="/careers" className="bg-white text-[#025a0b] px-10 py-4 rounded-md font-extrabold text-lg hover:bg-gray-100 transition-colors uppercase tracking-widest inline-block shadow-lg hover:shadow-xl hover:scale-105 transform duration-300">
              JOIN TEAM PPS
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
