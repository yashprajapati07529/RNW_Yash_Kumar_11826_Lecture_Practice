#include <stdio.h>
int main() {
    char choice, c;
    printf("Enter 'u' for Uppercase or 'l' for Lowercase: ");
    scanf("%c", &choice);

    if (choice == 'u' || choice == 'U') {
        for (c = 'A'; c <= 'Z'; ++c) printf("%c ", c);
    } else if (choice == 'l' || choice == 'L') {
        for (c = 'a'; c <= 'z'; ++c) printf("%c ", c);
    } else {
        printf("Invalid input!");
    }
    return 0;
}
