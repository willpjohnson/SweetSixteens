# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
will = User.create({username: 'willpjohnson', password: 'fullstack', avatar: File.open('app/assets/images/admin.jpg')})
biz = User.create({username: 'bizmarkie', password: 'password', avatar: File.open('app/assets/images/biz.jpg')})
fp = User.create({username: 'thefreshprince', password: 'password', avatar: File.open('app/assets/images/fp.jpg')})
future = User.create({username: 'future', password: 'password', avatar: File.open('app/assets/images/future.jpg')})
guest = User.create({username: 'Guest', password: 'password'})

Tag.destroy_all
sev = Tag.create({name: '70s'})
eig = Tag.create({name: '80s'})
nin = Tag.create({name: '90s'})
zer = Tag.create({name: '00s'})
one = Tag.create({name: '10s'})

pjdu_pic = File.open('app/assets/images/pjdu_pic.jpg')
wyk_pic = File.open('app/assets/images/wyk_pic.jpg')
pyn_pic = File.open('app/assets/images/pyn_pic.jpg')
so_pic = File.open('app/assets/images/so_pic.jpg')
humble_pic = File.open('app/assets/images/humble_pic.jpg')
putp_pic = File.open('app/assets/images/putp_pic.jpg')
tdial_pic = File.open('app/assets/images/tdial_pic.jpg')
doys_pic = File.open('app/assets/images/doys_pic.jpg')
fl_pic = File.open('app/assets/images/fl_pic.png')
jaf_pic = File.open('app/assets/images/jaf_pic.jpg')
maskoff_pic = File.open('app/assets/images/maskoff_pic.jpg')
hi_pic = File.open('app/assets/images/hi_pic.jpg')

Track.destroy_all
pjdu = Track.create({
  author_id: will.id,
  title: "Parents Just Don\'t Understand",
  body: "[Intro]
You know parents are the same no matter time nor place
They don't understand that us kids are gonna make some mistakes
So to you other kids all across the land
There's no need to argue, parents just don't understand

[Verse 1]
I remember one year
My mom took me school shopping
It was me, my brother, my mom, oh, my pop, and my little sister
All hopped in the car
We headed downtown to the Gallery Mall
My mom started bugging with the clothes she chose
I didn't say nothing at first
I just turned up my nose
She said, \"What\'s wrong? This shirt cost $20\"
I said, \"Mom, this shirt is plaid with a butterfly collar!\"
The next half hour was the same old thing
My mother buying me clothes from 1963
And then she lost her mind and did the ultimate
I asked her for Adidas and she bought me Zips!
I said, \"Mom, what are you doing, you\'re ruining my rep\"
She said, \"You\'re only sixteen, you don\'t have a rep yet\"
I said, \"Mom, let\'s put these clothes back, please\"
She said \"no, you go to school to learn not for a fashion show\"
I said, \"This isn\'t Sha Na Na, come on Mom, I\'m not Bowzer
Mom, please put back the bell-bottom Brady Bunch trousers
But if you don't want to I can live with that but
You gotta put back the double-knit reversible slacks\"
She wasn\'t moved - everything stayed the same
Inevitably the first day of school came
I thought I could get over, I tried to play sick
But my mom said, \"No, no way, uh-uh, forget it\"
There was nothing I could do, I tried to relax
I got dressed up in those ancient artifacts
And when I walked into school, it was just as I thought
The kids were cracking up laughing at the clothes Mom bought
And those who weren't laughing still had a ball
Because they were pointing and whispering
As I walked down the hall
I got home and told my Mom how my day went
She said, \"If they were laughing you don\'t need them
Cause they're not good friends\"
For the next six hours I tried to explain to my Mom
That I was gonna have to go through this about 200 more times
So to you all the kids all across the land
There's no need to argue
Parents just don't understand

[Verse 2]
Oh-kay, here's the situation
My parents went away on a week's vacation and
They left the keys to the brand new Porsche
Would they mind?
Umm, well, of course not
I'll just take it for a little spin
And maybe show it off to a couple of friends
I'll just cruise it around the neighborhood
Well, maybe I shouldn't—
Yeah, of course I should
Pay attention, here's the thick of the plot
I pulled up to the corner at the end of my block
That's when I saw this beautiful girlie girl walking
I picked up my car phone to perpetrate like I was talking
You should've seen this girl's bodily dimensions
I honked my horn just to get her attention
She said, \"Was that for me?\"
I said, \"Yeah\"
She said, \"Why?\"
I said, \"Come on and take a ride with a helluva guy\"
She said, \"How do I know you\'re not sick?
You could be some deranged lunatic\"
I said, \"C\'mon, toots, my name is the Prince
Besides, would a lunatic have a Porsche like this?\"
She agreed and we were on our way
She was looking very good and so was I, I must say - word
We hit McDonald's, pulled into the drive
We ordered two Big Macs and two large fries with Cokes
She kicked her shoes off onto the floor
She said, \"Drive fast, speed turns me on\"
She put her hand on my knee, I put my foot on the gas
We almost got whiplash, I took off so fast
The sun roof was open , the music was high
And this girl's hand was steadily moving up my thigh
She had opened up three buttons on her shirt so far
I guess that\'s why I didn't notice that police car
We're doing ninety in my Mom's new Porsche
And to make this long story short - short
When the cop pulled me over I was scared as hell
I said, \"I don\'t have a license but I drive very well, officer\"
I almost had a heart attack that day
Come to find out the girl was a twelve-year-old runaway
I was arrested, the car was impounded
There was no way for me to avoid being grounded
My parents had to come off from vacation to get me
I'd rather be in jail than to have my father hit me
My parents walked in
I got my grip, I said, \"Ah, Mom, Dad... how was your trip?\"
They didn't speak - I said, \"I want to plead my case\"
But my father just shoved me in the car by my face
That was a hard ride home, I don't know how I survived
They took turns - one would beat me while the other was driving
I can't believe it, I just made a mistake
Well parents are the same no matter time nor place
So to you other kids all across the land
Take it from me, parents just don't understand",
  artist: "DJ Jazzy Jeff & The Fresh Prince",
  image: pjdu_pic})

wyk = Track.create({
  author_id: will.id,
  title: "What You Know",
  body: "[Chorus]
Ayy, ayy, ayy, ayy, ayy
What you know about that?
What you know about that?
What you know about that?
Ay, don't you know I got key by the three
When I chirp shawty chirp back
Louie knapsack where I'm holding all the work at
What you know about that?
What you know about that?
What you know about that?
Hey I know all about that
Loaded .44 on the low where the cheese at?
Fresh out the jet to the 'jects where the G's at
What you know about that?
What you know about that?
What you know about that?
Hey I know all about that

[Verse 1]
See me in your city, sittin' pretty know I'm shinin dog
Ridin' with a couple Latin broads and a China doll
And you know how we ball
Riding in shiny cars
Walk in designer malls
Buy everything we saw
You know about me dog
Don't talk about me dog
And if you doubt me dog
You better out me dog
I'm throwed off slightly bro
Don't wanna fight me bro
I'm fast as lightning bro
You better use your Nike's bro
Know you don't like me cause
Your bitch most likely does
She see me on them dubs
In front of every club
I be on dro I'm buzzed
Gave every ho a hug
Niggas don't show me mugs
Cause you don't know me cuz

[Chorus]
Ayy, ayy, ayy, ayy, ayy
What you know about that?
What you know about that?
What you know about that?
Ay, don't you know I got key by the three
When I chirp shawty chirp back
Louie knapsack where I'm holding all the work at
What you know about that?
What you know about that?
What you know about that?
Hey I know all about that
Loaded .44 on the low where the cheese at?
Fresh out the jet to the 'jects where the G's at
What you know about that?
What you know about that?
What you know about that?
Hey I know all about that

[Verse 2]
Candy on the six four
Leather guts and fish bowl
Fifty on my pinky ring just to make my fist glow
Your bitches get low
Because I get dough
So what I'm rich ho
I'll still pull a kick do'
What you talking shit for
You gotta run and get four
Got you yelling and I thought you pull out a gun hit four
But you's a scary dude
Believed by very few
Just keep it very cool
Or we will bury you
See all that attitude's, unnecessary dude
You never carry tools not even square, he cube
You got these people fooled, who see me on the tube
Whatever try the crew, they'll see you on the news


[Chorus]
Ayy, ayy, ayy, ayy, ayy
What you know about that?
What you know about that?
What you know about that?
Ay, don't you know I got key by the three
When I chirp shawty chirp back
Louie knapsack where I'm holding all the work at
What you know about that?
What you know about that?
What you know about that?
Hey I know all about that
Loaded .44 on the low where the cheese at?
Fresh out the jet to the 'jects where the G's at
What you know about that?
What you know about that?
What you know about that?
Hey I know all about that

[Verse 3]
Fresh off the jet to the block
Burning rubber with the top popped
My partners busting shots, I'll tell them \"stop, it make the block hot\"
Yo label got got
Cuz you are not hot
I got the top spot
And it will not stop
A video or not that will bust it 'til the Glock stop
Drag you out that Bentley Coupe and take it to the chop shop
Although we not y'all
If it may pop off
I'll answer the question \"Will I get your block knocked off?\"
This what it is bro
Look I will kill bro
I'm in your hood if you a gangsta what you hid for
Somebody better get bro before he get sent for
You say you wanna squash it what you still talking shit for


[Chorus]
Ayy, ayy, ayy, ayy, ayy
What you know about that?
What you know about that?
What you know about that?
Ay, don't you know I got key by the three
When I chirp shawty chirp back
Louie knapsack where I'm holding all the work at
What you know about that?
What you know about that?
What you know about that?
Hey I know all about that
Loaded .44 on the low where the cheese at?
Fresh out the jet to the 'jects where the G's at
What you know about that?
What you know about that?
What you know about that?
Hey I know all about that",
  artist: "T.I.",
  image: wyk_pic})

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
  artist: "Wu Tang Clan",
  image: pyn_pic})



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
  artist: "Mobb Deep",
  image: so_pic})



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
  artist: "Kendrick Lamar",
  image: humble_pic})



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
  artist: "Young Thug",
  image: putp_pic})



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
  artist: "Rick Ross",
  image: tdial_pic})



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
  artist: "Jay Z",
  image: doys_pic})



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
  artist: "Kanye West",
  image: fl_pic})


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
  image: jaf_pic})

maskoff = Track.create({
  author_id: will.id,
  title: "Mask Off",
  body: "[Intro]
Call it how it is
Hendrix
I promise, I swear, I swear
You heard, spit it, yo

[Chorus]
Percocets, molly, Percocets
Percocets, molly, Percocets
Rep the set, gotta rep the set
Chase a check, never chase a bitch
Mask on, fuck it, mask off
Mask on, fuck it, mask off
Percocets, molly, Percocets
Chase a check, never chase a bitch
Don't chase no bitches

[Verse 1]
Two cups, toast up with the gang
From food stamps to a whole 'nother domain
Out the bottom, I'm the livin' proof (Super)
Ain't compromising, half a million on the coupe
Drug houses, lookin' like Peru
Graduated, I was overdue
Pink molly, I can barely move
Ask about me, I'm gon' bust a move
Rick James, thirty-three chains
Ocean air, cruisin' Biscayne
Top off, that’s a liability
Hit the gas, boostin' my adrenaline

[Chorus]
Percocets, molly, Percocets
Percocets, molly, Percocets
Rep the set, gotta rep the set
Chase a check, never chase a bitch
Mask on, fuck it, mask off
Mask on, fuck it, mask off
Percocets, molly, Percocets
Chase a check, never chase a bitch
Don't chase no bitches

[Verse 2]
Four-door Maybach, I drive anything
Buy my Range, make 'em go insane
(Oh my Lord, praise him be)
My guillotine, drank promethazine
TEC and beams, go to those extremes
Parliament, calamari Wednesday
Parlay in Vegas, we was in attendance
Before the business, Theodore lenses
Theo-Dur prescriptions, focus on the missions
Intermission, never take a break
Switch states, touch down, foreign plates
Ain't no way, ain't no fuckin' way
We call the play, we didn't come to play
Rob the bank, we gon' rob the game
They gang, we gang
But they are not the same (Freebandz)


[Chorus]
Percocets, molly, Percocets
Percocets, molly, Percocets
Rep the set, gotta rep the set
Chase a check, never chase a bitch
Mask on, fuck it, mask off
Mask on, fuck it, mask off
Percocets, molly, Percocets
Chase a check, never chase a bitch
Don't chase no bitches

[Outro]
Mask on, fuck it, mask off
Mask on, fuck it, mask off
Mask on, fuck it, mask off
Gas gone, never nod off
(Cold chills, prison cells)
(Oh my Lord, praise him be)",
  artist: "Future",
  image: maskoff_pic})

hi = Track.create({
  author_id: will.id,
  title: "Holidae In",
  body: "[Intro: Snoop Dogg]
Bomb ass pussy
Ma, ooh you got that bomb, know you got it
Ma, ooh you got some bomb ass pussy
Ma I know you got that bomb bomb pussy

[Hook: Snoop/Chingy + Girl]
(Whachu doing?) Nothing chilling at the Holiday Inn!
(Who you with?) Me and my peeps thought you'd bring over your friends
(What we gon' do?) Feel on each other and sip on some Hen
One thing leading to another let the party begin
(Whachu doing?) Nothing chilling at the Holiday Inn!
(Who you with?) Me and my peeps thought you'd bring over your friends
(What we gon' do?) Feel on each other and sip on some Hen
One thing leading to another let the party begin

[Verse 1: Chingy]
Peeps call me up [phone ring] said it's a ho-tel party
Just bring the liquor, there's already eight shawties
I'm on my way, let me stop by the store
Get a 12-pack of Corona - plus an ounce of 'dro, ya know?
Now I'm on Highway 270 to Natural Bridge Rd
I'm already blowed, hit third I'mma be be blowed some mo'
Pulled up, stop parked, rims still spinning
Valet looking like he in the game and must be winning
To room 490 I'm headed, on my way up
It's three girls on the elevator like: \"wassup?\"
I told em: \"follow me\". they knew I had it cracking B
One said \"ain\'t you that boy that be on BET?\"
\"Ya that's me, Ching-a-ling equipped with much ding-a-ling\"
Knock on the door, I'm on the scene of things
Busted in, Henny bottle to the face
Fuck it then, feel like my head is toxic waste
It's some pretty girls in hurr, I heard em whispering
Talking bout \"that\'s that dude that sing \"Right Thurr\" - he glistening\"
I ain\'t come to talk, I ain\'t come to sit
What I came for was to find out who I\'m gonna hit, aww shit

[Hook: Snoop/Chingy + Girl]
(Whachu doing?) Nothing chilling at the Holiday Inn!
(Who you with?) Me and my peeps thought you'd bring over your friends
(What we gon' do?) Feel on each other and sip on some Hen
One thing leading to another let the party begin
(Whachu doing?) Nothing chilling at the Holiday Inn!
(Who you with?) Me and my peeps thought you'd bring over your friends
(What we gon' do?) Feel on each other and sip on some Hen
One thing leading to another let the party begin

[Verse 2: Chingy]
Ma showed up like \"what\'s the hold up?\"
Man know what, get them wraps and roll up
I took a chick in the bathroom seeing what\'s poppin
You know what\'s on my mind, shirts off and panties dropping
Niggas knocking on the door drunk, acting silly
The girl said \"can I be in yo video\" I\'m like \"yeah!\", \"oh really?\"
Now she naked strip teasing, me I'm just cheesing
She gave me a reason to be a damn heathen
Handled that, told ol' G, bring tha camera
Then I thought about, no footage as I ram her
Walked out the bathroom smiling, cats still wilding
Sharing the next room with some girls looking like they from an island

[Hook: Snoop + Chingy]
(Whachu doing?) Nothing chilling at the Holiday Inn!
(Who you with?) Me and my peeps thought you'd bring over your friends
(What we gon' do?) Feel on each other and sip on some Hen
One thing leading to another let the party begin
(Whachu doing?) Nothing chilling at the Holiday Inn!
(Who you with?) Me and my peeps thought you'd bring over your friends
(What we gon' do?) Feel on each other and sip on some Hen
One thing leading to another let the party begin",
  artist: "Chingy",
  image: hi_pic})


Annotation.destroy_all
pyn1 = Annotation.create({
  track_id: pyn.id, author_id: will.id,
  body: "Protect Ya Neck opens with a sampled phone-in to a radio station.",
  start_idx: 8, end_idx: 374
  })

pyn2 = Annotation.create({
  track_id: pyn.id, author_id: will.id,
  body: "Raekwon's verses are as tough as bodybuilder Arnold Schwarzenegger.",
  start_idx: 1050, end_idx: 1122
  })

so1 = Annotation.create({
  track_id: so.id, author_id: will.id,
  body: "Prodigy is from Queensbridge in Queens, NY.",
  start_idx: 213, end_idx: 261
  })

so2 = Annotation.create({
  track_id: so.id, author_id: will.id,
  body: "Havoc raps about lots of criminal activity and could be implicated for his lyrics.",
  start_idx: 2186, end_idx: 2225
  })

humble1 = Annotation.create({
  track_id: humble.id, author_id: will.id,
  body: "Kendrick makes a lot of money.",
  start_idx: 329, end_idx: 378
  })

humble2 = Annotation.create({
  track_id: humble.id, author_id: will.id,
  body: "More flexing about how great he is. Even without the BMW, he has a Mercedes. Even if he quits, he's the greates of all time.",
  start_idx: 644, end_idx: 743
  })

putp1 = Annotation.create({
  track_id: putp.id, author_id: will.id,
  body: "Travis wants her to answer his phone call.",
  start_idx: 818, end_idx: 892
  })

putp2 = Annotation.create({
  track_id: putp.id, author_id: will.id,
  body: "Macaulay Culkin famously starred in the Home Alone movies in the 1990s.",
  start_idx: 2308, end_idx: 2359
  })

tdial1 = Annotation.create({
  track_id: tdial.id, author_id: will.id,
  body: "Rick Ross' album is called 'Masterminds'",
  start_idx: 19, end_idx: 31
  })

tdial2 = Annotation.create({
  track_id: tdial.id, author_id: will.id,
  body: "Jay doesn't wear True Religion jeans, so he says he's an atheist.",
  start_idx: 2334, end_idx: 2382
  })

doys1 = Annotation.create({
  track_id: doys.id, author_id: will.id,
  body: "Self-explanatory.",
  start_idx: 8, end_idx: 53
  })

doys2 = Annotation.create({
  track_id: doys.id, author_id: will.id,
  body: "Even Obama has been seen brushing his shoulders off.",
  start_idx: 1083, end_idx: 1148
  })

fl1 = Annotation.create({
  track_id: fl.id, author_id: will.id,
  body: "Ye paints a picture of a relaxing vacation scene.",
  start_idx: 305, end_idx: 463
  })

fl2 = Annotation.create({
  track_id: fl.id, author_id: will.id,
  body: "FEMA (Federal Emergency Management Agency) was responsible for cleaning up the disaster of Hurricane Katrina.",
  start_idx: 1183, end_idx: 1216
  })

jaf1 = Annotation.create({
  track_id: jaf.id, author_id: will.id,
  body: "Biz kicks things off with a question to the listener.",
  start_idx: 10, end_idx: 104
  })

jaf2 = Annotation.create({
  track_id: jaf.id, author_id: will.id,
  body: "Biz wants to date this girl, but she is with another man who she says is 'just a friend'.",
  start_idx: 985, end_idx: 1080
  })

Tagging.destroy_all
Tagging.create({tag_id: eig.id, track_id: pjdu.id})
Tagging.create({tag_id: zer.id, track_id: wyk.id})
Tagging.create({tag_id: nin.id, track_id: pyn.id})
Tagging.create({tag_id: nin.id, track_id: so.id})
Tagging.create({tag_id: one.id, track_id: humble.id})
Tagging.create({tag_id: one.id, track_id: putp.id})
Tagging.create({tag_id: one.id, track_id: tdial.id})
Tagging.create({tag_id: zer.id, track_id: doys.id})
Tagging.create({tag_id: zer.id, track_id: fl.id})
Tagging.create({tag_id: eig.id, track_id: jaf.id})
Tagging.create({tag_id: one.id, track_id: maskoff.id})
Tagging.create({tag_id: zer.id, track_id: hi.id})
