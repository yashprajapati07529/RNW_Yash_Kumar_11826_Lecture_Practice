#include<iostream>
#include<string>

using namespace std;

class Cafe {
	
	private:
		static string cafe_name;
		static int count;
		
	public:
		int cafe_id;
		string cafe_type;
		int cafe_rating;
		string cafe_location;
		int cafe_establish_year;
		int cafe_staff_quantity;
		
		
	Cafe() {
		count++;
		cafe_id = count
			
	
	}	
		
	void CafeRecord() {
		
		cout << "Cafe name:- " << cafe_name << endl;
		cout << "Cafe ID:- " << cafe_id << endl;
		cout << "Cafe types:- ";
		cin >> cafe_type;
		cout << "Cafe rating:- ";
		cin >> cafe_rating;
		cout << "Cafe location:- ";
		cin >> cafe_location;
		cout << "Cafe opening year:- ";
		cin >> cafe_establish_year;
		cout << "Cafe staff:- ";
		cin >> cafe_staff_quantity;
		cout <<"---------------------" << endl;	
		
	}
	
	string Cafe::cafe_name = "ABC";
	int Cafe::count = 100;
	
	
};

int main(){
	
	Cafe mycafe[3];
	
	for (int i = 0; i<3; i++){
		cout <<"---Enter Detail for Cafe--- " << endl;
		mycafe[i].CafeRecord;
	}
	
	
	
	
	return 0;
}