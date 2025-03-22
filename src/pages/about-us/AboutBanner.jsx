import about from '../../assets/about-us.jpg'
const AboutBanner = () => {
   return (
      <div className="max-w-7xl mx-auto px-3 my-10">
         <img src={about} className='w-full rounded-sm'/>
         <section className="bg-white shadow-md rounded-lg p-6 mt-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-gray-600 mb-4">EduKing BD believes that knowledge alone is not enough - real skills can bring about real change. That's why we've created Bangladesh's first full-fledged e-learning platform, where our goal is not just to educate students, but to make them truly skilled. Our mission is very clear: to make skills acquisition easy, effective and fruitful.</p>
         </section>
      </div>
   );
};

export default AboutBanner;