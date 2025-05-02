FROM openjdk:11
WORKDIR /app
COPY target/sim-service-1.0.0.jar app.jar
EXPOSE 8082
CMD ["java", "-jar", "app.jar"]