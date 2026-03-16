#include <stdio.h>
#include <stdbool.h> // For using boolean type
#define MAX_SIZE 100 

int main() {
    char str[MAX_SIZE];
    int length = 0;
    bool isPalindrome = true;
    printf("Enter any string: ");
    // Use fgets for safer input
    if (fgets(str, MAX_SIZE, stdin) == NULL) {
        return 1; // Input error
    }

    // Calculate length manually (excluding potential newline character from fgets)
    while (str[length] != '\\0' && str[length] != '\\n') {
        length++;
    }
    for (int i = 0; i < length / 2; i++) {
        if (str[i] != str[length - 1 - i]) {
            isPalindrome = false;
            break; // Exit the loop as soon as a mismatch is found
        }
    }
    if (isPalindrome) {
        printf("Output: The given string is a Palindrome.\\n");
    } else {
        printf("Output: The given string is not a Palindrome.\\n");
    }

    return 0;
}
