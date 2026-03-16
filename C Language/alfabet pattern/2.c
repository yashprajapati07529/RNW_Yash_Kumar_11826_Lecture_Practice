#include <stdio.h>
int main() {
    int rows = 7;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j <= rows/2; j++) {
            // Logic for 'A' shape
            if (((i == 0 || i == rows / 2) && j != 0 && j != rows / 2) || 
                ((j == 0 || j == rows / 2) && i != 0)) 
                printf("*");
            else 
                printf(" ");
        }
        printf("\n");
    }
    return 0;
}
