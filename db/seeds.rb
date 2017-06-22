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
pyn = Track.create({
  author_id: will.id,
  title: "Protect Ya Neck",
  body: "Raw I'ma give it to ya, with no trivia, raw like cocaine straight from Bolivia",
  artist: "Wu Tang Clan",
  image_url: "https://images.genius.com/9dacbb90886f0167438a7c114e5b933a.790x768x1.jpg"})
so = Track.create({
  author_id: will.id,
  title: "Shook Ones Pt. II",
  body: "I got you stuck off the realness. We be the infamous, you heard of us. Official Queensbridge murderers.",
  artist: "Mobb Deep",
  image_url: "https://images.genius.com/570d6785f6cc8605a7f8649b91769635.600x595x1.jpg"})
humble = Track.create({
  author_id: will.id,
  title: "Humble",
  body: "I remember syrup sandwiches and gram allowances",
  artist: "Kendrick Lamar",
  image_url: "https://images.genius.com/4387b0bcc88e07676997ba73793cc73c.1000x1000x1.jpg"})
