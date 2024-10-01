package com.zanar.playera;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class PlayeraApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlayeraApplication.class, args);
	}

}
