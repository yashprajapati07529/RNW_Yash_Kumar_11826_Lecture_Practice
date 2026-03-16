#include <stdio.h>

// Simulating the Class with a struct and functions
struct TimeConverter {
    int hours;
    int minutes;
    int seconds;
};

void secondsToHMS(int totalSeconds) {
    int h = totalSeconds / 3600;
    int m = (totalSeconds % 3600) / 60;
    int s = totalSeconds % 60;
    printf("HH:MM:SS => %d:%02d:%02d\n", h, m, s);
}

void hmsToSeconds(int h, int m, int s) {
    int total = (h * 3600) + (m * 60) + s;
    printf("Total Seconds => %d\n", total);
}

int main() {
    int choice, total_sec, h, m, s;

    printf("1. Seconds to HH:MM:SS\n2. HH:MM:SS to Seconds\nChoose an option: ");
    scanf("%d", &choice);

    if (choice == 1) {
        printf("Enter total seconds: ");
        scanf("%d", &total_sec);
        secondsToHMS(total_sec);
    } else if (choice == 2) {
        printf("Enter hours: ");
        scanf("%d", &h);
        printf("Enter minutes: ");
        scanf("%d", &m);
        printf("Enter seconds: ");
        scanf("%d", &s);
        hmsToSeconds(h, m, s);
    }

    return 0;
}
