export default function Careers() {
  return (
    <div className="pt-24 pb-20 bg-white">
      
      {/* Why PPS Section */}
      <section className="container mx-auto px-4 mb-24 text-center max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#025a0b] mb-16 tracking-tight opacity-0 animate-fade-in-up">Why PPS</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 mb-16 opacity-0 animate-fade-in-up delay-100">
          <div>
            <h3 className="text-2xl font-bold text-[#025a0b] mb-4">Open Culture and Transparency</h3>
            <p className="text-gray-600 leading-relaxed">
              An innovation-centric organization with transparency at all levels. We value all your feedback and ideas.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#025a0b] mb-4">Happy Working</h3>
            <p className="text-gray-600 leading-relaxed">
              You feel out of the world being with school and college students. Teaching, Mentoring and learning from them make us happy for no reason.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#025a0b] mb-4">Opportunity to Grow</h3>
            <p className="text-gray-600 leading-relaxed">
              We nurture fresh talents with reward, recognition and training. You get immense pleasure in growing with us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-200">
          <div>
            <h3 className="text-2xl font-bold text-[#025a0b] mb-4">Ownership and Accountability</h3>
            <p className="text-gray-600 leading-relaxed">
              You get greater chances to be a leader and lead a quality team.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#025a0b] mb-4">Great Exposure</h3>
            <p className="text-gray-600 leading-relaxed">
              Exposure to the outer world is limitless with team PPS.
            </p>
          </div>
        </div>
      </section>

      {/* Interns Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center opacity-0 animate-fade-in-up delay-300">
          
          {/* Recreated Poster Card */}
          <div className="bg-[#f8f8f8] p-10 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden">
            <h4 className="text-4xl text-gray-500 font-serif mb-2">Looking For An</h4>
            <div className="flex items-baseline gap-3 mb-6">
              <h2 className="text-6xl font-black text-[#025a0b] tracking-tighter">INTERN</h2>
              <span className="text-2xl text-gray-600 font-medium">cum job</span>
            </div>
            
            <p className="font-bold text-black mb-6 leading-snug text-lg">
              TEAM PPS is looking for Confident and Energetic Youths to be a part of our team.
            </p>
            
            <div className="space-y-2 mb-6 text-black">
              <p><span className="font-bold text-lg">Supportive Trainer</span> <span className="text-gray-500 text-sm">(Drone, Robotics and Lifeskill)</span></p>
              <p><span className="font-bold text-lg">Marketing Executive</span> <span className="text-gray-500 text-sm">(Digital and Live)</span></p>
            </div>
            
            <div className="mb-6">
              <p className="font-bold text-black underline mb-2 text-lg">Preferences:</p>
              <ul className="text-black space-y-1">
                <li>Basic Technical knowledge <span className="text-gray-500 text-sm">(Electronics / Arduino)</span></li>
                <li>Knowledge in MS-Office tools</li>
                <li>Good communication skill <span className="text-gray-500 text-sm">(written and oral)</span></li>
              </ul>
            </div>
            
            <div className="mb-8">
              <p className="font-bold text-black underline mb-1 text-lg">Duration:</p>
              <p className="text-black">Upto 6 Month with stipend</p>
            </div>

            <div className="flex justify-between items-end border-t border-gray-200 pt-6 mt-6">
              <div className="text-xs text-gray-500">
                <p>Send your resume to <span className="font-bold text-black">info@paruvathepayirsei.in</span></p>
                <p>For more details contact us at <span className="font-bold text-black">www.paruvathepayirsei.in</span></p>
              </div>
              <img src="/logo.webp" alt="PPS Logo" className="w-20 h-auto" />
            </div>
          </div>

          {/* Interns Text Content */}
          <div className="space-y-6 pl-0 md:pl-10">
            <p className="text-gray-500 font-medium">Hello</p>
            <h2 className="text-6xl font-black text-gray-900 tracking-tight">Interns</h2>
            <p className="text-2xl text-gray-600 leading-relaxed font-light mb-8">
              Looking for an internship cum job where you could gain the technical skills and the skillset as a Lifeskill trainer. <br/><br/>
              Join Us!
            </p>
            <a 
              href="mailto:info@paruvathepayirsei.in?subject=Applying%20for%20Internship%20with%20PPS%20-%20resume"
              className="inline-block bg-[#025a0b] text-white px-8 py-4 rounded-full font-bold text-lg tracking-wider hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              APPLY FOR INTERNSHIP
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
