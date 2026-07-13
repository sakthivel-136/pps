"use client";
import { useEffect, useRef } from 'react';

export default function Reviews() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      // Scroll by roughly the width of one card + gap (320px + 24px = 344px)
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: 344, behavior: 'smooth' });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with Trustindex Widget */}
      <section className="pt-20 pb-10 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-black mb-12 tracking-tight opacity-0 animate-fade-in-up">Google Reviews</h1>
        
        {/* Trustindex Widget embedded via iframe to ensure script execution */}
        <div className="max-w-6xl mx-auto min-h-[450px] w-full flex items-center justify-center opacity-0 animate-fade-in-up delay-100">
          <iframe 
            src="/reviews-widget.html" 
            title="Google Reviews"
            className="w-full h-full min-h-[450px] border-none overflow-hidden bg-transparent"
            scrolling="no"
          />
        </div>
      </section>

      {/* Blogging Header Section */}
      <section className="pt-24 text-center">
        <h2 className="text-6xl md:text-7xl font-extrabold text-black tracking-tight mb-16 opacity-0 animate-fade-in-up">Blogging</h2>
      </section>

      {/* Blog Post Carousel */}
      <section className="pb-32 px-4 relative max-w-7xl mx-auto">
        <div ref={sliderRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scroll-bar">
          {[
            {
              url: "https://imperfectcritic.wordpress.com/2020/07/31/the-night-sky/",
              title: "The Night Sky",
              date: "31 July 2020",
              img: "https://imperfectcritic.wordpress.com/wp-content/uploads/2020/07/download-1.jpg"
            },
            {
              url: "https://imperfectcritic.wordpress.com/2020/07/29/why-should-i-grow-plants/",
              title: "Why should I grow plants?",
              date: "29 July 2020",
              img: "https://lh3.googleusercontent.com/uUjRWVlKHGOOBUo8eTnvI1xVmJAKi_UHyE447SkN7duhhdUHRTS10V9kpAZHE4F_GSJgxvz0gryCvqY_9CUJ=s800"
            },
            {
              url: "https://imperfectcritic.wordpress.com/2020/07/28/please-do-not-read-this-guest-posting-suganya-devi-p/",
              title: "Please do not read this ... I Guest posting – Suganya Devi. P",
              date: "28 July 2020",
              img: "https://imperfectcritic.wordpress.com/wp-content/uploads/2020/07/ddddd.jpeg"
            },
            {
              url: "https://imperfectcritic.wordpress.com/2020/04/19/consequence-of-ignorance-do-we-practice-or-politics-religion/",
              title: "Consequence of ignorance: Do we practice or politics religion?",
              date: "19 April 2020",
              img: "https://imperfectcritic.wordpress.com/wp-content/uploads/2020/08/2.jpg"
            },
            {
              url: "https://imperfectcritic.wordpress.com/2020/04/10/dear-girls/",
              title: "Dear Girls,",
              date: "10 April 2020",
              img: "https://imperfectcritic.wordpress.com/wp-content/uploads/2020/04/wp-1586537666588.jpg?w=200"
            },
            {
              url: "https://imperfectcritic.wordpress.com/2020/04/03/social-distancing-term-heared-for-the-first-time-guest-posting/",
              title: "“Social Distancing” term heared for the first time | Guest posting",
              date: "3 April 2020",
              img: "https://imperfectcritic.wordpress.com/wp-content/uploads/2020/04/ssd.jpg"
            },
            {
              url: "https://imperfectcritic.wordpress.com/2020/04/02/consequences-of-ignorance-the-school-education-system/",
              title: "Consequences of Ignorance: The School Education System",
              date: "2 April 2020",
              img: "https://imperfectcritic.wordpress.com/wp-content/uploads/2020/04/k-191-eye-ae-00137-1.jpg"
            },
            {
              url: "https://imperfectcritic.wordpress.com/2020/04/02/consequences-of-ignorance-the-modern-tamil-society-and-its-destruction/",
              title: "Consequences of Ignorance: The Modern Society and its destruction",
              date: "2 April 2020",
              img: "https://imperfectcritic.wordpress.com/wp-content/uploads/2020/04/254-2542415_tamil-is-one-of-the-very-few-languages-2.jpg"
            }
          ].map((blog, idx) => (
            <div key={idx} className="snap-start flex-none w-[320px] bg-white border border-gray-100 flex flex-col shadow-sm hover:shadow-xl transition-shadow opacity-0 animate-fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
              <div className="w-full h-48 bg-gray-200 overflow-hidden">
                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-1 items-center text-center">
                <p className="text-gray-500 mb-4 text-sm">{blog.date}</p>
                <h4 className="text-xl font-medium text-gray-800 leading-tight mb-8 line-clamp-3">{blog.title}</h4>
                <div className="mt-auto">
                  <a className="text-[#025a0b] font-medium hover:text-green-800 transition-colors" href={blog.url} target="_blank" rel="noopener noreferrer">Continue Reading</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
