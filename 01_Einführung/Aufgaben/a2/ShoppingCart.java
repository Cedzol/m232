import java.util.List;

public class ShoppingCart {

    private List<String> shoppingList;

    private boolean bookAdded;

    public ShoppingCart(){

    }

    public void addToList(String item, boolean isBook){
        this.shoppingList.add(item);
        if (isBook){
           this.bookAdded = isBook;
        }
    }

    public boolean getBookAdded(){
        return this.bookAdded;
    }
}
