package com.employee;

import com.employee.DAO.EmployeeDAO;
import com.employee.model.Employee;

public class Main {
	public static void main(String[] args) {
        EmployeeDAO dao = new EmployeeDAO();
        Employee emp = new Employee();
        emp.setName("Sachin");
        emp.setSalary(80000);
        dao.addEmployee(emp);
    }
}
