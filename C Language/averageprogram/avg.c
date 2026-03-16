
#include <stdio.h>

void main()
{
    int marks_maths, marks_english, marks_science, total_marks;
    float avg_marks;

    printf("Enter maths marks:- ");
    scanf("%d", &marks_maths);

    printf("Enter english marks:- ");
    scanf("%d", &marks_english);

    printf("Enter science marks:- ");
    scanf("%d", &marks_science);

    total_marks = marks_maths + marks_english + marks_science;
    avg_marks = total_marks / 3.0;

    printf("Value of avg marks:- %.2f", avg_marks);
}