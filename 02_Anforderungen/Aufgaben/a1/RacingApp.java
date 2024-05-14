import java.util.List;

public class RacingApp {

    public static double calculateTotalTimePerCar(List<Double> lapTimes) {
        if (lapTimes.size() <= 1) return 0;
        return lapTimes.stream().skip(1).mapToDouble(Double::doubleValue).sum();
    }

    public static double calculateAverageTimePerCar(List<Double> lapTimes) {
        if (lapTimes.size() <= 1) return 0;
        return lapTimes.stream().skip(1).mapToDouble(Double::doubleValue).average().orElse(0);
    }

    public static double calculateTotalTimeForAllCars(List<List<Double>> allLapTimes) {
        return allLapTimes.stream()
                .mapToDouble(RacingApp::calculateTotalTimePerCar)
                .sum();
    }

    public static double calculateAverageTimeForAllCars(List<List<Double>> allLapTimes) {
        return allLapTimes.stream()
                .flatMap(List::stream)
                .skip(allLapTimes.size())
                .mapToDouble(Double::doubleValue)
                .average()
                .orElse(0);
    }
    // Beispielverwendung
    public static void main(String[] args) {
        List<Double> car1LapTimes = List.of(12.5, 10.2, 11.3, 9.8);
        List<Double> car2LapTimes = List.of(13.2, 10.4, 12.1, 11.6);
        List<List<Double>> allLapTimes = List.of(car1LapTimes, car2LapTimes);

        double totalCar1 = calculateTotalTimePerCar(car1LapTimes);
        double averageCar1 = calculateAverageTimePerCar(car1LapTimes);

        double totalTimeAllCars = calculateTotalTimeForAllCars(allLapTimes);
        double averageTimeAllCars = calculateAverageTimeForAllCars(allLapTimes);

        System.out.println("Gesamtzeit für Auto 1: " + totalCar1);
        System.out.println("Durchschnittszeit für Auto 1: " + averageCar1);
        System.out.println("Gesamtzeit für alle Autos: " + totalTimeAllCars);
        System.out.println("Durchschnittszeit für alle Autos: " + averageTimeAllCars);
    }
}
