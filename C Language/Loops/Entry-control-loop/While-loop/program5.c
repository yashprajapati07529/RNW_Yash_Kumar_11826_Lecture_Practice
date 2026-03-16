#include<stdio.h>

void main(){
	
	int start_year, end_year;
	
	printf("Enter the First number :- ");
	scanf("%d", &start_year);
	
	printf("Enter the Second number :- ");
	scanf("%d", &end_year);
	
	printf("Leap year between %d and %d are: ", start_year , end_year);
	
	
	while(start_year <= end_year){
		
		if (start_year % 4 == 0){
			
			printf("\n%d", start_year);
			
		}
	
		start_year++;
	
		
	}
	
	
	
	
}