public class TipCalculator {

    public static int calculateTipPercentage(List<String> names) {
        int groupSize = names.size();
        if (groupSize == 0) {
            return 0;
        } else if (groupSize > 5) {
            return 20;
        } else {
            return 10;
        }
    }

    //Beispielverwendung
    public static void main(String[] args) {
        List<String> names = List.of("Alice", "Bob", "Charlie", "David", "Eva");
        int tipPercentage = calculateTipPercentage(names);
        System.out.println("Trinkgeld-Prozentsatz: " + tipPercentage);
    }
}
