CREATE DATABASE todo;

USE todo;

CREATE TABLE task(
    id_task INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    startDate DATE NOT NULL,
    finishDate DATE NOT NULL,
    task_status ENUM('PENDING', 'IN PROCESS', 'DONE') DEFAULT 'PENDING',
    username VARCHAR (50)
)

