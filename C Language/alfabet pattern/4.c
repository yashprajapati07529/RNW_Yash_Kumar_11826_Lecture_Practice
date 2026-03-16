#include<stdio.h>

void main(){
	
	int i;
	
	for(i = 1; i<=5; i++){
		if(i==1 || i==3){
			printf("* * * * * *");
		}else{
			printf("*         *");
		}
		printf("\n");
	}
	
	printf("\n");
	
		for(i = 1; i<=5; i++){
		if(i==1 || i==5){
			printf("* * * * * *");
		}else{
			if(i==2 || i==4){
				printf("*         *");
			}else{
				printf("* * * * * ");	
			}
		}
		printf("\n");
	}
	
		printf("\n");
	
		for(i = 1; i<=5; i++){
		if(i==1 || i==5){
			printf("* * * * * *");
		}else{
			if(i==2 || i==4){
				printf("*         *");
			}else{
				printf("* * * * * ");	
			}
		}
		printf("\n");
	}
	
	
}