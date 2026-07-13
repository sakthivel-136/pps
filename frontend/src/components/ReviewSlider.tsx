"use client";

export default function ReviewSlider() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-12 tracking-tight">Google Reviews</h2>
        
        {/* Trustindex Widget embedded via iframe to ensure script execution */}
        <div className="max-w-6xl mx-auto min-h-[450px] w-full flex items-center justify-center">
          <iframe 
            src="/reviews-widget.html" 
            title="Google Reviews"
            className="w-full h-full min-h-[450px] border-none overflow-hidden bg-transparent"
            scrolling="no"
          />
        </div>
      </div>
    </section>
  );
}
