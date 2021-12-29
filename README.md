# travel-app
Travel and Tourism app

brew services start postgresql
psql postgres
 CREATE  ROLE Destiny WITH LOGIN PASSWORD 'password';
ALTER ROLE Destiny superuser;
 psql -d postgres -U destiny
 create DATABASE destiny;
\c destiny



CREATE TABLE Destination (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255),
  starting_price VARCHAR(30),
  clicked INT,
  type VARCHAR(30),
);# travel-app
