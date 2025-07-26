import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-sports.jpg";

const Hero = () => {
  return (
    <section id="trang-chu" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sân thể thao hiện đại"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Đặt Sân Thể Thao
            <span className="block text-accent">Dễ Dàng & Nhanh Chóng</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Hệ thống đặt sân thể thao hiện đại với nhiều loại sân đa dạng. 
            Đặt sân online, thanh toán tiện lợi, trải nghiệm tuyệt vời.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-accent" />
              <span className="font-semibold">4.9/5 ⭐ Đánh giá</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-semibold">10+ Địa điểm</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="font-semibold">Đặt sân 24/7</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sport" size="lg" className="text-lg px-8 py-6">
              Đặt sân ngay
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              Xem sân thể thao
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;