FROM openjdk:11
WORKDIR /app
COPY target/db-service-1.0.0.jar app.jar
EXPOSE 8081
CMD ["java", "-jar", "app.jar"]