 class Car {
 private String Brand;
 private  String color;
  private int speed;
  public Car(String Brand,String color,int speed){
    System.out.println("Constructor Called : ");
    this.Brand = Brand;
    this.color = color;
    // this.speed = speed;
    setSpeed(speed);
  }

    public void drive(){
    System.out.println(Brand+" is at speed of "+getSpeed());
   }
   public int getSpeed(){
    if(speed<0){
      return 0;
    }
    return speed;
   }
   public void setSpeed(int speed){
    if (speed < 0) {
      this.speed = 0;
    } else {
      this.speed = speed;
    }
   }
  

}

public class Encap{
  public static void main(String[] args) {
    Car car1 = new Car("Toyota","Red",-100);
    // car1.setSpeed(500);
    car1.drive();
    Car car2 = new Car("Kia","White",100);
  }
}