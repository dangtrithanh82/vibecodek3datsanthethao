import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="lien-he" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">SportBook</span>
            </div>
            <p className="text-primary-foreground/80">
              Hệ thống đặt sân thể thao hàng đầu Việt Nam. 
              Mang đến trải nghiệm thể thao tuyệt vời nhất cho bạn.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm">
                  123 Đường ABC, Quận 1, TP.HCM
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-sm">0123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm">info@sportbook.vn</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm">6:00 - 22:00 hằng ngày</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Dịch vụ</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-accent cursor-pointer transition-colors">Đặt sân bóng đá</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Đặt sân bóng rổ</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Đặt sân tennis</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Đặt sân cầu lông</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Tổ chức giải đấu</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Huấn luyện viên</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-accent cursor-pointer transition-colors">Về chúng tôi</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Chính sách</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Điều khoản</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Hỗ trợ</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Đánh giá</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Tin tức</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 SportBook. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;