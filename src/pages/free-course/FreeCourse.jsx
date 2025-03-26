import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, PlayCircle } from 'lucide-react';

const FreeCourse = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-20 px-4">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Free Courses <span className="text-primary">Coming Soon</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get ready for an exciting learning journey with our upcoming free courses!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: BookOpen,
              title: "Diverse Courses",
              description: "Multiple subjects to spark your curiosity",
              color: "text-blue-600"
            },
            {
              icon: Clock,
              title: "Flexible Learning",
              description: "Learn at your own pace, anytime",
              color: "text-green-600"
            },
            {
              icon: PlayCircle,
              title: "High-Quality Content",
              description: "Expert-led, practical learning experiences",
              color: "text-purple-600"
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <feature.icon 
                className={`mx-auto mb-4 w-16 h-16 ${feature.color} opacity-80 group-hover:scale-110 transition-transform`} 
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants} 
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join Waitlist
          </motion.button>
        </motion.div>

        {/* Decorative Background Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-20 z-[-1]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-green-100 rounded-full opacity-20 z-[-1]"
        />
      </motion.div>
    </div>
  );
};

export default FreeCourse;