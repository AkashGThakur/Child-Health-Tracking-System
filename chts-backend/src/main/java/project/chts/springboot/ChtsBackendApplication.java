package project.chts.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class ChtsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChtsBackendApplication.class, args);
	}

}
