import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, MapPin, Star } from "lucide-react";
import soccerField from "@/assets/soccer-field.jpg";
import basketballCourt from "@/assets/basketball-court.jpg";
import tennisCourt from "@/assets/tennis-court.jpg";
import badmintonCourt from "@/assets/badminton-court.jpg";

const sportsData = [
  {
    id: 1,
    name: "Sân bóng đá",
    image: soccerField,
    price: "200.000",
    duration: "90 phút",
    capacity: "22 người",
    rating: 4.8,
    available: true,
    features: ["Cỏ nhân tạo", "Đèn chiếu sáng", "Khán đài"],
    description: "Sân bóng đá tiêu chuẩn FIFA với cỏ nhân tạo chất lượng cao"
  },
  {
    id: 2,
    name: "Sân bóng rổ",
    image: basketballCourt,
    price: "150.000",
    duration: "60 phút",
    capacity: "10 người",
    rating: 4.9,
    available: true,
    features: ["Sàn gỗ", "Điều hòa", "Âm thanh"],
    description: "Sân bóng rổ trong nhà với trang thiết bị hiện đại"
  },
  {
    id: 3,
    name: "Sân tennis",
    image: tennisCourt,
    price: "120.000",
    duration: "60 phút", 
    capacity: "4 người",
    rating: 4.7,
    available: false,
    features: ["Mặt sân cứng", "Lưới chuẩn", "Đèn LED"],
    description: "Sân tennis ngoài trời với view đẹp và không gian thoáng mát"
  },
  {
    id: 4,
    name: "Sân cầu lông",
    image: badmintonCourt,
    price: "80.000",
    duration: "60 phút",
    capacity: "4 người", 
    rating: 4.6,
    available: true,
    features: ["Sàn gỗ", "Lưới chuẩn", "Điều hòa"],
    description: "Sân cầu lông trong nhà thoáng mát, trang thiết bị đầy đủ"
  }
];

const SportsList = () => {
  return (
    <section id="san-the-thao" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sân Thể Thao <span className="text-primary">Đa Dạng</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cung cấp đa dạng các loại sân thể thao với chất lượng tốt nhất, 
            phù hợp với mọi nhu cầu của bạn.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {sportsData.map((sport) => (
            <Card key={sport.id} className="overflow-hidden hover:shadow-sport transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  {sport.available ? (
                    <Badge className="bg-primary text-primary-foreground">Có sẵn</Badge>
                  ) : (
                    <Badge variant="destructive">Hết chỗ</Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-accent fill-current" />
                    <span className="font-semibold text-sm">{sport.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">{sport.name}</CardTitle>
                    <CardDescription className="text-base">{sport.description}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{sport.price}đ</div>
                    <div className="text-sm text-muted-foreground">/{sport.duration}</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{sport.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{sport.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {sport.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant={sport.available ? "sport" : "secondary"} 
                  className="w-full"
                  disabled={!sport.available}
                >
                  {sport.available ? "Đặt sân ngay" : "Đã hết chỗ"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsList;