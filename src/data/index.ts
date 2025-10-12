export interface TourDetail {
    id: number;
    img: string[];
    title: string;
    destination: string[];
    duration: number;
    type: string[];
    price: number;
    general: string;
    special: string[];
    details: {
        title: string;
        description: string;
    }[];
    accommodation: string;
}

export const tourList: TourDetail[] = [
    {
        id: 1,
        img: ["/Tour/1.0.webp", "/Tour/1.1.jpg", "/Tour/1.2.jpg", "/Tour/1.3.jpg", "/Tour/1.4.jpg"],
        title: "7 days Incredible Journey to Vietnam: Hanoi, Danang and Saigon",
        destination: ["Ha Noi", "Da Nang", "Sai Gon"],
        duration: 7,
        type: ["Classic Tour", "Family Holiday", "For senior citizens", "Honeymoon"],
        price: 495,
        general: "Explore the wonders of Vietnam by cruising through the crowded streets of Hanoi, sailing across the scenic Halong Bay, and being amidst the rich cultural heritage of Ho Chi Minh City. Get involved in one-of-a-kind activities such as floating lanterns in Hoi An and traveling to the Mekong Delta and Cu Chi Tunnels. Begin your fantastic journey today at Seni World!",
        special: [
            "Discover bustling markets, vibrant Train Street at night, the Thang Long Imperial Citadel, and Hoan Kiem Lake with Ngoc Son Temple",
            "Sail among breathtaking Halong Bay limestone karsts, explore stunning caves, and enjoy water activities with a sunset party",
            "Enjoy an exciting afternoon experience of rowing a basket boat to explore Cam Thanh fishing village",
            "Ride the cable car to Ba Na Hills and explore the Golden Bridge, French Village, and lively attractions",
            "Explore HCMC’s beauty with visits to Cho Lon, Thien Hau Pagoda, Bach Dang Harbor, and a scenic water bus ride along the Saigon River with views of Landmark 81 and Bitexco Financial Tower",
            "Cruise through the Mekong Delta’s magical islands, visit a 19th-century pagoda, sample tropical fruits, and row through peaceful canals before enjoying a local lunch and village life",
            "Uncover the historic Cu Chi Tunnels, learn about their construction and wartime use, and experience guerrilla food"
        ],
        details: [
            {
                title: "Hanoi Arrival – Half-day City Tour",
                description: `Welcome to Hanoi! Your guide will meet you at the airport and take you to your hotel. After you’ve settled in (rooms available from 2 PM), your Hanoi exploration begins.

                                You’ll visit the Temple of Literature, Vietnam’s first university, and then enjoy the peaceful beauty of Hoan Kiem Lake, home to Turtle Tower and Ngoc Son Temple. Finally, experience the thrill of Train Street, where you’ll enjoy a free drink and watch the train pass by.

                                Meals are your own. Your day ends with relaxation in the Hanoi hotel.`
            },
            {
                title: "Day Trip to Halong Bay",
                description: `Between 08:00 and 08:30 AM, your Ha Long Bay escape begins with a pick-up from your Hanoi hotel. By noon, you’ll be boarding a cruise at Tuan Chau Port, ready to explore the bay’s iconic beauty. A delicious lunch awaits as you glide past stunning limestone formations.

                                Then, you can discover Sung Sot Cave’s grandeur, choose to kayak through Luon Cave or simply unwind on deck. Ti Top Island is the ideal place for swimming or panoramic vistas. As the day winds down, let’s enjoy a Sunset Party before returning to Tuan Chau port at 06:00 PM. A comfortable bus journey brings you back to Hanoi around 09:30 PM.`
            },
            {
                title: "Hanoi – Fly to Da Nang – Cam Thanh Coconut Jungle – Hoi An Ancient Town",
                description: `Enjoy your free time until our car arrives to take you to the airport for your flight to Da Nang. Upon arrival, our driver will meet you at Da Nang Airport and transfer you to your hotel. Check-in time is from 02:00 PM.

                                First, head to Cam Thanh Coconut Village, where you’ll step into the shoes of a local fisherman at 12:00 AM. Learn traditional fishing techniques, paddle a unique Vietnamese bamboo basket boat, and cruise along the peaceful coconut palm-lined waterways. This hands-on experience offers fun and insight into local life, history, and culture.

                                It’s going to be an exciting afternoon! You will head to the center of Hoi An’s old town, a UNESCO World Heritage Site. The ancient homes beckon you to take a walk, the famous Japanese Bridge, the lively Phuc Kien Chinese Assembly Hall, Phung Hung Ancient House, and Tan Ky Ancient House are waiting for you to explore.

                                As the sun starts setting, a delicious local dinner is ready for you, after which a lovely boat trip awaits. You will float flower lanterns on the river, making a very memorable moment.

                                Enjoy meals at your leisure. Overnight in Da Nang.`
            },
            {
                title: "Ba Na Hills – The Golden Bridge",
                description: `Your day begins with a convenient hotel pickup, followed by a stunning ride to Ba Na Hills via a cable car. Take an incredible journey on Southeast Asia’s latest cable car, gazing at the wonderful scenery of Da Nang’s coastline.

                                Once at the top, you can view the renowned Golden Bridge, stroll through the beautiful Le Jardin D’amour gardens, and explore the serene Linh Ung Pagoda.

                                Then take another cable car ride to the French Village, where you’ll find a charming European ambience. Hear street music, see artistic sculptures, and watch a colorful carnival performance. Savor a buffet lunch, then take the Lava Train ride to witness new attractions like the Helios Waterfall and the Moon Kingdom.

                                Don’t miss out on the fun at Fantasy Park, which has plenty of diverse rides and attractions. Your day ends with a cable car ride back and a relaxing minivan drive to your hotel.`
            },
            {
                title: "Da Nang – Fly to Ho Chi Minh – Half-day City Tour",
                description: `Enjoy a hearty breakfast before catching a short flight from Danang International Airport to Ho Chi Minh City (HCMC), Vietnam’s largest city. Although you won’t have a guide during the transfer, we’ll make sure everything goes smoothly for you.

                                Once you arrive, a friendly guide and driver will be waiting to help with your luggage and take you to your hotel for check-in, ensuring a comfortable and easy arrival.

                                Please note, the parking area at Ho Chi Minh Airport is about 150 meters from the arrival gate. Your guide will be there to assist you with the short walk to the vehicle.

                                In the afternoon, get ready for a half-day city tour. You’ll visit Cho Lon, the lively Chinatown, and the Thien Hau Pagoda, before heading to Bach Dang Harbor. Hop on the water bus for a relaxing ride along the Saigon River, where you can enjoy spectacular views of the city’s iconic buildings, including the Landmark 81 tower and the Bitexco Financial Tower, as well as the tranquil green spaces of District 2.

                                After the tour, return to your hotel. Meals are on your own, and you’ll spend the night at the hotel.`
            },
            {
                title: "Cu Chi Tunnels – Ho Chi Minh City – Departure ",
                description: `Start the day by visiting the Cu Chi Tunnels, an extraordinary example of wartime ingenuity. Discover the underground network, learn how it functioned, and experience the conditions faced by Vietnamese soldiers. You’ll have the opportunity to taste local tea and cassava, and those interested can try their hand at the shooting range before returning to Ho Chi Minh City.

                                After the Cu Chi trip, you’ll enjoy a leisurely afternoon before your transfer to Tan Son Nhat International Airport for your flight to India. Meals are on your own.`
            },
        ],
        accommodation: "Accommodation is flexible and tailored to your preferences. We’ll suggest suitable options and can adjust upon request."
    },
    {
        id: 2,
        img: ["/Tour/2.0.webp", "/Tour/2.1.jpg", "/Tour/2.2.jpg", "/Tour/2.3.jpg", "/Tour/2.4.jpg"],
        title: "Phu Quoc Highlights: Beaches, Safari & Island Fun",
        destination: ["Phu Quoc"],
        duration: 4,
        type: ["Beach Holiday"],
        price: 249,
        general: "Experience a wonderful tropical getaway in Phu Quoc on this exciting 4-day adventure. You’ll snorkel in coral reefs, bask on beautiful islands, meet animals at Vinpearl Safari, and have fun at VinWonders theme park. Every day is action-filled at Vietnamtour.in. With breathtaking scenery, rich culture, and ample time to relax, the tour offers a great mix of action and relaxation in Vietnam’s island gem.",
        special: [
            "Cruise across turquoise waters to explore Hon May Rut Trong, Hon Mong Tay, and Hon Gam Ghi, where you can swim, snorkel, and admire vibrant coral reefs",
            "Have fun at Aquatopia Water Park and challenge yourself with over 30 games at Exotica Park on Thom Island",
            "Soar above Phu Quoc’s coastline on the world’s longest three-way cable car and explore Sunset Town with its Mediterranean vibes and the iconic Kiss Bridge",
            "Spend a wild morning at Vinpearl Safari Phu Quoc, home to giraffes, white lions, and dozens of exotic animals roaming in semi-wild habitats",
            "Unleash your inner child at VinWonders Phu Quoc with themed zones, thrilling rides, fairy-tale castles, and the dazzling nighttime Once Show",
        ],
        details: [
            {
                title: "Phu Quoc Arrival",
                description: `Welcome to Phu Quoc! Upon arrival at Phu Quoc International Airport, our friendly driver will be waiting to greet you and provide a comfortable transfer to your hotel. Check-in time begins at 02:00 PM, and your room will be ready for you upon arrival.

                                        The rest of the day is yours to relax and enjoy at your leisure. You may choose to unwind at the hotel, take a stroll along the beach, or begin exploring the island’s natural beauty. Meals are in your arrangement. Overnight in Phu Quoc.`
            },
            {
                title: "Cable Car to Hon Thom Island – 4 Islands Trip by Speedboat – Snorkeling – Joint in Tour",
                description: `Get ready for a full-day tropical escape, packed with crystal-clear waters, colorful coral reefs, thrilling water parks, and unforgettable views!

                                        Your day begins at 08:00 AM, when our driver picks you up at your hotel and takes you to Ngoc Hien Pearl Farm, the gathering point. From there, you’ll continue to An Thoi Harbour and board a speedboat that whisks you away across the turquoise sea.

                                        Hon May Rut Trong (Cloud Island): Your first island stop, known for its powdery white sands and picture-perfect scenery, is ideal for drone videos, sunbathing, and beachside fun.
                                        Hon Mong Tay (Fingernail Island): A tropical paradise where you’ll enjoy swimming in crystal waters and take stunning photos.
                                        Hon Gam Ghi (Dam Ngang or Kim Quy Island): Dive into the underwater world with snorkeling gear provided. Discover vivid coral reefs and schools of colorful fish in this marine haven.
                                        Coral Park (optional visit at your own expense): Explore Asia’s largest coral park, home to hundreds of rare coral and marine species, perfect for ocean lovers and photographers.
                                        After a refreshing lunch and sun-filled adventures, the fun continues in the afternoon on Thom Island, where you can splash around at Aquatopia Water Park and test your limits with over 30 exciting games in Exotica Park.

                                        Cap off your day with a scenic ride on the world’s longest non-stop three-way cable car, offering stunning aerial views of Phu Quoc’s coast.

                                        Before returning, take a stroll through Sunset Town, stopping by the Mediterranean-inspired streets and the iconic Kiss Bridge for some final photos.

                                        At around 05:00 PM, you’ll return to your hotel with wonderful memories and a camera full of tropical moments.

                                        Dinner is on your own. Overnight at your hotel in Phu Quoc.`
            },
            {
                title: "Vinpearl Safari – VinWonders – Private Tour",
                description: `After enjoying a hearty breakfast at your hotel, our friendly driver will arrive to pick you up and escort you on an exciting full-day excursion to two of Phu Quoc’s most popular attractions.

                                        Your first stop is Vinpearl Safari Phu Quoc, a vast semi-wild zoo that is home to hundreds of animal species from around the world. Spanning over hundreds of hectares, this beautifully designed park allows you to observe wildlife in an environment that closely resembles their natural habitat. You’ll have the chance to see majestic animals like zebras, giraffes, elephants, and even white lions roaming freely in open enclosures.

                                        To make the most of your visit, we recommend arriving in the morning, when the animals are typically most active. This is also the best time to take photos and enjoy the cool, refreshing air as you stroll through the lush, green surroundings.

                                        After you’ve finished exploring the Safari, our driver will transfer you to VinWonders Phu Quoc, Vietnam’s largest and most thrilling theme park. With a perfect blend of excitement and imagination, the park offers a variety of themed zones, each packed with interactive games, captivating shows, and adrenaline-pumping rides. Whether you’re diving into water adventures, walking through fairy-tale castles, or enjoying indoor games and 5D cinema experiences, there’s something here for every age and interest.

                                        As evening falls, don’t forget to catch the Once Show, an impressive nighttime performance featuring cutting-edge lighting, music, and dramatic storytelling. It’s a spectacular finale to a day filled with exploration and fun.

                                        After the show, your driver will take you back to your hotel for a well-deserved rest.

                                        Dinner is on your own. Overnight at the hotel in Phu Quoc.`
            },
            {
                title: "Phu Quoc – Departure",
                description: `After the Phu Quoc trip, you’ll enjoy a leisurely morning before your transfer to the airport for your flight. Your transfer will be driver-only, giving you some personal time before departure. Meals are on your own.`
            }
        ],
        accommodation: "Accommodation is flexible and tailored to your preferences. We’ll suggest suitable options and can adjust upon request."
    },
    {
        id: 3,
        img: ["/Tour/3.0.webp", "/Tour/3.1.jpg", "/Tour/3.2.jpg", "/Tour/3.3.jpg", "/Tour/3.4.jpg"],
        title: "Around Highlights Vietnam In 7 Days: Saigon, Da Nang, Hanoi & Ha Long Bay",
        type: ["Classic Tour", "Family Holiday", "For senior citizens", "Honeymoon"],
        destination: ["Sai Gon", "Da Nang", "Ha Noi", "Ha Long"],
        duration: 7,
        price: 479,
        general: "Experience the highlight moments of Vietnam within a period of seven days, ranging from Ho Chi Minh City’s lively roads to majestic Ha Long Bay. Walk on historical paths through Cu Chi Tunnels, savor Hoi An’s allure, and glide on bay islands surrounded by boulders with green water below. Allow plans to be handled by Seni World as you create fabulous memories!",
        special: [
            "Experience HCMC energy with visits to Ben Thanh Market, Bitexco Financial Tower’s Sky Deck, Nguyen Hue Walking Street, Saigon Notre-Dame Basilica, and Bui Vien Street",
            "Uncover the historic Cu Chi Tunnels, learn about their construction and wartime use, and experience guerrilla food",
            "Relax at My Khue Beach in Da Nang, and taste fresh seafood",
            "Enjoy an exciting afternoon experience of rowing a basket boat to explore Cam Thanh fishing village",
            "Admire Hoi An’s ancient town with well-preserved attractions and a lantern-lit boat ride",
            "Ride the cable car to Ba Na Hills and explore the Golden Bridge, French Village, and lively attractions",
            "Discover bustling markets, vibrant Train Street at night, the Thang Long Imperial Citadel, and Hoan Kiem Lake with Ngoc Son Temple",
            "Enjoy a Ha Long Bay cruise with gourmet dining, stunning limestone views, kayaking and swimming, plus a captivating sunset party"
        ],
        details: [
            {
                title: "Ho Chi Minh Arrival",
                description: `Welcome to Ho Chi Minh! Your guide will meet you at the airport and take you to your hotel. After you’ve settled in (rooms available from 2 PM), your Ho Chi Minh exploration begins.

                                        With your afternoon free time in Ho Chi Minh City, you might also consider these options. Start at Ben Thanh Market for local goods and street food. For city views, head to the Bitexco Financial Tower’s Sky Deck. Stroll Nguyen Hue Walking Street, then visit the Saigon Notre-Dame Basilica. Consider a Saigon River cruise for skyline views. End your day with lively nightlife on Bui Vien Street.

                                        Meals are your own. Your day ends with relaxation in the Ho Chi Minh hotel.`
            },
            {
                title: "Ho Chi Minh City Tour – Cu Chi Tunnels",
                description: `Start the day by visiting the Ho Chi Minh City landmarks. You can view the iconic Independence Palace, which represents reunification, and admire the French colonial styles of Notre Dame Cathedral and the Central Post Office. The War Remnants Museum has a poignant and moving experience as it showcases the effects of Vietnam’s conflicts.

                                        Following a local lunch, you’ll venture to the Cu Chi Tunnels, an extraordinary example of wartime ingenuity. Discover the underground network, learn how it functions, and experience the conditions faced by Vietnamese soldiers. You’ll have the opportunity to taste local tea and cassava, and those interested can try their hand at the shooting range before returning to Ho Chi Minh City.`
            },
            {
                title: "Ho Chi Minh City – Fly to Da Nang – Cam Thanh Coconut Jungle – Hoi An Ancient Town",
                description: `You have free time until our car arrives at your hotel for your transfer to Tan Son Nhat International Airport for your flight to Da Nang. Upon arrival, our car and guide will greet you at Da Nang International Airport and take you to your hotel. Your room will be ready for check-in from 2 PM onwards.

                                        Your morning is free for relaxation or personal exploration.

                                        At 12:00 – 12:15 PM, you will be picked up from your Da Nang hotel by the guide and van for a fun-filled afternoon. First, you will go to Cam Thanh Coconut Village, where you will have traditional fishing and row a bamboo basket boat through peaceful waterways. You get to see how local fishermen live and work daily.

                                        You’ll reach Hoi An Ancient Town by 02:30 PM. Stroll past ancient sites such as Phuc Kien Assembly Hall, old houses, and the Japanese Bridge. Witness a traditional show prior to reaching handicraft stores that are colorfully painted. Watch the sunset and enjoy a light dinner of a local delicacy. At 06:00 PM, take a peaceful boat trip along the Hoai River, dropping flower lanterns for good luck. Let’s enjoy the beautiful sight of Hoi An’s lantern-strung streets before browsing the bustling night market.

                                        At 06:30 PM., return to your hotel. Overnight in Da Nang.`
            },
            {
                title: "Da Nang – Ba Na Hills – Golden Bridge ",
                description: `Your day begins with a convenient hotel pickup, followed by a stunning ride to Ba Na Hills via a cable car. Take an incredible journey on Southeast Asia’s latest cable car, gazing at the wonderful scenery of Da Nang’s coastline.

                                        Once at the top, you can view the renowned Golden Bridge, stroll through the beautiful Le Jardin D’amour gardens, and explore the serene Linh Ung Pagoda.

                                        Then take another cable car ride to the French Village, where you’ll find a charming European ambiance. Hear street music, see artistic sculptures, and watch a colorful carnival performance. Savor a buffet lunch, then take the Lava Train ride to witness new attractions like the Helios Waterfall and the Moon Kingdom.

                                        Don’t miss out on the fun at Fantasy Park, which has plenty of diverse rides and attractions. Your day ends with a cable car ride back and a relaxing minivan drive to your hotel.`
            },
            {
                title: "Da Nang – Fly to Hanoi – Half-day City Tour ",
                description: `Enjoy your free time until the transfer to the airport for a short flight to Hanoi, Vietnam’s beautiful capital.

                                        Upon arrival, our guide will warmly welcome you and escort you to your hotel. Check-in is available from 02:00 PM onwards, allowing you time to settle in and relax.

                                        At 02:00 PM, your driver and guide will pick you up at your hotel for an afternoon of Hanoi sightseeing. You’ll visit the Ho Chi Minh Mausoleum (from the outside), where you can discover the revered leader’s legacy while taking in impressive architecture. Nearby, Ba Dinh Square is the historic location where Vietnam achieved independence in 1945.

                                        After that, take a leisurely walk around Hoan Kiem Lake, an integral part of the city’s culture. Visit the famous Turtle Tower and walk along The Huc Bridge to view Ngoc Son Temple. Enjoy the lively atmosphere along the way as locals come together for tai chi, street performances, and daily activities.

                                        To round out your experience, visit Dong Xuan Market, Hanoi’s biggest and most lively shopping district. This busy market has everything, from souvenirs and local handicrafts to street food, giving you a real taste of local life.

                                        At 05:30 PM, the tour concludes, leaving you with a deeper connection to Hanoi’s fascinating past and vibrant culture.`
            },
            {
                title: "Day Trip to Halong Bay",
                description: `Between 08:00 and 08:30 AM, your Ha Long Bay escape begins with a pick-up from your Hanoi hotel. By noon, you’ll be boarding a cruise at Tuan Chau Port, ready to explore the bay’s iconic beauty. A delicious lunch awaits as you glide past stunning limestone formations.

                                        Then, you can discover Sung Sot Cave‘s grandeur, choose to kayak through Luon Cave or simply unwind on deck. Ti Top Island is the ideal place for swimming or panoramic vistas. As the day winds down, let’s enjoy a Sunset Party before returning to Tuan Chau port at 06:00 PM. A comfortable bus journey brings you back to Hanoi around 09:30 PM.`
            },
            {
                title: "Hanoi – Departure",
                description: `After the Vietnam trip, you’ll enjoy a leisurely morning before your transfer to Noi Bai International Airport for your flight. Your transfer will be driver-only, giving you some personal time before departure. Meals are on your own.`
            }
        ],
        accommodation: "Accommodation is flexible and tailored to your preferences. We’ll suggest suitable options and can adjust upon request."
    },
    {
        id: 4,
        img: ["/Tour/4.0.png", "/Tour/4.1.jpg", "/Tour/4.2.jpg", "/Tour/4.3.jpg", "/Tour/4.4.jpg"],
        title: "Flavors & Heritage of Vietnam in 15 Days",
        type: ["Beach Holiday", "Classic Tour", "For senior citizens", "Honeymoon"],
        destination: ["Ha Noi", "Ninh Binh", "Halong Bay", "Hue", "Hoi An", "Ho Chi Minh City", "Mekong Delta"],
        duration: 15,
        price: 1795,
        general: "Experience a 15-day adventure in Vietnam that takes you from the bustling Hanoi streets to the peaceful waters of Halong Bay, Hue’s beautiful city, and Hoi An’s twinkling lights. Along the journey, sample street food by Vespa, explore ancient fortresses, cruise through limestone landscapes, and stroll through riverside villages in the Mekong Delta. As Seni World takes care of all your requirements, you can just unwind and enjoy all your valuable travel moments.",
        special: [
            "Kick off your Hanoi adventure with a thrilling Vespa night food tour featuring iconic Bún Chả, egg coffee, and hidden street eats",
            "Discover the cultural gems of Hanoi by public bus, from the historic Hoa Lo Prison to the legendary Hoan Kiem Lake and Old Quarter",
            "Take a peaceful boat ride through the limestone caves of Tam Coc and visit ancient temples in Vietnam’s first capital, Hoa Lu",
            "Cruise through the stunning waters of Ha Long and Lan Ha Bay, explore Trung Trang Cave, and relax with Tai Chi on deck",
            "Step back in time in Hue with visits to the Imperial Citadel, Thien Mu Pagoda, and the poetic tombs of Emperors Tu Duc and Khai Dinh",
            "Enjoy a scenic train ride along Lang Co Bay and unwind in the charming ancient town of Hoi An",
            "Join a hands-on cooking class and explore Hoi An’s lantern-lit streets, historic houses, and riverside charm",
            "Soak in Hoi An’s laid-back vibe with free days to visit beaches, markets, or tailor shops at your own pace",
            "Travel to vibrant Ho Chi Minh City and dive into its wartime history with a guided tour of the Cu Chi Tunnels",
            "Experience authentic local life on a full-day trip to the Mekong Delta: ride boats, taste coconut candy, and explore lush villages by tuk-tuk and rowboat  "
        ],
        details: [
            {
                title: "Hanoi Arrival – Night Food Tour by Vespa",
                description: `Welcome to Hanoi! Upon arrival at Noi Bai International Airport, our local driver will meet you and transfer you to your hotel for check-in. Your room will be available from 02:00 PM onwards. Enjoy the rest of the day at your leisure.

Your Hanoi night adventure begins at 06:00 PM, when our Vespa team picks you up at your hotel. You’ll kick off the tour by tasting the iconic Bun cha at a local restaurant famously visited by President Obama.

By 06:45 PM, ride through the elegant French Quarter to see the Hanoi Opera House, then head across the historic Long Bien Bridge for sweeping river views and a glimpse into local life along the Red River.

At 07:30 PM, continue your journey through Hanoi’s mosaic-lined roads and over Chuong Duong Bridge to enjoy specialties like burned garlic goose and liver pâté goose at a favorite local spot.

Next, around 08:00 PM, your Vespa weaves through narrow alleys where you’ll sample unique versions of Pho, including Pho Cuon and Pho Chien Phong—a true taste of Hanoi street food creativity.

By 08:30 PM, cruise along peaceful West Lake and pass the illuminated Ho Chi Minh Mausoleum for a quick photo stop. Then, settle into a charming café by Train Street for Ca Phe Trung (egg coffee) and a chance to see the train pass just meters away.

The evening wraps up at 09:15 PM in a lively local bar, where you can unwind with acoustic or jazz music alongside young Hanoians. You’ll return to your hotel by 10:00 PM, ending a night full of flavor, culture, and unforgettable vibes.`
            },
            {
                title: "Hanoi Full-day City Tour",
                description: `After breakfast, your guide will meet you at the hotel and accompany you on a short walk to the nearest bus stop. From there, you’ll embark on a unique 60-minute sightseeing experience aboard a public city bus—a local way to explore Hanoi from a fresh perspective. As the bus winds through the city, you’ll pass several notable landmarks, including Frog Park, the Post Office, the Vietnam Military History Museum, the ancient Thang Long Citadel, Quan Thanh Temple, and the tranquil Tran Quoc Pagoda by West Lake.

The ride concludes near the city center, where you’ll hop off to visit Hoa Lo Prison—infamously dubbed the “Hanoi Hilton” by American POWs during the Vietnam War. Originally built by the French to house political prisoners, this somber site offers powerful insights into Vietnam’s complex colonial and wartime history.

Around noon, enjoy lunch at a local or buffet-style restaurant (expenses not included), and recharge before continuing your afternoon adventures.

After lunch, take a gentle walk through the Old Quarter, famous for its network of 36 bustling streets. Each one has a unique name, often reflecting the trades once practiced there—such as Tin Street and Bamboo Street, where traditional products are still sold today.

End the day with a visit to Ngoc Son Temple, perched on a small island in the heart of Hoan Kiem Lake. This scenic temple is steeped in legend, telling the tale of an emperor, a magic sword, and a mythical turtle. After soaking in the lakeside views and temple stories, you’ll stroll back to your hotel.

Overnight in Hanoi.`
            },
            {
                title: "Hanoi – Halong Bay – Lan Ha Bay – Tra Bau – Overnight Cruise",
                description: `Around 08:00 to 08:30 AM, a professional limousine driver from Peony Cruises picks you up at your hotel and takes you on a comfortable ride to Ha Long. By 12:00 noon, you’ll arrive at No.34, Tuan Chau Marina, Quang Ninh, where the friendly crew of Peony Cruises welcomes you onboard. At 12:30 PM, a support vessel will transfer you across the calm bay to board the luxurious Peony Cruise. During this short journey, the crew introduces the day’s itinerary.

Around 01:00 PM, you’re greeted with fresh drinks and cool towels before being served a special lunch featuring fresh seafood and a variety of appetizing delicacies. As the cruise glides into Lan Ha Bay, one of the World’s Most Beautiful Bays, you’ll enjoy this delicious meal while soaking in the breathtaking scenery.

By 03:30 PM, the cruise anchors in the peaceful Tra Bau area, known for its unspoiled natural beauty and poetic limestone landscape. Here, you can kayak through hidden corners of the bay or relax in the emerald-green water. Alternatively, unwind in the Jacuzzi pool onboard.

From 05:30 to 06:30 PM, guests are invited to join a fun cooking demonstration and learn how to make traditional Vietnamese spring rolls. Or you may prefer heading up to the top deck to admire the golden sunset over the Gulf of Tonkin. Don’t miss the Happy Hour at the bar with a special “Buy One Get One Free” offer, an ideal time for sunset photography.

At 07:30 PM, the onboard chef serves a romantic dinner crafted from local ingredients, offering you a flavorful culinary experience in an intimate setting. By 09:00 PM, the evening is yours to enjoy: sip exotic cocktails at the sky bar (additional cost), indulge in a spa treatment, stargaze from the deck, or try your luck with squid fishing off the main deck. It’s the perfect end to a perfect day on Lan Ha Bay.`
            },
            {
                title: " Lan Ha Bay – Cat Ba Island – Hanoi – Fly to Hue",
                description: `Start your morning at 06:00 AM with a refreshing Tai Chi session on the sundeck, soaking in the peaceful atmosphere as the sun rises over the bay. From 06:45 to 07:15 AM, enjoy a light breakfast while the cruise gently sails back to Gia Luan Jetty. (Please note that the breakfast time may vary slightly depending on the actual cruise schedule).

At 07:30 AM, begin your excursion to the Cat Ba World Biosphere Reserve. After a 30-minute transfer from Gia Luan to Trung Trang, you’ll explore one of the island’s most fascinating caves. With thousands of striking stalactites, Trung Trang Cave offers not only dramatic natural beauty but also unique geological and ecological insights.

By 09:30 AM, return to the main boat. It’s time to check out of your cabin—please place your luggage outside for collection. A farewell brunch will be served in the restaurant before disembarkation. If you’ve made any purchases at the bar, you can settle your bill at the restaurant desk.

Between 10:30 and 11:00 AM, you’ll disembark from Peony Cruises at Block #34, Big Bay group terminal, Tuan Chau Marina. You’ll have time to relax and wait for your luggage before leaving the marina.

Around 11:30 – 12:00 PM, your driver will be waiting at Tuan Chau Marina to transfer you back to Hanoi. Once you arrive, another driver will meet you in the Old Quarter and take you to the airport for your short flight to Hue. Upon landing in Hue, our local guide and car will be ready to greet you and escort you to your hotel, where you can check in and unwind after your journey.`
            },
            {
                title: "Hue Full-day City Tour",
                description: `After breakfast, begin your journey into Vietnam’s imperial past with a visit to the Imperial Citadel. As you step through the grand Ngo Mon Gate, you’ll explore iconic landmarks such as the Flag Tower, the Nine Holy Cannons, the Nine Dynastic Urns, Thai Hoa Palace, and the Forbidden Purple City (Tu Cam Thanh)—once reserved for royalty.

Next, continue to Thien Mu Pagoda, known as the “Heavenly Lady Pagoda.” Founded in 1601, this historic site sits peacefully between the Perfume River and a pine forest. It’s one of the oldest and most picturesque religious buildings in the country.

Enjoy lunch at your own expense before continuing your exploration in the afternoon.

Your next stop is the tomb of King Tu Duc, a tranquil space that reflects the Emperor’s poetic soul and traditional Vietnamese aesthetics. End the day with a visit to the grand tomb of King Khai Dinh, whose resting place is an intriguing blend of Eastern design and Western architecture.

Return to your hotel and spend the night in Hue.`
            },
            {
                title: "Hue – Drive to Vedana Resort",
                description: `After breakfast, enjoy a relaxing morning at your hotel, perfect for unwinding or taking in the peaceful surroundings.

By noon, you can check out of your hotel. Our driver will meet you in the lobby and take you on a comfortable drive to Vedana Lagoon Resort & Spa. Upon arrival, check in and settle into your serene lagoon-side retreat.

The rest of the day is yours to enjoy at leisure.`
            },
            {
                title: "Hue – Lang Co Station – Train to Da Nang – Transfer to Hoi An",
                description: `Let’s enjoy some free time at your resort until our driver arrives to take you to Lang Co Train Station, where you’ll board a scenic train bound for Da Nang—widely regarded as one of the most beautiful rail routes in Vietnam.

Upon arrival at Da Nang Station, our guide and car will be waiting to transfer you to your hotel in Hoi An. The afternoon is yours to relax or explore at your own pace.

Meals are on your own. Overnight in Hoi An.`
            },
            {
                title: "Cooking Class – Walking Tour",
                description: `After breakfast, our guide will pick you up from your hotel and accompany you to Hai Scout Café, nestled in the charming old streets of Hoi An. There, you’ll meet the chef and begin your culinary adventure. Start with a visit to a bustling local market to handpick fresh ingredients for your cooking class.

Next, board a boat for a leisurely cruise along the peaceful Thu Bon River en route to the Red Bridge Cooking School. Upon arrival, take a short tour through the school’s lush herb and vegetable garden. Then, step into the kitchen for a hands-on cooking lesson, where you’ll learn to prepare classic Vietnamese dishes blending both Vietnamese and Chinese influences. The chef will first demonstrate each dish, and then it’s your turn to recreate it. The session also includes a fun introduction to traditional Vietnamese food carving and plate presentation.

After enjoying the dishes you’ve made for lunch, the boat will take you back to Hoi An town. Spend the afternoon exploring the ancient town’s iconic landmarks, including the Japanese Covered Bridge, Chinese assembly halls, historic Phung Hung house, and the atmospheric old port.

Return to your hotel in the evening. Overnight in Hoi An.`
            },
            {
                title: "Hoi An – Free Day",
                description: `After breakfast, you’ll have a full day at leisure to explore the enchanting town of Hoi An at your own pace.

This charming destination in central Vietnam is famous for its well-preserved architecture, lantern-lit streets, and vibrant cultural heritage. You might want to start your morning with a relaxing visit to An Bang Beach, just a short ride from the town center. It’s the perfect spot to unwind with sun, sand, and sea.

For lunch, treat yourself to Hoi An’s renowned local specialties. Be sure to try Cao Lau noodles, White Rose dumplings, or Com Ga (chicken rice) at one of the many cozy eateries or market stalls around town.

As evening falls, don’t miss the magical transformation of Hoi An Ancient Town. The streets are lit up with colorful lanterns, creating a romantic, festive atmosphere. Shops and cafés stay open late, offering a lively yet laid-back experience.

With most of Hoi An’s attractions within walking distance, you can easily tailor the day to your interests, whether that’s sightseeing, shopping, eating, or simply soaking in the town’s timeless beauty.

Meals are on your own. Overnight at your hotel in Hoi An.`
            },
            {
                title: "Hoi An – Transfer to Da Nang – Fly to Ho Chi Minh City",
                description: `After breakfast, at 10:00 AM, our driver will meet you at your hotel and transfer you to Da Nang Airport for a short flight to Ho Chi Minh City, Vietnam’s vibrant southern metropolis. Please note that this transfer is without a tour guide, but rest assured, all arrangements are handled for a smooth and worry-free journey.

Upon arrival at Tan Son Nhat International Airport, our local guide and driver will be waiting to greet you. They’ll assist with your luggage and escort you to your hotel in the city center for check-in.

Please note: At Ho Chi Minh Airport, vehicles are required to park about 150 meters from the arrival gate. Our guide will be there to meet you and help you walk to the car. Thank you for your understanding regarding this short walk.`
            },
            {
                title: "Ho Chi Minh City Tour – Cu Chi Tunnels",
                description: `The tour begins with a visit to the Independence Palace, once the residence of the President of South Vietnam. Designed by architect Ngo Viet Thu, this historic site marks an important chapter in Vietnam’s modern history.

Next, travelers will admire two beautiful French colonial landmarks: the Notre Dame Cathedral and the Central Post Office, both iconic structures in downtown Saigon. Afterward, the group continues to the War Remnants Museum, where vivid exhibits tell powerful stories of the Vietnam War and the First Indochina War.

A delicious local lunch is served before heading out to Cu Chi Tunnels, about 1.5 hours by bus. Upon arrival, guests will watch an introductory video explaining the construction and use of the tunnel system during the war.

With a guide, you’ll then explore the surviving tunnel network, including living quarters, kitchens, storerooms, and hidden trapdoors. The tour offers insights into the resilience and ingenuity of the Vietnamese fighters who once lived underground.

After the tour, enjoy a simple local snack of cassava and tea, just like the guerrilla fighters once did. Guests can then relax or, optionally, experience firing real guns at a nearby shooting range (at your own cost).

The tour ends with a comfortable return to Ho Chi Minh City in the early evening.

Dinner is by your arrangement.`
            },
            {
                title: "Day Trip to Ben Tre",
                description: `Begin your day with pickup from Ben Tre Pier or Chet Say Pier, just 5 km from the town center. Hop on a boat and cruise along the Ben Tre River, one of the tributaries of the Mekong, where lush mangrove trees line the shore. As you glide past the bustling riverside market, witness local life unfold on the water—fishing boats and coconut-laden cargo vessels navigating the busy waterway.

Your journey continues to a traditional brick-making site, where bricks are still crafted by hand. From there, turn onto the Cai Son canal and wind through dense coconut groves. Visit a coconut workshop to see each stage of processing done by hand, then stop at a local candy-making house to watch coconut sweets being prepared. Taste the fresh candies, enjoy tropical fruits, and relax with traditional folk music.

Disembark for a short walk to a local family making sleep mats, then hop on a tuk-tuk to explore the peaceful countryside of Nhon Thanh and Thuan Dien villages. Enjoy a tranquil rowboat ride through the shaded canals of Cai Tac before stopping at a riverside restaurant for lunch.

After your meal, return by boat to Chet Say Pier. Your guide and driver will be waiting to take you back to your hotel in Ho Chi Minh City. Overnight in HCMC.`
            },
            {
                title: "Ho Chi Minh City – Departure",
                description: `After breakfast, feel free to relax or explore at your own pace. The hotel room is available for your use until 12:00 PM. At 03:00 PM, our driver (no guide) will pick you up and transfer you to the airport for your flight home. Enjoy the final moments of your trip at your leisure. Meals are on your own.`
            }
        ],
        accommodation: "Accommodation is flexible and tailored to your preferences. We’ll suggest suitable options and can adjust upon request."
    },
    {
        id: 5,
        img: ["/Tour/5.0.jpg", "/Tour/5.1.jpg", "/Tour/5.2.jpg", "/Tour/5.3.jpg", "/Tour/5.4.jpg"],
        title: "Soul of Vietnam: From Hanoi to Ho Chi Minh City",
        type: ["Classic Tour", "For senior citizens"],
        price: 1584,
        destination: ["Ha Noi", "Ninh Binh", "Halong Bay", "Hue", "Danang", "Hoian", "Ho Chi Minh City", "Mekong Delta"],
        duration: 14,
        general: "Spend 14 days in Vietnam discovering Hanoi’s vibrant streets, the emerald waters of Halong Bay, the imperial charm of Hue, and the lantern-lit beauty of Hoi An. Along the way, explore ancient temples, scenic countryside, and local life, from cruising the Mekong Delta to uncovering history in Cu Chi. With everything arranged by Seni World, you can simply relax and enjoy each unforgettable moment.",
        special: [
            "Discover Hanoi’s cultural heart with visits to the Ho Chi Minh Mausoleum, Temple of Literature, Tran Quoc Pagoda, and vibrant Old Quarter",
            "Explore the ancient capital of Hoa Lu and drift through magical caves and limestone peaks on a boat trip in Tam Coc",
            "Cruise through the emerald waters of Lan Ha Bay, kayak among limestone islets, and spend the night aboard a scenic cruise",
            "Practice Tai Chi at sunrise on deck and explore the tranquil Dark and Light Cave by kayak or bamboo boat",
            "Step back in time in Hue with visits to the Imperial Citadel, Thien Mu Pagoda, and the poetic tombs of Emperors Tu Duc and Khai Dinh",
            "Journey along the coastal Hai Van Pass, visit the towering Lady Buddha at Linh Ung Pagoda, and climb Marble Mountain for panoramic views",
            "Experience the charm of Cam Thanh Coconut Village and walk through lantern-lit streets in Hoi An Ancient Town",
            "Soak in Hoi An’s laid-back vibe with free days to visit beaches, markets, or tailor shops at your own pace",
            "Ride Southeast Asia’s longest cable car to Ba Na Hills, stroll the iconic Golden Bridge, and play in the French Village and Fantasy Park",
            "Visit key Ho Chi Minh landmarks like the War Remnants Museum, Independence Palace, Central Post Office, and Ben Thanh Market",
            "Cruise the Mekong Delta’s canals in Ben Tre, explore coconut workshops, and ride a tuk-tuk through peaceful villages",
            "Crawl through the historic Cu Chi Tunnels and learn how locals lived and fought during wartime"
        ],
        details: [
            {
                title: "Hanoi Arrival – Night Food Tour by Vespa",
                description: `Welcome to Hanoi! Upon arrival at Noi Bai International Airport, our local driver will meet you and transfer you to your hotel for check-in. Your room will be available from 2:00 PM onwards. Enjoy the rest of the day at your leisure.`
            },
            {
                title: "Full-day City Tour",
                description: `You’ll begin the day with an outside visit to the Ho Chi Minh Mausoleum, where your guide will share stories about the revered leader who spearheaded Vietnam’s independence from French rule. From there, take a short walk through the surrounding grounds to see the One Pillar Pagoda and the Presidential Palace.

Your morning continues at the Temple of Literature, Vietnam’s first university. Built nearly a thousand years ago, this peaceful site honors the teachings of Confucius through its courtyards and elegant traditional architecture.

In the afternoon, you’ll head to Hoa Lo Prison, famously nicknamed the “Hanoi Hilton” by American POWs. This historic site, originally built by the French, holds powerful reminders of Vietnam’s colonial and wartime history.

Next, hop on a cyclo for a leisurely ride through the bustling Old Quarter. Each of the 36 streets here is known for a specific trade—some, like Tin and Bamboo Streets, still keep these traditions alive.

Your walking tour ends at Ngoc Son Temple, set on a small island in Hoan Kiem Lake. Here, you’ll hear the legend of a magic sword, a heroic emperor, and a mythical turtle that gave the lake its name.

Meals are at your own arrangement. Overnight at your hotel.`
            },
            {
                title: "Day Trip to Ninh Binh",
                description: `At 08:00 AM, your day starts as our car and guide picks you up from your hotel in Hanoi. After a scenic drive, you’ll arrive in Ninh Binh around 10:30 AM to explore Hoa Lu, Vietnam’s first capital. You’ll visit the ancient temples of King Dinh and King Le and learn about the country’s early dynasties while taking in the peaceful valley of Truong Yen.

By 11:30 AM, enjoy a relaxing lunch at a local restaurant (expenses on your own). Then at 01:00 PM, embark on a boat trip through Tam Coc, drifting through three magical caves—Ca, Hai, and Ba—and stopping to visit Thai Vi Temple, dedicated to national hero Tran Hung Dao.

At 03:00 PM, continue to Bich Dong Pagoda, surrounded by lotus ponds and limestone cliffs. After climbing to the top for panoramic views, you’ll return to Hanoi at 04:00 PM and arrive back at your hotel around 06:30 – 07:00 PM. Dinner is on your own.`
            },
            {
                title: "Hanoi – Halong Bay – Lan Ha Bay – Overnight Cruise",
                description: `At 08:30 AM, our driver (without a guide) will pick you up at your hotel for a scenic 2.5-hour drive along the new expressway to Ha Long Bay, one of Vietnam’s most stunning natural wonders, recognized by UNESCO for its 3,000 towering limestone islands rising from emerald waters.

By 11:30 – 12:00 PM, you’ll arrive at Tuan Chau Harbor and check in at the waiting lounge. Around 12:00 -12:30 PM, board the tender to Verdure Lotus Cruise, where you’ll be welcomed with a refreshing drink and given a safety briefing by the captain and crew.

At 01:00 PM, enjoy a freshly prepared Vietnamese seafood and vegetarian lunch as the cruise glides through the majestic scenery of Halong and Lan Ha Bay. Around 03:00 PM, you can choose to relax on the sundeck or paddle a kayak through the tranquil waters of Ba Trai Dao or Tra Bau.

Return to the cruise by 05:30 PM for a fun cooking class and Happy Hour as the sun sets. Dinner will be served at 07:00 PM, followed by free time to go squid fishing, sip wine at the bar, or simply enjoy the peaceful night on deck. Overnight on board.`
            },
            {
                title: "Lan Ha Bay – Hanoi – Fly to Hue",
                description: `Start your morning early with a peaceful Tai Chi session on the sundeck from 06:00 to 06:30 AM as the sun rises over the bay. From 06:15 to 07:00 AM, enjoy breakfast with tea or coffee while admiring the quiet beauty of Lan Ha Bay.

At 07:00 AM, head to the Dark and Light Cave area. Here, you can explore the calm waters by kayak or bamboo boat, or take a dip in the refreshing turquoise sea.

By 09:30 AM, return to your cabin for some rest and make sure to pack all your belongings. At 10:00 AM, check out of your cabin and enjoy one last scenic cruise through the bay as lunch is served in the restaurant.

Around 11:00 AM, take the tender boat back to Tuan Chau Port, where our driver (without a guide) will be waiting to transfer you to the airport for your flight to Hue.

Upon arrival in Hue, you’ll be warmly welcomed by our local guide and transferred to your hotel for check-in. Overnight in Hue.`
            },
            {
                title: "Full-day City Tour",
                description: `After breakfast, you’ll begin your day by exploring the rich architectural heritage of Hue. Start with a visit to the Imperial Citadel, where you’ll walk through historical landmarks such as the Flag Tower, Ngo Mon Gate, Nine Dynastic Urns, Thai Hoa Palace, and the Forbidden Purple City (Tu Cam Thanh).

Later, board a boat for a peaceful cruise along the Perfume River. As you drift past green banks and ancient temples, stop to visit Thien Mu Pagoda, one of Vietnam’s oldest and most picturesque religious sites, beautifully nestled between the river and a pine forest.

After lunch, the afternoon continues with a visit to the majestic tomb of King Tu Duc. You’ll then explore King Khai Dinh’s tomb, a unique fusion of Vietnamese tradition and French-influenced architecture. Return to your hotel and spend the night in Hue.`
            },
            {
                title: "Hue – Drive to Da Nang – Linh Ung Pagoda – Marble Mountains – Transfer to Hoi An",
                description: `After breakfast and hotel check-out, you’ll begin a scenic 3-hour drive along one of Vietnam’s most breathtaking coastal routes to Hoi An. On the way, stop at Hai Van Pass to admire sweeping views of white-sand beaches, turquoise sea, and lush green mountains.

Upon arrival in Da Nang, enjoy lunch at your own expense before heading to Linh Ung Pagoda on the Son Tra Peninsula. This impressive site is home to Vietnam’s tallest Lady Buddha statue and features a blend of traditional and modern architecture, with dragon-carved roofs and ornate columns.

Next, explore Marble Mountain, where ancient cave pagodas, Buddhist shrines, and a traditional stone-carving village await. Climb Mt. Thuy for panoramic views of Da Nang’s coastline and the surrounding peaks.

Later in the day, continue your journey to Hoi An. Check into your hotel and relax in the evening. Overnight in Hoi An.`
            },
            {
                title: "Cam Thanh Coconut Jungle – Hoi An Ancient Town",
                description: `After breakfast, you’ll take a peaceful boat ride to Cam Thanh Village, known as the capital of coconuts. Here, you’ll have the opportunity to experience the daily routines of local fishermen and explore the traditions of this close-knit riverside community.

Later, dive into the charm of Hoi An Ancient Town. Visit iconic landmarks such as the Japanese Covered Bridge, Chinese assembly halls, the historic Phung Hung House, the bustling Hoi An Market, and the old trading port that once welcomed merchants from around the world. If your visit falls on the 1st or 15th of the lunar month, you’ll see the town glow under hundreds of colorful lanterns, creating a magical atmosphere.

Return to your hotel afterward. The afternoon is yours to relax or explore at your own pace. Overnight in Hoi An.`
            },
            {
                title: "Ba Na Hills – Golden Bridge",
                description: `Our guide and driver will meet you in your hotel lobby and take you to Ba Na Hills. Begin your adventure with a ride on Southeast Asia’s most modern cable car system. As you ascend, enjoy breathtaking views over Da Nang’s coastline and lush mountains.

Your first stop is the famous Golden Bridge, a surreal walkway held by two giant stone hands, followed by a visit to Le Jardin D’Amour, a collection of nine themed gardens, and the peaceful Linh Ung Pagoda.

Next, board the second cable car to reach the French Village, where lively street music, striking art statues, ancient shrines, and fun performances await. After exploring, enjoy a delicious buffet lunch at a local restaurant.

In the afternoon, dive into the excitement at Fantasy Park. Wander through the Fairy Forest, explore Dinosaur Park, take on thrilling 4D and 5D rides, brave the Freefall Tower, and journey into the underground or Jurassic world for fun and adventure.

When your visit concludes, return by cable car and relax as your guide and driver bring you back to your hotel.

Note: Entrance to the Wax Museum, French Wine Cellar (including wine), Roller Coaster, Climbing Game, prize-winning games, and the 10D movie are not included and are optional extras.`
            },
            {
                title: "Hoi An – Transfer to Da Nang – Fly to Ho Chi Minh City",
                description: `After breakfast, you can enjoy a relaxing morning at your own pace. You might want to unwind by the hotel pool or take a gentle walk around town and savor a local coffee.

At noon, our driver will pick you up and transfer you to the airport for your flight to Ho Chi Minh City. Upon arrival, our friendly guide will welcome you and escort you to your hotel in the city center for check-in. Overnight in Ho Chi Minh City.`
            },
            {
                title: "Full-day City Tour",
                description: `In the morning, begin your city tour with a visit to the War Remnants Museum, offering a powerful and thought-provoking glimpse into the American War through the eyes of the Vietnamese. Continue to the Independence Palace (also known as the Reunification Palace), a landmark of modern Vietnamese history, designed by renowned architect Ngo Viet Thu and built on the site of the former Norodom Palace. Then, admire the French colonial charm of the Notre Dame Cathedral (outside only). Lunch is at your own expense.

In the afternoon, you can explore the historic Central Post Office, another stunning example of colonial architecture, and take time to browse through Ben Thanh Market for souvenirs or local treats. After the tour, return to your hotel and enjoy some time relaxing.

Overnight in Ho Chi Minh City.`
            },
            {
                title: "Day Trip to Ben Tre",
                description: `Begin your day with pickup from Ben Tre Pier or Chet Say Pier, just 5 km from the town center. Hop on a boat and cruise along the Ben Tre River, one of the tributaries of the Mekong, where lush mangrove trees line the shore. As you glide past the bustling riverside market, witness local life unfold on the water—fishing boats and coconut-laden cargo vessels navigating the busy waterway.

Your journey continues to a traditional brick-making site, where bricks are still crafted by hand. From there, turn onto the Cai Son canal and wind through dense coconut groves. Visit a coconut workshop to see each stage of processing done by hand, then stop at a local candy-making house to watch coconut sweets being prepared. Taste the fresh candies, enjoy tropical fruits, and relax with traditional folk music.

Disembark for a short walk to a local family making sleep mats, then hop on a tuk-tuk to explore the peaceful countryside of Nhon Thanh and Thuan Dien villages. Enjoy a tranquil rowboat ride through the shaded canals of Cai Tac before stopping at a riverside restaurant for lunch.

After your meal, return by boat to Chet Say Pier. Your guide and driver will be waiting to take you back to your hotel in Ho Chi Minh City. Overnight in HCMC.`
            },
            {
                title: "Cu Chi Tunnels Morning Tour – Fly to Hanoi ",
                description: `After breakfast, check out of your hotel. Our guide and driver will meet you in the lobby and take you on a 1.5-hour drive to the famous Cu Chi Tunnels.

Once you arrive, start with a brief introduction and a short documentary that reveals how the tunnels were built and how people survived in such harsh wartime conditions. Then, explore the underground network—complete with kitchens, sleeping quarters, storage rooms, weapon workshops, field hospitals, and command centers. You’ll also learn about the many hidden trapdoors and clever defensive systems used during the war.

Before leaving, enjoy a simple wartime snack of cassava and tea. You’ll also have free time to relax or try your hand at the shooting range (optional).

After the visit, return to Ho Chi Minh City and head to the airport for your flight to Hanoi. Upon arrival, our driver (without a guide) will pick you up and transfer you to your hotel in Hanoi’s Old Quarter.

Overnight in Hanoi.`
            },
            {
                title: "Hanoi – Departure",
                description: `After breakfast, feel free to relax or explore at your own pace. The hotel room is available for your use until 12:00 PM. At 03:00 PM, our driver (no guide) will pick you up and transfer you to the airport for your flight home. Enjoy the final moments of your trip at your leisure. Meals are on your own.`
            }
        ],
        accommodation: "Accommodation is flexible and tailored to your preferences. We’ll suggest suitable options and can adjust upon request."
    },
    {
        id: 6,
        img: ["/Tour/6.0.jpg", "/Tour/6.1.jpg", "/Tour/6.2.jpg", "/Tour/6.3.jpg", "/Tour/6.4.jpg"],
        title: "The Vietnamese Story from Hanoi to Danang",
        destination: ["Ha Noi", "Da Nang"],
        duration: 9,
        type: ["Beach Holiday", "Classic Tour", "Family Holiday", "For senior citizens"],
        price: 670,
        general: "Take on a 9-day trip to get a glimpse of northern and central Vietnam’s best. Start in Hanoi, where you can soak up history, then sail through the stunniưng limestone seascape of Ha Long Bay to wander through Hoi An’s lantern streets and relax in the laid-back atmosphere of Da Nang. Seni World has arranged everything with care, so you can sit back and relish each special moment along the ways",
        special: [
            "Discover Hanoi’s rich heritage with visits to the Ho Chi Minh Mausoleum, Temple of Literature, Tran Quoc Pagoda, and the bustling Old Quarter",
            "Cruise through Ha Long Bay on an overnight journey, kayak through Luon Cave, and hike to Titop Island for panoramic views",
            "Greet the sunrise with Tai Chi on deck, explore Sung Sot Cave, and enjoy Vietnamese cuisine before flying to Da Nang",
            "Experience the charm of Hoi An with a walking tour of its ancient streets, the Japanese Covered Bridge, and the vibrant local market",
            "Glide through Cam Thanh coconut village on a traditional boat and witness the daily life of local fishermen",
            "Spend time relaxing on the peaceful beaches of Da Nang or exploring Linh Ung Pagoda, the Cham Museum, and the lively Han Market",
            "Watch the Dragon Bridge’s fire and water show and end your day with dinner by the Han River"
        ],
        details: [
            {
                title: "Hanoi Arrival",
                description: `Welcome to Hanoi! Upon arrival at Noi Bai International Airport, our local driver will meet you and transfer you to your hotel for check-in. Your room will be available from 2:00 PM onwards. Enjoy the rest of the day at your leisure.`
            },
            {
                title: "Hanoi Full-day City Tour",
                description: `You’ll begin the day with an outside visit to the Ho Chi Minh Mausoleum, where your guide will share stories about the revered leader who spearheaded Vietnam’s independence from French rule. From there, take a short walk through the surrounding grounds to see the One Pillar Pagoda and the Presidential Palace.

Your morning continues at the Temple of Literature, Vietnam’s first university. Built nearly a thousand years ago, this peaceful site honors the teachings of Confucius through its courtyards and elegant traditional architecture.

In the afternoon, you’ll head to Hoa Lo Prison, famously nicknamed the “Hanoi Hilton” by American POWs. This historic site, originally built by the French, holds powerful reminders of Vietnam’s colonial and wartime history.

Next, hop on a cyclo for a leisurely ride through the bustling Old Quarter. Each of the 36 streets here is known for a specific trade—some, like Tin and Bamboo Streets, still keep these traditions alive.

Your walking tour ends at Ngoc Son Temple, set on a small island in Hoan Kiem Lake. Here, you’ll hear the legend of a magic sword, a heroic emperor, and a mythical turtle that gave the lake its name.

Meals are at your own arrangement. Overnight at your hotel.`
            },
            {
                title: "Hanoi – Halong Bay – Overnight Cruise",
                description: `Around 08:00 AM, your cruise limousine driver will pick you up and begin the comfortable drive to Ha Long Bay. You’ll arrive at La Regina Royal waiting lounge around 11:30 AM, where you can relax with a welcome drink before a smooth check-in.

By 12:30 PM, step aboard the cruise and enjoy another refreshing welcome drink while the cruise manager shares a safety briefing. Soon, the boat will begin its journey across the stunning Ha Long Bay.

At 01:00 PM, your holiday truly begins with a delicious lunch served in the onboard restaurant.

Around 03:00 PM, head out on your first adventure, kayak or hop on a rowing boat to explore the tranquil Luon Cave, then visit Titop Island where you can either swim in the emerald water or hike up to enjoy panoramic views of the bay.

Return to the cruise around 5:00 PM to unwind and watch the sun dip below the limestone peaks. Dinner will be served at 7:00 PM in the elegant restaurant.
After dinner, you’re free to enjoy the evening your way, whether it’s squid fishing, singing karaoke, pampering yourself at the spa, or simply relaxing on the deck.

Note: For convenience, it’s best to pack a small overnight bag for the cruise and leave your large suitcase at your Hanoi hotel’s reception for collection the next day.`
            },
            {
                title: "Halong Bay – Hanoi – Fly to Da Nang – Transfer to Hoi An",
                description: `Start your morning at 06:00 AM with a calming Tai Chi session on the sundeck as the sun rises over the bay.

At 06:30 AM, enjoy a light breakfast in the restaurant before heading out at 7:30 AM to explore Sung Sot Cave -one of Ha Long Bay’s most impressive natural wonders with sweeping panoramic views.

After returning to the boat, check out of your cabin by 09:00 AM. A buffet featuring traditional Vietnamese cuisine will be served as the cruise gently makes its way back to the harbor.

By 11:00 AM, you’ll disembark, and your driver will be ready to take you back to Hanoi. Once in the Old Quarter, a transfer will take you straight to the airport for a short flight to Da Nang.

Upon arrival, our local guide and driver will meet you at the airport and take you to your hotel in Hoi An. After check-in, the evening is yours to enjoy. Dinner is at your own expense. Overnight in Hoi An.`
            },
            {
                title: "Hoi An Walking Tour – Cam Thanh Coconut Village",
                description: `After enjoying breakfast at the hotel, you’ll have the entire morning free to unwind, either by relaxing in your room, lounging by the pool, or exploring the peaceful surroundings at your own pace.

At 02:00 PM, your afternoon adventure begins with a boat trip to Cam Thanh Village, often referred to as the coconut kingdom. As you glide along the waterways, you’ll witness firsthand how local fishermen live and work. This experience offers a closer look at the daily routines of a traditional riverside community, from casting fishing nets to navigating basket boats through the coconut groves.

Following the visit to the village, you’ll return to Hoi An Ancient Town for a walking tour through its historic core. As you wander the narrow lanes, you’ll visit the famous Japanese Covered Bridge, admire the architecture of Chinese-style streets and old merchant houses like Phung Hung, and browse the bustling Hoi An Market.

If your visit happens to coincide with the 1st or 15th day of the lunar calendar, you’ll experience one of Hoi An’s most magical traditions: the lantern-lit night. On these evenings, the town glows with hundreds of colorful lanterns, creating a romantic and unforgettable atmosphere.

By evening, your guide will bring you back to your hotel. Overnight in Hoi An.`
            },
            {
                title: "Hoi An – Transfer to Da Nang",
                description: `You’ll have the entire morning free to enjoy at your own pace—whether that means unwinding at your hotel or taking a short walk to soak in the local atmosphere.
Around midday, please check out of your hotel. Lunch is not included today, so feel free to choose a nearby restaurant to enjoy a meal on your own.

At 01:00 PM, our professional driver and car will arrive at your hotel to begin your journey to Da Nang City. Sit back and relax as you travel comfortably along the scenic route.

Once you arrive in Da Nang, check in at your hotel and take some time to get settled. You’re free to spend the rest of the day however you wish, perhaps explore the city’s beachside promenade, local cafés, or just relax at the hotel.

You’ll spend the night at your hotel in Da Nang.`
            },
            {
                title: "Da Nang – Free Day",
                description: `Let’s enjoy a relaxing day exploring the vibrant city of Da Nang at your own pace.

In the morning, you can begin with a peaceful walk or swim at My Khe Beach, where the soft waves and sea breeze offer a calm start to the day. Afterwards, take a scenic drive to Linh Ung Pagoda on Son Tra Peninsula. Here, the towering Lady Buddha statue and panoramic coastal views create a serene and spiritual experience.

For lunch, we suggest heading to a local seaside restaurant to enjoy Da Nang’s fresh seafood specialties, such as grilled fish and steamed clams seasoned with fragrant Vietnamese herbs.

In the afternoon, dive into local culture at the Cham Museum, home to rare sculptures from the Champa Kingdom. Then, stop by Han Market, where you can shop for souvenirs, try local snacks, or simply enjoy the lively atmosphere.

As the sun begins to set, stroll along the Love Bridge, a popular riverside spot offering romantic views of the Dragon Bridge and skyline. If you’re here on a weekend, stay for the 09:00 PM fire and water show at Dragon Bridge, a stunning spectacle that lights up the night.

End your day with a relaxing dinner by the Han River, where sparkling lights and gentle music create the perfect setting to reflect on your Da Nang journey.`
            },
            {
                title: "Da Nang – Free Day",
                description: `Let’s enjoy a relaxing day exploring the vibrant city of Da Nang at your own pace.

In the morning, you can begin with a peaceful walk or swim at My Khe Beach, where the soft waves and sea breeze offer a calm start to the day. Afterwards, take a scenic drive to Linh Ung Pagoda on Son Tra Peninsula. Here, the towering Lady Buddha statue and panoramic coastal views create a serene and spiritual experience.

For lunch, we suggest heading to a local seaside restaurant to enjoy Da Nang’s fresh seafood specialties, such as grilled fish and steamed clams seasoned with fragrant Vietnamese herbs.

In the afternoon, dive into local culture at the Cham Museum, home to rare sculptures from the Champa Kingdom. Then, stop by Han Market, where you can shop for souvenirs, try local snacks, or simply enjoy the lively atmosphere.

As the sun begins to set, stroll along the Love Bridge, a popular riverside spot offering romantic views of the Dragon Bridge and skyline. If you’re here on a weekend, stay for the 09:00 PM fire and water show at Dragon Bridge, a stunning spectacle that lights up the night.

End your day with a relaxing dinner by the Han River, where sparkling lights and gentle music create the perfect setting to reflect on your Da Nang journey.`
            },
            {
                title: "Da Nang – Fly to Hanoi – Departure",
                description: `At 08:15 AM, our driver and car will pick you up at the hotel, then head to the airport for a short flight to Hanoi to connect with your flight back home.`
            }
        ],
        accommodation: "Accommodation is flexible and tailored to your preferences. We’ll suggest suitable options and can adjust upon request."
    },
    {
        id: 7,
        img: ["/Hanoi/1.jpg", "/Hanoi/2.jpg", "/Hanoi/3.jpg", "/Hanoi/4.jpg", "/Hanoi/5.jpg"],
        title: "Full Day to Duong Lam Ancient Village Tour – Private",
        destination: ["Ha Noi"],
        duration: 1,
        type: ["Culture & History Tours"],
        price: 39,
        general: "Are you looking for a hassle-free and authentic day trip from Hanoi? Grab the chance to take a day trip back in time to Duong Lam Ancient Village – a beautiful, peaceful and quiet village with an abundance of ancient houses, temples, gates and wells, anything you can think of a typical traditional Vietnamese village. It is also a great chance to get an escape from the hustle and bustle of Hanoi city, trace back the origin of Vietnam’s culture and traditions and paddle through a collection of unspoiled hamlets which are unique in Vietnam.",
        special: [
            "Delve into the charm of Duong Lam, a typical ancient village in the Northern Delta region",
            "Visit Mong Phu village communal house, Lady Mia palace, Tham Hoa Giang Van Minh church, and Mia pagoda, boasting the most ancient Buddha statues in Vietnam",
            "Step back Son Tay ancient citadel, serving as a robust defense structure for the northwest of Thang Long",
            "Explore Khai Nguyen Pagoda",
        ],
        details: [
            {
                title: "Full Day to Duong Lam Ancient Village Tour – Private",
                description: `08:00 – 08:30 AM: Car and tour guide pick you up at hotels in the Old Quarter and Opera House area and depart to visit:

Duong Lam Ancient Village, a typical ancient village of the Northern Delta region. You pass through the ancient village gate, visit Mong Phu village communal house, Lady Mia palace, Tham Hoa Giang Van Minh church, Mia pagoda – The pagoda has the most ancient Buddha statues in Vietnam. You walk along the village, visit ancient houses and enjoy specialties: sticky rice wine and sweet soup.

Lunch at the restaurant, rest. In the afternoon, continue to visit:

Son Tay Ancient Citadel: was built in the 3rd year of Minh Mang (1822) and is the only ancient citadel built of laterite in Vietnam with unique architecture such as: walls made of laterite, 4 gates built of ancient bricks. This is one of the few citadels from the Minh Mang dynasty remaining today, the citadel was solidly built to protect the northwest of Thang Long.

Khai Nguyen Pagoda: also known as Tan Vien Pagoda, full name is Tan Vien Son Quoc Tu. The pagoda’s history dates back to the Ly Dynasty in the first half of the 11th century. Because it was built on the old foundation, following the old architecture but newly renovated since 2008, the pagoda has a very unique ancient mark, without destroying the space and historical value.

The car takes you back to the meeting point. End this tour!`
            }
        ],
        accommodation: "Accommodation is flexible and tailored to your preferences. We’ll suggest suitable options and can adjust upon request."
    },
    {
        id: 8,
        img: ["/Hanoi/6.jpg", "/Hanoi/7.jpg", "/Hanoi/8.jpg"],
        title: "Half Day Tour to Quang Phu Cau Incense Village – Private",
        destination: ["Ha Noi"],
        duration: 1,
        type: ["Culture & History Tours"],
        price: 23,
        general: "Quang Phu Cau Incense Village promises an immersive experience where you can explore the art of incense-making and connect with the cultural heritage of the region. Seize the opportunity to capture the beauty of this vibrant village, creating lasting memories that reflect the intricate craftsmanship and timeless traditions of Quang Phu Cau.",
        special: [
            "Immerse yourself in the vibrant Quang Phu Cau Incense Village",
            "Explore the intricate incense-making process",
            "Seize the moment to capture stunning photographs here",
        ],
        details: [
            {
                title: "Half Day Tour to Quang Phu Cau Incense Village – Private",
                description: `08:00 AM: Our driver will arrive at your Hanoi hotel for pick-up.

09:20 – 09:50 AM: Arrival at Quang Phu Cau Incense Village. At this time, farmers will have already laid out incense to dry in various formations. You can capture moments of local people working amidst this vibrant display of colors.

11:00 AM: We continue our journey into the village factory, delving into the incense-making process. This includes witnessing bamboo chopping, dipping sticks in dye, and the creation of incense paste. Let’s capture more moments with local farmers who have dedicated generations to producing incense in this village.

Relax and board a private car for the return trip to Hanoi. Arrive in Hanoi and be dropped off at your hotel. End this tour!`
            }
        ],
        accommodation: "Accommodation is flexible and tailored to your preferences. We’ll suggest suitable options and can adjust upon request."
    },
    {
        id: 9,
        img: ["/Hanoi/9.jpg", "/Hanoi/10.jpg", "/Hanoi/11.jpg", "/Hanoi/12.jpg"],
        title: "Hanoi Jeep Tour: Full Day Tour – Private",
        destination: ["Ha Noi"],
        duration: 1,
        type: ["City Tours"],
        price: 0,
        general: "This comprehensive tour offers a holistic perspective of Hanoi, combining cultural exploration, historical insights, and the simple pleasures of authentic local life. It is a unique opportunity to connect with the soul of the city and create lasting memories of your visit to Hanoi.",
        special: [
            "Discover the authentic Hanoi through the maze of backstreets, tiny alleyways, local homes, schools, and markets",
            "Visit the Ho Chi Minh Mausoleum, a sacred place honoring the Vietnamese leader",
            "Witness the beauty of Hoang Hoa Tham, Hanoi’s most beautiful bonsai street",
            "Experience the B52 American aircraft site, a reminder of Hanoi’s history",
            "Explore Red River Delta villages, witness daily life, and stroll through vast green rice paddies",
            "Dive into Vietnamese history at Co Loa, the temple dedicated to King An Duong Vuong"
        ],
        details: [
            {
                title: "Hanoi Jeep Tour: Full Day Tour – Private",
                description: `08:00 AM: Embark on a unique journey with our Hanoi Jeep Tour, starting from your Hanoi Old Quarter hotel. Our guide and driver will greet you for a safety briefing before venturing into the heart of Hanoi.

The first leg of the tour takes you to the Hanoi Opera House, a historical landmark hosting significant events.

Moving to the second part, visit must-see places like the Ho Chi Minh Mausoleum – the Mecca of Vietnamese history, built to keep Ho Chi Minh’s body preserved. Explore Thanh Nien Street between two lakes and discover Banana Island, a hidden gem just 3.4 km from the city center, offering a unique contrast to modern Hanoi. Discover outskirt villages around West Lake and Truc Bach Lake, experiencing the harmony of life beyond the city center. Visit the ancient Van Nien Pagoda, adding historical depth to your journey.

The third part introduces Hoang Hoa Tham, the beautiful bonsai street, and takes you through Hanoi’s backstreets, revealing hidden tranquil spots and the B52 American aircraft shot down during the war. This leg offers a journey through Hanoi’s past, present, and future, showcasing its diverse landscape.

The final part is a culinary delight, stopping at authentic eateries to savor the best of Hanoi’s dishes, including family heirloom recipes and local specialties. This comprehensive journey offers a unique blend of history, culture, and culinary experiences, providing a deeper understanding of Hanoi’s charm.

Afternoon:

Departing from the bustling city streets, the scenic route takes you through the urban outskirts into the serene countryside, crossing the bridge to the tranquil Red River Delta. Experience the authentic daily life of local residents as the Jeep explores villages along the delta, offering a glimpse into the vibrant green rice paddies where farmers diligently work.

Beyond the picturesque landscapes, the Hanoi Jeep Tour extends to a local market, providing a firsthand look at the bustling trade and commerce of the area. Venturing into Vietnam’s rich history, the tour takes you to the significant An Duong Vuong site. This historical figure, known for founding the country and establishing the name Au Lac, holds a vital place in Vietnamese history. At Co Loa, a temple dedicated to King An Duong Vuong, the guide shares insightful narratives about this crucial period.

Continuing the journey, the Jeep traverses farms, leading to a local family’s fruit plantation. Delight in the freshness of tropical fruits, handpicked from the farm, offering a unique perspective on the daily life of Red River Delta locals.

As the adventure concludes, the Jeep gracefully navigates along the back of the Red River, revealing spectacular landscapes and picturesque rice farms. After exploration and cultural immersion, we will take you back to your hotel at 04:00 PM.`
            }
        ],
        accommodation: "Accommodation is flexible and tailored to your preferences. We’ll suggest suitable options and can adjust upon request."
    },
    {
        id: 10,
        img: ["/Hanoi/13.jpg", "/Hanoi/14.jpg", "/Hanoi/15.jpg", "/Hanoi/16.jpg", "/Hanoi/17.jpg"],
        title: "Hanoi Jeep Tour: Street Food Tour – Private",
        destination: ["Ha Noi"],
        duration: 1,
        type: ["Food Tours"],
        price: 100,
        general: "The Hanoi Jeep adventure promises a holistic experience, blending history, gastronomy, and nighttime exploration. From the historical significance of Joseph’s Cathedral to the culinary delights of Bun Cha and the allure of the French Quarter at night, let this journey with the Hanoi Jeep team unveil the magic of Hanoi in a truly immersive way.",
        special: [
            "Get started on a journey through Hanoi with our Hanoi Jeep team – Discover the rich history of Joseph’s Cathedral",
            "Venture to a hidden gem street for a taste of Hanoi’s most famous dish, Bun Cha",
            "Explore the French Quarter at night",
            "Cap off the evening with a visit to an Egg coffee shop",
        ],
        details: [
            {
                title: "Hanoi Jeep Tour: Street Food Tour – Private",
                description: `Lunch Street Food: 12:00 – 03:30 PM (Lunch included at the end)

Night Food Tour: 06:00 – 09:30 PM (All food and drink included)

Duration: 3,5 – 4 hours

Discover the heart of Hanoi with our Jeep Tour, beginning with a convenient hotel pickup. Join fellow travelers at the historical site of the old church in Hanoi, where our guide shares insights into Joseph’s Cathedral. Capture memorable photos before delving into a culinary adventure.

Hop aboard the Jeep and explore a hidden street, renowned for Hanoi’s famous Bun Cha since 1925. Notably, even President Obama dined here during his 2016 visit to Vietnam.

Venture into the next stop, French Quarter for a night tour, marveling at the stunning colonial architecture. Our Jeep team stops by the Hanoi Opera House, providing an opportunity to learn about the French Quarter’s history with our guide.

Continue the journey on the Jeep, passing through the picturesque ceramic road and you will have a chance to take a stroll at Long Bien Bridge for a captivating view of Hanoi at night when we stop at the bridge.

Navigate the lively, chaotic traffic to reach a local restaurant, offering a taste of authentic Vietnamese dishes. Explore small alleys to savor various versions of Pho, Pho Chien Phong, Chien Trung, and Pho Cuon – renowned Vietnamese delicacies.

Embark on a romantic ride around a large lake, a rarely seen sight in Hanoi, ensuring a memorable experience. The tour continues with a drive past the Ho Chi Minh Mausoleum, you will have an opportunity for night-time photography here.

Conclude the journey with a visit to an Egg coffee shop, where you can savor Vietnam’s traditional special coffee.

Join our Hanoi Jeep Tour for a personalized exploration of the city, forging new friendships, and creating lasting memories.`
            }
        ],
        accommodation: "Accommodation is flexible and tailored to your preferences. We’ll suggest suitable options and can adjust upon request."
    },
    {
        id: 11,
        img: ["/Hanoi/15.jpg", "/Hanoi/16.jpg", "/Hanoi/17.jpg", "/Hanoi/18.jpg", "/Hanoi/19.jpg", "/Hanoi/19.jpg"],
        title: "Hanoi Vintage Vespa Tour: Night Food Tour – Private",
        destination: ["Ha Noi"],
        duration: 1,
        type: ["Food Tours"],
        price: 108,
        general: "Our journey through Hanoi invites you to glide through charming quarters, savor iconic culinary delights, appreciate historical landmarks, and immerse yourself in the dynamic nightlife of the city. From the traditional flavors of Bun Cha to the contemporary energy of local bars, each experience adds a layer to the vibrant tapestry of Hanoi’s cultural and culinary scene.",
        special: [
            "Glide through the French Quarter, kick off your culinary journey with Bun Cha, a beloved Hanoi specialty",
            "Navigate the bustling streets to reach the majestic Long Bien Bridge",
            "Savor some signature foods like “Burned Garlic Sesame Duck”, “Liver Pâté Sesame Duck”, “Pho”",
            "Enjoy Egg coffee next to railway tracks",
            "Immerse yourself in Hanoi’s nightlife at a local bar",
        ],
        details: [
            {
                title: "Hanoi Vintage Vespa Tour: Night Food Tour – Private",
                description: `06:00 PM: We will pick you up at your hotel. Hop onto the back of a Vespa as we explore the city’s vibrant food scene and cultural treasures.

Start your adventure at a local restaurant renowned for “Bun Cha”, where the Obama President came to eat here. After indulging in this local delight, we’ll ride through the charming French Quarter. Capture the essence of Hanoi at the iconic Hanoi Opera House, where you can witness history meets architectural beauty.

Next, we’ll navigate the bustling streets to reach the historic Long Bien Bridge, a magnificent structure spanning the Red River. As we traverse districts, you’ll witness the beauty of Hanoi night from the bridge.

We will ride you through the picturesque ceramic road and Chuong Duong Bridge to savor “Burned garlic Siamese duck” and “Liver pâté Siamese duck” at our next gastronomic stop.

Dive into the authentic flavors of Vietnamese cuisine at a local restaurant, where you’ll have the opportunity to try renowned dishes like “Pho Chien Phong” and “Pho Cuon” in charming small alleys.

Experience the romantic side of Hanoi with a ride around the big lake, offering a rarely seen perspective of the city. As night falls, we’ll pass by the Ho Chi Minh Mausoleum, capturing the illuminated beauty of Hanoi.

Unwind at an Egg coffee shop by the railway tracks, where you can sip on this unique local specialty while watching trains pass by.

Conclude your evening by immersing yourself in Hanoi’s lively nightlife. You can join the locals at a trendy bar featuring live acoustic or jazz music. Whether you choose to showcase your talents or simply enjoy the local musical scene, our Vespa tour promises to create unforgettable memories and new friendships in the heart of Hanoi.`
            }
        ],
        accommodation: "Accommodation is flexible and tailored to your preferences. We’ll suggest suitable options and can adjust upon request."
    },
    {
        id: 12,
        img: ["/Hanoi/19.jpg", "/Hanoi/20.jpg", "/Hanoi/21.jpg", "/Hanoi/22.jpg", "/Hanoi/23.jpg", "/Hanoi/24.jpg"],
        title: "Hanoi Vintage Vespa Tour: Half Day City Tour – Private",
        destination: ["Ha Noi"],
        duration: 1,
        type: ["Food Tours", "Culture & History Tours"],
        price: 108,
        general: "This curated exploration invites you to dive into Hanoi’s historical layers, traverse iconic landmarks, escape to hidden gems, and immerse yourself in local traditions. From the tranquility of West Lake to the remnants of wartime history, each element contributes to a rich and multifaceted experience of Hanoi’s cultural and historical landscape.",
        special: [
            "Dive into Hanoi’s historical layers: the French Quarter and Hanoi Opera House",
            "Traverse the historic Long Bien Bridge",
            "Escape to a hidden gem village on the Red River Island",
            "Immerse yourself in the traditions and agricultural richness of the region",
            "Visit Tran Quoc Pagoda on West Lake, one of Hanoi’s largest lakes",
            "Witness the remnants of a B-52 bomber shot down",
            "Savor Vietnamese egg coffee",
        ],
        details: [
            {
                title: "Hanoi Vintage Vespa Tour: Half Day City Tour – Private",
                description: `08:00 AM: We will pick you up at your hotel in Hanoi Old Quarter. Your first stop is French Quarter and the iconic Hanoi Opera House, where you can delve into French colonial history. Move on to the Long Bien Bridge, a century-old marvel spanning the Red River, connecting districts and providing shelter to locals.

Embark on a river island adventure, you can witness a hidden village and witnessing the simple yet resilient lives of its inhabitants. You can also have chance to meet and chat with people live on this island.

We will drive you to traverse banana and vegetable farms and visit a Kumquat farm, a symbol of prosperity during Tet, the Vietnamese lunar new year.

Continue your ride to Tran Quoc Pagoda, offering breathtaking views of Hanoi from West Lake. Explore Thanh Nien Street, stopping at the Monument of John McCain by Truc Bach Lake to learn about his story. We ride you through botanical gardens, narrow alleys, and Huu Tiep Lake, site of a poignant B-52 crash during the 1972 bombings.

Head towards Ho Chi Minh Mausoleum, gaining insights into Hanoi’s history. Conclude your journey with a stop for Vietnamese coffee, experiencing local life by the railway tracks. End the Vespa tour at a local restaurant, savoring authentic Vietnamese cuisine.

After lunch, we will ride you back to your hotel stay or you can get off anywhere you want just tell our rider.`
            }
        ],
        accommodation: "Accommodation is flexible and tailored to your preferences. We’ll suggest suitable options and can adjust upon request."
    }

]

