
using namespace std;

class Solution {
    
public:

    int titleToNumber(string columnTitle) {
        
        const int alphabetSize = 26;
        const int ascii_A = 65;
        const size_t size = columnTitle.length();
        int column = 0;

        for (int i = 0; i < size; i++) {
            column = (column * alphabetSize) + (columnTitle[i] - ascii_A + 1);
        }
        return column;
    }
};
