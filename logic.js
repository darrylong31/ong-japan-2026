// Small pure helpers, kept separate so they can be tested (tests live outside site/).
(function (L) {
  // Today's date in Japan as "YYYY-MM-DD" (en-CA formats dates that way).
  L.todayInJapan = function (now) {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit" }).format(now || new Date());
  };

  // A city's hi/lo for one date: the live Open-Meteo forecast if it covers that date, else typical temps.
  L.pickWeather = function (city, date, forecast) {
    var i = forecast ? forecast.time.indexOf(date) : -1;
    if (i < 0 || forecast.temperature_2m_max[i] == null || forecast.temperature_2m_min[i] == null) return { hi: city.hi, lo: city.lo, live: false };
    return { hi: Math.round(forecast.temperature_2m_max[i]), lo: Math.round(forecast.temperature_2m_min[i]), live: true };
  };
})(typeof module !== "undefined" ? module.exports : (window.L = {}));
