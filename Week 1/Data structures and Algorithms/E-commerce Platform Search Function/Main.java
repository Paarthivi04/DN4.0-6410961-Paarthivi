public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Speakers", "Electronics"),
            new Product(2, "Shirt", "Fashion"),
            new Product(3, "Smartphone", "Electronics"),
            new Product(4, "Shoes", "Footwear")
        };

        System.out.println("Linear Search for 'Speakers':");
        Product result1 = Search.linearSearch(products, "Speakers");
        System.out.println("ProductId - ProductName - Category");
        System.out.println(result1 != null ? result1 : "Product not found");
        
        System.out.println();
        
        System.out.println("Binary Search for 'Speakers':");
        Product result2 = Search.binarySearch(products, "Speakers");
        System.out.println("ProductId - ProductName - Category");
        System.out.println(result2 != null ? result2 : "Product not found");
        
        System.out.println();

        System.out.println("Analysis:");
        System.out.println("Linear Search: Time Complexity is O(n)");
        System.out.println("Binary Search: Time Complexity is O(log n) After Sorting");
        System.out.println("Binary Search is more efficient for large, sorted datasets.");
    }
}
