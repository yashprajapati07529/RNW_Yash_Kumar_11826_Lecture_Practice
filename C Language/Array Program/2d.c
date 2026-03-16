#include <stdio.h>

int main() {
   
    int a[3][3], i, j;
    
    printf("%d", a[0][0]);
    scanf("%d", &a[0][0]);
    printf("%d", a[0][1]);
    scanf("%d", &a[0][1]);
   	printf("%d", a[0][2]);
    scanf("%d", &a[0][2]);
    printf("%d", a[1][0]);
    scanf("%d", &a[1][0]);
    printf("%d", a[1][1]);
    scanf("%d", &a[1][1]);
    printf("%d", a[1][2]);
    scanf("%d", &a[1][2]);
    printf("%d", a[2][0]);
    scanf("%d", &a[2][0]);
   	printf("%d", a[2][1]);
    scanf("%d", &a[2][1]);
    printf("%d", a[2][2]);
    scanf("%d", &a[2][2]);
    
    for(i=0; i<=2; i++){
    	
    	for(j=0; j<=2; j++){
    		
    		printf("%d", a[i][j]);
		}
		printf("\n");
	}
   
    
    
    
}
