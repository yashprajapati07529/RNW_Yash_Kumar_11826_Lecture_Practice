#include <stdio.h>
#include <string.h>

int main() {
    
    const char desired_email[] = "admin@gmail.com";
    const char desired_password[] = "123456";


    char input_email[100];
    char input_password[100];

    printf("Input:\n");
 
    printf("Enter your email: ");
    scanf("%s", input_email);


    printf("Enter your password: ");
    scanf("%s", input_password);


    if (strcmp(input_email, desired_email) == 0 && strcmp(input_password, desired_password) == 0) {
        printf("Output:\nLogin Successful...\n");
    } else {
        printf("Output:\nLogin Failed. Invalid Credentials..\n");
    }

    return 0;
}
