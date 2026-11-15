// Japan trip app content. This is the ONLY file that changes when the plan changes.
// Source: the "Final Itinerary" tab of the trip Sheet (read 14 Nov 2026).
// Rules: no booking numbers, QR codes, phone numbers of people, or the birthday restaurant.
// people keys: mum, dad, darryl, josie, matt, chloe, choleh
// place = what the Directions buttons search for in Google/Apple Maps (leave out for no button).

window.TRIP = {
  // hi/lo = typical late-Dec temps (°C), shown until a live forecast is in range (~16 days out).
  cities: {
    melbourne: { name: "Melbourne", lat: -37.81, lon: 144.96, hi: 25, lo: 14 },
    hongkong:  { name: "Hong Kong", lat: 22.32, lon: 114.17, hi: 20, lo: 15 },
    kyoto:     { name: "Kyoto", lat: 35.01, lon: 135.77, hi: 10, lo: 2 },
    osaka:     { name: "Osaka", lat: 34.69, lon: 135.50, hi: 10, lo: 3 },
    hiroshima: { name: "Hiroshima", lat: 34.39, lon: 132.46, hi: 10, lo: 2 },
    tokyo:     { name: "Tokyo", lat: 35.68, lon: 139.65, hi: 12, lo: 3 },
    sapporo:   { name: "Sapporo", lat: 43.06, lon: 141.35, hi: -1, lo: -7 },
    beijing:   { name: "Beijing", lat: 39.90, lon: 116.41, hi: 2, lo: -8 },
  },

  days: [
    {
      date: "2026-12-16", title: "Off We Go! ✈️", scene: "air", weather: ["melbourne", "hongkong"],
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "12:35pm", title: "Fly Melbourne → Hong Kong", note: "HX036, lands 7:05pm" },
          { time: "Evening", title: "Layover at Hong Kong Airport", note: "7 hrs airside. Optional paid lounge with a shower" },
          { time: "2:00am", title: "Fly Hong Kong → Narita", note: "HX606, red-eye" },
        ],
        meals: [
          { meal: "Breakfast", what: "At home in Melbourne" },
          { meal: "Lunch", what: "On the plane" },
          { meal: "Dinner", what: "Hong Kong Airport", detail: "During the layover" },
        ],
      }],
    },
    {
      date: "2026-12-17", title: "Hello Kyoto 😍⛩️", scene: "kyoto", weather: ["kyoto"],
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "7:10am", title: "Land at Narita", note: "Buy a Welcome Suica card, then N'EX to Tokyo and the Nozomi to Kyoto (~3.5–4 hrs)" },
          { time: "~1:00pm", title: "Drop bags at the Kyoto hotel, nap", note: "Free bag storage. Early check-in from 2pm costs ¥2,000/hr", place: "509 Tsutsumicho, Higashiyama-ku, Kyoto" },
          { time: "Evening", title: "Easy dinner near the hotel", note: "Red-eye day, so take it slow" },
        ],
        tips: ["Take the subway (not the bus) from Kyoto Station to Higashiyama with luggage."],
        meals: [
          { meal: "Breakfast", what: "Narita konbini", detail: "After landing" },
          { meal: "Lunch", what: "Ekiben on the Shinkansen" },
          { meal: "Dinner", what: "Soba or ramen near the hotel" },
        ],
      }],
    },
    {
      date: "2026-12-18", title: "Josie's Secret Birthday Dinner 🤫🎂", scene: "kyoto", weather: ["kyoto"],
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "Early", title: "Kiyomizu-dera", note: "Opens 6am. Then Sannenzaka → Yasaka Shrine", place: "Kiyomizu-dera, Kyoto" },
          { time: "Afternoon", title: "Kennin-ji → Chion-in", place: "Kennin-ji, Kyoto" },
          { time: "6:30pm", title: "Josie's secret birthday dinner 🤫", note: "Secret location. Darryl's leading the way" },
        ],
        tips: ["All walkable from the hotel."],
        meals: [
          { meal: "Breakfast", what: "Konbini", detail: "Before an early Kiyomizu-dera" },
          { meal: "Snack", what: "Sannenzaka street sweets", detail: "Dango, warabi mochi, taiyaki" },
          { meal: "Lunch", what: "Snacks + soba around Higashiyama" },
          { meal: "Snack", what: "Matcha parfait or soft serve", detail: "e.g. Tsujiri" },
          { meal: "Dinner", what: "Birthday dinner 🤫" },
        ],
      }],
    },
    {
      date: "2026-12-19", title: "Castle & River Day 🛶", scene: "kyoto", weather: ["kyoto"],
      wear: "The river boat is open to the cold this winter. Dress extra warm.",
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "8:45am", title: "Nijo Castle", note: "Honmaru Palace ~9:30. Enter 20 min before your slot, socks required", place: "Nijo Castle, Kyoto" },
          { time: "1:00pm", title: "Hozugawa river boat", note: "JR to Kameoka first. ~2 hrs down to Arashiyama", place: "Hozugawa River Boat Ride Kameoka" },
          { time: "~4:45pm", title: "Arashiyama bamboo grove + Togetsukyo at sunset", place: "Togetsukyo Bridge, Kyoto" },
        ],
        meals: [
          { meal: "Breakfast", what: "Konbini" },
          { meal: "Lunch", what: "Quick bite near JR Nijo or Kameoka", detail: "Before the boat" },
          { meal: "Dinner", what: "Yakitori at Koteppan, Kawaramachi", detail: "Walk-in ~5:45pm. Mastercard OK, no Visa. Backups: Torihara or Yasohachi, Pontocho", place: "Koteppan Kawaramachi Kyoto" },
        ],
      }],
    },
    {
      date: "2026-12-20", title: "Off to Osaka 🚃", scene: "osaka", weather: ["kyoto", "osaka"],
      cards: [
        {
          name: "Darryl & Josie", people: ["darryl", "josie"],
          activities: [
            { time: "Morning", title: "Check out, store bags, Nishiki Market", note: "Big lockers at Kyoto-Kawaramachi Stn before ~10am", place: "Nishiki Market, Kyoto" },
            { time: "Afternoon", title: "Kawaramachi, then Hankyu line to Osaka Umeda", note: "~45 min, ~¥400" },
            { time: "Evening", title: "Dinner with Mum & Dad", place: "Shinsekai, Osaka" },
          ],
          meals: [
            { meal: "Breakfast", what: "Konbini or Sizuya Sanjo", detail: "Kyoto bakery, try the carnet" },
            { meal: "Lunch", what: "Nishiki Market grazing" },
            { meal: "Dinner", what: "Kushikatsu or okonomiyaki", detail: "Near the villa (Shinsekai), with Mum & Dad" },
          ],
        },
        {
          name: "Mum & Dad", people: ["mum", "dad"],
          activities: [
            { time: "Today", title: "Arrive at the Osaka villa", place: "3-5 Naniwanishi, Naniwa-ku, Osaka" },
            { time: "Evening", title: "Dinner with Darryl & Josie", place: "Shinsekai, Osaka" },
          ],
          meals: [
            { meal: "Dinner", what: "Kushikatsu or okonomiyaki", detail: "Near the villa (Shinsekai)" },
          ],
        },
      ],
    },
    {
      date: "2026-12-21", title: "Aquarium & Onsen Rest Day ♨️", scene: "osaka", weather: ["osaka", "kyoto"],
      cards: [
        {
          name: "Darryl & Josie", people: ["darryl", "josie"],
          activities: [
            { time: "10:00am", title: "Osaka Aquarium Kaiyukan", note: "School holidays, so skip the walk-up queue", place: "Osaka Aquarium Kaiyukan" },
            { time: "Afternoon", title: "Solaniwa Onsen", note: "3 stops on the Chuo line. Izakaya meal plan, last entry 10pm", ticket: "Darryl has the voucher (email)", place: "Solaniwa Onsen Osaka" },
          ],
          tips: ["Buy 2 tattoo stickers at Solaniwa's front desk."],
          meals: [
            { meal: "Breakfast", what: "Konbini" },
            { meal: "Lunch", what: "Grill Miyako, Bentencho", detail: "Hamburg + fried prawn special. Cash only, until 2:30pm. Backup: Akamaru Shokudo", place: "Grill Miyako Bentencho Osaka" },
            { meal: "Dinner", what: "Solaniwa izakaya meal plan", detail: "Booked" },
          ],
        },
        {
          name: "Kyoto day trip", people: ["mum", "dad", "choleh", "matt", "chloe"],
          activities: [
            { time: "All day", title: "Day trip to Kyoto", note: "Plan to come", place: "Kyoto Station" },
          ],
          meals: [
            { meal: "Lunch", what: "Your pick in Kyoto" },
          ],
        },
      ],
    },
    {
      date: "2026-12-22", title: "Hiroshima Daytrip 🕊️", scene: "hiroshima", weather: ["hiroshima", "osaka"],
      cards: [
        {
          name: "Hiroshima crew", people: ["darryl", "josie", "mum", "dad", "choleh"],
          activities: [
            { time: "~7:30am", title: "Leave the villa for the Shinkansen", note: "Reserved seats for 5. ~1h25 each way" },
            { time: "Midday", title: "Peace Park + Museum", place: "Hiroshima Peace Memorial Museum" },
            { time: "Afternoon", title: "Miyajima (optional)", note: "Then back to Osaka for an early night. USJ tomorrow", place: "Miyajima Itsukushima Shrine" },
          ],
          meals: [
            { meal: "Breakfast", what: "Konbini or Shin-Osaka station" },
            { meal: "Lunch", what: "Okonomimura, Hiroshima", detail: "Walk-in", place: "Okonomimura Hiroshima" },
            { meal: "Dinner", what: "Ekiben on the way back", detail: "Or something easy near the villa" },
          ],
        },
        {
          name: "Matt & Chloe", people: ["matt", "chloe"],
          activities: [
            { time: "All day", title: "Free day in Osaka" },
          ],
          meals: [],
        },
      ],
    },
    {
      date: "2026-12-23", title: "USJ Day! 🎢", scene: "osaka", weather: ["osaka"],
      cards: [
        {
          name: "USJ crew", people: ["darryl", "josie", "matt", "chloe", "choleh"],
          activities: [
            { time: "Before opening", title: "Universal Studios Japan", note: "Express Pass + Super Nintendo World timed entry", ticket: "Matt has everyone's tickets (Klook app)", place: "Universal Studios Japan, Osaka" },
            { time: "Afternoon", title: "Split up by ride preference", note: "Regroup at set times" },
            { time: "Evening", title: "USJ night show", note: "Times posted the week before" },
          ],
          tips: ["Christmas week = huge crowds. Single-rider lines save a lot of time."],
          meals: [
            { meal: "Breakfast", what: "Konbini on the way to USJ" },
            { meal: "Lunch", what: "Kinopio's Cafe or Louie's NY Pizza", detail: "In the park, no booking" },
            { meal: "Dinner", what: "TAKOPA takoyaki, by 9:15pm", detail: "Universal CityWalk 4F, stalls close 10pm. Darryl: 'mayo nashi'", place: "Universal CityWalk Osaka" },
          ],
        },
        {
          name: "Mum & Dad", people: ["mum", "dad"],
          activities: [
            { time: "All day", title: "Free day" },
            { time: "by 9:15pm", title: "Meet everyone at TAKOPA", note: "Universal CityWalk 4F", place: "Universal CityWalk Osaka" },
          ],
          meals: [
            { meal: "Dinner", what: "TAKOPA takoyaki", detail: "With everyone" },
          ],
        },
      ],
    },
    {
      date: "2026-12-24", title: "Osaka and King Crab 🦀", scene: "osaka", weather: ["osaka"],
      cards: [{
        name: "Everyone", people: ["mum", "dad", "darryl", "josie", "matt", "chloe", "choleh"],
        activities: [
          { time: "Morning", title: "Tenjinbashi-suji shopping street", place: "Tenjinbashi-suji Shopping Street" },
          { time: "~11:30am", title: "Pokémon Cafe", note: "Daimaru Shinsaibashi 9F (if booked)", place: "Pokemon Cafe Osaka" },
          { time: "Afternoon", title: "Shinsekai → Dotonbori stroll + shopping", place: "Dotonbori, Osaka" },
          { time: "7:30pm", title: "King crab buffet", note: "Soshite Kani Shinsaibashi. Booked, pay at the restaurant", place: "Soshite Kani Shinsaibashi" },
        ],
        tips: [
          "Send big bags to the Tokyo house from a konbini today (~¥2.5–3.5k a bag, arrives the 25th).",
          "Christmas Eve is Japan's big date night: busy everywhere.",
        ],
        meals: [
          { meal: "Breakfast", what: "Light: konbini or Bre Clair Tennoji" },
          { meal: "Lunch", what: "Pokémon Cafe ~11:30am", detail: "If booked, else Tenjinbashi-suji street food" },
          { meal: "Dinner", what: "Soshite Kani crab buffet, 7:30pm", detail: "Booked" },
        ],
      }],
    },
    {
      date: "2026-12-25", title: "Merry Christmas! 🎄🍗", scene: "tokyo", weather: ["osaka", "tokyo"],
      cards: [{
        name: "Everyone", people: ["mum", "dad", "darryl", "josie", "matt", "chloe", "choleh"],
        activities: [
          { time: "Morning", title: "Check out of the villa" },
          { time: "Midday", title: "Shinkansen Shin-Osaka → Tokyo", note: "~2.5 hrs. Bags already forwarded. Reserve 7 seats together" },
          { time: "~5:00pm", title: "Arrive at the Tokyo house", place: "361-1 Yamabukicho, Shinjuku-ku, Tokyo" },
          { time: "Evening", title: "Tocho observation deck", note: "Oedo line from Iidabashi", place: "Tokyo Metropolitan Government Building" },
          { time: "Night", title: "KFC Christmas at the house" },
        ],
        meals: [
          { meal: "Breakfast", what: "Konbini before check-out" },
          { meal: "Lunch", what: "551 Horai pork buns + ekiben", detail: "Hot buns: buy at Shin-Osaka OUTSIDE the Shinkansen gates" },
          { meal: "Snack", what: "dacō? Kagurazaka on arrival", detail: "Napoli Donut, closes 7pm", place: "daco Kagurazaka" },
          { meal: "Dinner", what: "KFC Christmas barrel at the house" },
        ],
      }],
    },
    {
      date: "2026-12-26", title: "Exploration and Relax Day 🚶", scene: "tokyo", weather: ["tokyo"],
      cards: [{
        name: "Everyone", people: ["mum", "dad", "darryl", "josie", "matt", "chloe", "choleh"],
        activities: [
          { time: "Morning", title: "Free wander: Kichijoji or Shimokitazawa", note: "Pick on the day. Kichijoji: Inokashira Park, swan boats ~¥700/30 min", place: "Kichijoji Station" },
          { time: "~4:30pm", title: "Train to Nakano" },
          { time: "~5:00pm", title: "Nakano Broadway", note: "Many shops close ~8pm. Darryl to buy Matt's birthday gift here", place: "Nakano Broadway" },
        ],
        meals: [
          { meal: "Breakfast", what: "Konbini" },
          { meal: "Lunch", what: "Wherever we wander" },
          { meal: "Dinner", what: "Conveyor-belt sushi around Nakano" },
        ],
      }],
    },
    {
      date: "2026-12-27", title: "Chopsticks & Unagi 🥢", scene: "tokyo", weather: ["tokyo"],
      cards: [{
        name: "Everyone", people: ["mum", "dad", "darryl", "josie", "matt", "chloe", "choleh"],
        activities: [
          { time: "Morning", title: "Takeshita Street before 10am → Meiji Jingu / Yoyogi Park", place: "Takeshita Street, Harajuku" },
          { time: "2:30pm", title: "Chopstick-making workshop", note: "ZEN Chopsticks, Nishi-Shinjuku 10F. Arrive by 2:20pm, cashless", ticket: "Darryl has the voucher (Klook app)", place: "Shinjuku West Square Building, 7-4-5 Nishishinjuku" },
          { time: "Late afternoon", title: "Pokémon Center Mega Tokyo", place: "Pokemon Center Mega Tokyo Ikebukuro" },
          { time: "6:00pm", title: "Unagi Hashimoto", note: "Booked. Pay at the restaurant", place: "Unagi Hashimoto Edogawabashi" },
        ],
        meals: [
          { meal: "Breakfast", what: "Amam Dacotan Omotesando", detail: "Destination bakery, 140+ breads", place: "Amam Dacotan Omotesando" },
          { meal: "Snack", what: "Crepes on Takeshita Street" },
          { meal: "Lunch", what: "Mentaiko udon or tonkatsu near Shinjuku" },
          { meal: "Dinner", what: "Unagi Hashimoto, 6pm", detail: "Booked" },
        ],
      }],
    },
    {
      date: "2026-12-28", title: "teamLab & Skytree ✨🗼", scene: "tokyo", weather: ["tokyo"],
      cards: [{
        name: "Everyone", people: ["mum", "dad", "darryl", "josie", "matt", "chloe", "choleh"],
        activities: [
          { time: "Morning", title: "Toyosu: Senkyaku Banrai brunch", note: "Yurakucho line direct from the house", place: "Senkyaku Banrai Toyosu" },
          { time: "12:30pm", title: "teamLab Planets", note: "Wear trousers that roll up to the knee: you walk through water", ticket: "Darryl has the QR (appears after midnight)", place: "teamLab Planets Tokyo" },
          { time: "3:30pm", title: "Tokyo Skytree", note: "Sunset ~4:30pm", ticket: "Booked under Darryl", place: "Tokyo Skytree" },
          { time: "Evening", title: "Senso-ji at night", note: "~20 min walk from Skytree", place: "Senso-ji, Asakusa" },
        ],
        meals: [
          { meal: "Breakfast", what: "Skip: brunch at Toyosu" },
          { meal: "Lunch", what: "Senkyaku Banrai seafood brunch" },
          { meal: "Dinner", what: "Tempura walk-in, ~5:30pm", detail: "Asakusa Towada Metro-dori, cards OK. Backup: Owariya Honten (cash)", place: "Asakusa Towada Metro-dori" },
        ],
      }],
    },
    {
      date: "2026-12-29", title: "Snoopy & Wagyu Yakiniku 🐶🍖", scene: "tokyo", weather: ["tokyo"],
      cards: [{
        name: "Everyone", people: ["mum", "dad", "darryl", "josie", "matt", "chloe", "choleh"],
        activities: [
          { time: "11:00am", title: "Snoopy Museum Tokyo", note: "~1h15 each way", ticket: "Darryl has the QR codes (email)", place: "Snoopy Museum Tokyo" },
          { time: "Afternoon", title: "Grandberry Park", note: "Mall next door. Leave by ~5:30pm", place: "Grandberry Park" },
          { time: "7:00pm", title: "Last family dinner: Tobiuishi yakiniku", note: "Iidabashi. Booked, pay at the restaurant", place: "Wagyu Yakiniku Tobiuishi Iidabashi" },
        ],
        tips: ["Pack tonight: early start tomorrow."],
        meals: [
          { meal: "Breakfast", what: "Kagurazaka bakery or konbini", detail: "Pain des Philosophes or Altamura's toast set" },
          { meal: "Lunch", what: "Grandberry Park food court" },
          { meal: "Dinner", what: "Tobiuishi yakiniku, 7pm", detail: "Booked" },
        ],
      }],
    },
    {
      date: "2026-12-30", title: "Harry Potter Day ⚡", scene: "sapporo", weather: ["tokyo", "sapporo"],
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "9:00am", title: "Harry Potter Studio Tour", note: "Out the door by ~7:45. Only 22 large lockers", ticket: "Darryl has the tickets (email)", place: "Warner Bros. Studio Tour Tokyo" },
          { time: "2:30pm", title: "Limousine bus → Haneda T1", note: "Arrives ~3:55pm" },
          { time: "6:35pm", title: "Fly Haneda → Sapporo", note: "JL527, lands 8:10pm" },
        ],
        tips: ["Hardest day. JAL allows 20 kg per bag."],
        meals: [
          { meal: "Breakfast", what: "Konbini", detail: "Out the door by ~7:45" },
          { meal: "Lunch", what: "At the studio" },
          { meal: "Snack", what: "Airport bento or onigiri at Haneda" },
          { meal: "Dinner", what: "Miso ramen in Susukino, ~10pm", detail: "Sumire (to 12:30am) or Keyaki (to 3am)", place: "Sumire Susukino Sapporo" },
        ],
      }],
    },
    {
      date: "2026-12-31", title: "NYE @ Hokkaido Jingu! 🎆⛩", scene: "sapporo", weather: ["sapporo"],
      wear: "−5 to −10°C at night. Buy anti-slip shoe grips at a konbini (~¥1,000).",
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "Morning", title: "Nijo Market", place: "Nijo Market, Sapporo" },
          { time: "Afternoon", title: "TV Tower + clock tower + Pokémon Center", place: "Sapporo TV Tower" },
          { time: "Night", title: "Hokkaido Jingu for midnight ⛩️", note: "Subway likely not running late: ~40 min walk back", place: "Hokkaido Jingu" },
        ],
        meals: [
          { meal: "Breakfast", what: "Kaisendon at Donburi Chaya", detail: "Late brekky, Nijo Market, cards OK. Backup: Keiran", place: "Donburi Chaya Nijo Market" },
          { meal: "Snack", what: "Hokkaido milk soft serve + sweets" },
          { meal: "Lunch", what: "Soup curry at Suage+, ~3–4pm", detail: "Bring cash. Say 'kinoko nuki' (no mushrooms). Backup: Rojiura Curry SAMURAI", place: "Suage+ Sapporo" },
          { meal: "Snack", what: "Hokkaido Jingu food stalls", detail: "Late" },
        ],
      }],
    },
    {
      date: "2027-01-01", title: "Mt. Teine Skiing! ⛷️", scene: "sapporo", weather: ["sapporo"],
      wear: "Ski day: your own jackets and snow pants, plus thermals. Rent skis, goggles and gloves at the Olympia shop.",
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "Late morning", title: "Skiing at Sapporo Teine (Olympia)", note: "Later start after the midnight shrine. JR to Teine, then the bus", place: "Sapporo Teine Olympia" },
          { time: "Afternoon", title: "Keep skiing", note: "Check the last bus back" },
          { time: "Evening", title: "Packing + easy dinner" },
        ],
        meals: [
          { meal: "Breakfast", what: "Konbini", detail: "Most bakeries are shut on New Year's Day" },
          { meal: "Lunch", what: "Teine ski resort cafeteria" },
          { meal: "Dinner", what: "Gyoza at SAPPORO Gyoza Seizojo", detail: "Tanukikoji, walk-in. Backup: konbini", place: "SAPPORO Gyoza Seizojo Tanukikoji" },
        ],
      }],
    },
    {
      date: "2027-01-02", title: "Wally Bound ✈️", scene: "air", weather: ["sapporo", "tokyo"],
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "~5:30am", title: "Leave the hotel", note: "Check the first train/bus to the airport. This may be the one taxi" },
          { time: "7:45am", title: "Fly Sapporo → Haneda", note: "JL500, lands 9:30am" },
          { time: "Midday", title: "Haneda Airport Garden", note: "Shops + hot-spring bath. Store bags" },
          { time: "6:00pm", title: "Fly Haneda → Beijing", note: "CA168, lands 9:20pm" },
        ],
        tips: ["2 Jan is a peak travel day."],
        meals: [
          { meal: "Breakfast", what: "Konbini or New Chitose airport" },
          { meal: "Lunch", what: "Haneda Airport Garden" },
          { meal: "Dinner", what: "On the plane" },
        ],
      }],
    },
    {
      date: "2027-01-03", title: "Home Sweet Home! 🏠", scene: "air", weather: ["beijing", "melbourne"],
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "1:15am", title: "Fly Beijing → Melbourne", note: "CA165, lands 3:40pm" },
        ],
        meals: [
          { meal: "Breakfast", what: "On the plane" },
          { meal: "Lunch", what: "On the plane" },
          { meal: "Dinner", what: "Home" },
        ],
      }],
    },
  ],

  // Help card. Kyoto + Sapporo addresses from the Booking.com confirmations (14 Nov).
  stays: [
    { city: "Kyoto", dates: "17–20 Dec", name: "Rinn Shirakawa South", en: "509 Tsutsumicho, Higashiyama-ku, Kyoto 605-0025", ja: "〒605-0025 京都府京都市東山区堤町509" },
    { city: "Osaka", dates: "20–25 Dec", name: "The villa", en: "3-5 Naniwanishi, Naniwa-ku, Osaka", ja: "大阪府大阪市浪速区浪速西3丁目5" },
    { city: "Tokyo", dates: "25–30 Dec", name: "The house (Edogawabashi)", en: "361-1 Yamabukicho, Shinjuku-ku, Tokyo", ja: "東京都新宿区山吹町361-1" },
    { city: "Sapporo", dates: "30 Dec – 2 Jan", name: "Royal Park Canvas Sapporo Odori Park", en: "Odori Nishi 1-12, Chuo-ku, Sapporo 060-0042", ja: "〒060-0042 北海道札幌市中央区大通西1丁目12" },
  ],

  emergency: [
    { label: "Police", number: "110" },
    { label: "Ambulance / fire", number: "119" },
    { label: "Japan Visitor Hotline (English, 24/7)", number: "050-3816-2787" },
    { label: "Darryl & Josie's travel insurance (24/7)", number: "+61 7 3305 7353" },
  ],

  phrases: [
    { en: "Thank you", ja: "ありがとうございます", say: "Arigatō gozaimasu" },
    { en: "Excuse me / sorry", ja: "すみません", say: "Sumimasen" },
    { en: "Where is the toilet?", ja: "トイレはどこですか？", say: "Toire wa doko desu ka?" },
    { en: "There are 7 of us", ja: "7人です", say: "Nana-nin desu" },
    { en: "Do you have an English menu?", ja: "英語のメニューはありますか？", say: "Eigo no menyū wa arimasu ka?" },
    { en: "This one, please", ja: "これをください", say: "Kore o kudasai" },
    { en: "No mushrooms, please", ja: "きのこ抜きでお願いします", say: "Kinoko nuki de onegaishimasu" },
    { en: "No mayo, please", ja: "マヨネーズ抜きでお願いします", say: "Mayonēzu nuki de onegaishimasu" },
    { en: "I'm allergic to stone fruit (peach, cherry, plum)", ja: "桃・さくらんぼ・梅などの核果アレルギーがあります", say: "Momo, sakuranbo, ume nado no kakuka arerugī ga arimasu" },
    { en: "Can I pay by card?", ja: "カードで払えますか？", say: "Kādo de haraemasu ka?" },
    { en: "The bill, please", ja: "お会計お願いします", say: "Okaikei onegaishimasu" },
    { en: "Please take me to this address", ja: "この住所までお願いします", say: "Kono jūsho made onegaishimasu" },
    { en: "Please help me", ja: "助けてください", say: "Tasukete kudasai" },
  ],
};
