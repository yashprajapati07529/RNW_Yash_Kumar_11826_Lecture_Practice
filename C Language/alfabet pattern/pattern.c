#include <stdio.h>
int main() {
    int i, j;
    char ch;
    for(i = 1; i <= 5; i++) {
        ch = 'A';
        for(j = 5; j >= 1; j--) {
            if(j > i) 
                printf(" "); // If condition for spaces
            else 
                printf("%c", ch++); // Else for alphabets
        }
        printf("\n");
    }
    return 0;
}
