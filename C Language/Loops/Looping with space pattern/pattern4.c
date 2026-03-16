#include <stdio.h>

int main() {
    int rows = 5;

   
    for (int i = rows; i >= 1; i--) {
        
        for (int j = 1; j <= rows - i; j++) {
            printf(" ");
        }

        int val = (i % 2 != 0) ? 1 : 0;

        for (int k = 1; k <= i; k++) {
            printf("%d", val);
           
            val = 1 - val;
        }

        printf("\n");
    }

    return 0;
}
