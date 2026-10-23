// Základné nastavenia hry v2 – mená a čísla sa dajú meniť tu.
window.G = window.G || {};
G.CFG = {
  hero: 'Paťo',
  kid: 'Timea', kidGen: 'Timey', kidAcc: 'Timeu', kidDat: 'Timei', kidIns: 'Timeou',
  dog: 'Kokeš', dogGen: 'Kokeša', dogDat: 'Kokešovi', dogIns: 'Kokešom',
  bistro: 'Bistro',
  kitchen: 'Centrálna kuchyňa',
  W: 640, H: 440,               // veľkosť mapy v metroch (x, z) – v3 kompaktná
  walk: 8.5, run: 13.5,         // m/s (rýchly chaos)
  carMax: 52, carOffroad: 26, carAccel: 26, carBrake: 38, carReverse: 12,
  tankL: 45,                    // nádrž Fabie (litre)
  fuelPerM: 45 / (2.5 * 25000), // plná nádrž vydrží ~2,5 herného dňa (~25 km/deň na malej mape)
  fuelPrice: 1.629,
  reserveFrac: 0.15,
  timeScale: 0.65,              // herné minúty za reálnu sekundu (časť dňa ≈ 5 min)
  timeScaleSeg: 0.65, timeScaleFull: 0.9,
  sessionMode: 'random',        // random | rano | dopoludnie | obed | popoludnie | vecer | noc | full
  dayStart: 6 * 60 + 30,
  dayEnd: 23 * 60 + 59,
  eventsMin: 9, eventsMax: 13,  // náhodných udalostí za deň
  forgetFade: 80, forgetTime: 180,
  notes: 3,
  saveKey: 'patova-hra-save-v3',
  zoomFoot: 22, zoomCar: 7.5,   // px na meter (2D renderer)
  actorScale: 2.8,              // postavy väčšie než fyzicky (ako v1, čitateľnosť); pes dostáva polovicu
};
G.DAYS = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota', 'Nedeľa'];
G.NAMES = {
  bosses: ['Joff', 'Miška', 'Šimon'],
  colleagues: ['Lukáš', 'Matúš'],
  kitchen: ['Agus', 'Ayo', 'Fredy', 'Benji'],
  origin: { Agus: 'Bali', Ayo: 'Nigéria', Fredy: 'Kolumbia', Benji: 'Česko' },
  bistro: ['Tamara', 'Lucia'],
  ex: 'Ex', exName: 'Vanda',
  sidechick: 'Ria',
  babka: 'Babka',
  teacher: 'pani učiteľka',
  outlets: ['Trenčianska', 'Nám. slobody', 'Jégého', 'Továrenská FT', 'Tobrucká', 'MILLHAUS',
            'Herlianska', 'Lenardova', 'Digital Park', 'Poľná FT', 'Trnava', 'Trenčín'],
};
// id výdajní: outlet_0 .. outlet_11 v poradí G.NAMES.outlets; hotspoty vydaj_0 .. vydaj_11
G.outletId = i => 'outlet_' + i;
