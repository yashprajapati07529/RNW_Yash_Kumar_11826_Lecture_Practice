#include <iostream>


using namespace std;

class Employee {
public:
    int emp_id;
    string emp_name;
    int emp_age;
    string emp_role;
    double emp_salary;
    string emp_city;
    int emp_experience;
    string emp_company_name;


    Employee(int id, string name, int age, string role, double salary, string city, int exp, string company) {
        emp_id = id;
        emp_name = name;
        emp_age = age;
        emp_role = role;
        emp_salary = salary;
        emp_city = city;
        emp_experience = exp;
        emp_company_name = company;
    }
    

    void displayRecord() {
        cout << "ID: " << emp_id << " | Name: " << emp_name << " | Age: " << emp_age 
             << " | Role: " << emp_role << " | Salary: $" << emp_salary 
             << " | City: " << emp_city << " | Exp: " << emp_experience 
             << " yrs | Company: " << emp_company_name << endl;
    }
};

int main() {
    Employee emp1(101, "Yash", 19, "Developer", 10000, "Surat", 5, "");
    Employee emp2(102, "Ronak", 23, "Developer", 13000, "Surat", 4, "Relaince");
    Employee emp3(103, "Tusar", 35, "Developer", 12000, "Surat", 10, "Zara");
    Employee emp4(104, "Diana", 26, "Analyst", 65000, "Tokyo", 2, "DataSystems");
    Employee emp5(105, "Ethan", 32, "Engineer", 85000, "Berlin", 7, "BuildIt");

    cout << "--- Employee Records ---" << endl;
    emp1.displayRecord();
    emp2.displayRecord();
    emp3.displayRecord();
    emp4.displayRecord();
    emp5.displayRecord();

    return 0;
}
