#include<stdio.h>

void main(){
	
	int n, first = 0, second = 1, next, i;
	
	printf("Enter any number :- ");
	scanf("%d", &n);
	
	for (i = 0 ; i < n ; i++ ){
	
	if( i <= 1){
		
		next = 1;
	}else{
		
		next = first + second;
		first = second;
		second = next;
	}
	
	printf("%d", next);
	
		
	}
}
