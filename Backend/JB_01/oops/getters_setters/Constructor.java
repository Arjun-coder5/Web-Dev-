public class Constructor{
  public static void main(String[] args) {
    Car c1 = new Car("Lambo","Red",100);
    // c1.Brand = "Lambo";
    // c1.colo r = "Red";
    // c1.speed = 100;
    
    c1.drive();


   
    Car c2 = new Car("Fortuner","White",100);
     System.out.println( c2.getSpeed());
     c2.setSpeed(500);
     
    // c1.Brand = "Lambo";
    // c1.color = "Red";
    // c1.speed = 100;
    c1.drive();
  }
} 