#include<iostream>

using namespace std;

class car{
	
	public:
		int car_id;
		string car_company_name;
		string car_color;
		string car_modal;
		int car_releas_year;
	
	void setId(int id){
		this->car_id = id;
		
	}	
	
	void setCompanyname(string companyname ){
		this->car_company_name = companyname;
	}
	
	void setColor(string color){
		this->car_color = color;
	}
	
	void setModal(string modal){
		this->car_modal = modal;
	}
	
	void setReleasyear(int year){
		this->car_releas_year = year;
	}
	

	void CarRecord(){
		cout << "ID:- ";
		cin >> car_id;
		cout <<"Car company name:- ";
		cin >> car_company_name;
		cout << "Car color :- ";
		cin >> car_color;
		cout << "Car modal:- ";
		cin >> car_modal;
		cout << "Releas year:- ";
		cin >> car_releas_year;
	}
		
};


int main(){
	car mycar;
	
	cout << "--- Enter Car Details ---" << endl;
	mycar.CarRecord();
	
	 cout << "\n--- Car Information ---" << endl;
    cout << "ID: " << mycar.CarRecord << endl;
    cout << "Company: " << mycar.CarRecord << endl;
    cout << "Color: " << mycar.CarRecord<< endl;
    cout << "Modal: " << mycar.CarRecord << endl;
	cout << "Year: " << mycar.CarRecord << endl;
    
	
	
	
		
	return 0;
}