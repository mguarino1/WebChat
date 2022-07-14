CREATE DATABASE webchat;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE channels(
    channel_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    channel_name VARCHAR(255) NOT NULL,
)