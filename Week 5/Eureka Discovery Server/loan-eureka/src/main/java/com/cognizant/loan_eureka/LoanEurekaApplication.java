package com.cognizant.loan_eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class LoanEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoanEurekaApplication.class, args);
	}

}
