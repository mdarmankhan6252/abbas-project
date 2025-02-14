import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import banner from "../../assets/banner.jfif";

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.3, duration: 0.6, ease: "easeOut" }
  })
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Banner = () => {
  return (
    <div className="mx-3">
      <div
        className="max-w-7xl mx-auto px-8 my-12 py-20 border border-gray-200 rounded-lg flex items-center justify-between gap-6 flex-col md:flex-row"
        style={{ background: "radial-gradient(at center, #c2d8f9 0%, #EFF4FC 100%)" }}
      >
        <motion.div
          className="space-y-5 basis-[60%]"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={0}
        >
          <motion.h1 className="text-3xl md:text-4xl font-semibold" variants={textVariants} custom={1}>
            <span className="text-primary font-bold font-serif text-4xl md:text-5xl">Eduking</span> এর লক্ষ্য সবাই হবে দক্ষ !
          </motion.h1>
          <motion.p className="font-light" variants={textVariants} custom={2}>
            দক্ষতার জগতে নিজেকে এগিয়ে নেওয়ার এখনই সময়
          </motion.p>
          <motion.div variants={textVariants} custom={3}>
            <Link to="/" className="btn flex items-center space-x-2 max-w-52 justify-center">
              <span>নিজেকে এগিয়ে</span> <MdArrowForward className="text-lg" />
            </Link>
          </motion.div>
          <motion.p className="text-lg text-gray-800" variants={textVariants} custom={4}>
            অজুহাত নয়, এবার দক্ষতার পালা! ঘরে বসেই নতুন স্কিল শিখে নিজের ক্যারিয়ার গড়ুন. EduKing BD আপনার পাশে আছে
          </motion.p>
        </motion.div>
        <motion.div className="basis-[40%]" initial="hidden" animate="visible" variants={imageVariants}>
          <img src={banner} alt="" className="w-full rounded-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;

