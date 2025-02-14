
const AboutBanner = () => {
   return (
      <div className="max-w-7xl mx-auto px-3 my-10">
         <div className="relative">
            <img
               src="https://iili.io/2p2UZAv.jpg"
               alt="Banner"
               className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-t-lg"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
               <h2 className="text-3xl md:text-4xl font-bold pb-3">EduKing BD</h2>
               <p>An online educational platform in Bangladesh.</p>
            </div>
         </div>
         <section className="bg-white shadow-md rounded-lg p-6 mt-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-gray-600 mb-4">EduKing BD believes that knowledge alone is not enough - real skills can bring about real change. That's why we've created Bangladesh's first full-fledged e-learning platform, where our goal is not just to educate students, but to make them truly skilled. Our mission is very clear: to make skills acquisition easy, effective and fruitful.</p>
         </section>
      </div>
   );
};

export default AboutBanner;