# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## tracks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users), indexed
title           | string    | not null
body            | text      | not null
artist          | string    | not null

## annotations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users), indexed
track_id        | integer   | not null, foreign key (references tracks), indexed
body            | text      | not null
score           | integer   | not null, default: 0

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users), indexed
track_id        | integer   | foreign key (references tracks), indexed
annotation_id   | integer   | foreign key (references annotations), indexed
body            | text      | not null
score           | integer   | not null, default: 0

## upvotes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
annotation_id   | integer   | foreign key (references annotations), indexed
comment_id      | integer   | foreign key (references comments), indexed
value           | integer   | not null

## tags
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null

## taggings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
track_id        | integer   | not null, foreign key (references tracks), indexed
tag_id          | integer   | not null, foreign key (references tags), indexed
