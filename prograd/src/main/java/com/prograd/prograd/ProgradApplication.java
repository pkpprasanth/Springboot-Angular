package com.prograd.prograd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication

@ComponentScan({ "com.prograd.controller" })
@EntityScan({ "com.prograd.model" })
@EnableJpaRepositories({ "com.prograd.dao" })
public class ProgradApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProgradApplication.class, args);
	}

}
