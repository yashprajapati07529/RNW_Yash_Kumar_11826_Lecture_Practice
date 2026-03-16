#include<stdio.h>

void main(){
	
	int i , n;
	
	
	printf("Enter any number:- ");
	scanf("%d", &n);
	
	i = n;
	
	if(i % 2 == 0){
		
		i--;
	}
	
	
	while(i>=1){
		
		printf("%d", i);
	
		i = i-2;
	
		
	}
	
	
	
	
}