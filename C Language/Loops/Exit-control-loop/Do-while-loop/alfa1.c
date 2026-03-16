#include<stdio.h>

void main(){
	
	char ch = 'a';
		

	
	while(ch<='z'){
		
		printf("%c", ch);
		
		ch = ch+1;
		
		if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
		ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
    	printf("\nVowel\n");
		} else {
    	printf("\nConsonant\n");
		
	}
	
}

	
	
	
}