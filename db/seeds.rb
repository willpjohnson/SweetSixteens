# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
will = User.create({username: 'willpjohnson', password: 'fullstack'})
guest = User.create({username: 'Guest', password: 'password'});

Track.destroy_all
jaf = Track.create({
  author_id: will.id,
  title: "Just A Friend",
  body: "Have you ever met a girl that you tried to date, but a year to make love she wanted you to wait?",
  artist: "Biz Markie",
  image_url: "https://images.genius.com/0966fd512329a4ba531fe7355e8470f4.500x493x1.jpg"})
