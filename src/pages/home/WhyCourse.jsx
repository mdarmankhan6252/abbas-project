
import { Link } from "react-router-dom";
import banner from '../../assets/banner-2.jpg';

const WhyCourse = () => {
  return (
    <div className="mx-3">
      <div 
        className="max-w-7xl mx-auto px-4 my-12 py-12 sm:py-20 border border-gray-200 rounded-lg flex items-center justify-between gap-6 flex-col-reverse md:flex-row" 
        style={{ background: "radial-gradient(at center top, #c2d8f9 0%, #EFF4FC 100%)" }}
      >
        <div className="space-y-6 basis-[60%]">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            কেন আপনি <span className="font-bold text-primary">EduKing</span> এর সাথে শিখবেন?
          </h1>
          <div className="space-y-3 text-justify leading-5">
            {["এডুকিং বাংলাদেশের প্রথম ই-লার্নিং প্ল্যাটফর্ম, যেখানে আমরা শুধুমাত্র কোর্স প্রদান করি না; বরং আমাদের শিক্ষার্থীদের দক্ষ করে গড়ে তুলতে এসাইনমেন্ট দিয়ে তাদের প্রশিক্ষণ নিশ্চিত করি। আমরা বিশ্বাস করি, শুধু জ্ঞান থাকা যথেষ্ট নয়—দক্ষতা ছাড়া জ্ঞান অমূল্য। এজন্যই, আমাদের কোর্সের পাশাপাশি আপনি প্র্যাকটিক্যাল স্কিল শিখতে পারবেন যা আপনাকে বাস্তব জগতের চ্যালেঞ্জ মোকাবিলায় প্রস্তুত করবে।",
              "আরো গুরুত্বপূর্ণ, আমরা সকল শিক্ষার্থীদের মধ্যে একটি শক্তিশালী কমিউনিটি তৈরি করি, যা আপনার পার্সোনাল এবং প্রফেশনাল লাইফে অভাবনীয় ভূমিকা রাখে। এই সমর্থনমূলক কমিউনিটি আপনাকে আপনার ক্যারিয়ার এবং জীবনে নতুন উচ্চতায় পৌঁছাতে সহায়তা করবে।",
              "এডুকিং-এ, আমরা নিশ্চিত করি যে আপনি শুধু শিখবেন না, বরং সত্যিকার অর্থে এগিয়ে যাবেন!"]
              .map((paragraph, index) => (
                <p key={index} className="text-gray-800 leading-8">
                  {paragraph}
                </p>
              ))}
          </div>
          <div className="pt-4">
            <Link to='/' className="btn" style={{ padding: '14px 30px' }}>
              যোগাযোগ
            </Link>
          </div>
        </div>
        
        <div className="basis-[40%]">
          <img 
            src={banner} 
            alt="EduKing Banner" 
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyCourse;