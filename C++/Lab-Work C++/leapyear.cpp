#include <iostream>
using namespace std;

int main() {
    int startYear, endYear;
    int leapYears[100]; 
    int count = 0;     

    
    cout << "Enter the first number: ";
    cin >> startYear;
    cout << "Enter the second number: ";
    cin >> endYear;


    for (int i = startYear; i <= endYear; i++) {
        if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0)) {
            leapYears[count] = i;
            count++;
        }
    }

  
    cout << "\nThe array is: ";
    for (int i = 0; i < count; i++) {
        cout << leapYears[i];
        if (i < count - 1) {
            cout << ", ";
        }
    }
    cout << endl;

    return 0;
}
