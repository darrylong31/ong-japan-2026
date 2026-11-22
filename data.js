// Japan trip app content. This is the ONLY file that changes when the plan changes.
// Sources: the original trip itinerary and the "Japan_Korea Trip 2026 - M+C Itinerary" CSV.
// Columns L/M/N = before.do / before.bring / train; booking references and QR codes are intentionally omitted.
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
    perth:     { name: "Perth", lat: -31.95, lon: 115.86, hi: 31, lo: 18 },
    jeju:      { name: "Jeju", lat: 33.50, lon: 126.53, hi: 9, lo: 4 },
    busan:     { name: "Busan", lat: 35.18, lon: 129.08, hi: 8, lo: 1 },
    seoul:     { name: "Seoul", lat: 37.57, lon: 126.98, hi: 1, lo: -6 },
  },

  days: [
    {
      date: "2026-12-16", title: "Off We Go! ✈️", scene: "air", weather: ["melbourne", "hongkong"],
      before: { do: ["Fill in Visit Japan Web (immigration + customs QR codes)", "Leave for the airport by ~9:15am (check)"], bring: ["Passports", "Power bank + chargers in carry-on", "Japan plug adapter (Type A)"] },
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
      before: { do: ["Show the Visit Japan Web QR at Narita", "Buy Welcome Suica cards at Narita"], bring: ["Passports", "N'EX QR code (screenshot it) + the Mastercard you paid with"] },
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "7:10am", title: "Land at Narita", ticket: "N'EX: Darryl has the QR (JR-EAST email). Collect at the JR machine before boarding", note: "Buy a Welcome Suica card (Samsung can't do mobile Suica), then N'EX to Tokyo and the Nozomi to Kyoto (~3.5–4 hrs)", train: ["Narita Express (N'EX) · N'EX 8 · Narita Airport T1 9:16am → Tokyo 10:17am · Car 4, seats 1A & 1B (big bags in the dial-lock racks in front of you)", "Tokaido Shinkansen Line · Nozomi 27 · Tokyo 11:12am → Kyoto 1:23pm · Car 5, seats 18-D & 18-E (big bags behind the seats)"] },
          { time: "~1:00pm", title: "Drop bags at the Kyoto hotel, nap", note: "Free bag storage. Early check-in from 2pm costs ¥2,000/hr", place: "509 Tsutsumicho, Higashiyama-ku, Kyoto", train: ["Kyoto Subway · Kyoto Stn → Higashiyama · Change at Karasuma Oike to the Tozai Line"] },
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
      before: { do: ["Leave the hotel ~6:25 (~35–40 min uphill walk to Kiyomizu-dera)"], bring: ["Comfy walking shoes (lots of hills and stairs)"] },
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "~7:00am", title: "Kiyomizu-dera at sunrise", note: "Leave the hotel ~6:25. Then Sannenzaka + Ninenzaka", place: "Kiyomizu-dera, Kyoto" },
          { time: "10:00am", title: "Kennin-ji", note: "Opens 10am", place: "Kennin-ji, Kyoto" },
          { time: "~11:00am", title: "Soba lunch on Hanamikoji St → Yasaka Shrine → Chion-in", note: "Then rest at the hotel ~2–4pm", place: "Yasaka Shrine, Kyoto" },
          { time: "6:30pm", title: "Josie's secret birthday dinner 🤫", note: "Secret location. Darryl's leading the way" },
        ],
        tips: ["All walkable from the hotel."],
        meals: [
          { meal: "Breakfast", what: "Konbini", detail: "Before an early Kiyomizu-dera" },
          { meal: "Snack", what: "Sannenzaka street sweets", detail: "Dango, warabi mochi, taiyaki" },
          { meal: "Lunch", what: "Soba on Hanamikoji St, ~11am", detail: "After Kennin-ji" },
          { meal: "Snack", what: "Matcha parfait or soft serve", detail: "e.g. Tsujiri" },
          { meal: "Dinner", what: "Birthday dinner 🤫" },
        ],
      }],
    },
    {
      date: "2026-12-19", title: "Castle & River Day 🛶", scene: "kyoto", weather: ["kyoto"],
      before: { do: ["At Nijo Castle by 8:45am", "Check the Hozugawa boat is running (winter boats can be cancelled)"], bring: ["Socks (no bare feet in the palace)", "Extra warm layers + gloves for the open boat"] },
      wear: "The river boat is open to the cold this winter. Dress extra warm.",
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "8:45am", title: "Nijo Castle", note: "Entry + Ninomaru Palace booked: arrive ~8:45 at gate open. Then Honmaru Palace at 9:50 (booked): enter 20 min before your slot, socks required", ticket: "Darryl has both QRs: entry + Ninomaru, and Honmaru (2 Asoview emails, need mobile data)", place: "Nijo Castle, Kyoto" },
          { time: "1:00pm", title: "Hozugawa river boat", note: "JR to Kameoka first. ~2 hrs down to Arashiyama. If the boat is cancelled: JR straight to Saga-Arashiyama instead", ticket: "Darryl has the voucher (email)", place: "Hozugawa River Boat Ride Kameoka", train: ["JR Sagano Line · Nijo → Kameoka · Aim to arrive by ~12:30pm (boat at 1pm)"] },
          { time: "~4:45pm", title: "Arashiyama bamboo grove + Togetsukyo at sunset", place: "Togetsukyo Bridge, Kyoto", train: ["Hankyu Arashiyama Line · Arashiyama → Kyoto-kawaramachi · Change at Katsura. Aim to arrive by ~5:30pm (Koteppan walk-in)"] },
        ],
        meals: [
          { meal: "Breakfast", what: "Konbini" },
          { meal: "Lunch", what: "Quick bite near JR Nijo or Kameoka", detail: "Before the boat" },
          { meal: "Dinner", what: "Yakitori at Koteppan, Kawaramachi", detail: "Walk-in ~5:45pm, 2 min from Kyoto-Kawaramachi Stn. Mastercard/AMEX OK, no Visa. Backups: Torihara or Yasohachi, Pontocho", place: "Koteppan Kawaramachi Kyoto" },
        ],
      }],
    },
    {
      date: "2026-12-20", title: "Off to Osaka 🚃", scene: "osaka", weather: ["kyoto", "osaka"],
      before: { do: ["Check out (time: Latest 10:00am)", "Lock big bags at Kawaramachi Stn before ~10am"], bring: ["Suica cards, topped up"] },
      cards: [
        {
          name: "Darryl & Josie", people: ["darryl", "josie"],
          activities: [
            { time: "Morning", title: "Check out, store bags, Nishiki Market", note: "Big lockers at Kyoto-Kawaramachi Stn before ~10am", place: "Nishiki Market, Kyoto" },
            { time: "2:41pm", title: "Hankyu Kyo-train Garaku to Osaka-umeda", note: "Kyoto-styled train, regular fare, no booking (backup 4:41pm). Board early at Kawaramachi, bags by the doors. Then walk to JR Osaka → Loop Line to Ashiharabashi → walk to the villa", train: ["Hankyu Kyoto Line · Kyo-train Garaku · Kyoto-kawaramachi 2:41pm → Osaka-umeda ~3:28pm · Backup 4:41pm", "JR Osaka Loop Line · Osaka → Ashiharabashi · Then walk to the villa"] },
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
      before: { do: ["Buy 2 tattoo stickers at Solaniwa's front desk"], bring: ["Cash for Grill Miyako (cash only)", "Solaniwa voucher (email)"] },
      cards: [
        {
          name: "Darryl & Josie", people: ["darryl", "josie"],
          activities: [
            { time: "10:30am", title: "Osaka Aquarium Kaiyukan", note: "Booked entry 10:30–10:45. No re-entry", ticket: "Darryl has the QR tickets (email + PDF)", place: "Osaka Aquarium Kaiyukan" },
            { time: "Afternoon", title: "Solaniwa Onsen", note: "3 stops on the Chuo line. Izakaya meal plan, last entry 10pm", ticket: "Darryl has the voucher (email)", place: "Solaniwa Onsen Osaka", train: ["Osaka Metro Chuo Line · Osakako → Bentencho"] },
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
      before: { do: ["Leave the villa ~7:00am (collect 5 paper tickets at Shin-Osaka)"], bring: ["Shinkansen tickets for 5 (Darryl has tickets)"] },
      cards: [
        {
          name: "Hiroshima crew", people: ["darryl", "josie", "mum", "dad", "choleh"],
          activities: [
            { time: "~7:00am", title: "Leave the villa for the Shinkansen", note: "Collect the 5 paper tickets at Shin-Osaka. Reserved seats", train: ["Sanyo Shinkansen Line · Nozomi 1 · Shin-Osaka 8:24am → Hiroshima 9:49am"] },
            { time: "Midday", title: "Peace Park + Museum", place: "Hiroshima Peace Memorial Museum" },
            { time: "Afternoon", title: "Miyajima (optional)", note: "Then back to Osaka for an early night. USJ tomorrow", place: "Miyajima Itsukushima Shrine", train: ["JR Sanyo Line + JR ferry · Hiroshima → Miyajimaguchi → Miyajima · Suica OK"] },
            { time: "6:43pm", title: "Shinkansen back to Shin-Osaka", note: "Reserved seats for 5", train: ["Sanyo Shinkansen Line · Nozomi 56 · Hiroshima 6:43pm → Shin-Osaka 8:04pm"] },
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
      before: { do: ["Out the door by ~7:15am (check vs gate time)", "Check tonight's show times in the USJ app"], bring: ["Matt: everyone's tickets (Klook app)", "Power banks (the USJ app drains phones)"] },
      cards: [
        {
          name: "USJ crew", people: ["darryl", "josie", "matt", "chloe", "choleh"],
          activities: [
            { time: "Before opening", title: "Universal Studios Japan", note: "Express Pass + Super Nintendo World timed entry", ticket: "Matt has everyone's tickets (Klook app)", place: "Universal Studios Japan, Osaka", train: ["JR Osaka Loop Line + JR Yumesaki Line · Change at Nishikujo → Universal City"] },
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
      before: { do: ["Pack an overnight bag for today/tomorrow", "Send the big bags to the Otowa Yamato Transport Centre from a konbini"], bring: ["Big bags to the konbini", "Pokémon Cafe booking (if booked)"] },
      cards: [{
        name: "Everyone", people: ["mum", "dad", "darryl", "josie", "matt", "chloe", "choleh"],
        activities: [
          { time: "~9:30am", title: "Send the big bags to Tokyo (Yamato)", note: "FamilyMart Kitatsumori 3-chome. ~¥3,060 a bag, cash. Keep the customer copies (tracking numbers)", place: "FamilyMart Kitatsumori 3-chome, 3-1-43 Kitatsumori, Nishinari-ku, Osaka" },
          { time: "~11:30am", title: "Pokémon Cafe", note: "Daimaru Shinsaibashi 9F (if booked)", place: "Pokemon Cafe Osaka" },
          { time: "Afternoon", title: "Dotonbori stroll + shopping → Doguyasuji → Shinsekai at dusk", note: "Sakaisuji line Nippombashi → Ebisucho (2 stops), then rest at the villa", place: "Dotonbori, Osaka" },
          { time: "7:30pm", title: "King crab buffet", note: "Soshite Kani Shinsaibashi. Booked, pay at the restaurant", place: "Soshite Kani Shinsaibashi" },
        ],
        tips: [
          "Everyone packs an overnight bag: the big bags go ahead to Tokyo.",
          "Christmas Eve is Japan's big date night: busy everywhere.",
        ],
        meals: [
          { meal: "Breakfast", what: "Light: konbini or Bre Clair Tennoji" },
          { meal: "Lunch", what: "Pokémon Cafe ~11:30am", detail: "If booked, else Dotonbori street food" },
          { meal: "Dinner", what: "Soshite Kani crab buffet, 7:30pm", detail: "Booked" },
        ],
      }],
    },
    {
      date: "2026-12-25", title: "Merry Christmas! 🎄🍗", scene: "tokyo", weather: ["osaka", "tokyo"],
      before: { do: ["Check out of the villa by ~9:45", "Leave Tenjinbashi-suji by ~12:20", "Buy 551 Horai buns OUTSIDE the Shinkansen gates"], bring: ["Shinkansen tickets for 7 (Darryl has tickets)", "Overnight bags"] },
      cards: [{
        name: "Everyone", people: ["mum", "dad", "darryl", "josie", "matt", "chloe", "choleh"],
        activities: [
          { time: "~9:45am", title: "Check out → Tenjinbashi-suji Shopping Street", note: "Overnight bags only. ~10:15–12:15: most shops open 10–11, Harukoma sushi opens 11", place: "Tenjinbashi-suji Shopping Street", train: ["Osaka Metro · Villa → Tenjinbashisuji 6-chome · Check the route on the day", "Tanimachi + Midosuji Lines · Tenjinbashisuji 6-chome → Shin-Osaka"] },
          { time: "1:15pm", title: "Shinkansen Shin-Osaka → Tokyo", note: "Nozomi 254, arrives 3:45pm. All 7 together. Overnight bags only", train: ["Tokaido Shinkansen Line · Nozomi 254 · Shin-Osaka 1:15pm → Tokyo 3:45pm"] },
          { time: "~4:15pm", title: "Collect the big bags at Yamato", note: "Bunkyo Otowa office, open 8am–8pm. Bring Darryl's passport + the customer copies. Then ~12 min walk to the house", place: "1-19-22 Otowa, Bunkyo-ku, Tokyo" },
          { time: "~5:00pm", title: "Arrive at the Tokyo house", place: "361-1 Yamabukicho, Shinjuku-ku, Tokyo" },
          { time: "6:30pm", title: "KFC Christmas at the house", note: "Darryl picks up the order at KFC Waseda Ekimae", place: "KFC Waseda Ekimae", train: ["Walk · House ↔ KFC Waseda Ekimae · ~18 min each way"] },
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
      before: { do: ["Pick Kichijoji or Shimokitazawa", "Buy Josie's snow boots (she wears them on the 30 Dec flight, so they don't eat JAL's 20 kg)"], bring: ["Cash for swan boats (~¥700)"] },
      cards: [{
        name: "Everyone", people: ["mum", "dad", "darryl", "josie", "matt", "chloe", "choleh"],
        activities: [
          { time: "Morning", title: "Free wander: Kichijoji or Shimokitazawa", note: "Pick on the day. Kichijoji: Inokashira Park, swan boats ~¥700/30 min", place: "Kichijoji Station", train: ["JR Chuo Line · Iidabashi → Kichijoji"] },
          { time: "~4:30pm", title: "Train to Nakano", train: ["JR Chuo Line · Kichijoji → Nakano · Aim to leave by ~4:30pm"] },
          { time: "~5:00pm", title: "Nakano Broadway", note: "Many shops close ~8pm. Darryl to buy Matt's birthday gift here", place: "Nakano Broadway" },
          { time: "Evening", title: "Tocho observation deck night view", note: "After sushi dinner. Check evening + year-end hours", place: "Tokyo Metropolitan Government Building", train: ["JR Chuo Line · Nakano → Shinjuku · Then walk to Tocho", "Toei Oedo Line · Tochomae → Iidabashi · Home"] },
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
      before: { do: ["Be on Takeshita Street before 10am", "At ZEN Chopsticks by 2:20pm"], bring: ["Chopstick voucher (Darryl, Klook app)", "A credit/debit card (the workshop is cashless)"] },
      cards: [{
        name: "Everyone", people: ["mum", "dad", "darryl", "josie", "matt", "chloe", "choleh"],
        activities: [
          { time: "Morning", title: "Takeshita Street before 10am → Meiji Jingu / Yoyogi Park", note: "Cas:pace at the end of Takeshita St", place: "Takeshita Street, Harajuku" },
          { time: "2:30pm", title: "Chopstick-making workshop", note: "ZEN Chopsticks, Nishi-Shinjuku 10F. Arrive by 2:20pm, cashless", ticket: "Darryl has the voucher (Klook app)", place: "Shinjuku West Square Building, 7-4-5 Nishishinjuku" },
          { time: "Late afternoon", title: "Pokémon Center Mega Tokyo", place: "Pokemon Center Mega Tokyo Ikebukuro", train: ["JR Yamanote Line · Shinjuku → Ikebukuro"] },
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
      before: { do: ["Check the teamLab QR arrived (after midnight)"], bring: ["Trousers that roll up to the knee", "teamLab QR (Darryl)", "Skytree booking (Darryl)"] },
      cards: [{
        name: "Everyone", people: ["mum", "dad", "darryl", "josie", "matt", "chloe", "choleh"],
        activities: [
          { time: "Morning", title: "Toyosu: Senkyaku Banrai brunch", note: "Yurakucho line direct from the house", place: "Senkyaku Banrai Toyosu", train: ["Tokyo Metro Yurakucho Line · Edogawabashi → Toyosu · Direct, no change"] },
          { time: "12:30pm", title: "teamLab Planets", note: "Wear trousers that roll up to the knee: you walk through water", ticket: "Darryl has the QR (appears after midnight)", place: "teamLab Planets Tokyo" },
          { time: "3:30pm", title: "Tokyo Skytree", note: "Sunset ~4:30pm", ticket: "Booked under Darryl", place: "Tokyo Skytree" },
          { time: "Evening", title: "Senso-ji at night", note: "~20 min walk from Skytree", place: "Senso-ji, Asakusa" },
        ],
        meals: [
          { meal: "Breakfast", what: "Skip: brunch at Toyosu" },
          { meal: "Lunch", what: "Senkyaku Banrai seafood brunch" },
          { meal: "Dinner", what: "Tempura walk-in, ~5:30pm", detail: "Asakusa Towada Metro-dori, cards OK. Backup: Owariya Honten next door (cash only)", place: "Asakusa Towada Metro-dori" },
        ],
      }],
    },
    {
      date: "2026-12-29", title: "Snoopy & Wagyu Yakiniku 🐶🍖", scene: "tokyo", weather: ["tokyo"],
      before: { do: ["Leave the house ~9:30am", "Pack tonight: early start tomorrow"], bring: ["Snoopy Museum QR codes (Darryl, email)"] },
      cards: [{
        name: "Everyone", people: ["mum", "dad", "darryl", "josie", "matt", "chloe", "choleh"],
        activities: [
          { time: "11:00am", title: "Snoopy Museum Tokyo", note: "~1h15 each way", ticket: "Darryl has the QR codes (email)", place: "Snoopy Museum Tokyo", train: ["Tokyu Den-en-toshi Line · To Minami-machida Grandberry Park · Aim to arrive by ~10:45am (entry 11am)"] },
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
      before: { do: ["Out the door by ~7:45 (only 22 large lockers)", "Check out of the Tokyo house", "Buy anti-slip shoe grips at New Chitose on arrival (before walking Susukino)"], bring: ["All luggage", "Harry Potter tickets (email)", "Limousine bus fare (bring cash and Suica)"] },
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "9:00am", title: "Harry Potter Studio Tour", note: "Carry the suitcases. Only 22 big lockers outside: arrive ~8:30", ticket: "Darryl has the tickets (email)", place: "Warner Bros. Studio Tour Tokyo", train: ["Tokyo Metro Yurakucho Line · Edogawabashi → Nerima · Runs through onto the Seibu line", "Seibu Toshima Line · Nerima → Toshimaen · Aim to arrive by ~8:30am (only 22 big lockers)"] },
          { time: "2:30pm", title: "Limousine bus → Haneda T1", note: "Arrives ~3:55pm", train: ["Limousine bus · Studio 2:30pm → Haneda T1 ~3:55pm"] },
          { time: "6:35pm", title: "Fly Haneda → Sapporo", note: "JL527, lands 8:10pm. Then the airport bus to Odori Park" },
        ],
        tips: ["Hardest day. JAL: 20 kg checked TOTAL per person + 10 kg carry-on, so heavy shopping goes in the carry-on."],
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
      before: { do: ["Buy hand warmers (kairo) at a konbini (shoe grips already bought at New Chitose on 30 Dec)"], bring: ["Cash for Suage+ (cash only)", "Every warm layer you own"] },
      wear: "−5 to −10°C at night. Wear the shoe grips from New Chitose.",
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "Morning", title: "Nijo Market", place: "Nijo Market, Sapporo" },
          { time: "Afternoon", title: "TV Tower + clock tower + Pokémon Center", place: "Sapporo TV Tower" },
          { time: "Night", title: "Hokkaido Jingu for midnight ⛩️", note: "Subway likely not running late: ~40 min walk back", place: "Hokkaido Jingu", train: ["Tozai Line · Odori → Maruyama-koen · Walk back after midnight (~40 min)"] },
        ],
        meals: [
          { meal: "Breakfast", what: "Kaisendon at Donburi Chaya", detail: "Late brekky, Nijo Market, cards OK, check NYE hours. Backup: Keiran", place: "Donburi Chaya Nijo Market" },
          { meal: "Snack", what: "Hokkaido milk soft serve + sweets" },
          { meal: "Lunch", what: "Soup curry at Suage+, ~3–4pm", detail: "No cards (cash or PayPay), check NYE hours. Say 'kinoko nuki' (no mushrooms). Backup before 3pm: Rojiura Curry SAMURAI", place: "Suage+ Sapporo" },
          { meal: "Snack", what: "Hokkaido Jingu food stalls", detail: "Late" },
        ],
      }],
    },
    {
      date: "2027-01-01", title: "Mt. Teine Skiing! ⛷️", scene: "sapporo", weather: ["sapporo"],
      before: { do: ["Check the last bus back from Teine", "Pack tonight: leaving at 5:30am tomorrow"], bring: ["Ski jackets, snow pants, thermals, any other ski gear"] },
      wear: "Ski day: your own jackets and snow pants, plus thermals. Rent skis, goggles and gloves at the Olympia shop.",
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "Late morning", title: "Skiing at Sapporo Teine (Olympia)", note: "Later start after the midnight shrine. JR to Teine, then the bus", place: "Sapporo Teine Olympia", train: ["JR Hakodate Line · Sapporo → Teine · Then the bus to Olympia"] },
          { time: "Afternoon", title: "Keep skiing", note: "Check the last bus back" },
          { time: "Evening", title: "Packing + easy dinner" },
        ],
        meals: [
          { meal: "Breakfast", what: "Konbini", detail: "Most bakeries are shut on New Year's Day" },
          { meal: "Lunch", what: "Teine ski resort cafeteria" },
          { meal: "Dinner", what: "Gyoza at SAPPORO Gyoza Seizojo", detail: "Tanukikoji, walk-in, check 1 Jan hours. Backup: konbini", place: "SAPPORO Gyoza Seizojo Tanukikoji" },
        ],
      }],
    },
    {
      date: "2027-01-02", title: "Wally Bound ✈️", scene: "air", weather: ["sapporo", "tokyo"],
      before: { do: ["Leave the hotel ~5:30am", "Check out"], bring: ["Passports", "Everything!"] },
      cards: [{
        name: "Darryl & Josie", people: ["darryl", "josie"],
        activities: [
          { time: "~5:30am", title: "Leave the hotel", note: "Check the first train/bus to the airport. This may be the one taxi", train: ["JR Rapid Airport · Sapporo → New Chitose Airport · Check the first train (flight 7:45am): may need a taxi"] },
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
      before: { do: [], bring: ["Passports"] },
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

  // Help page "Luggage tracking": tracking numbers + status are typed in on each phone (saved on that phone only).
  shipments: [
    { id: "osaka-tokyo", label: "Osaka → Tokyo (everyone's big bags)", carrier: "Yamato TA-Q-BIN", sent: "24 Dec, FamilyMart Kitatsumori", expected: "25 Dec, collect at the Bunkyo Otowa office" },
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

  // Help page: tap a question to open it.
  howtos: [
    { q: "💴 Cash and ATMs", a: ["7-Eleven and Japan Post ATMs take Aussie cards.", "Markets, small restaurants, shrines and some buses are cash only.", "Keep ¥10,000+ and a coin purse on you."] },
    { q: "🚃 Suica: tapping and topping up", a: ["Tap in AND out at the gates. Works on most trains, buses and at konbini.", "Top up with cash at any station machine: look for チャージ (= top up).", "Low balance at the exit gate? Use the \"fare adjustment\" machine next to the gates."] },
    { q: "🛍️ Tax-free shopping", a: ["Bring your passport when shopping.", "The rules changed in Nov 2026: you may pay tax in the shop and get it refunded at the airport (check before the trip)."] },
    { q: "🧳 Lockers and sending bags ahead", a: ["Big station lockers fill by ~10am. Suica works on most of them.", "Konbini and hotel front desks can send big bags to the next stay (takkyubin), usually next day, ~¥2.5–3.5k a bag."] },
    { q: "🗑️ Bins and toilets", a: ["Public bins are rare: carry a small bag for rubbish.", "Konbini and big stations have the easiest toilets."] },
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

// Each itinerary owns its dates and groups. TRIP.days is the shared source of truth;
// shipment numbers/statuses are entered on the Help page.
window.TRIP.itineraries = [
  {
    id: "darryl-josie",
    name: "Darryl & Josie",
    days: window.TRIP.days,
    stays: window.TRIP.stays,
    groups: [
      { id: "darryl-josie", name: "Darryl & Josie" },
      { id: "mum-dad", name: "Mum & Dad" },
      { id: "matt-chloe", name: "Matt & Chloe" },
      { id: "whole-family", name: "Whole family" },
    ],
    shipments: [
      {
        id: "osaka-tokyo-family",
        label: "Osaka → Tokyo (family bags)",
        carrier: "Yamato TA-Q-BIN",
        groupIds: ["darryl-josie", "mum-dad", "matt-chloe"],
        sent: "24 Dec",
        expected: "25 Dec",
      },
    ],
  },
  {
    id: "matt-chloe",
    name: "Matt & Chloe",
    days: [
      {
        date: "2026-12-19", title: "Off We Go! ✈️", scene: "air", weather: ["perth", "tokyo"],
        before: { do: ["Complete Visit Japan Web immigration and customs forms"], bring: ["Passports", "Power bank and chargers in carry-on", "Japan plug adapter (Type A)"] },
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [
            { time: "Evening", title: "Head to Perth Airport", note: "Direct overnight flight to Tokyo" },
            { time: "9:55pm", title: "Fly Perth → Narita", note: "Arrive 8:30am on 20 December" },
          ],
          meals: [
            { meal: "Dinner", what: "Airport or on the plane" },
          ],
        }],
      },
      {
        date: "2026-12-20", title: "Hello Tokyo 🇯🇵", scene: "tokyo", weather: ["tokyo"],
        before: { do: ["Show Visit Japan Web QR codes at Narita", "Drop bags and check in", "Forward large bags to the Osaka villa; keep the tracking receipt", "Confirm the villa can receive parcels", "Pack a small day bag for Kyoto"], bring: ["Passports", "Cash for luggage forwarding", "Villa address"] },
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [
            { time: "8:30am", title: "Land at Narita", note: "Immigration and customs, then Narita Express to Tokyo Station" },
            { time: "Morning", title: "Drop bags at Keio Presso Inn Tokyo Station Yaesu", place: "Keio Presso Inn Tokyo Station Yaesu" },
            { time: "Afternoon", title: "Forward large bags to Villa Osaka", note: "Yamato TA-Q-BIN from the hotel desk or a convenience store. Keep the receipt and tracking number." },
            { time: "Afternoon", title: "Tokyo Station ramen → Imperial Palace East Gardens", note: "East Gardens are free; check opening hours and last entry." },
            { time: "Evening", title: "Marunouchi Illumination → Tsukishima Monja Street", note: "Early night before the Kyoto trip." },
          ],
          meals: [
            { meal: "Breakfast", what: "Narita convenience store" },
            { meal: "Lunch", what: "Tokyo Ramen Street" },
            { meal: "Dinner", what: "Monjayaki and okonomiyaki", place: "Tsukishima Monja Street" },
          ],
        }],
      },
      {
        date: "2026-12-21", title: "Meet in Kyoto 🚄", scene: "kyoto", weather: ["kyoto", "osaka"],
        before: { groupId: "kyoto-family", do: ["Check out of Keio Presso Inn", "Choose Nozomi 245 seats D/E on Smart EX", "Check Kiyomizu-dera's closing time", "Be done with dinner by ~7:30pm for the JR to Osaka"], bring: ["Smart EX ticket for Nozomi 245 (booking 2007)", "Day bag only (big bags are at the villa)", "Phone torch for Fushimi Inari after dark", "IC card or coins for the bus, Keihan and JR"] },
        cards: [{
          id: "kyoto-family",
          name: "Matt, Chloe, Mum, Dad & Choleh", groupId: "kyoto-family", people: ["matt", "chloe", "mum", "dad", "choleh"],
          activities: [
            { time: "9:09am", title: "Check out and ride Nozomi 245 Tokyo → Kyoto", note: "Shinkansen arrives Kyoto 11:21am. Smart EX booking 2007, seats D/E.", train: ["Tokaido Shinkansen Line · Nozomi 245 · Tokyo 9:09am → Kyoto 11:21am · Smart EX booking 2007, seats D/E"] },
            { time: "11:21am", title: "Meet at Kyoto Station", note: "Travel to Kiyomizu-dera by Kyoto City Bus or taxi; allow 15–20 minutes.", place: "Kyoto Station", train: ["Kyoto City Bus (or taxi) · Kyoto Station → Kiyomizu-dera · 15–20 minutes"] },
            { time: "~12:15pm", title: "Kiyomizu-dera", note: "Snack lunch on Kiyomizu-zaka. See the main hall stage, Jishu Shrine and Otowa Waterfall. Sunset is ~4:48pm and temples close around 4:30–5:00pm.", place: "Kiyomizu-dera, Kyoto", train: ["Walk · Kiyomizu-dera → Kiyomizu-Gojo station via Gojozaka · 15–20 minutes"] },
            { time: "~3:30pm", title: "Fushimi Inari Taisha", note: "Walk up to the Yotsutsuji viewpoint for sunset. The upper trails get dark after sunset; use a phone torch.", place: "Fushimi Inari Taisha", train: ["Keihan Main Line · Kiyomizu-Gojo → Fushimi-Inari · 10 minutes", "JR Nara Line · Inari → Kyoto Station · 5 minutes"] },
            { time: "6:15pm", title: "Dinner at Kyoto Station", note: "Finish dinner by ~7:30pm.", place: "Kyoto Station" },
            { time: "~7:45pm", title: "JR Special Rapid Kyoto → Osaka", note: "Continue to Villa Osaka; the forwarded big bags are already waiting there. No reservation needed.", place: "Villa Osaka", train: ["JR Special Rapid · Kyoto → Osaka · ~30 minutes, every 10–15 minutes · No reservation", "JR Osaka Loop Line · Osaka → Ashiharabashi · Then walk to the villa"] },
          ],
          meals: [
            { meal: "Lunch", what: "Snacks on Kiyomizu-zaka", detail: "Or a quick bite near Kyoto Station" },
            { meal: "Snack", what: "Stalls near the Fushimi Inari entrance" },
            { meal: "Dinner", what: "Kyoto Station restaurant floors", detail: "Around 6:15–7:30pm" },
          ],
        }],
      },
      {
        date: "2026-12-22", title: "Wagyu & Osaka 🥩", scene: "osaka", weather: ["osaka"],
        before: { do: ["Meet Daiki at Osaka-Namba Station at 10am", "Check Katsuoji and Minoh Falls opening hours"], bring: ["Wagyu lunch reservation details"] },
        cards: [
          {
            id: "matt-chloe",
            name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
            activities: [
              { time: "10:00am", title: "Meet Daiki at Osaka-Namba Station" },
              { time: "12:00pm", title: "Wagyu lunch", note: "Matsuzaka Gyu Yakiniku M Hozenji-Hanare" },
              { time: "Afternoon", title: "Katsuoji Temple or Minoh Falls", note: "Daytime sights; sunset is early in late December." },
              { time: "Evening", title: "Namba Yasaka Jinja or Shinsekai", note: "Kushikatsu in Shinsekai for dinner." },
            ],
            meals: [
              { meal: "Lunch", what: "Matsuzaka Gyu Yakiniku M Hozenji-Hanare", detail: "12pm booking" },
              { meal: "Dinner", what: "Kushikatsu", place: "Shinsekai, Osaka" },
            ],
          },
          {
            id: "hiroshima-family",
            name: "Hiroshima group", groupId: "hiroshima-family", people: ["mum", "dad", "darryl", "josie", "choleh"],
            activities: [
              { time: "All day", title: "Hiroshima day trip", note: "Family plan; Matt and Chloe are in Osaka." },
            ],
            meals: [],
          },
        ],
      },
      {
        date: "2026-12-30", title: "Tokyo → Jeju ✈️", scene: "air", weather: ["tokyo", "jeju"],
        before: { do: ["Check out of the Tokyo house", "Check the best train to Narita; aim to arrive around noon"], bring: ["Passports", "Flight details", "Luggage within airline limits"] },
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [
            { time: "Morning", title: "Travel to Narita Airport" },
            { time: "2:50pm", title: "Fly Narita → Jeju", note: "Arrive around 5:45pm." },
            { time: "Evening", title: "Check in at Ventimo Hotel & Residence", place: "Ventimo Hotel & Residence Jeju" },
          ],
          meals: [
            { meal: "Breakfast", what: "Convenience store" },
            { meal: "Lunch", what: "Narita Airport" },
            { meal: "Dinner", what: "Jeju" },
          ],
        }],
      },
      {
        date: "2026-12-31", title: "New Year's Eve in Jeju 🎆", scene: "jeju", weather: ["jeju"],
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [{ time: "All day", title: "Explore Jeju", note: "Stay at Ventimo Hotel & Residence." }],
          meals: [],
        }],
      },
      {
        date: "2027-01-01", title: "Happy New Year! 🎉", scene: "jeju", weather: ["jeju"],
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [{ time: "All day", title: "Explore Jeju", note: "New Year's Day public holiday." }],
          meals: [],
        }],
      },
      {
        date: "2027-01-02", title: "Jeju → Busan ✈️", scene: "air", weather: ["jeju", "busan"],
        before: { do: ["Check out of Ventimo Hotel & Residence"], bring: ["Passports", "Flight details"] },
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [
            { time: "Morning", title: "Travel to Jeju Airport" },
            { time: "1:25pm", title: "Fly Jeju → Busan", note: "Arrive around 2:25pm." },
            { time: "Afternoon", title: "Check in at Shilla Stay Busan Haeundae", place: "Shilla Stay Busan Haeundae" },
          ],
          meals: [],
        }],
      },
      {
        date: "2027-01-03", title: "Busan 🌊", scene: "busan", weather: ["busan"],
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [{ time: "All day", title: "Explore Busan", note: "Stay at Shilla Stay Busan Haeundae." }],
          meals: [],
        }],
      },
      {
        date: "2027-01-04", title: "Busan 🌊", scene: "busan", weather: ["busan"],
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [{ time: "All day", title: "Explore Busan", note: "Stay at Shilla Stay Busan Haeundae." }],
          meals: [],
        }],
      },
      {
        date: "2027-01-05", title: "Busan → Seoul 🚄", scene: "seoul", weather: ["busan", "seoul"],
        before: { do: ["Check out of Shilla Stay Busan Haeundae"], bring: ["Passports", "KTX tickets"] },
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [
            { time: "Morning", title: "Travel to Busan Station" },
            { time: "12:00pm", title: "KTX Busan → Seoul", note: "Arrive around 2:51pm." },
            { time: "Afternoon", title: "Check in at Crown Park Hotel Seoul Myeongdong", place: "Crown Park Hotel Seoul" },
          ],
          meals: [],
        }],
      },
      {
        date: "2027-01-06", title: "Seoul 🇰🇷", scene: "seoul", weather: ["seoul"],
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [{ time: "All day", title: "Explore Seoul", note: "Stay at Crown Park Hotel Seoul Myeongdong." }],
          meals: [],
        }],
      },
      {
        date: "2027-01-07", title: "Seoul 🇰🇷", scene: "seoul", weather: ["seoul"],
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [{ time: "All day", title: "Explore Seoul", note: "Stay at Crown Park Hotel Seoul Myeongdong." }],
          meals: [],
        }],
      },
      {
        date: "2027-01-08", title: "Seoul 🇰🇷", scene: "seoul", weather: ["seoul"],
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [{ time: "All day", title: "Explore Seoul", note: "Stay at Crown Park Hotel Seoul Myeongdong." }],
          meals: [],
        }],
      },
      {
        date: "2027-01-09", title: "Seoul hotel change 🏨", scene: "seoul", weather: ["seoul"],
        before: { do: ["Check out of Crown Park Hotel and into Fraser Place Namdaemun"] },
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [{ time: "Daytime", title: "Check in at Fraser Place Namdaemun", place: "Fraser Place Namdaemun" }],
          meals: [],
        }],
      },
      {
        date: "2027-01-10", title: "Seoul 🇰🇷", scene: "seoul", weather: ["seoul"],
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [{ time: "All day", title: "Explore Seoul", note: "Stay at Fraser Place Namdaemun." }],
          meals: [],
        }],
      },
      {
        date: "2027-01-11", title: "Homeward Bound ✈️", scene: "air", weather: ["seoul", "perth"],
        before: { do: ["Check out of Fraser Place Namdaemun", "Leave early for Incheon Airport"], bring: ["Passports", "Flight details"] },
        cards: [{
          id: "matt-chloe",
          name: "Matt & Chloe", groupId: "matt-chloe", people: ["matt", "chloe"],
          activities: [
            { time: "11:35am", title: "Fly Incheon → Singapore", note: "Layover about 5 hours 50 minutes." },
            { time: "11:00pm", title: "Fly Singapore → Perth", note: "Arrive 4:15am on 12 January." },
          ],
          meals: [
            { meal: "Breakfast", what: "Seoul or Incheon Airport" },
            { meal: "Lunch", what: "On the plane" },
            { meal: "Dinner", what: "Changi Airport during the layover" },
          ],
        }],
      },
    ],
    stays: [
      { city: "Tokyo", dates: "20–21 Dec", name: "Keio Presso Inn Tokyo Station Yaesu", en: "1-4-1 Kyobashi, Tokyo" },
      { city: "Osaka", dates: "21–25 Dec", name: "Villa Osaka", en: "3-chome-5-11 Naniwanishi, Osaka" },
      { city: "Tokyo", dates: "25–30 Dec", name: "Japan House Edogawabashi", en: "Tokyo" },
      { city: "Jeju", dates: "30 Dec – 2 Jan", name: "Ventimo Hotel & Residence" },
      { city: "Busan", dates: "2–5 Jan", name: "Shilla Stay Busan Haeundae" },
      { city: "Seoul", dates: "5–9 Jan", name: "Crown Park Hotel Seoul Myeongdong" },
      { city: "Seoul", dates: "9–11 Jan", name: "Fraser Place Namdaemun" },
    ],
    emergency: [
      { label: "Japan police", number: "110" },
      { label: "Japan ambulance / fire", number: "119" },
      { label: "Japan Visitor Hotline (English, 24/7)", number: "050-3816-2787" },
    ],
    groups: [
      { id: "matt-chloe", name: "Matt & Chloe" },
      { id: "kyoto-family", name: "Kyoto with Mum, Dad & Choleh" },
      { id: "hiroshima-family", name: "Hiroshima group" },
      { id: "usj-group", name: "Everyone except Mum & Dad" },
      { id: "whole-family", name: "Whole group" },
    ],
    shipments: [
      {
        id: "tokyo-osaka",
        label: "Tokyo → Osaka (Matt & Chloe bags)",
        carrier: "Yamato TA-Q-BIN",
        groupIds: ["matt-chloe"],
        sent: "20 Dec",
        expected: "21–22 Dec",
      },
      {
        id: "osaka-tokyo-family",
        label: "Osaka → Tokyo (shared family bags)",
        carrier: "Yamato TA-Q-BIN",
        groupIds: ["matt-chloe", "darryl-josie"],
        sent: "24 Dec",
        expected: "25 Dec",
      },
    ],
  },
];
