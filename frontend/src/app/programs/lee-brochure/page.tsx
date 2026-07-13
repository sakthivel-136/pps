import Link from 'next/link';

export default function LEEBrochure() {
  const downloads = [
    {
      title: "LEE complete pamplet (pdf)",
      url: "https://img1.wsimg.com/blobby/go/84d6469e-cdcc-4379-8457-0ec68f43540a/downloads/pamplet%20updated.pdf?ver=1762616034963"
    },
    {
      title: "General broucher (jpg)",
      url: "https://img1.wsimg.com/blobby/go/84d6469e-cdcc-4379-8457-0ec68f43540a/downloads/a4%20back.jpg?ver=1762616034963"
    },
    {
      title: "LEE Syllabus (jpg)",
      url: "https://img1.wsimg.com/blobby/go/84d6469e-cdcc-4379-8457-0ec68f43540a/downloads/course%20content%20with%20description.jpg?ver=1762616034963"
    },
    {
      title: "LEE - summer camp for school (jpg)",
      url: "https://img1.wsimg.com/blobby/go/84d6469e-cdcc-4379-8457-0ec68f43540a/downloads/LEE-%20school.jpg?ver=1762616034963"
    },
    {
      title: "LEE-short term workshop (jpg)",
      url: "https://img1.wsimg.com/blobby/go/84d6469e-cdcc-4379-8457-0ec68f43540a/downloads/LEE-short%20term%20work%20shop.jpg?ver=1762616034964"
    },
    {
      title: "LEE- long term course (jpg)",
      url: "https://img1.wsimg.com/blobby/go/84d6469e-cdcc-4379-8457-0ec68f43540a/downloads/LEE-%20long%20term%20course.jpg?ver=1762616034964"
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        
        <Link href="/programs" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#025a0b] font-medium mb-12 transition-colors opacity-0 animate-fade-in-up">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Programs
        </Link>

        <h1 className="text-5xl md:text-6xl font-extrabold text-[#025a0b] mb-6 tracking-tight opacity-0 animate-fade-in-up delay-100">LEE Brochure</h1>
        <p className="text-xl text-gray-500 mb-16 opacity-0 animate-fade-in-up delay-100">You can download the files here</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 animate-fade-in-up delay-200">
          {downloads.map((item, index) => (
            <div key={index} className="bg-[#fafafa] border border-gray-100 p-10 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-800 font-medium mb-8 h-12 flex items-center justify-center">{item.title}</p>
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#025a0b] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wider hover:bg-green-800 transition-colors shadow-md"
              >
                DOWNLOAD
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
