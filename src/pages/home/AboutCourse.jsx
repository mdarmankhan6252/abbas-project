
import { motion } from 'framer-motion';
import { MdOutlineTask, MdSupportAgent } from "react-icons/md";
import { PiBookOpenUser } from "react-icons/pi";

const AboutCourse = () => {
  // Animation variants for staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 // Delay between each child animation
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 // Start 50 pixels below
    },
    visible: { 
      opacity: 1, 
      y: 0, // Animate to original position
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of component is visible
    >
      <motion.div 
        variants={cardVariants}
        className="p-6 rounded-lg bg-[#EFF4FC] hover:shadow-[0px_0px_7px_0] hover:shadow-blue-100 duration-300"
        style={{ background: "radial-gradient(at bottom right, #06bd360d 0%, #06bd3633 100%)" }}
      >
        <div 
          style={{ backgroundColor: "#1CAB55" }}
          className="w-12 h-12 flex items-center justify-center text-white rounded-lg"
        >
          <span className="text-3xl"><PiBookOpenUser /></span>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mt-4 text-green-600">কোর্স এনরোলমেন্ট</h3>
          <p className="text-gray-600 mt-3 text-lg">কোর্স রেজিস্ট্রেশন করে পেমেন্ট করুন সম্পূর্ণ করুন, দ্রুতই কোর্সের এক্সেস পেয়ে যাবেন।</p>
        </div>
      </motion.div>

      <motion.div 
        variants={cardVariants}
        className="p-6 rounded-lg bg-[#EFF4FC] hover:shadow-[0px_0px_7px_0] hover:shadow-blue-100 duration-300"
        style={{ background: "radial-gradient(at bottom right, #f5682c0d 0%, #f5682c33 100%)" }}
      >
        <div 
          style={{ backgroundColor: "#EE7F50" }}
          className="w-12 h-12 flex items-center justify-center text-white rounded-lg"
        >
          <span className="text-3xl"><MdOutlineTask /></span>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mt-4 text-[#f5682c]">অ্যাসাইনমেন্ট</h3>
          <p className="text-gray-600 mt-3 text-lg">প্রাকটিক্যাল অ্যাসাইনমেন্টের মাধ্যমে শিখুন, প্রয়োগ করুন, আর দক্ষ হয়ে উঠুন</p>
        </div>
      </motion.div>

      <motion.div 
        variants={cardVariants}
        className="p-6 rounded-lg bg-[#EFF4FC] hover:shadow-[0px_0px_7px_0] hover:shadow-blue-100 duration-300"
        style={{ background: "radial-gradient(at bottom right, #c2d8f9 0%, #EFF4FC 100%)" }}
      >
        <div 
          style={{ backgroundColor: "#5271FF" }}
          className="w-12 h-12 flex items-center justify-center text-white rounded-lg"
        >
          <span className="text-3xl"><MdSupportAgent /></span>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mt-4 text-primary">সাপোর্টিভ কমিউনিটি</h3>
          <p className="text-gray-600 mt-3 text-lg">আমাদের কমিউনিটিতে যুক্ত করে দেয়া হবে, যেখানে সকল মেন্টর এবং স্কিল্ড লার্নারদের সাপোর্ট পাবে।</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutCourse;