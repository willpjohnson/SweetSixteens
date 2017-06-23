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
  artist: "Biz Markie"})



pyn = Track.create({
  author_id: will.id,
  title: "Protect Ya Neck",
  body: "[Intro]
Caller: \"So whassup, man?\"
DJ: \"Coolin\', man.\"
C: \"Chillin\' chilin\'? Yo, you know I had to call, you why right?\"
DJ: \"Why?\"
C: \"Because, you, I never ever call and ask you to play somethin\', right?\"
DJ: \"Yeah.\"
C: \"You know what I wanna hear, right?\"
DJ: \"Whatchu wanna hear?\"
C: \"I wanna hear that Wu-Tang joint.\"
DJ: \"Wu-Tang again?\"
C: \"Ah yeah, again and again.\"

[Verse 1: Inspectah Deck]
I smoke on the mic like \"Smokin\' Joe\" Frazier
The hell-raiser, raisin\' hell with the flavor
Terrorize the jam like troops in Pakistan
Swingin\' through your town like your neighborhood Spider-Man
So uhh, tick tock and keep tickin\'
While I get you flippin\' off the shit that I\'m kickin\'
The Lone Ranger, code red: Danger
Deep in the dark with the art to rip the charts apart
The vandal too hot to handle
You battle, you\'re sayin' goodbye like Tevin Campbell
Roughneck, Inspectah Deck\'s on the set
The Rebel, I make more noise than heavy metal

[Verse 2: Raekwon]
The way I make the crowd go wild
Sit back, relax, won't smile
Rae got it goin' on, pal
Call me the rap assassinator
Rhymes rugged and built like Schwarzenegger
And I'ma get mad deep like a threat
Blow up your project, then take all your assets
'Cause I came to shake the frame in half
With the thoughts that bomb shit like Meth
So if you wanna try to flip, go flip on the next man
'Cause I grab the clip and
Hit you with 16 shots and more, I got
Goin' to war with the meltin' pot, akh

[Verse 3: Method Man]
It's the Method Man, for short Mr. Mef
Movin' on your left, UH!
And set it off, get it off, let it off like a gat
I wanna break, fool, cock me back
Small change, they puttin' shame in the game
I take aim and blow the nigga out the frame
And like fame, my style will live forever
Niggas crossin' over, but they don't know no better
But I do, true, can I get a \"Suuu\"?
Nuff respect due to the 1-6-oooh
I mean ohhh, yo, check out the flow
Like the Hudson or PCP when I'm dustin'
Niggas off, because I'm hot like sauce
The smoke from the lyrical blunt make me *cough*

[Interlude: U-God]
Ooh, what, grab my nut, get screwed
Oww, here comes my Shaolin style
True B-A-ba-B-Y-U
To my crew with a \"Suuuuuuu\"

[Ol Dirty Bastard]
C'mon, baby baby, c'mon, baby baby
C'mon, baby baby, c'mon

[RZA]
Yo, you best protect ya neck

[Verse 4: Ol Dirty Bastard]
First things first, man, you're fuckin' with the worst
I'll be stickin' pins in your head like a fuckin' nurse
I'll attack any nigga who slack in his mack
Come fully packed with a fat rugged stack
Shame on you when you step through to
The Ol' Dirty Bastard straight from the Brooklyn Zu
And I'll be damned if I let any man
Come to my center, you enter the winter
Straight up and down, that shit is packed jam
You can't slam, don't let me get fool on him, man
The Ol' Dirty Bastard is dirty and stinkin'
Ason Unique rollin' with the night of the creeps
Niggas be rollin' with a stash, ain't sayin' cash
Bite my style, I'll bite your motherfuckin' ass

[Verse 5: Ghostface Killah]
For cryin' out loud, my style is wild, so book me
Not long is how long that this rhyme took me
Ejectin' styles from my lethal weapon
My pen that rocks from here to Oregon
There's more again, catch it like a psycho flashback
I love gats; if Rap was a gun, you wouldn't bust back
I come with shit in all types of shapes and sounds
And where I lounge is my stompin' grounds
I give an order to my peeps across the water
To go and snatch up props all around the border
And get far like a shootin' star
'Cause who I are is dim in the light of Pablo Escobar
Point-blank as I kick the square biz
There it is, you're fuckin' with pros, and there it goes

[Verse 6: RZA]
Yo, chill with the feedback, black, we don't need that
It's 10 o'clock, ho, where the fuck's your seed at?
Feelin' mad hostile, wearin' Aéropostale
Flowin' like Christ when I speaks the gospel
Stroll with the holy robe, then attack the globe
With the buck-us style, the ruckus
Ten times ten men committin' mad sin
Turn the other cheek and I'll break your fuckin' chin
Slayin' boom-bangs like African drums
(He'll be) comin' around the mountain when I come
Crazy flamboyant for the rap enjoyment
My clan increase like black unemployment
Yeah, another one down
Ju-Jugger-Genius, take us the fuck outta here

[Verse 7: GZA]
The Wu is too slammin' for these Cold Killin' labels
Some ain't had hits since I seen Aunt Mabel
Be doin' artists in like Cain did Abel
Now they money's gettin' stuck to the gum under the table
That's what you get when you misuse what I invent
Your empire falls and you lose every cent
For tryna blow up a scrub
Now that thought was just as bright as a 20-watt light bulb
Should've pumped it when I rocked it
Niggas so stingy they got short arms and deep pockets
This goes on in some companies
With majors, they're scared to death to pump these
First of all, who's your A&R?
A mountain climber who plays an electric guitar?
But he don't know the meanin' of dope
When he's lookin' for a suit-and-tie rap
That's cleaner than a bar of soap
And I'm the dirtiest thing in sight
Matter of fact, bring out the girls, and let's have a mud fight!

[Outro: RZA]
You best protect ya neck
You best protect ya neck
You best protect ya neck
You best protect ya neck",
  artist: "Wu Tang Clan"})



so = Track.create({
  author_id: will.id,
  title: "Shook Ones Pt. II",
  body: "[Intro]
Word up, son, word, yeah
To all the killers and a hundred dollar billers
For real niggas who ain't got no feelings
Check it out now

[Verse 1: Prodigy]
I got you stuck off the realness, we be the infamous
You heard of us, official Queensbridge murderers
The Mobb comes equipped for warfare, beware
Of my crime family who got 'nough shots to share
For all of those who wanna profile and pose
Rock you in your face, stab your brain with your nose bone
You all alone in these streets, cousin
Every man for they self in this land we be gunnin'
And keep them shook crews runnin', like they supposed to
They come around, but they never come close to
I can see it inside your face, you're in the wrong place
Cowards like you just get they whole body laced up
With bullet holes and such
Speak the wrong words, man, and you will get touched
You can put your whole army against my team and
I guarantee you it'll be your very last time breathin'
Your simple words just don't move me: you're minor, we're major
You're all up in the game and don't deserve to be a player
Don't make me have to call your name out
Your crew is featherweight, my gunshots'll make you levitate
I'm only 19, but my mind is old
When the things get for real, my warm heart turns cold
Another nigga deceased, another story gets told
It ain't nothin' really, ayo Dun, spark the Philly
So I can get my mind off these yellow-backed niggas
Why they still alive? I don't know, go figure
Meanwhile back in Queens the realness and foundation
If I die, I couldn't choose a better location
When the slugs penetrate, you feel a burnin' sensation
Gettin' closer to God in a tight situation
Now take these words home and think it through
Or the next rhyme I write might be about you

[Hook]
Son, they shook
‘Cause ain't no such things as halfway crooks
Scared to death, scared to look, they shook
‘Cause ain't no such things as halfway crooks
Scared to death, scared to look
Livin' the live that of diamonds and guns
There's numerous ways you can choose to earn funds
Some get shot, locked down, and turn nuns
Cowardly hearts and straight up shook ones, shook ones
He ain't a crook, son, he's just a shook one

[Verse 2: Havoc]
For every rhyme I write it's 25 to life
Yo, it's a must, in gats we trust, safeguardin' my life
Ain't no time for hesitation, that only leads to incarceration
You don't know me, there's no relation
Queensbridge and we don't play
I don't got time for your petty-thinkin' mind
Son, I'm bigger than those
Claimin' that you pack heat, but you're scared to hold
And once the smoke clears, you'll be left with one in your dome
Thirteen years in the projects—my mentality is what, kid?
You talk a good one, but you don't want it
Sometimes I wonder, do I deserve to live?
Or am I goin' to burn in Hell for all the things I did?
No time to dwell on that, ‘cause my brain reacts
Front if you want, kid, lay on your back
I don't fake jax, kid, you know I bring it to you live
Stay in a child's place, kid, you out of line
Criminal minds thirsty for recognition
I'm sippin', E&J got my mind flippin'
I'm buggin', diggin' my ways out of holes by hustlin'
Get that loot, kid, you know my function
‘Cause long as I'm alive I'ma live illegal
And once I get on, I'ma put on all my peoples
React quick, spit lyrics like MAC's, I hit your dome up
When I roll up, don't be caught sleepin', ‘cause I'm creepin'

[Hook]
Son, they shook
‘Cause ain't no such things as halfway crooks
Scared to death, scared to look, they shook
‘Cause ain't no such things as halfway crooks
Scared to death, scared to look, they shook
‘Cause ain't no such things as halfway crooks
Scared to death, scared to look, they shook
‘Cause ain't no such things as halfway crooks
Livin' the live that of diamonds and guns
There's numerous ways you can choose to earn funds
Some get shot, locked down, and turn nuns
Cowardly hearts and straight up shook ones, shook ones
He ain't a crook, son, he's just a shook one

[Outro]
To all the villains and a hundred dollar billers
To real brothers who ain't got no feelings
G-yeah, the whole Bridge
Queens get the money
41st side, keepin' it real, you know
Queens get the money",
  artist: "Mobb Deep"})



humble = Track.create({
  author_id: will.id,
  title: "Humble",
  body: "[Intro]
Nobody pray for me
It's been that day for me
Waaaaay (yeah, yeah!)

[Verse 1]
Ayy, I remember syrup sandwiches and crime allowances
Finesse a nigga with some counterfeits, but now I'm countin' this
Parmesan where my accountant lives; in fact, I'm downin' this
D'USSÉ with my boo bae tastes like Kool-Aid for the analysts
Girl, I can buy yo' ass the world with my paystub
Ooh, that pussy good, won't you sit it on my taste bloods?
I get way too petty once you let me do the extras
Pull up on your block, then break it down: we playin' Tetris
A.M. to the P.M., P.M. to the A.M., funk
Piss out your per diem, you just gotta hate 'em, funk
If I quit your BM, I still ride Mercedes, funk
If I quit this season, I still be the greatest, funk
My left stroke just went viral
Right stroke put lil' baby in a spiral
Soprano C, we like to keep it on a high note
It's levels to it, you and I know

[Chorus]
Bitch, be humble (hol' up, bitch)
Sit down (hol' up, lil', hol' up, lil' bitch)
Be humble (hol' up, bitch)
Sit down (hol' up, sit down, lil', sit down, lil' bitch)
Be humble (hol' up, hol' up)
Bitch, sit down (hol' up, hol' up, lil' bitch)
Be humble (lil' bitch, hol' up, bitch)
Sit down (hol' up, hol' up, hol' up, hol' up)
Be humble (hol' up, hol' up)
Sit down (hol' up, hol' up, lil', hol' up, lil' bitch)
Be humble (hol' up, bitch)
Sit down (hol' up, sit down, lil', sit down, lil' bitch)
Be humble (hol' up, hol' up)
Bitch, sit down (hol' up, hol' up, lil' bitch)
Be humble (lil' bitch, hol' up, bitch)
Sit down (hol' up, hol' up, hol' up, hol' up)

[Verse 2]
Who dat nigga thinkin' that he frontin' on Man-Man? (Man-Man)
Get the fuck off my stage, I'm the Sandman (Sandman)
Get the fuck off my dick, that ain't right
I make a play fucking up your whole life
I'm so fuckin' sick and tired of the Photoshop
Show me somethin' natural like afro on Richard Pryor
Show me somethin' natural like ass with some stretch marks
Still will take you down right on your mama's couch in Polo socks
Ayy, this shit way too crazy, ayy, you do not amaze me, ayy
I blew cool from AC, ayy, Obama just paged me, ayy
I don't fabricate it, ayy, most of y'all be fakin', ayy
I stay modest 'bout it, ayy, she elaborate it, ayy
This that Grey Poupon, that Evian, that TED Talk, ayy
Watch my soul speak, you let the meds talk, ayy
If I kill a nigga, it won't be the alcohol, ayy
I'm the realest nigga after all

[Chorus]
Bitch, be humble (hol' up, bitch)
Sit down (hol' up, lil', hol' up, lil' bitch)
Be humble (hol' up, bitch)
Sit down (hol' up, sit down, lil', sit down, lil' bitch)
Be humble (hol' up, hol' up)
Bitch, sit down (hol' up, hol' up, lil' bitch)
Be humble (lil' bitch, hol' up, bitch)
Sit down (hol' up, hol' up, hol' up, hol' up)
Be humble (hol' up, hol' up)
Sit down (hol' up, hol' up, lil', hol' up, lil' bitch)
Be humble (hol' up, bitch)
Sit down (hol' up, sit down, lil', sit down, lil' bitch)
Be humble (hol' up, hol' up)
Bitch, sit down (hol' up, hol' up, lil' bitch)
Be humble (lil' bitch, hol' up, bitch)
Sit down (hol' up, hol' up, hol' up, hol' up)",
  artist: "Kendrick Lamar"})



putp = Track.create({
  author_id: will.id,
  title: "Pick Up the Phone",
  body: "[Intro: Young Thug & Starrah]
Yaaah, oh yaaah
Ooooh, Thugger
Yeah, Travis Scott
Thugger, Thugger baby
Yaah

[Verse 1: Travis Scott]
I pour a four up
I call your hoe up
Just to fuck her and show her
I just went, got my dough up
Pullin' off and I'm gone!
Then I go and pour four up
Then I roll up that roll up
Then I'm callin' your hoe up
(Like Brrrrr)

[Hook: Travis Scott]
Pick up the phone, baby (Like brrrrr)
I know you're home, baby (It's lit!)
I'm in the zone, baby (Straight up!)
I just poured up a four baby (Yeah, yeah)

[Bridge: Travis Scott & Young Thug]
Never will I cheat on you
Never will I commit treason
Blowin' a bag on you
Do all of that for no reason
I'ma pull up and murk too
Hittin' the block and I'm bleedin'
Throwing that Rollie on you
I like the way it be freezin'
(Brrrrr)

[Hook: Travis Scott]
Pick up the phone, baby (Like brrrrr)
I know you're home, baby (It's lit!)
I'm in the zone, baby (Straight up!)
I just poured up a four baby (Yeah, yeah)

[Verse 2: Young Thug]
Pour up a four of that Actavis
Lean like my mothafuckin' granny did
Super Bowl ring with big body Benz
I stack it up now I'm just better livin'
Got screws in my mouth, I'm just preppin' it
I'm fucking this cash, I’m not celibate
I'm packin' it up like a reverend
I need all this cash, I got hella kids
I'ma play dumb and get left in the middle
Back the fuck up, you too little
Hit 'em with three like I'm Miller
I don't talk to no man in the middle
I don't talk to no man, I'm just kiddin'
But I did pay my sister's tuition
I feel lucky, I should play the lottery
Walkin' off with it like Sonny Liston
Mama told me I'm her brightest star
Mama told me don't hate on the law
Because everybody got a job
Because everybody wanna be a star (real shit, real shit)
Please believe every motherfucker around here wan' be a part
She gon' do anything in her power to be with ya' boy
(Brrrrr)

[Hook: Travis Scott]
Pick up the phone, baby (Like brrrrr)
I know you're home, baby (It's lit!)
I'm in the zone, baby (Straight up!)
I just poured up a four, baby (Yeah, yeah)

[Bridge: Young Thug]
Never will l cheat on you
Never will I commit treason
Blowin' a bag on you
Do all of that for no reason
I'ma pull up MR2
Hittin' the block and I’m bleedin'
Throwin' that Rollie on you
I like the way you be freezin'

[Verse 3: Quavo]
Pick up the phone
Macaulay Culkin' baby, Home Alone
I thought I was right
Then I had to man up, I was wrong
I hate when we fight
She in love with the pipe
I draped her up in ice, I pour my four on ice
Birds in the trap sing Brian McKnight
Percocet and Codeine please don't take my life
She had a dream with Céline
So I bought it twice
Young nigga make it right back tonight
Girl you're so cute and your ass is nice
Drinkin' on four and I'm shootin' dice
Wrist polar bear, Klondike
And I'm loving all races, hell nah don't discriminize
Drinkin' on clean, sanitize
Ostritch seats with the frog eyes
If I ever call your phone baby
Best believe it's only one time
(Brrrrrr)

[Hook: Travis Scott]
Pick up the phone, baby (Like brrrrr)
I know you're home, baby (It's lit!)
I'm in the zone, baby (Straight up!)
I just poured up a four baby (Yeah, yeah)

[Bridge: Young Thug]
Never will l cheat on you
Never will I commit treason
Blowin' a bag on you
Do all of that for no reason
I'ma pull up and MR2
Hittin' the block and I’m bleedin'
Throwin' that Rollie on you
I like the way you be freezin'

[Outro]
Pick up the phone (Pick up the phone)
I'm in the zone, pick up the phone, baby
I'm in the zone",
  artist: "Young Thug"})



tdial = Track.create({
  author_id: will.id,
  title: "The Devil is a Lie",
  body: "[Intro: Rick Ross]
Masterminds! We gon' get this forever
You know whenever we link up, my nigga
They think this shit comes from outer space or something, haha
Nigga, let’s get this money nigga, whoo, whoo
Masterminds, R-O-C, double M-G!
Jay, I got it, I got it

[Verse 1: Rick Ross]
Four stacks for the heels on my bitch feet
Car seats still smelling like 10 ki's
Tell the plug that I'm lookin' for an increase
Wingstop, fat boy need a 10 piece
Say a nigga name and the car start
Nigga switching lane to lane like Wal-Mart
Sippin' Bordeaux out in Bordeaux
Hazard lights flashing on the four-door
Switch the Benzo for the Enzo
Back to the Benzo when the ends low
Switch my old bitch for my new bitch
Cause my new bitch something like a nympho
Fuck the game raw when I came in it
Getting money ever since I came in it
You couldn't stop me if you tried
Motherfucker cause the devil is a lie

[Hook: Rick Ross]
Big guns and big whips
Rich nigga talkin' big shit
Double cup, gold wrist
Double up on that blow, bitch!
Two mil' on that I-95
Bow your head cause it's time to pay tithes
Opposition want me dead or alive
Motherfucker, but the devil is a lie
The devil is a lie, bitch I'm the truth
The devil is a lie, bitch I'm the proof
The devil is a lie, the devil is a lie
Bitch I'm alive, the devil is a lie

[Verse 2: Rick Ross]
Two kings on the big screen
Niggas seen a 36 at 16
100K for the 16
Nigga's stick dirty but his dick clean
My money goin' on the deep end
Talkin' half a milli for the weekend
Contract like a nigga play defense
Curtains in the Maybach bitch peek in
Now the bitches wanna car hop
6 cribs for the cars in the car lot
Dope boys on the goal nigga
Went gold 6 times for a gold digger
Black bottle and a bad bitch
Club Armani where the cash is
Dubai I can do it like a sheikh
Top floor nigga, Burj Khalifa!

[Hook: Rick Ross]
Big guns and big whips
Rich nigga talkin' big shit
Double cup, gold wrist
Double up on that blow, bitch!
Two mil' on that I-95
Bow your head cause it's time to pay tithes
Opposition want me dead or alive
Motherfucker, but the devil is a lie
The devil is a lie, bitch I'm the truth
The devil is a lie, bitch I'm the proof
The devil is a lie
(I got 'em, Ricky!)
The devil is a lie
Bitch I'm alive, the devil is a lie

[Verse 3: Jay Z]
Is it truth or it's fiction, is it truth or it's fiction?
Is Hova atheist? I never fuck with True Religion
Am I down with the devil cuz my roof come up missin'?
Is that Lucifer juice in that two cup he sippin'?
That's D'usse baby welcome to the dark side
Coulda got blacklist for the crack shit
White Jesus in my crock pot
I mix the shit with some soda
Now I'm black Jesus turn water to wine
And all I had to do was turn the stove up
Beast Coast, winnin' at life, nigga, cheat code
The hatin' is flagrant, hit your free throws
The devil try to hit me with the RICO, them black people
Devil want these niggas hate they own kind
Gotta be Illuminati if a nigga shine
Oh we can't be a nigga if a nigga rich?
Oh we gotta be the devil that's some nigga shit
You seen what I did to the stop and frisk
Brooklyn on the Barney's like we own the bitch
Give the money to the hood, now we all win
Got that Barney's floor lookin' like a VIM
Black hoodie, black skully
Bravado like Mavado, boy I'm that gully
Gettin white money but I'm still black
All these niggas claiming king but I'm still that
King Hova, Mansa Musa
From a lie, the devil is a lie, I'm the truth, yeah

[Hook: Rick Ross]
Big guns and big whips
Rich nigga talkin' big shit
Double cup, gold wrist
Double up on that blow, bitch!
Two mil' on that I-95
Bow your head cause it's time to pay tithes
Opposition want me dead or alive
Motherfucker, but the devil is a lie
The devil is a lie, bitch I'm the truth
The devil is a lie, bitch I'm the proof
The devil is a lie, the devil is a lie
Bitch I'm alive, the devil is a lie",
  artist: "Rick Ross"})



doys = Track.create({
  author_id: will.id,
  title: "Dirt Off Your Shoulder",
  body: "[Intro]
You're now tuned into the muh'fuckin greatest
Turn the music up in the headphones
Tim, you can go and brush your shoulder off, nigga
I got you, yeah

[Hook]
If you feeling like a pimp
Nigga, go and brush your shoulders off
Ladies is pimps too, go and brush your shoulders off
Niggas is crazy, baby, don't forget that boy told you
Get that dirt off your shoulder

[Verse 1]
I probably owe it to y'all, probably be locked by the force
Tryin' to hustle some things that go with the Porsche
Feelin' no remorse, feelin' like my hand was forced
Middle finger to the law, nigga, grippin' my balls
Said the ladies, they love me
From the bleachers they screamin'
All the ballers is bouncin', they like the way I be leanin'
All the rappers be hatin' off the track that I'm makin'
But all the hustlers, they love it, just to see one of us make it
Came from the bottom of the bottom, to the top of the pops
Nigga, London, Japan and I'm straight off the block
Like a running back, get it? Man, I'm straight off the block
I can run it back, nigga, ‘cause I'm straight with the Roc

[Hook]
If you feeling like a pimp
Nigga, go and brush your shoulders off
Ladies is pimps too, go and brush your shoulders off
Niggas is crazy, baby, don't forget that boy told you
Get that dirt off your shoulder
You gotta get that dirt off your shoulder
You gotta get that dirt off your shoulder
You gotta get that dirt off your shoulder
You gotta get that dirt off your shoulder

[Verse 2]
Your homie Hov' in position, in the kitchen with soda
I just whipped up a watch, tryin' to get me a Rover
Tryin' to stretch out the coca, like a wrestler, yessir
Keep the Heckler close, you know them smokers'll test ya
But, like, 52 cards went out, I'm through dealin'
Now 52 bars come out, now you feel 'em
Now 52 cars roll out, remove ceilin'
In case 52 broads come out, now you chillin'
With a boss, bitch, of course, S.C. on the sleeve
At the 40/40 club, ESPN on the screen
I paid a grip for the jeans, plus the slippers is clean
No chrome on the wheels, I'm a grown-up for real

[Hook]
If you feeling like a pimp
Nigga, go and brush your shoulders off
Ladies is pimps too, go and brush your shoulders off
Niggas is crazy, baby, don't forget that boy told you
Get, that, dirt off your shoulder
You gotta get that dirt off your shoulder
You gotta get that dirt off your shoulder
You gotta get that dirt off your shoulder
You gotta get that dirt off your shoulder

[Verse 3]
Your boy back in the building; Brooklyn, we back on the map
Me and my beautiful bee-itch in the back of that 'Bach
I'm the realest to run it, I just happen to rap
I ain't gotta clap at 'em, niggas scared of that black
I drop that Black Album, then I back out it
As the best rapper alive, nigga, ask 'bout me
From bricks to Billboards, from grams to Grammy's
From O's to opposite of Orphan Annie
You gotta pardon Jay, for sellin' out the Garden in a day
I'm like a young Marvin in his hey'
I'm a hustler, homie, you a customer crony
Got some dirt on my shoulder; could you brush it off for me?

[Hook]
You gotta get that dirt off your shoulder
You gotta get that dirt off your shoulder
You gotta get that dirt off your shoulder
You gotta get that dirt off your shoulder

[Outro]
You're now tuned into the mu'fuckin' greatest
Best rapper alive, best rapper alive",
  artist: "Jay Z"})



fl = Track.create({
  author_id: will.id,
  title: "Flashing Lights",
  body: "[Intro]
Flashing lights, flashing lights
Flashing lights, flashing lights

[Verse 1: Kanye West]
She don't believe in shootin' stars
But she believe in shoes and cars
Wood floors in the new apartment
Couture from the store's departments
You more like \"love to start shit\"
I'm more of the trips to Florida
Ordered the hors d'oeuvres, views of the water
Straight from a page of your favorite author
And the weather so breezy
Man, why can't life always be this easy?
She in the mirror dancin' so sleazy
I get a call, like, \"Where are you, Yeezy?\"
And try to hit you with the ol-wu-wopte
'Til I got flashed by the paparazzi
Damn, these niggas got me
I hate these niggas more than a Nazi

[Hook: Dwele]
As I recall I know you love to show off
But I never thought that you would take it this far
What do I know? (Flashing lights)
What do I know? (Flashing lights)

[Verse 2: Kanye West]
I know it's been a while, sweetheart
We hardly talk, I was doin' my thang
I know it was foul, baby
Aye, babe, lately, you've been all on my brain
And if somebody would've told me a month ago
Frontin' though: yo, I wouldn't wanna know
If somebody would've told me a year ago
It'll go get this difficult
Feeling like Katrina with no FEMA
Like Martin with no Gina
Like a flight with no visa
First class with the seat back, I still see ya
In my past, you on the other side of the glass
Of my memory's museum
I'm just sayin', hey, Mona Lisa
Come home, you know you can't roam without Caesar

[Hook: Dwele]
As I recall I know you love to show off
But I never thought that you would take it this far
What do I know? (Flashing lights)
What do I know? (Flashing lights)
As you recall you know I love to show off
But you never thought that I would take it this far
What do you know? (Flashing lights)
What do you know? (Flashing lights)
(Flashing lights, flashing lights)
(Flashing lights, lights, lights, lights…)",
  artist: "Kanye West"})
