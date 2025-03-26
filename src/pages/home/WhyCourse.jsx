import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import banner from '../../assets/banner-2.jpg'

const WhyCourse = () => {
  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 // Slide from left
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 50 // Slide from right
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="mx-3">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-8 my-12 py-20 border border-gray-200 rounded-lg flex items-center justify-between gap-6 flex-col md:flex-row" 
        style={{ background: "radial-gradient(at center top, #c2d8f9 0%, #EFF4FC 100%)" }}
      >
        <motion.div 
          variants={textVariants}
          className="space-y-6 basis-[60%]"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold">
            কেন আপনি <span className="font-bold text-primary">EduKing</span> এর সাথে শিখবেন?
          </h1>
          <div className="space-y-4">
            {[
              "এডুকিং বাংলাদেশের প্রথম ই-লার্নিং প্ল্যাটফর্ম, যেখানে আমরা শুধুমাত্র কোর্স প্রদান করি না; বরং আমাদের শিক্ষার্থীদের দক্ষ করে গড়ে তুলতে এসাইনমেন্ট দিয়ে তাদের প্রশিক্ষণ নিশ্চিত করি। আমরা বিশ্বাস করি, শুধু জ্ঞান থাকা যথেষ্ট নয়—দক্ষতা ছাড়া জ্ঞান অমূল্য। এজন্যই, আমাদের কোর্সের পাশাপাশি আপনি প্র্যাকটিক্যাল স্কিল শিখতে পারবেন যা আপনাকে বাস্তব জগতের চ্যালেঞ্জ মোকাবিলায় প্রস্তুত করবে।",
              "আরো গুরুত্বপূর্ণ, আমরা সকল শিক্ষার্থীদের মধ্যে একটি শক্তিশালী কমিউনিটি তৈরি করি, যা আপনার পার্সোনাল এবং প্রফেশনাল লাইফে অভাবনীয় ভূমিকা রাখে। এই সমর্থনমূলক কমিউনিটি আপনাকে আপনার ক্যারিয়ার এবং জীবনে নতুন উচ্চতায় পৌঁছাতে সহায়তা করবে।",
              "এডুকিং-এ, আমরা নিশ্চিত করি যে আপনি শুধু শিখবেন না, বরং সত্যিকার অর্থে এগিয়ে যাবেন!"
            ].map((paragraph, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.3,
                  duration: 0.6 
                }}
                className="text-gray-800 leading-8"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
          <div className="pt-4">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link 
                to='/' 
                className="btn" 
                style={{ padding: '14px 30px' }}
              >
                যোগাযোগ
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          variants={imageVariants}
          className="basis-[40%]"
        >
          <motion.img 
            src={banner} 
            alt="" 
            className="w-full rounded-lg"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyCourse;