CREATE TABLE "flights" (
  "id" integer PRIMARY KEY,
  "flight_number" varchar,
  "origin" varchar,
  "destination" varchar,
  "departure_date" date,
  "arrival_date" date,
  "departure_time" time,
  "arrival_time" time,
  "capacity" integer,
  "price" decimal,
  "status" varchar,
  "airline_id" integer,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "passengers" (
  "id" integer PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "id_document" varchar,
  "phone" varchar,
  "email" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "reservations" (
  "id" integer PRIMARY KEY,
  "flight_id" integer,
  "passenger_id" integer,
  "reservation_date" date,
  "status" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "payments" (
  "id" integer PRIMARY KEY,
  "reservation_id" integer,
  "amount" decimal,
  "payment_date" date,
  "payment_method" varchar,
  "status" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "airlines" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "code" varchar,
  "country" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "airports" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "code" varchar,
  "city" varchar,
  "country" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "seats" (
  "id" integer PRIMARY KEY,
  "flight_id" integer,
  "seat_number" varchar,
  "class" varchar,
  "is_available" boolean,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "notifications" (
  "id" integer PRIMARY KEY,
  "reservation_id" integer,
  "message" varchar,
  "sent_date" date,
  "status" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "seat_reservations" (
  "id" integer PRIMARY KEY,
  "reservation_id" integer,
  "seat_id" integer,
  "created_at" timestamp,
  "updated_at" timestamp
);

ALTER TABLE "flights" ADD FOREIGN KEY ("airline_id") REFERENCES "airlines" ("id");

ALTER TABLE "reservations" ADD FOREIGN KEY ("flight_id") REFERENCES "flights" ("id");

ALTER TABLE "reservations" ADD FOREIGN KEY ("passenger_id") REFERENCES "passengers" ("id");

ALTER TABLE "payments" ADD FOREIGN KEY ("reservation_id") REFERENCES "reservations" ("id");

ALTER TABLE "seats" ADD FOREIGN KEY ("flight_id") REFERENCES "flights" ("id");

ALTER TABLE "notifications" ADD FOREIGN KEY ("reservation_id") REFERENCES "reservations" ("id");

ALTER TABLE "seat_reservations" ADD FOREIGN KEY ("reservation_id") REFERENCES "reservations" ("id");

ALTER TABLE "seat_reservations" ADD FOREIGN KEY ("seat_id") REFERENCES "seats" ("id");
