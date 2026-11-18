// Flight log data for 2026. The 2026 pages at the site root keep their own copy; the "All my flights" page (all/) reads this file.
//  airports: IATA code -> city, lat, lon, tz (standard-time hours behind UTC: Pacific 8, Mountain 7,
//            Central 6, Eastern 5, Hawaii 10 with dst:false, Arizona 7 with dst:false; east of UTC = negative)
//  airlines: name -> code (2-letter IATA, used for the logo) and line color
//  flights:  d = departure date (YYYY-MM-DD, local), from/to = IATA codes, air = airline name,
//            no = flight number, t = "8:25 AM → 10:50 AM" (local times; arrival may be the next day),
//            note = optional short note. Never put confirmation codes, prices or card numbers here.
window.FLIGHT_LOG = {
  year: 2026,
  name: "Ting-yun Wu",
  airports: {
    SEA: { city: "Seattle", lat: 47.449, lon: -122.309, tz: 8 },
    SFO: { city: "San Francisco", lat: 37.619, lon: -122.375, tz: 8 },
    SJC: { city: "San José", lat: 37.363, lon: -121.929, tz: 8 },
    DFW: { city: "Dallas–Fort Worth", lat: 32.899, lon: -97.040, tz: 6 },
  },
  airlines: {
    Delta: { code: "DL", color: "#E3132C" },
    United: { code: "UA", color: "#0B2A7A" },
    Southwest: { code: "WN", color: "#F5A800" },
    Alaska: { code: "AS", color: "#1FA0C0" },
    Frontier: { code: "F9", color: "#2E8B57" },
    American: { code: "AA", color: "#0078D2" },
  },
  flights: [
    { d: "2026-01-02", from: "SEA", to: "SJC", air: "Southwest", no: "WN 4693" },
    { d: "2026-06-12", from: "SFO", to: "SEA", air: "United", no: "UA 5579", t: "10:59 PM → 1:29 AM" },
    { d: "2026-06-23", from: "SEA", to: "SJC", air: "Alaska", no: "AS 319", t: "3:42 PM → 5:53 PM", note: "Rebooked from United SEA → SFO" },
    { d: "2026-06-30", from: "SFO", to: "SEA", air: "United", no: "UA 1389", t: "10:59 PM → 1:13 AM" },
    { d: "2026-07-07", from: "SEA", to: "SJC", air: "Delta", no: "DL 3736", t: "8:25 AM → 10:50 AM" },
    { d: "2026-08-14", from: "SFO", to: "DFW", air: "Frontier", no: "F9 2376", t: "12:54 AM → 6:30 AM" },
    { d: "2026-08-17", from: "DFW", to: "SFO", air: "American", no: "AA 1949", t: "7:10 AM → 8:50 AM" },
    { d: "2026-09-05", from: "SJC", to: "SEA", air: "Delta", t: "8:53 PM → 11:19 PM" },
    { d: "2026-09-10", from: "SEA", to: "SJC", air: "Delta", t: "8:25 AM → 10:52 AM" },
    { d: "2026-11-14", from: "SFO", to: "SEA", air: "Alaska", no: "AS 591", t: "6:48 PM → 9:03 PM" },
    { d: "2026-11-16", from: "SEA", to: "SFO", air: "United", no: "UA 499", t: "7:00 AM → 9:19 AM" },
    { d: "2026-11-23", from: "SJC", to: "SEA", air: "Southwest", no: "WN 2150", t: "6:00 AM → 8:30 AM" },
    { d: "2026-12-01", from: "SEA", to: "SJC", air: "Delta", no: "DL 3736", t: "8:30 AM → 10:53 AM" },
    { d: "2026-12-19", from: "SJC", to: "SEA", air: "Southwest", no: "WN 3914", t: "9:45 PM → 12:05 AM" },
  ],
};
