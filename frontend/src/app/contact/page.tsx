export default function ContactUs() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Contact Us Header */}
      <section className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#025a0b] tracking-tight opacity-0 animate-fade-in-up">Contact Us</h1>
        <div className="w-16 h-0.5 bg-gray-200 mx-auto mt-8 opacity-0 animate-fade-in-up delay-100"></div>
      </section>

      {/* Let us help section */}
      <section className="max-w-4xl mx-auto px-4 text-center opacity-0 animate-fade-in-up delay-200">
        <h2 className="text-4xl font-bold text-[#025a0b] mb-6">Let us help!</h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
          If you're unsure about what type of training will work best for you, just tell us a little more about your needs. We will get back to you as soon as possible with the answers you need!
        </p>

        <a 
          href="https://wa.me/917904317292" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#4a5f68] hover:bg-[#3a4f58] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Message us on WhatsApp
        </a>
      </section>

      {/* Information Grid */}
      <section className="max-w-4xl mx-auto px-4 mt-32 opacity-0 animate-fade-in-up delay-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-extrabold text-[#025a0b] mb-4">PARUVATHTHE PAYIR SEI</h3>
            <a href="mailto:info@paruvathepayirsei.in" className="text-[#025a0b] hover:text-green-800 text-lg transition-colors">
              info@paruvathepayirsei.in
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-extrabold text-[#025a0b] mb-4">Available</h3>
            <p className="text-gray-600 text-lg">All working days</p>
          </div>
        </div>
      </section>

    </div>
  );
}
