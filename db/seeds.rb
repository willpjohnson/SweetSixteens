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
  body: "[Verse 1]
    Have you ever met a girl that you tried to date
    But a year to make love she wanted you to wait
    Let me tell ya a story of my situation
    I was talkin' to this girl from the U.S. nation
    The way that I met her was on tour at a concert
    She had long hair and a short miniskirt
    I just got onstage drippin', pourin' with sweat
    I was walkin' through the crowd and gues who I met
    I whispered in her ear, come to the picture booth
    So I can ask you some questions to see if you are a hundred proof
    I asked her her name, she said blah-blah-blah
    She had 9/10 pants and a very big bra
    I took a couple of flicks and she was enthused
    I said, how do you like the show?
    She said, \"I was very amused\"
    I started throwin' bass, she started throwin' back mid-range
    But when I sprung the question, she acted kind of strange
    Then when I asked, do ya have a man, she tried to pretend
    She said, \"no I don\'t, I only have a friend\"
    Come on, I\'m not even goin' for it
    This is what I\'m goin\' sing

    [Chorus]
    You, you got what I need but you say he's just a friend
    And you say he's just a friend, oh baby
    You, you got what I need but you say he's just a friend
    But you say he's just a friend, oh baby
    You, you got what I need but you say he's just a friend
    But you say he's just a friend

    [Verse 2]
    So I took blah-blah's word for it at this time
    I thought just havin' a friend couldn't be no crime
    'Cause I have friends and that's a fact
    Like Agnes, Agatha, Germaine, and Jacq
    Forget about that, let's go into the story
    About a girl named blah-blah-blah that adored me
    So we started talkin', getttin' familiar
    Spendin' a lot of time so we can build up
    A relationship or some understanding
    How it's gonna be in the future we was plannin'
    Everything sounded so dandy and sweet
    I had no idea I was in for a treat
    After this was established, everything was cool
    The tour was over and she went back to school
    I called every day to see how she was doin'
    Every time that I called her it seemed somethin' was brewin'
    I called her on my dime, picked up, and then I called again
    I said, yo, who was that? Oh, he's just a friend
    Don't gimme that, don't ever gimme that
    Jus' bust this

    [Chorus]
    You, you got what I need but you say he's just a friend
    And you say he's just a friend, oh baby
    You, you got what I need but you say he's just a friend
    But you say he's just a friend, oh baby
    You, you got what I need but you say he's just a friend
    But you say he's just a friend

    [Verse 3]
    So I came to her college on a surprise visit
    To see my girl that was so exquisite
    It was a school day, I knew she was there
    The first semester of the school year
    I went to a gate to ask where was her dorm
    This guy made me fill out a visitor's form
    He told me where it was and I as on my way
    To see my baby doll, I was happy to say
    I arrived in front of the dormitory
    Yo, could you tell me where is door three?
    They showed me where it was for the moment
    I didn't know I was in for such an event
    So I came to her room and opened the door
    Oh, snap! Guess what I saw?
    A fella tongue-kissin' my girl in the mouth,
    I was so in shock my heart went down south
    So please listen to the message that I say
    Don't ever talk to a girl who says she just has a friend",
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
putp = Track.create({
  author_id: will.id,
  title: "Pick Up the Phone",
  body: "Pick up the phone, baby. I know you're home, baby.",
  artist: "Young Thug",
  image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/PickUpThePhoneYoungThug.jpg/220px-PickUpThePhoneYoungThug.jpg"})
tdial = Track.create({
  author_id: will.id,
  title: "The Devil is a Lie",
  body: "The devil is a lie. Bitch, I'm the truth. The devil is a lie. Bitch, I'm the proof",
  artist: "Rick Ross",
  image_url: "http://hiphop-n-more.com/wp-content/uploads/2013/12/rick-ross-devil-is-a-lie.jpg"})
doys = Track.create({
  author_id: will.id,
  title: "Dirt Off Your Shoulder",
  body: "Ladies is pimps too, gon brush your shoulders off",
  artist: "Jay Z",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/5166AAZKFCL._SY300_.jpg"})
fl = Track.create({
  author_id: will.id,
  title: "Flashing Lights",
  body: "She don't believe in shooting stars, but she believe in shoes and cars",
  artist: "Kanye West",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51gE5fyNEDL.jpg"})
