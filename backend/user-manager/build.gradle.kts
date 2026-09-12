plugins {
	java
	id("org.springframework.boot") version "4.0.6"
	id("io.spring.dependency-management") version "1.1.7"
}

// group = "com.coolguys"
// version = "0.0.1-SNAPSHOT"

java {
	toolchain {
		languageVersion = JavaLanguageVersion.of(21)
	}
}

configurations {
	compileOnly {
		extendsFrom(configurations.annotationProcessor.get())
	}
}

repositories {
	mavenCentral()
}

dependencies {
		annotationProcessor("org.projectlombok:lombok")		
		
		implementation("org.springframework.boot:spring-boot-starter-web")
		
		compileOnly("org.projectlombok:lombok")

		testImplementation("org.springframework.boot:spring-boot-starter-webmvc-test")
		testCompileOnly("org.projectlombok:lombok")
		testRuntimeOnly("org.junit.platform:junit-platform-launcher")
		testAnnotationProcessor("org.projectlombok:lombok")
}

tasks.withType<Test> {
	useJUnitPlatform()
}
