#include<iostream>
using namespace std;

int main(){
	
	int num;
	
	cout <<"Enter Array size:- ";
	cin >>num;
	
	
	int ary[num];
	
	cout << "Enter array elements:" << endl;
    for (int i = 0; i < num; i++) {
       cout << "a[" << i << "] = ";
    	cin >> ary[i];
    }
    
    cout <<"Even element of array" <<endl;
    for(int i = 0; i < num; i++){
    	if(ary[i] % 2 == 0){
    		cout << ary[i] << ", ";
    		
		}
	}
	
 	cout << endl;

    return 0;	
}