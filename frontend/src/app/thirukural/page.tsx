import FadeIn from "@/components/FadeIn";

export default function Thirukural() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 text-center bg-[#025a0b] relative shadow-inner">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">It's a wrap!</h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
              The big day may have come and gone, but keep in touch as we're always up to do the same good thing again in some time. keep in touch, be excited!
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Institutional Partners */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#025a0b] mb-12">TMJ Books Published</h2>
            <div className="w-24 h-1 bg-gray-200 mx-auto mb-12"></div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <h3 className="text-2xl font-bold text-green-700 mb-8 text-left">We have successfully published 3 TMJ books with these institutions:</h3>
            <div className="space-y-8 text-lg text-left">
              <div>
                <p className="font-bold text-black text-xl mb-2">1. JNV Bangalore Urban, CBSE school – Bangalore</p>
                <a className="text-blue-600 underline font-semibold hover:text-blue-800" href="https://www.amazon.in/gp/product/B0C3BGBX22?notRedirectToSDP=1&ref_=dbs_mng_calw_2&storeType=ebooks" target="_blank" rel="noopener noreferrer">link to amazon kindle</a>
              </div>
              <div>
                <p className="font-bold text-black text-xl mb-2">2. SP Modern School – Virudhunagar</p>
                <a className="text-blue-600 underline font-semibold hover:text-blue-800" href="https://www.amazon.in/gp/product/B0BK9Y3CQ5?notRedirectToSDP=1&ref_=dbs_mng_calw_0&storeType=ebooks" target="_blank" rel="noopener noreferrer">link to amazon kindle</a>
              </div>
              <div>
                <p className="font-bold text-black text-xl mb-2">3. Hindu Thevamar Higher Secondary School – Sivakasi</p>
                <a className="text-blue-600 underline font-semibold hover:text-blue-800" href="https://www.amazon.in/gp/product/B0BTGJ751T?notRedirectToSDP=1&ref_=dbs_mng_calw_1&storeType=ebooks" target="_blank" rel="noopener noreferrer">link to amazon kindle</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Young Writer Initiative */}
      <section className="relative overflow-hidden py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left" className="relative bg-teal-600 rounded-3xl p-8 aspect-[4/5] flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-4 left-4 text-white text-4xl">●●●</div>
              <div className="absolute bottom-10 right-10 text-white text-6xl">★</div>
            </div>
            <div className="relative z-10 bg-white shadow-xl p-10 rotate-2 transform max-w-sm rounded-xl">
              <div className="border-b-2 border-gray-100 mb-6 pb-4">
                <h4 className="text-center text-3xl font-black uppercase tracking-tighter text-gray-900">Thirukkural Moral Journey</h4>
              </div>
              <p className="text-center font-bold text-sm mb-6 uppercase tracking-widest text-[#025a0b]"># An opportunity to become a young writer</p>
              <p className="text-sm italic leading-relaxed text-gray-600 text-center mb-4">
                'Thirukkural Moral Journey' is an initiative by Paruvaththe Payir Sei to imbibe moral values into young minds by kindling their creativity. We have leveraged "Ulaga Pothumurai Thirukkural" to start with.
              </p>
              <p className="text-sm italic leading-relaxed text-gray-600 text-center">
                Moral stories written by our institution's students for the respective thirukkural provided to them will be reviewed and printed as a book. Kindle versions of that book will also be provided to the institution's library.
              </p>
              <p className="mt-8 text-center font-bold text-[#025a0b] tracking-wider">PARUVATHTHE PAYIR SEI</p>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" className="space-y-6">
            <span className="text-[#025a0b] font-bold tracking-widest uppercase bg-green-100 px-4 py-1 rounded-full text-sm">Book Published</span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">THIRUKURAL ARANERI PAYANAM</h2>
            <div className="flex flex-col sm:flex-row items-start gap-8 mt-8">
              <img alt="TMJ Book" className="w-56 h-auto rounded-xl shadow-lg border border-gray-200" src="/book.webp" />
              <div className="space-y-6">
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  திருக்குறள் அறநெறி பயணம் <br/><br/>
                  பருவத்தே பயிர் செய் நிறுவனமானது வாழ்வியல் நெறிமுறை கல்வியை பள்ளி மற்றும் கல்லூரி மாணவர்களுக்கு கற்பித்து வருகிறது. இதன் ஒரு பகுதியாக மாணவர்களுக்கு திருக்குறளின் முக்கியத்துவத்தை எடுத்துரைத்து அதில் உள்ள வாழ்வியல் அறநெறிகளைக் கொண்டு சேர்க்கும் விதமாக 'திருக்குறள் அறநெறி பயணம்' என்ற கற்றல்-கற்பித்தல் முயற்சியானது நடைபெற்று கொண்டிருக்கிறது.
                </p>
                <a href="https://www.amazon.in/dp/B0BK9Y3CQ5" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#025a0b] text-white font-bold uppercase tracking-widest rounded-full hover:bg-green-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-1">
                  Buy Now
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-24 bg-white text-center overflow-hidden">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#025a0b] mb-12">Invitation for Thirukkural Moral Journey</h2>
            <div className="w-20 h-1 bg-gray-200 mx-auto mb-16"></div>
          </FadeIn>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <FadeIn direction="up" delay={0.2} className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <span className="text-xl font-semibold text-gray-800 mb-4 sm:mb-0">Invitation_tamil (jpg)</span>
              <a className="flex items-center text-white bg-[#025a0b] px-6 py-3 rounded-full font-bold hover:bg-green-800 transition-colors" href="https://img1.wsimg.com/blobby/go/84d6469e-cdcc-4379-8457-0ec68f43540a/downloads/Invitation_for_PPS_event_tamil.jpg?ver=1762616036089" target="_blank" rel="noopener noreferrer">
                DOWNLOAD
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </a>
            </FadeIn>
            <FadeIn direction="up" delay={0.4} className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <span className="text-xl font-semibold text-gray-800 mb-4 sm:mb-0">Invitation_english (jpg)</span>
              <a className="flex items-center text-white bg-[#025a0b] px-6 py-3 rounded-full font-bold hover:bg-green-800 transition-colors" href="https://img1.wsimg.com/blobby/go/84d6469e-cdcc-4379-8457-0ec68f43540a/downloads/Invitation_for_PPS_event_english.jpg?ver=1762616036089" target="_blank" rel="noopener noreferrer">
                DOWNLOAD
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
