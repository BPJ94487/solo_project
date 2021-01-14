
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "future_progress" (
	PRIMARY KEY "serial_id",
	FOREIGN KEY "user_id" REFERENCES user(id),
	"workout_name" VARCHAR(16),
	"workout_location" VARCHAR(50),
	"workout_description" VARCHAR(500),
	"workout_distance" FLOAT,
	"workout_difficulty" INT
);

CREATE TABLE "run_history" (
	PRIMARY KEY "serial_id"
	FOREIGN KEY "user_id" REFERENCES user(id),
	"history_name" VARCHAR(50),
	"history_location" VARCHAR(50),
	"workout_description" VARCHAR(50),
	"workout_distance" FLOAT,
	"workout_difficulty" INT,
	"workout_date" DATE,
	"workout_rating" INT
);

