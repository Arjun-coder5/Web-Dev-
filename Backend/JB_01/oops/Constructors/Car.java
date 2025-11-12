public class Car {
  String Brand;
  String color;
  int speed;
  public Car(String Brand,String color,int speed){
    System.out.println("Constructor Called : ");
    this.Brand = Brand;
    this.color = color;
    this.speed = speed;
  }
   public int getSpeed(){
    return speed;
   }
   public void setSpeed(int speed){
    this.speed = speed;
   }
  
   public void drive(){
    System.out.println(Brand+"is at speed of"+speed);
   }
}