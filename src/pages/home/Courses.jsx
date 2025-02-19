import Card from "../../components/Card";
import { motion } from "framer-motion";

const Courses = () => {
   return (
      <div className="mx-3">
         <div
            className="py-20 rounded-lg max-w-7xl mx-auto px-6 border border-gray-200"
            style={{ background: 'radial-gradient(at center top, #d6e6ff 0%, #EFF4FC 100%)' }}
         >
            <motion.div
               className="text-center space-y-4 max-w-2xl mx-auto px-3"
               initial={{ opacity: 0, y: -30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.6 }}
            >
               <motion.h1
                  className="text-3xl md:text-4xl font-primary font-bold text-gray-800"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
               >
                  Our Courses
               </motion.h1>

               <motion.p
                  className="font-primary text-[#828080] leading-7 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
               >
                  ঝাঁপিয়ে পড়ুন এবং আপনার উদ্যোক্তা মনোভাবকে আলিঙ্গন করুন – আপনার আইডিয়াকে বাস্তবে রূপান্তর করার জন্য এখনকার চেয়ে ভাল সময় আর নেই!
               </motion.p>
            </motion.div>

            <motion.div
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               variants={{
                  visible: {
                     transition: {
                        staggerChildren: 0.2
                     }
                  }
               }}
            >
               {/* course and it's path is here */}

               <Card link='/course-01' />
               <Card link='/course-02' />
               <Card link='/course-03' />



            </motion.div>
         </div>
      </div>
   );
};

export default Courses;