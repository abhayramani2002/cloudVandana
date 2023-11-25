import java.util.Scanner;

class romanToInteger {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        String romanNumeral = s.nextLine();
        int result = toInt(romanNumeral);
        System.out.println(result);
        s.close();
    }
    public static int toInt(String s) {
         int answer = 0, number = 0, prev = 0;
         for (int j = s.length() - 1; j >= 0; j--) {
        switch (s.charAt(j)) {
            case 'M':
                number = 1000;
                break;
            case 'D':
                number = 500;
                break;
            case 'C':
                number = 100;
                break;
            case 'L':
                number = 50;
                break;
            case 'X':
                number = 10;
                break;
            case 'V':
                number = 5;
                break;
            case 'I':
                number = 1;
                break;
            default:
                System.out.println("Invalid roman");
                return 0;
        }
        if (number < prev) {
            answer -= number;
        }
        else {
            answer += number;
        }
        prev = number;
    }
    return answer;
    }
}