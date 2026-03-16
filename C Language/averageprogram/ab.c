// Online C compiler to run C program online
#include <stdio.h>

void main()
{
    int value_a, value_b, total_value;

    printf("Enter the value a:- ");
    scanf("%d", &value_a);

    printf("Enter the value b:- ");
    scanf("%d", &value_b);

    total_value = value_a * value_a + 2 * value_a * value_b + value_b * value_b;

    printf("value of total:- %d", total_value);
}