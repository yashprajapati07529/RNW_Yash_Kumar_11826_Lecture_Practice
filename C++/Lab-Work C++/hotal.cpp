#include<iostream>
#include<string>
using namespace std;

class Hotel {
    private:
        static string hotel_name; 
        static int count;         

    public:
        int hotel_id;
        string hotel_type;
        int hotel_rating;
        string hotel_location;
        int hotel_establish_year;
        int hotel_staff_quantity;
        int hotel_room_quantity;

    
    Hotel() {
        count++;
        hotel_id = count;
    }

    void hotelRecord() {
        cout << "Hotel Name: " << hotel_name << endl;
        cout << "Auto-Generated ID: " << hotel_id << endl;
        cout << "Enter Hotel Type (Veg/Non-Veg): "; cin >> hotel_type;
        cout << "Enter Rating (1-5): "; cin >> hotel_rating;
        cout << "Enter Location: "; cin >> hotel_location;
        cout << "Enter Opening Year: "; cin >> hotel_establish_year;
        cout << "Enter Staff Quantity: "; cin >> hotel_staff_quantity;
        cout << "Enter Room Quantity: "; cin >> hotel_room_quantity;
        cout << "-------------------------------" << endl;
    }

    void display() {
        cout << hotel_id << "\t" << hotel_type << "\t" << hotel_rating << "*\t" << hotel_location << "\t" << hotel_room_quantity << endl;
    }
};


string Hotel::hotel_name = "Grand Heritage"; 
int Hotel::count = 100; 

int main() {
    int n = 3; 
    Hotel myHotel[n]; 

   
    for(int i = 0; i < n; i++) {
        cout << "\nEnter Details for Hotel " << i + 1 << ":" << endl;
        myHotel[i].hotelRecord();
    }

    
    cout << "\nID\tType\tRating\tLocation\tRooms" << endl;
    cout << "====================================================" << endl;
    for(int i = 0; i < n; i++) {
        myHotel[i].display();
    }

    return 0;
}
