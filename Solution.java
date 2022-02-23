
public class Solution {

    public int titleToNumber(String columnTitle) {

        final int alphabetSize = 26;
        final int ascii_A = 65;
        final int size = columnTitle.length();
        int column = 0;

        for (int i = 0; i < size; i++) {
            column = (column * alphabetSize) + (columnTitle.codePointAt(i) - ascii_A + 1);
        }
        return column;
    }
}
