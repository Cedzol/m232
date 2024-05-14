public class main {
    public static void main(String[] args) {

    }

    public int getDiscountPercentage(ShoppingCart shoppingCart){
        if(shoppingCart.getBookAdded()){
            return 5;
        } else {
            return 0;
        }
    }
}
