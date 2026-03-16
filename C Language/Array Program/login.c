#include <stdio.h>
#include <string.h>
#include <ctype.h> // Required for isalpha, isdigit, ispunct functions

#define MIN_LENGTH 6 // Define the minimum length as per criteria

int is_strong(char password[]) {
    int length = strlen(password);
    if (length < MIN_LENGTH) { // Check minimum length
        return 0; // Not strong
    }

    int has_letter = 0;
    int has_digit = 0;
    int has_special = 0;

    for (int i = 0; i < length; i++) {
        if (isalpha(password[i])) { // Check if character is a letter
            has_letter = 1;
        } else if (isdigit(password[i])) { // Check if character is a digit
            has_digit = 1;
        } else if (ispunct(password[i])) { // Check if character is a punctuation/special symbol
            has_special = 1;
        }
        // Note: other characters like spaces are ignored, as per problem context
    }

    // Check if all criteria are met
    if (has_letter && has_digit && has_special) {
        return 1; // Strong
    } else {
        return 0; // Not strong
    }
}

int main() {
    char password[100]; // Buffer to store the password

    printf("Create your password: ");
    // Use scanf to read the input until a space or newline is encountered
    // This works well for the provided examples "Admin@123" and "hello#89"
    scanf("%s", password);

    if (is_strong(password)) {
        printf("Output:\nYour password is **Strong**.\n");
    } else {
        printf("Output:\nYour password is **not Strong**.\n");
    }

    return 0;
}
