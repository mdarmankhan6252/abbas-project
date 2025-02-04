import Card from "../../components/Card";

const Courses = () => {
   return (
      <div className="bg-[#EFF4FC] py-20 rounded-lg  p">
         <div className="text-center space-y-4 max-w-2xl mx-auto px-3">
            <h1 className="text-3xl md:text-4xl font-primary font-bold text-gray-800">Our Courses</h1>
            <p className="font-primary text-[#828080] leading-7 text-lg">ঝাঁপিয়ে পড়ুন এবং আপনার উদ্যোক্তা মনোভাবকে আলিঙ্গন করুন – আপনার আইডিয়াকে বাস্তবে রূপান্তর করার জন্য এখনকার চেয়ে ভাল সময় আর নেই!</p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-7xl mx-auto px-3">
            <Card />
            <Card />
            <Card />
         </div>

      </div>
   );
};

export default Courses;