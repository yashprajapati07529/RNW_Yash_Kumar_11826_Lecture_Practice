#include<stdio.h>
#include<string.h>

int main(){
 
 const char desired_username[] = "Yashkumar";
 const char desired_password[] = "123456";
 
 
 char username[100];
 char password[100];
 
 printf("\n Enter your Username :-");
 scanf("%s", &username);
 printf("\n Enter your Password :-");
 scanf("%s", &password);
 
 if(strcmp(username, desired_username)==0 && strcmp(password, desired_password)==0){
 	printf("\nLogin Successful....\n");
 }else{
 	printf("\nLogin failed. Invalid credentials..\n");
 }
 
 
 	getch();
 	return 0;
 
 

}