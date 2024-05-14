import java.util.ArrayList;
import java.util.List;

public class TravelPlanner {

    public static List<String> addDestination(List<String> route, String destination) {
        List<String> updatedRoute = new ArrayList<>(route);
        updatedRoute.add(destination);
        return updatedRoute;
    }

    public static List<String> removeDestination(List<String> route, String destination) {
        List<String> updatedRoute = new ArrayList<>(route);
        updatedRoute.remove(destination);
        return updatedRoute;
    }

    public static List<String> updateDestination(List<String> route, String oldDestination, String newDestination) {
        List<String> updatedRoute = new ArrayList<>(route);
        int index = updatedRoute.indexOf(oldDestination);
        if (index != -1) {
            updatedRoute.set(index, newDestination);
        }
        return updatedRoute;
    }

    public static List<String> getRoute(List<String> route) {
        return new ArrayList<>(route);
    }

    // Beispielverwendung
    public static void main(String[] args) {
        List<String> route = new ArrayList<>();
        route = addDestination(route, "Paris");
        route = addDestination(route, "Berlin");
        route = addDestination(route, "Rome");

        System.out.println("Aktuelle Route: " + getRoute(route));

        route = removeDestination(route, "Berlin");
        System.out.println("Route nach Entfernung von Berlin: " + getRoute(route));

        route = updateDestination(route, "Rome", "Milan");
        System.out.println("Route nach Änderung von Rome zu Milan: " + getRoute(route));
    }
}
