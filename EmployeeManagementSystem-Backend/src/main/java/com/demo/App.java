package com.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@CrossOrigin(origins = "http://localhost:5173")
@SpringBootApplication
@Configuration
public class App {
	@Bean
	public WebMvcConfigurer corsConfigurer() {
	  return new WebMvcConfigurer() {
	    @Override
	    public void addCorsMappings(CorsRegistry registry) {
	      registry.addMapping("/**")
	              .allowedOrigins("http://localhost:5173")
	              .allowedMethods("GET", "POST", "PUT", "DELETE")
	              .allowedHeaders("*")
	              .allowCredentials(true);
	    }
	  };
	}


	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
}
}