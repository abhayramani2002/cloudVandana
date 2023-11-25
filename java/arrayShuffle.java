import java.util.Random;
import java.util.Scanner;

public class arrayShuffle {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    System.out.println("Enter the length of the array");
    int n = s.nextInt();
    int arr[] = new int[n];
    System.out.println("Enter the elements4");
    for (int i = 0; i < n; i++) {
      arr[i] = s.nextInt();
    }
        shuffleArray(arr);
        // Printing the shuffled array
        for (int element : arr) {
          System.out.print(element + " ");
        }
        s.close();
    }
    private static void shuffleArray(int[] array) {
        Random rand = new Random();
        for (int i = array.length - 1; i > 0; i--) {
            int index = rand.nextInt(i + 1);
            int temp = array[i];
            array[i] = array[index];
            array[index] = temp;
        }
    }
}
