package com.employee.springdatajpa_hands_on;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import com.employee.model.Employee;
import com.employee.service.EmployeeService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.employee.model")
@EnableJpaRepositories(basePackages = "com.employee.repository")
@ComponentScan(basePackages = "com.employee")

public class SpringdatajpaHandsOnApplication {

    private static EmployeeService employeeService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(SpringdatajpaHandsOnApplication.class, args);
        employeeService = context.getBean(EmployeeService.class);

        Employee emp = new Employee();
        emp.setName("Shri");
        emp.setSalary(75000);
        employeeService.addEmployee(emp);
    }
}
