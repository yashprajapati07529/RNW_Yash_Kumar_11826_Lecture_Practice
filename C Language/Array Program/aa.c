#include <stdio.h>

int main() {
    // Array declaration
    int numbers[5];

    // User se input lena
    printf("numbers enter karein:\n");
    for(int i = 0; i < 5; i++) {
        scanf("%d", &numbers[i]);
    }

    // Array elements print karna
    printf("\nAapne ye numbers enter kiye:\n");
    for(int i = 0; i < 5; i++) {
        printf("Index %d par value hai: %d\n", i, numbers[i]);
    }

    return 0;
}
