import Image from 'next/image';
export default function About() {
    return (
      <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-20 bg-[#FFE4C4] text-black">
        <div className="w-48 h-48 md:self-stretch md:h-auto rounded-full overflow-hidden border-4 border-white bg-yellow-50">
         <Image  src="https://img.freepik.com/premium-photo/portrait-beautiful-girl-holding-laptop-her-hands-young-home-office-yellow-background-working-virtual-with-computer_432566-7776.jpg"
            alt="Erica working"
            className="w-full h-full object-cover"
          />
        
           
        </div>
        <div className="max-w-xl  p-6 rounded-lg shadow-xl">
          <h3 className="text-orange-500 text-xl font-bold uppercase mb-2">ABOUT</h3>
          <h4 className="text-2xl font-bold mb-4 text-black">
            CRAFTING UNIQUE BRAND EXPERIENCES SINCE 2014
          </h4>
          <p className="text-gray-800 mb-6 leading-relaxed">
            With a Visual Arts degree, my journey began in graphic design; crafting logos and marketing materials. Video editing followed, where I introduced animation to tell stories, and later ventured into 3D modeling for immersive experiences.
          </p>
          <button className="border border-black text-black px-6 py-3 uppercase text-sm rounded hover:bg-black hover:text-white transition">
            SCHEDULE A CALL
          </button>
        </div>
      </section>
    );
  }
  