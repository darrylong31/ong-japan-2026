// Small pure helpers, kept separate so they can be tested (tests live outside site/).
(function (L) {
  // Today's date in Japan as "YYYY-MM-DD" (en-CA formats dates that way).
  L.todayInJapan = function (now) {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit" }).format(now || new Date());
  };

  // A city's hi/lo for one date: the live Open-Meteo forecast if it covers that date, else typical temps.
  // rain = chance of rain in % from the live forecast, or null when we only have typical temps.
  L.pickWeather = function (city, date, forecast) {
    var i = forecast ? forecast.time.indexOf(date) : -1;
    if (i < 0 || forecast.temperature_2m_max[i] == null || forecast.temperature_2m_min[i] == null) return { hi: city.hi, lo: city.lo, live: false, rain: null };
    var rain = forecast.precipitation_probability_max ? forecast.precipitation_probability_max[i] : null;
    return { hi: Math.round(forecast.temperature_2m_max[i]), lo: Math.round(forecast.temperature_2m_min[i]), live: true, rain: rain == null ? null : rain };
  };

  // Which meal photo (file name without .jpg) to show, or "" for none.
  // Photos are named MMDD-meal ("1218-snack", a second snack that day is "1218-snack2").
  // nth = which of that meal name this is on the card (1st snack, 2nd snack). main = the day's first card's meal with
  // the same name and nth: another group only gets the dated photo when it's the same meal (same first word).
  // Otherwise fall back to the shared konbini / ekiben / plane photos.
  L.mealPhoto = function (date, meal, nth, main, have) {
    var key = date.slice(5, 7) + date.slice(8, 10) + "-" + meal.meal.toLowerCase() + (nth > 1 ? nth : "");
    var first = function (x) { return (x || "").toLowerCase().split(/[\s,]/)[0]; };
    if (have.indexOf(key) !== -1 && main && first(main.what) === first(meal.what)) return key;
    if (/^on the plane/i.test(meal.what)) return "plane";
    if (/^ekiben/i.test(meal.what)) return "ekiben";
    if (/^(light: |narita )?konbini/i.test(meal.what)) return "konbini";
    return "";
  };
})(typeof module !== "undefined" ? module.exports : (window.L = {}));
