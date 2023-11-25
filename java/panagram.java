import java.util.Scanner;

public class panagram {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    System.out.println("Enter a sentence:");
    String input = s.nextLine();

    boolean isPangram = checkPangram(input.toLowerCase());
    System.out.println("Is Pangram: " + isPangram);
    s.close();
  }

  private static boolean checkPangram(String input) {
    if (input.length() < 26) {
      return false;
    }
    for (char i = 'a'; i <= 'z'; i++) {
      if (input.indexOf(i) == -1) {
        return false;
      }
    }
    return true;
  }

}
