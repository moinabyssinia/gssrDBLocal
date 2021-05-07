/* here we seed our databases separately from a webapp
   just for development purposes 
   
   place this file in the main folder - not in views

   once connected to mongoose - run it as node seeds.js to seed
*/

// require model created in product.js
const mongoose = require('mongoose');
const TideGauge = require('./models/tideGauge');

mongoose.connect('mongodb://localhost:27017/allTgs', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongo connection open")
    })
    .catch(err => {
        console.log('oh no mongo connection error')
        console.log(err)
    })

const seedTGs = [
  {
    "name": "aasiaat,greenland_001",
    "lon": -52.883,
    "lat": 68.71,
    "country": "Greenland"
  },
  {
    "name": "abashiri_japan",
    "lon": 144.28,
    "lat": 44.017,
    "country": "Japan"
  },
  {
    "name": "aberdeen_p038_uk",
    "lon": -2.0745,
    "lat": 57.143,
    "country": "United Kingdom"
  },
  {
    "name": "abidjan_vridi_230a_ivory_coast",
    "lon": -4,
    "lat": 5.2417,
    "country": "Côte d'Ivoire"
  },
  {
    "name": "aburatsu_japan",
    "lon": 131.42,
    "lat": 31.567,
    "country": "Japan"
  },
  {
    "name": "acajutla_c_082c_el_salvador",
    "lon": -89.833,
    "lat": 13.583,
    "country": "El Salvador"
  },
  {
    "name": "acapulco_c,gro._316c_mexico",
    "lon": -99.912,
    "lat": 16.84,
    "country": "Mexico"
  },
  {
    "name": "adak,alaska_040a_usa",
    "lon": -176.63,
    "lat": 51.863,
    "country": "United States"
  },
  {
    "name": "aden_172a_yemen,_p.d.r",
    "lon": 44.975,
    "lat": 12.788,
    "country": "Yemen"
  },
  {
    "name": "aguadilla,pr_263a_usa",
    "lon": -67.163,
    "lat": 18.457,
    "country": "United States"
  },
  {
    "name": "ajaccio_aspretto_france",
    "lon": 8.7628,
    "lat": 41.923,
    "country": "France"
  },
  {
    "name": "akabane_japan",
    "lon": 137.18,
    "lat": 34.6,
    "country": "Japan"
  },
  {
    "name": "akyab__sittwe__907a_myanmar",
    "lon": 92.903,
    "lat": 20.14,
    "country": "Myanmar"
  },
  {
    "name": "alameda_navalairstation__usa",
    "lon": -122.3,
    "lat": 37.772,
    "country": "United States"
  },
  {
    "name": "albany_001_australia",
    "lon": 117.88,
    "lat": -35.024,
    "country": "Australia"
  },
  {
    "name": "alcudia_alcudia_spain",
    "lon": 3.1392,
    "lat": 39.835,
    "country": "Spain"
  },
  {
    "name": "alertbay,bc_08280_canada",
    "lon": -126.93,
    "lat": 50.587,
    "country": "Canada"
  },
  {
    "name": "alexandria_330071_egypt",
    "lon": 29.917,
    "lat": 31.217,
    "country": "Egypt"
  },
  {
    "name": "algeciras_alge_spain",
    "lon": -5.4333,
    "lat": 36.117,
    "country": "Spain"
  },
  {
    "name": "almeria_almeria_spain",
    "lon": -2.478,
    "lat": 36.83,
    "country": "Spain"
  },
  {
    "name": "alotau_069a_papua_new_guinea",
    "lon": 150.45,
    "lat": -10.168,
    "country": "Papua New Guinea"
  },
  {
    "name": "amami_japan",
    "lon": 129.53,
    "lat": 28.317,
    "country": "Japan"
  },
  {
    "name": "ambon_b_133b_indonesia",
    "lon": 128.18,
    "lat": -3.6833,
    "country": "Indonesia"
  },
  {
    "name": "ammassalik,greenland_001",
    "lon": -37,
    "lat": 65.5,
    "country": "Greenland"
  },
  {
    "name": "ammassalik_297a_denmark",
    "lon": -37,
    "lat": 65.6,
    "country": "Greenland"
  },
  {
    "name": "anchorage_usa",
    "lon": -149.89,
    "lat": 61.238,
    "country": "United States"
  },
  {
    "name": "ancona_ancona_italy",
    "lon": 13.506,
    "lat": 43.625,
    "country": "Italy"
  },
  {
    "name": "andenes_001",
    "lon": 16.15,
    "lat": 69.317,
    "country": "Norway"
  },
  {
    "name": "anewa_bay_048a_papua_new_guinea",
    "lon": 155.88,
    "lat": -6.1833,
    "country": "Papua New Guinea"
  },
  {
    "name": "angra_heroismo_b_215b_portugal",
    "lon": -27.24,
    "lat": 38.65,
    "country": "Portugal"
  },
  {
    "name": "annapolis_navalacademy__usa",
    "lon": -76.482,
    "lat": 38.983,
    "country": "United States"
  },
  {
    "name": "antalya_anta_turkey",
    "lon": 30.617,
    "lat": 36.833,
    "country": "Turkey"
  },
  {
    "name": "antofagasta_080a_chile",
    "lon": -70.4,
    "lat": -23.65,
    "country": "Chile"
  },
  {
    "name": "apalachicola_usa",
    "lon": -84.982,
    "lat": 29.727,
    "country": "United States"
  },
  {
    "name": "apia_b_401b_western_samoa",
    "lon": -171.75,
    "lat": -13.817,
    "country": "Samoa"
  },
  {
    "name": "arcachon_eyrac_",
    "lon": -1.1636,
    "lat": 44.665,
    "country": "France"
  },
  {
    "name": "arecibo,_pr_735a_usa",
    "lon": -66.702,
    "lat": 18.48,
    "country": "United States"
  },
  {
    "name": "arena_cove,_ca_573a_usa",
    "lon": -123.71,
    "lat": 38.913,
    "country": "United States"
  },
  {
    "name": "argentia,nf_00835_canada",
    "lon": -53.983,
    "lat": 47.3,
    "country": "Canada"
  },
  {
    "name": "arica_083a_chile",
    "lon": -70.333,
    "lat": -18.467,
    "country": "Chile"
  },
  {
    "name": "arrecife_arre_spain",
    "lon": -13.53,
    "lat": 28.972,
    "country": "Spain"
  },
  {
    "name": "ascension_uk",
    "lon": -14.417,
    "lat": -7.9167,
    "country": "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    "name": "astoria,or_572a_usa",
    "lon": -123.77,
    "lat": 46.208,
    "country": "United States"
  },
  {
    "name": "atlantic_city_264a_usa",
    "lon": -74.418,
    "lat": 39.355,
    "country": "United States"
  },
  {
    "name": "auckland_070a_new_zealand",
    "lon": 174.77,
    "lat": -36.85,
    "country": "New Zealand"
  },
  {
    "name": "avonmouth_p060_uk",
    "lon": -2.715,
    "lat": 51.511,
    "country": "United Kingdom"
  },
  {
    "name": "awayuki_japan",
    "lon": 134.6,
    "lat": 33.767,
    "country": "Japan"
  },
  {
    "name": "ayukawa_japan",
    "lon": 141.5,
    "lat": 38.3,
    "country": "Japan"
  },
  {
    "name": "bahia_los_angeles_310a_mexico",
    "lon": -113.55,
    "lat": 28.958,
    "country": "Mexico"
  },
  {
    "name": "bajor_414a_indonesia",
    "lon": 117.42,
    "lat": -0.6833,
    "country": "Indonesia"
  },
  {
    "name": "bakar_bakar_I_croatia",
    "lon": 14.533,
    "lat": 45.3,
    "country": "Croatia"
  },
  {
    "name": "balboa_302a_panama",
    "lon": -79.573,
    "lat": 8.9617,
    "country": "Panama"
  },
  {
    "name": "balikpapan_411a_indonesia",
    "lon": 116.8,
    "lat": -1.2667,
    "country": "Indonesia"
  },
  {
    "name": "baltimore_usa",
    "lon": -76.578,
    "lat": 39.267,
    "country": "United States"
  },
  {
    "name": "baltra_b_003b_ecuador",
    "lon": -90.285,
    "lat": -0.435,
    "country": "Ecuador"
  },
  {
    "name": "bamfield,bc_08545_canada",
    "lon": -125.14,
    "lat": 48.836,
    "country": "Canada"
  },
  {
    "name": "bangor_p662_uk",
    "lon": -5.6695,
    "lat": 54.665,
    "country": "United Kingdom"
  },
  {
    "name": "barbers_point,hi_547a_usa",
    "lon": -158.12,
    "lat": 21.32,
    "country": "United States"
  },
  {
    "name": "barcelona_barcelona_spain",
    "lon": 2.163,
    "lat": 41.342,
    "country": "Spain"
  },
  {
    "name": "barharbor,frenchmanbay,me_usa",
    "lon": -68.205,
    "lat": 44.392,
    "country": "United States"
  },
  {
    "name": "bari_bari_italy",
    "lon": 16.912,
    "lat": 41.137,
    "country": "Italy"
  },
  {
    "name": "barmouth_p923_uk",
    "lon": -4.0452,
    "lat": 52.719,
    "country": "United Kingdom"
  },
  {
    "name": "barseback_001_sweden",
    "lon": 12.903,
    "lat": 55.756,
    "country": "Sweden"
  },
  {
    "name": "base_prat_b_730b_chile",
    "lon": -59.633,
    "lat": -62.483,
    "country": "Chile"
  },
  {
    "name": "bayonne_boucau_",
    "lon": -1.5148,
    "lat": 43.527,
    "country": "France"
  },
  {
    "name": "beihai_636a_china",
    "lon": 109.08,
    "lat": 21.483,
    "country": "China"
  },
  {
    "name": "belem,_uscgs_229a_brazil",
    "lon": -48.5,
    "lat": -1.45,
    "country": "Brazil"
  },
  {
    "name": "belize_781a_british_honduras",
    "lon": -88.183,
    "lat": 17.5,
    "country": "Belize"
  },
  {
    "name": "bellabella,bc_08976_canada",
    "lon": -128.14,
    "lat": 52.163,
    "country": "Canada"
  },
  {
    "name": "benoa_b_163b_indonesia",
    "lon": 115.21,
    "lat": -8.745,
    "country": "Indonesia"
  },
  {
    "name": "bermuda,st.georgesisland_001",
    "lon": -64.7,
    "lat": 32.4,
    "country": "Bermuda"
  },
  {
    "name": "bilbao_bilbao_spain",
    "lon": -3.05,
    "lat": 43.357,
    "country": "Spain"
  },
  {
    "name": "bintulu_387a_malaysia",
    "lon": 113.07,
    "lat": 3.2167,
    "country": "Malaysia"
  },
  {
    "name": "bitung_033a_indonesia",
    "lon": 125.19,
    "lat": 1.44,
    "country": "Indonesia"
  },
  {
    "name": "bjorn_028_sweden",
    "lon": 17.967,
    "lat": 60.633,
    "country": "Sweden"
  },
  {
    "name": "bluff_072a_new_zealand",
    "lon": 168.35,
    "lat": -46.6,
    "country": "New Zealand"
  },
  {
    "name": "bonanza_bonanza_spain",
    "lon": -6.34,
    "lat": 36.8,
    "country": "Spain"
  },
  {
    "name": "booby_island_336a_australia",
    "lon": 141.92,
    "lat": -10.6,
    "country": "Australia"
  },
  {
    "name": "boston,ma_741a_usa",
    "lon": -71.052,
    "lat": 42.355,
    "country": "United States"
  },
  {
    "name": "boulogne_sur_mer_",
    "lon": 1.5777,
    "lat": 50.727,
    "country": "France"
  },
  {
    "name": "bournemouth_p988_uk",
    "lon": -1.8749,
    "lat": 50.714,
    "country": "United Kingdom"
  },
  {
    "name": "brest_",
    "lon": -4.5,
    "lat": 48.383,
    "country": "France"
  },
  {
    "name": "bridgeport_usa",
    "lon": -73.182,
    "lat": 41.173,
    "country": "United States"
  },
  {
    "name": "bridgetown_d_249d_barbados",
    "lon": -59.617,
    "lat": 13.1,
    "country": "Barbados"
  },
  {
    "name": "brisbane_002_australia",
    "lon": 153.03,
    "lat": -27.468,
    "country": "Australia"
  },
  {
    "name": "brisbane_331a_australia",
    "lon": 153.17,
    "lat": -27.367,
    "country": "Australia"
  },
  {
    "name": "broome_004_australia",
    "lon": 122.24,
    "lat": -17.955,
    "country": "Australia"
  },
  {
    "name": "buenaventura_085a_colombia",
    "lon": -77.1,
    "lat": 3.9,
    "country": "Colombia"
  },
  {
    "name": "buenos_aires_285a_argentina",
    "lon": -58.5,
    "lat": -34.667,
    "country": "Argentina"
  },
  {
    "name": "bunbury_006_australia",
    "lon": 115.64,
    "lat": -33.327,
    "country": "Australia"
  },
  {
    "name": "bundaberg_003_australia",
    "lon": 152.35,
    "lat": -24.833,
    "country": "Australia"
  },
  {
    "name": "bundaberg_332a_australia",
    "lon": 152.38,
    "lat": -24.767,
    "country": "Australia"
  },
  {
    "name": "burnie_005_australia",
    "lon": 145.91,
    "lat": -41.053,
    "country": "Australia"
  },
  {
    "name": "burnie_344a_australia",
    "lon": 145.91,
    "lat": -41.5,
    "country": "Australia"
  },
  {
    "name": "cabo_san_lucas_034a_mexico",
    "lon": -109.91,
    "lat": 22.88,
    "country": "Mexico"
  },
  {
    "name": "cadiz_cadi_spain",
    "lon": -6.2833,
    "lat": 36.533,
    "country": "Spain"
  },
  {
    "name": "cagliari_cagliari_italy",
    "lon": 9.1143,
    "lat": 39.21,
    "country": "Italy"
  },
  {
    "name": "cairns_007_australia",
    "lon": 145.78,
    "lat": -16.925,
    "country": "Australia"
  },
  {
    "name": "calais_",
    "lon": 1.8677,
    "lat": 50.969,
    "country": "France"
  },
  {
    "name": "caldera,chile_001",
    "lon": -70.833,
    "lat": -27.067,
    "country": "Chile"
  },
  {
    "name": "callao_b_093b_peru",
    "lon": -77.15,
    "lat": -12.05,
    "country": "Peru"
  },
  {
    "name": "cambridgeii_usa",
    "lon": -76.068,
    "lat": 38.573,
    "country": "United States"
  },
  {
    "name": "campbellriver,bc_08074_canada",
    "lon": -125.25,
    "lat": 50.042,
    "country": "Canada"
  },
  {
    "name": "cananeia_281a_brazil",
    "lon": -47.925,
    "lat": -25.017,
    "country": "Brazil"
  },
  {
    "name": "canavieiras,uscgs_707a_brazil",
    "lon": -38.967,
    "lat": -15.667,
    "country": "Brazil"
  },
  {
    "name": "capehatteras,u.s.a._001",
    "lon": -75.635,
    "lat": 35.223,
    "country": "United States"
  },
  {
    "name": "capemay_usa",
    "lon": -74.96,
    "lat": 38.968,
    "country": "United States"
  },
  {
    "name": "cape_ferguson_343a_australia",
    "lon": 147.06,
    "lat": -19.277,
    "country": "Australia"
  },
  {
    "name": "cape_may,nj_746a_usa",
    "lon": -74.96,
    "lat": 38.968,
    "country": "United States"
  },
  {
    "name": "cape_town_704a_south_africa",
    "lon": 18.433,
    "lat": -33.9,
    "country": "South Africa"
  },
  {
    "name": "carloforte_carloforte_italy",
    "lon": 8.3095,
    "lat": 39.148,
    "country": "Italy"
  },
  {
    "name": "carnarvon_008_australia",
    "lon": 113.66,
    "lat": -24.884,
    "country": "Australia"
  },
  {
    "name": "cartagena_b_265b_colombia",
    "lon": -75.533,
    "lat": 10.383,
    "country": "Colombia"
  },
  {
    "name": "cascais_209a_portugal",
    "lon": -9.4167,
    "lat": 38.692,
    "country": "Portugal"
  },
  {
    "name": "casey_130a_australia",
    "lon": 110.53,
    "lat": -66.283,
    "country": "Australia"
  },
  {
    "name": "castletownsend_835a_ireland",
    "lon": -9.1833,
    "lat": 51.533,
    "country": "Ireland"
  },
  {
    "name": "catalina_b_313b_usa",
    "lon": -118.48,
    "lat": 33.45,
    "country": "United States"
  },
  {
    "name": "catania_catania_italy",
    "lon": 15.094,
    "lat": 37.498,
    "country": "Italy"
  },
  {
    "name": "cayenne_227a_france",
    "lon": -52.283,
    "lat": 4.85,
    "country": "France"
  },
  {
    "name": "cebu_379a_philippines",
    "lon": 123.92,
    "lat": 10.3,
    "country": "Philippines"
  },
  {
    "name": "cedarkeyii_usa",
    "lon": -83.032,
    "lat": 29.135,
    "country": "United States"
  },
  {
    "name": "cedros_island_305a_mexico",
    "lon": -115.18,
    "lat": 28.1,
    "country": "Mexico"
  },
  {
    "name": "celestun_861a_mexico",
    "lon": -90.403,
    "lat": 20.858,
    "country": "Mexico"
  },
  {
    "name": "cendering_320a_malaysia",
    "lon": 103.18,
    "lat": 5.2667,
    "country": "Malaysia"
  },
  {
    "name": "centuri_france",
    "lon": 9.3498,
    "lat": 42.966,
    "country": "France"
  },
  {
    "name": "ceuta_ceta_spain",
    "lon": -5.3167,
    "lat": 35.9,
    "country": "Spain"
  },
  {
    "name": "chabahar_915a_iran",
    "lon": 60.603,
    "lat": 25.297,
    "country": "Iran"
  },
  {
    "name": "champerico_670a_guatemala",
    "lon": -91.917,
    "lat": 14.3,
    "country": "Guatemala"
  },
  {
    "name": "charchanga_138a_bangladesh",
    "lon": 91.05,
    "lat": 22.217,
    "country": "Bangladesh"
  },
  {
    "name": "charleston,or_575a_usa",
    "lon": -124.32,
    "lat": 43.345,
    "country": "United States"
  },
  {
    "name": "charleston,sc_261a_usa",
    "lon": -79.925,
    "lat": 32.782,
    "country": "United States"
  },
  {
    "name": "charlottetown,pei_01700_canada",
    "lon": -63.117,
    "lat": 46.233,
    "country": "Canada"
  },
  {
    "name": "charlotte_amalie_255a_usa",
    "lon": -64.92,
    "lat": 18.335,
    "country": "United States"
  },
  {
    "name": "chatham_079a_new_zealand",
    "lon": -176.56,
    "lat": -43.947,
    "country": "New Zealand"
  },
  {
    "name": "cherbourg_",
    "lon": -1.6355,
    "lat": 49.651,
    "country": "France"
  },
  {
    "name": "chesapeake_bbt_749a_usa",
    "lon": -76.113,
    "lat": 36.967,
    "country": "United States"
  },
  {
    "name": "chichijima_japan",
    "lon": 142.18,
    "lat": 27.1,
    "country": "Japan"
  },
  {
    "name": "chittagong_124a_bangladesh",
    "lon": 91.825,
    "lat": 22.247,
    "country": "Bangladesh"
  },
  {
    "name": "choshigyoko_japan",
    "lon": 140.87,
    "lat": 35.75,
    "country": "Japan"
  },
  {
    "name": "christiansted,vi_258a_usa",
    "lon": -64.705,
    "lat": 17.75,
    "country": "United States"
  },
  {
    "name": "christmas_170a_australia",
    "lon": 105.67,
    "lat": -10.417,
    "country": "Australia"
  },
  {
    "name": "christmas_b,lineis.kiribati_001",
    "lon": -157.48,
    "lat": 1.985,
    "country": "Kiribati"
  },
  {
    "name": "churchill_274a_canada",
    "lon": -94.183,
    "lat": 58.767,
    "country": "Canada"
  },
  {
    "name": "chuuk_054a_fd._st._micronesia",
    "lon": 151.85,
    "lat": 7.45,
    "country": "Federated States of Micronesia"
  },
  {
    "name": "cilicap_b_162b_indonesia",
    "lon": 109.02,
    "lat": -7.7517,
    "country": "Indonesia"
  },
  {
    "name": "ciudad_del_carmen_779a_mexico",
    "lon": -91.833,
    "lat": 18.533,
    "country": "Mexico"
  },
  {
    "name": "civitavecchia_civitavecchia_italy",
    "lon": 11.79,
    "lat": 42.094,
    "country": "Italy"
  },
  {
    "name": "clearwater_bch,fl_773a_usa",
    "lon": -82.832,
    "lat": 27.977,
    "country": "United States"
  },
  {
    "name": "cocoa_beach,_fl_754a_usa",
    "lon": -80.6,
    "lat": 28.368,
    "country": "United States"
  },
  {
    "name": "cocos_171a_australia",
    "lon": 96.883,
    "lat": -12.117,
    "country": "Australia"
  },
  {
    "name": "colombo_c_115c_sri_lanka",
    "lon": 79.85,
    "lat": 6.9333,
    "country": "Sri Lanka"
  },
  {
    "name": "concarneau_",
    "lon": -3.9072,
    "lat": 47.874,
    "country": "France"
  },
  {
    "name": "cordemais_",
    "lon": -1.8898,
    "lat": 47.277,
    "country": "France"
  },
  {
    "name": "cordova_b,alaska_583b_usa",
    "lon": -145.75,
    "lat": 60.558,
    "country": "United States"
  },
  {
    "name": "corinto_679a_nicaragua",
    "lon": -87.117,
    "lat": 12.283,
    "country": "Nicaragua"
  },
  {
    "name": "corpus_cristi,tx_770a_usa",
    "lon": -97.217,
    "lat": 27.58,
    "country": "United States"
  },
  {
    "name": "coruna_coru_spain",
    "lon": -8.4,
    "lat": 43.367,
    "country": "Spain"
  },
  {
    "name": "cox_s_bazaar_136a_bangladesh",
    "lon": 91.833,
    "lat": 21.45,
    "country": "Bangladesh"
  },
  {
    "name": "crescent_city,ca_556a_usa",
    "lon": -124.18,
    "lat": 41.745,
    "country": "United States"
  },
  {
    "name": "cristobal_266a_panama",
    "lon": -79.915,
    "lat": 9.355,
    "country": "Panama"
  },
  {
    "name": "cromer_p183_uk",
    "lon": 1.3016,
    "lat": 52.934,
    "country": "United Kingdom"
  },
  {
    "name": "crotone_crotone_italy",
    "lon": 17.137,
    "lat": 39.082,
    "country": "Italy"
  },
  {
    "name": "crozet_b_178b_france",
    "lon": 51.87,
    "lat": -46.425,
    "country": "France"
  },
  {
    "name": "culebra,_pr_219a_usa",
    "lon": -65.302,
    "lat": 18.3,
    "country": "United States"
  },
  {
    "name": "currimao_654a_philippines",
    "lon": 120.49,
    "lat": 17.988,
    "country": "Philippines"
  },
  {
    "name": "cuxhaven_germany",
    "lon": 8.7167,
    "lat": 53.867,
    "country": "Germany"
  },
  {
    "name": "dakar_e_223e_senegal",
    "lon": -17.43,
    "lat": 14.667,
    "country": "Senegal"
  },
  {
    "name": "dalian_a_630a_china",
    "lon": 121.66,
    "lat": 38.925,
    "country": "China"
  },
  {
    "name": "dallmann_c_682c_unconfirmed",
    "lon": -58.683,
    "lat": -62.233,
    "country": "Unconfirmed"
  },
  {
    "name": "darwin_009_australia",
    "lon": 130.85,
    "lat": -12.467,
    "country": "Australia"
  },
  {
    "name": "dar_es_salaam_102a_tanzania",
    "lon": 39.288,
    "lat": -6.82,
    "country": "Tanzania"
  },
  {
    "name": "dauphin_island,_al_763a_usa",
    "lon": -88.075,
    "lat": 30.25,
    "country": "United States"
  },
  {
    "name": "davao_b_372b_philippines",
    "lon": 125.63,
    "lat": 7.0833,
    "country": "Philippines"
  },
  {
    "name": "davis,australia_001",
    "lon": 78.5,
    "lat": -68,
    "country": "Australia"
  },
  {
    "name": "davis_173a_australia",
    "lon": 77.967,
    "lat": -68.45,
    "country": "Australia"
  },
  {
    "name": "degerby_001_finland",
    "lon": 20.385,
    "lat": 60.032,
    "country": "Finland"
  },
  {
    "name": "delfzijl_del_nl",
    "lon": 6.9331,
    "lat": 53.326,
    "country": "Netherlands"
  },
  {
    "name": "denhelder_hel_nl",
    "lon": 4.7464,
    "lat": 52.965,
    "country": "Netherlands"
  },
  {
    "name": "devonport_p002_uk",
    "lon": -4.1852,
    "lat": 50.368,
    "country": "United Kingdom"
  },
  {
    "name": "diegogarcia_d,uk_001",
    "lon": 72.433,
    "lat": -7.2333,
    "country": "British Indian Ocean Territory"
  },
  {
    "name": "diegoramirez,chile_001",
    "lon": -68.667,
    "lat": -56.558,
    "country": "Chile"
  },
  {
    "name": "diego_garcia_d_104d_united_kingdom",
    "lon": 72.433,
    "lat": -7.2333,
    "country": "British Indian Ocean Territory"
  },
  {
    "name": "diego_ramirez_599a_chile",
    "lon": -68.715,
    "lat": -56.508,
    "country": "Chile"
  },
  {
    "name": "dieppe_",
    "lon": 1.0845,
    "lat": 49.929,
    "country": "France"
  },
  {
    "name": "djibouti_119a_djibouti",
    "lon": 43.14,
    "lat": 11.608,
    "country": "Djibouti"
  },
  {
    "name": "donges_",
    "lon": -2.0883,
    "lat": 47.306,
    "country": "France"
  },
  {
    "name": "dongfang_637a_china",
    "lon": 108.62,
    "lat": 19.1,
    "country": "China"
  },
  {
    "name": "dover_p012_uk",
    "lon": 1.3181,
    "lat": 51.117,
    "country": "United Kingdom"
  },
  {
    "name": "draghallan_002_sweden",
    "lon": 17.533,
    "lat": 62.367,
    "country": "Sweden"
  },
  {
    "name": "duck_pier,nc_260a_usa",
    "lon": -75.74,
    "lat": 36.183,
    "country": "United States"
  },
  {
    "name": "dumont_d_urville_189a_france",
    "lon": 140.01,
    "lat": -66.662,
    "country": "France"
  },
  {
    "name": "dunkerque_",
    "lon": 2.3667,
    "lat": 51.048,
    "country": "France"
  },
  {
    "name": "durban_181a_south_africa",
    "lon": 31.05,
    "lat": -29.867,
    "country": "South Africa"
  },
  {
    "name": "dutch_harbor_b,ak_041b_usa",
    "lon": -166.54,
    "lat": 53.88,
    "country": "United States"
  },
  {
    "name": "dzaoudi_155a_mayotte",
    "lon": 45.257,
    "lat": -12.78,
    "country": "France"
  },
  {
    "name": "easter_c_022c_chile",
    "lon": -109.45,
    "lat": -27.15,
    "country": "Chile"
  },
  {
    "name": "eastport,me_740a_usa",
    "lon": -66.985,
    "lat": 44.903,
    "country": "United States"
  },
  {
    "name": "east_london_187a_south_africa",
    "lon": 27.917,
    "lat": -33.017,
    "country": "South Africa"
  },
  {
    "name": "el_hierro_elhierro_spain",
    "lon": -17.9,
    "lat": 27.78,
    "country": "Spain"
  },
  {
    "name": "enewetok_b_006b_rep._of_marshall_i",
    "lon": 162.39,
    "lat": 11.43,
    "country": "Marshall Islands"
  },
  {
    "name": "ensenada_317a_mexico",
    "lon": -116.63,
    "lat": 31.85,
    "country": "Mexico"
  },
  {
    "name": "esbjerg_130121_denmark",
    "lon": 8.4333,
    "lat": 55.467,
    "country": "Denmark"
  },
  {
    "name": "esmeraldas_098a_ecuador",
    "lon": -79.647,
    "lat": 0.9917,
    "country": "Ecuador"
  },
  {
    "name": "esperance_010_australia",
    "lon": 121.89,
    "lat": -33.861,
    "country": "Australia"
  },
  {
    "name": "esperanza,argentina_001",
    "lon": -56.995,
    "lat": -63.395,
    "country": "Argentina"
  },
  {
    "name": "esperanza,_pr_733a_usa",
    "lon": -65.47,
    "lat": 18.093,
    "country": "United States"
  },
  {
    "name": "esperence,australia_001",
    "lon": 121.9,
    "lat": -33.867,
    "country": "Australia"
  },
  {
    "name": "exuma_cays_256a_bahamas",
    "lon": -76.105,
    "lat": 23.773,
    "country": "The Bahamas"
  },
  {
    "name": "fajardo_b,pr_783b_usa",
    "lon": -65.633,
    "lat": 18.333,
    "country": "United States"
  },
  {
    "name": "fanning_c_012c_rep._of_kiribati",
    "lon": -159.39,
    "lat": 3.9067,
    "country": "Kiribati"
  },
  {
    "name": "faraday_700a_united_kingdom",
    "lon": -64.267,
    "lat": -65.25,
    "country": "United Kingdom"
  },
  {
    "name": "felixstowe_p204_uk",
    "lon": 1.3484,
    "lat": 51.957,
    "country": "United Kingdom"
  },
  {
    "name": "fer._de_noronha_c_203c_brazil",
    "lon": -32.403,
    "lat": -3.8283,
    "country": "Brazil"
  },
  {
    "name": "fernandina_beach_240a_usa",
    "lon": -81.467,
    "lat": 30.672,
    "country": "United States"
  },
  {
    "name": "ferrol_ferrol_spain",
    "lon": -8.326,
    "lat": 43.463,
    "country": "Spain"
  },
  {
    "name": "fishguard_p055_uk",
    "lon": -4.9833,
    "lat": 52.014,
    "country": "United Kingdom"
  },
  {
    "name": "flores,santa_cruz_210a_portugal",
    "lon": -31.168,
    "lat": 39.378,
    "country": "Portugal"
  },
  {
    "name": "formentera_formentera_spain",
    "lon": 1.4189,
    "lat": 38.735,
    "country": "Spain"
  },
  {
    "name": "forsmark_003_sweden",
    "lon": 18.211,
    "lat": 60.409,
    "country": "Sweden"
  },
  {
    "name": "fortaleza_c_283c_brazil",
    "lon": -38.467,
    "lat": -3.7167,
    "country": "Brazil"
  },
  {
    "name": "fortdenison_011_australia",
    "lon": 151.23,
    "lat": -33.85,
    "country": "Australia"
  },
  {
    "name": "fortmyers_usa",
    "lon": -81.871,
    "lat": 26.648,
    "country": "United States"
  },
  {
    "name": "fortpulaski_usa",
    "lon": -80.902,
    "lat": 32.033,
    "country": "United States"
  },
  {
    "name": "fort_denison_333a_australia",
    "lon": 151.23,
    "lat": -33.85,
    "country": "Australia"
  },
  {
    "name": "fort_de_france_271a_france",
    "lon": -61.05,
    "lat": 14.583,
    "country": "France"
  },
  {
    "name": "fort_pulaski,ga_752a_usa",
    "lon": -80.902,
    "lat": 32.033,
    "country": "United States"
  },
  {
    "name": "fos_sur_mer_france",
    "lon": 4.8929,
    "lat": 43.405,
    "country": "France"
  },
  {
    "name": "freeport_usa",
    "lon": -95.308,
    "lat": 28.948,
    "country": "United States"
  },
  {
    "name": "fremantle_012_australia",
    "lon": 115.75,
    "lat": -32.053,
    "country": "Australia"
  },
  {
    "name": "french_frigate_b_014b_usa",
    "lon": -166.29,
    "lat": 23.868,
    "country": "United States"
  },
  {
    "name": "fridayharbor_ocean.labs.__usa",
    "lon": -123.01,
    "lat": 48.547,
    "country": "United States"
  },
  {
    "name": "fuerteventura_fuerteventura_spain",
    "lon": -13.85,
    "lat": 28.5,
    "country": "Spain"
  },
  {
    "name": "fukaura_japan",
    "lon": 139.93,
    "lat": 40.65,
    "country": "Japan"
  },
  {
    "name": "fukue_japan",
    "lon": 128.85,
    "lat": 32.7,
    "country": "Japan"
  },
  {
    "name": "fulfordharbour,bc_07330_canada",
    "lon": -123.45,
    "lat": 48.769,
    "country": "Canada"
  },
  {
    "name": "funafuti,tuvalu_001",
    "lon": 179.19,
    "lat": -8.525,
    "country": "Tuvalu"
  },
  {
    "name": "funchal_b_218b_portugal",
    "lon": -16.907,
    "lat": 32.64,
    "country": "Portugal"
  },
  {
    "name": "furuogrund_004_sweden",
    "lon": 21.231,
    "lat": 64.916,
    "country": "Sweden"
  },
  {
    "name": "galveston,pier_21_775a_usa",
    "lon": -94.79,
    "lat": 29.287,
    "country": "United States"
  },
  {
    "name": "gandia_gandia_spain",
    "lon": -0.152,
    "lat": 38.995,
    "country": "Spain"
  },
  {
    "name": "gan_109a_rep._of_maldives",
    "lon": 73.152,
    "lat": -0.6867,
    "country": "Maldives"
  },
  {
    "name": "gedser_837a_denmark",
    "lon": 11.933,
    "lat": 54.567,
    "country": "Denmark"
  },
  {
    "name": "geelong_013_australia",
    "lon": 144.36,
    "lat": -38.147,
    "country": "Australia"
  },
  {
    "name": "genova_genova_italy",
    "lon": 8.9253,
    "lat": 44.41,
    "country": "Italy"
  },
  {
    "name": "georgetown_015_australia",
    "lon": 146.85,
    "lat": -41.133,
    "country": "Australia"
  },
  {
    "name": "geraldton_014_australia",
    "lon": 114.61,
    "lat": -28.773,
    "country": "Australia"
  },
  {
    "name": "geting_326a_malaysia",
    "lon": 102.11,
    "lat": 6.2267,
    "country": "Malaysia"
  },
  {
    "name": "gibara_244a_cuba",
    "lon": -76.117,
    "lat": 21.117,
    "country": "Cuba"
  },
  {
    "name": "gibraltar_289a_united_kingdom",
    "lon": -5.35,
    "lat": 36.117,
    "country": "Gibraltar"
  },
  {
    "name": "gijon_gijon_spain",
    "lon": -5.698,
    "lat": 43.558,
    "country": "Spain"
  },
  {
    "name": "gisborne_b_078b_new_zealand",
    "lon": 178.03,
    "lat": -38.683,
    "country": "New Zealand"
  },
  {
    "name": "gladstone_p234_uk",
    "lon": -3.018,
    "lat": 53.45,
    "country": "United Kingdom"
  },
  {
    "name": "gloucesterpoint_usa",
    "lon": -76.5,
    "lat": 37.247,
    "country": "United States"
  },
  {
    "name": "gobo_japan",
    "lon": 135.17,
    "lat": 33.85,
    "country": "Japan"
  },
  {
    "name": "gomera_gomera_spain",
    "lon": -17,
    "lat": 28,
    "country": "Spain"
  },
  {
    "name": "goteborgtorshamnen_005_sweden",
    "lon": 11.8,
    "lat": 57.683,
    "country": "Sweden"
  },
  {
    "name": "grandisle_usa",
    "lon": -89.957,
    "lat": 29.263,
    "country": "United States"
  },
  {
    "name": "groote_eylandt_145a_australia",
    "lon": 136.42,
    "lat": -13.86,
    "country": "Australia"
  },
  {
    "name": "guadalupe_036a_mexico",
    "lon": -118.3,
    "lat": 28.883,
    "country": "Mexico"
  },
  {
    "name": "guam_053a_usa_trust",
    "lon": 144.65,
    "lat": 13.433,
    "country": "United States"
  },
  {
    "name": "guantanamo_bay_b_251b_cuba",
    "lon": -75.147,
    "lat": 19.907,
    "country": "Cuba"
  },
  {
    "name": "guaymas_397a_mexico",
    "lon": -110.9,
    "lat": 27.933,
    "country": "Mexico"
  },
  {
    "name": "hachinohe_japan",
    "lon": 141.53,
    "lat": 40.533,
    "country": "Japan"
  },
  {
    "name": "haikou_638a_china",
    "lon": 110.28,
    "lat": 20.017,
    "country": "China"
  },
  {
    "name": "hakodate_japan",
    "lon": 140.73,
    "lat": 41.783,
    "country": "Japan"
  },
  {
    "name": "halifax,ns_00490_canada",
    "lon": -63.583,
    "lat": 44.667,
    "country": "Canada"
  },
  {
    "name": "hamada_japan",
    "lon": 132.07,
    "lat": 34.9,
    "country": "Japan"
  },
  {
    "name": "hamina_002_finland",
    "lon": 27.179,
    "lat": 60.563,
    "country": "Finland"
  },
  {
    "name": "hanasaki_japan",
    "lon": 145.57,
    "lat": 43.283,
    "country": "Japan"
  },
  {
    "name": "hanimaadhoo_b_117b_rep._of_maldives",
    "lon": 73.167,
    "lat": 6.7667,
    "country": "Republic of Maldives"
  },
  {
    "name": "hanko_003_finland",
    "lon": 22.977,
    "lat": 59.823,
    "country": "Finland"
  },
  {
    "name": "harvest_oil_p.,ca_594a_usa",
    "lon": -120.67,
    "lat": 34.468,
    "country": "United States"
  },
  {
    "name": "harwich_p022_uk",
    "lon": 1.2845,
    "lat": 51.947,
    "country": "United Kingdom"
  },
  {
    "name": "heimsjoe_001_norway",
    "lon": 9.1014,
    "lat": 63.425,
    "country": "Norway"
  },
  {
    "name": "helsinki_004_finland",
    "lon": 24.956,
    "lat": 60.154,
    "country": "Finland"
  },
  {
    "name": "heysham_p050_uk",
    "lon": -2.9204,
    "lat": 54.032,
    "country": "United Kingdom"
  },
  {
    "name": "hillarys_132a_australia",
    "lon": 115.74,
    "lat": -31.825,
    "country": "Australia"
  },
  {
    "name": "hilo,_hawaii_060a_usa",
    "lon": -155.07,
    "lat": 19.733,
    "country": "United States"
  },
  {
    "name": "hinkleypoint_p003_uk",
    "lon": -3.1343,
    "lat": 51.215,
    "country": "United Kingdom"
  },
  {
    "name": "hiron_point_134a_bangladesh",
    "lon": 89.467,
    "lat": 21.783,
    "country": "Bangladesh"
  },
  {
    "name": "hiva_oa_017a_french_polynesia",
    "lon": -139.03,
    "lat": -9.81,
    "country": "France"
  },
  {
    "name": "hobart_016_australia",
    "lon": 147.33,
    "lat": -42.883,
    "country": "Australia"
  },
  {
    "name": "hoekvanholla_hvh_nl",
    "lon": 4.12,
    "lat": 51.977,
    "country": "Netherlands"
  },
  {
    "name": "hofu_japan",
    "lon": 131.58,
    "lat": 34.033,
    "country": "Japan"
  },
  {
    "name": "holyhead_p054_uk",
    "lon": -4.6312,
    "lat": 53.308,
    "country": "United Kingdom"
  },
  {
    "name": "hong_kong_b_329b_china",
    "lon": 114.2,
    "lat": 22.3,
    "country": "China"
  },
  {
    "name": "honiara,solomonislands_001",
    "lon": 159.96,
    "lat": -9.425,
    "country": "Solomon Islands"
  },
  {
    "name": "honmoku_japan",
    "lon": 139.67,
    "lat": 35.433,
    "country": "Japan"
  },
  {
    "name": "honningsvaag_002_norway",
    "lon": 25.973,
    "lat": 70.98,
    "country": "Norway"
  },
  {
    "name": "honolulu_b,hawaii_057b_usa",
    "lon": -157.86,
    "lat": 21.295,
    "country": "United States"
  },
  {
    "name": "hon_dau_b_650b_vietnam",
    "lon": 106.82,
    "lat": 20.667,
    "country": "Vietnam"
  },
  {
    "name": "hornbaek_838a_denmark",
    "lon": 12.467,
    "lat": 56.1,
    "country": "Denmark"
  },
  {
    "name": "horta,azores_212a_portugal",
    "lon": -28.622,
    "lat": 38.533,
    "country": "Portugal"
  },
  {
    "name": "hosojima_358a_japan",
    "lon": 131.68,
    "lat": 32.417,
    "country": "Japan"
  },
  {
    "name": "huelva_huelva_spain",
    "lon": -6.834,
    "lat": 37.132,
    "country": "Spain"
  },
  {
    "name": "humboldt_bay,_ca_576a_usa",
    "lon": -124.22,
    "lat": 40.767,
    "country": "United States"
  },
  {
    "name": "ibiza_ibiza_spain",
    "lon": 1.4497,
    "lat": 38.911,
    "country": "Spain"
  },
  {
    "name": "ile_royale_850a_france",
    "lon": -52.585,
    "lat": 5.285,
    "country": "France"
  },
  {
    "name": "ilfracombe_p061_uk",
    "lon": -4.1109,
    "lat": 51.211,
    "country": "United Kingdom"
  },
  {
    "name": "ilha_fiscal,rj_280a_brazil",
    "lon": -43.165,
    "lat": -22.897,
    "country": "Brazil"
  },
  {
    "name": "ilulissat,greenland_001",
    "lon": -51.1,
    "lat": 69.217,
    "country": "Greenland"
  },
  {
    "name": "imbituba_718a_brazil",
    "lon": -48.4,
    "lat": -28.133,
    "country": "Brazil"
  },
  {
    "name": "immingham_p026_uk",
    "lon": -0.18603,
    "lat": 53.631,
    "country": "United Kingdom"
  },
  {
    "name": "imperia_imperia_italy",
    "lon": 8.0188,
    "lat": 43.878,
    "country": "Italy"
  },
  {
    "name": "irouzaki_japan",
    "lon": 138.85,
    "lat": 34.617,
    "country": "Japan"
  },
  {
    "name": "isabel_segunda,_pr_732a_usa",
    "lon": -65.443,
    "lat": 18.152,
    "country": "United States"
  },
  {
    "name": "ishigaki_japan",
    "lon": 124.15,
    "lat": 24.333,
    "country": "Japan"
  },
  {
    "name": "isladapascua_e,chile_001",
    "lon": -109.45,
    "lat": -27.15,
    "country": "Chile"
  },
  {
    "name": "iwasaki_japan",
    "lon": 139.92,
    "lat": 40.583,
    "country": "Japan"
  },
  {
    "name": "i_royal,anselegoff_851a_france",
    "lon": -52.587,
    "lat": 5.2883,
    "country": "France"
  },
  {
    "name": "jackson_403a_new_zealand",
    "lon": 168.62,
    "lat": -43.983,
    "country": "New Zealand"
  },
  {
    "name": "jakarta_161a_indonesia",
    "lon": 106.85,
    "lat": -6.1167,
    "country": "Indonesia"
  },
  {
    "name": "johnston_052a_usa_trust",
    "lon": -169.53,
    "lat": 16.738,
    "country": "United States"
  },
  {
    "name": "johor_baharu_321a_malaysia",
    "lon": 103.79,
    "lat": 1.4617,
    "country": "Singapore"
  },
  {
    "name": "jolo_373a_philippines",
    "lon": 121,
    "lat": 6.0667,
    "country": "Philippines"
  },
  {
    "name": "juan_fernandez_b_021b_chile",
    "lon": -78.833,
    "lat": -33.622,
    "country": "Chile"
  },
  {
    "name": "juneau_usa",
    "lon": -134.41,
    "lat": 58.298,
    "country": "United States"
  },
  {
    "name": "kagoshima_japan",
    "lon": 130.57,
    "lat": 31.583,
    "country": "Japan"
  },
  {
    "name": "kahului_059a_usa",
    "lon": -156.47,
    "lat": 20.9,
    "country": "United States"
  },
  {
    "name": "kalix_006_sweden",
    "lon": 23.096,
    "lat": 65.697,
    "country": "Sweden"
  },
  {
    "name": "kanmen_a_632a_china",
    "lon": 121.28,
    "lat": 28.088,
    "country": "China"
  },
  {
    "name": "kanton_b,kiribati_001",
    "lon": -171.72,
    "lat": -2.81,
    "country": "Kiribati"
  },
  {
    "name": "kaohsiung_340a_republic_of_china",
    "lon": 120.29,
    "lat": 22.615,
    "country": "Taiwan"
  },
  {
    "name": "kapingamarangi_029a_fd._st._micronesia",
    "lon": 154.78,
    "lat": 1.0983,
    "country": "Federated States of Micronesia"
  },
  {
    "name": "karachi_b_147b_pakistan",
    "lon": 66.967,
    "lat": 24.8,
    "country": "Pakistan"
  },
  {
    "name": "kaskinen_005_finland",
    "lon": 21.215,
    "lat": 62.344,
    "country": "Finland"
  },
  {
    "name": "kaumalapau,_hi_548a_usa",
    "lon": -156.9,
    "lat": 20.78,
    "country": "United States"
  },
  {
    "name": "kavieng_068a_papua_new_guinea",
    "lon": 150.79,
    "lat": -2.585,
    "country": "Papua New Guinea"
  },
  {
    "name": "kawaihae_552a_usa",
    "lon": -155.83,
    "lat": 20.033,
    "country": "United States"
  },
  {
    "name": "kawasaki_japan",
    "lon": 139.75,
    "lat": 35.517,
    "country": "Japan"
  },
  {
    "name": "keelung_341a_republic_of_china",
    "lon": 121.75,
    "lat": 25.157,
    "country": "Taiwan"
  },
  {
    "name": "kelang_140a_malaysia",
    "lon": 101.36,
    "lat": 3.05,
    "country": "Malaysia"
  },
  {
    "name": "keling_141a_malaysia",
    "lon": 102.15,
    "lat": 2.215,
    "country": "Malaysia"
  },
  {
    "name": "kemi_006_finland",
    "lon": 24.515,
    "lat": 65.673,
    "country": "Finland"
  },
  {
    "name": "keppel_harbour_327a_singapore",
    "lon": 103.82,
    "lat": 1.2633,
    "country": "Singapore"
  },
  {
    "name": "kerguelen_001",
    "lon": 70.167,
    "lat": -48.858,
    "country": "France"
  },
  {
    "name": "kerguelen_180a_france",
    "lon": 70.22,
    "lat": -49.345,
    "country": "France"
  },
  {
    "name": "ketchikan,ak_571a_usa",
    "lon": -131.63,
    "lat": 55.333,
    "country": "United States"
  },
  {
    "name": "key_west,fl_242a_usa",
    "lon": -81.808,
    "lat": 24.553,
    "country": "United States"
  },
  {
    "name": "khal_#10_135a_bangladesh",
    "lon": 91.817,
    "lat": 22.267,
    "country": "Bangladesh"
  },
  {
    "name": "khepupara_139a_bangladesh",
    "lon": 89.833,
    "lat": 21.833,
    "country": "Bangladesh"
  },
  {
    "name": "kingedwardpoint_uk",
    "lon": -36.497,
    "lat": -54.283,
    "country": "South Georgia and the South Sandwich Islands"
  },
  {
    "name": "kinlochbervi_p918_uk",
    "lon": -5.0504,
    "lat": 58.457,
    "country": "United Kingdom"
  },
  {
    "name": "kiptopekebeach_usa",
    "lon": -75.988,
    "lat": 37.165,
    "country": "United States"
  },
  {
    "name": "klagshamn_007_sweden",
    "lon": 12.894,
    "lat": 55.522,
    "country": "Sweden"
  },
  {
    "name": "knysna_186a_south_africa",
    "lon": 23.033,
    "lat": -32.033,
    "country": "South Africa"
  },
  {
    "name": "kobe_japan",
    "lon": 135.18,
    "lat": 34.683,
    "country": "Japan"
  },
  {
    "name": "kochi_japan",
    "lon": 133.57,
    "lat": 33.5,
    "country": "Japan"
  },
  {
    "name": "kodiak_isl.,alaska_039a_usa",
    "lon": -152.51,
    "lat": 57.732,
    "country": "United States"
  },
  {
    "name": "komatsushima_japan",
    "lon": 134.58,
    "lat": 34.017,
    "country": "Japan"
  },
  {
    "name": "kota_kinabalu_386a_malaysia",
    "lon": 116.07,
    "lat": 5.9833,
    "country": "Malaysia"
  },
  {
    "name": "ko_lak_328a_thailand",
    "lon": 99.817,
    "lat": 11.795,
    "country": "Thailand"
  },
  {
    "name": "ko_taphao_noi_148a_thailand",
    "lon": 98.425,
    "lat": 7.8317,
    "country": "Thailand"
  },
  {
    "name": "kuantan_322a_malaysia",
    "lon": 103.43,
    "lat": 3.975,
    "country": "Malaysia"
  },
  {
    "name": "kuchinotsu_japan",
    "lon": 130.2,
    "lat": 32.6,
    "country": "Japan"
  },
  {
    "name": "kukup_325a_malaysia",
    "lon": 103.44,
    "lat": 1.325,
    "country": "Malaysia"
  },
  {
    "name": "kumano_japan",
    "lon": 136.17,
    "lat": 33.933,
    "country": "Japan"
  },
  {
    "name": "kungsholmsfort_008_sweden",
    "lon": 15.589,
    "lat": 56.105,
    "country": "Sweden"
  },
  {
    "name": "kungsvik_009_sweden",
    "lon": 11.127,
    "lat": 58.997,
    "country": "Sweden"
  },
  {
    "name": "kushimoto_japan",
    "lon": 135.78,
    "lat": 33.467,
    "country": "Japan"
  },
  {
    "name": "kushiro_japan",
    "lon": 144.38,
    "lat": 42.967,
    "country": "Japan"
  },
  {
    "name": "kwajalein_055a_rep._of_marshall_i",
    "lon": 167.73,
    "lat": 8.7333,
    "country": "Marshall Islands"
  },
  {
    "name": "l._cornwallis_i._705a_canada",
    "lon": -96.95,
    "lat": 75.383,
    "country": "Canada"
  },
  {
    "name": "lae_067a_papua_new_guinea",
    "lon": 146.98,
    "lat": -6.7333,
    "country": "Papua New Guinea"
  },
  {
    "name": "lagos,_algarve_723a_portugal",
    "lon": -8.6683,
    "lat": 37.098,
    "country": "Portugal"
  },
  {
    "name": "lagos_c_233c_nigeria",
    "lon": 3.45,
    "lat": 6.4167,
    "country": "Nigeria"
  },
  {
    "name": "lajolla_scrippspier__usa",
    "lon": -117.26,
    "lat": 32.867,
    "country": "United States"
  },
  {
    "name": "lameshur_bay,_vi_214a_usa",
    "lon": -64.723,
    "lat": 18.317,
    "country": "United States"
  },
  {
    "name": "lampedusa_lampedusa_italy",
    "lon": 12.604,
    "lat": 35.5,
    "country": "Italy"
  },
  {
    "name": "lamu_b_149b_kenya",
    "lon": 40.903,
    "lat": -2.2717,
    "country": "Kenya"
  },
  {
    "name": "landsortnorra_010_sweden",
    "lon": 17.865,
    "lat": 58.742,
    "country": "Sweden"
  },
  {
    "name": "langkawi_142a_malaysia",
    "lon": 99.765,
    "lat": 6.4317,
    "country": "Malaysia"
  },
  {
    "name": "laohutan_a_631a_china",
    "lon": 121.68,
    "lat": 38.867,
    "country": "China"
  },
  {
    "name": "las_palmas_laspalmas_spain",
    "lon": -15.412,
    "lat": 28.141,
    "country": "Spain"
  },
  {
    "name": "lautoka_402a_fiji",
    "lon": 177.43,
    "lat": -17.6,
    "country": "Fiji"
  },
  {
    "name": "la_coruna_830a_spain",
    "lon": -8.4,
    "lat": 43.367,
    "country": "Spain"
  },
  {
    "name": "la_figueirette_france",
    "lon": 6.9349,
    "lat": 43.483,
    "country": "France"
  },
  {
    "name": "la_guaira_247a_venezuela",
    "lon": -66.933,
    "lat": 10.617,
    "country": "Venezuela"
  },
  {
    "name": "la_jolla,ca_554a_usa",
    "lon": -117.26,
    "lat": 32.867,
    "country": "United States"
  },
  {
    "name": "la_libertad_091a_ecuador",
    "lon": -80.917,
    "lat": -2.2,
    "country": "Ecuador"
  },
  {
    "name": "la_palma_lapalma_spain",
    "lon": -17.768,
    "lat": 28.678,
    "country": "Spain"
  },
  {
    "name": "la_paz_671a_mexico",
    "lon": -110.34,
    "lat": 24.162,
    "country": "Mexico"
  },
  {
    "name": "la_rochelle_la_palli_",
    "lon": -1.2206,
    "lat": 46.158,
    "country": "France"
  },
  {
    "name": "la_union_b_086b_el_salvador",
    "lon": -87.817,
    "lat": 13.333,
    "country": "El Salvador"
  },
  {
    "name": "legaspi_371a_philippines",
    "lon": 123.75,
    "lat": 13.15,
    "country": "Philippines"
  },
  {
    "name": "leith_p034_uk",
    "lon": -3.1817,
    "lat": 55.99,
    "country": "United Kingdom"
  },
  {
    "name": "lembar_419a_indonesia",
    "lon": 116.07,
    "lat": -8.7317,
    "country": "Indonesia"
  },
  {
    "name": "lerwick_p041_uk",
    "lon": -1.1333,
    "lat": 60.15,
    "country": "United Kingdom"
  },
  {
    "name": "les_sables_d_olonne_",
    "lon": -1.7935,
    "lat": 46.497,
    "country": "France"
  },
  {
    "name": "lewes,de_747a_usa",
    "lon": -75.12,
    "lat": 38.782,
    "country": "United States"
  },
  {
    "name": "le_conquet_",
    "lon": -4.7807,
    "lat": 48.359,
    "country": "France"
  },
  {
    "name": "le_crouesty_",
    "lon": -2.8952,
    "lat": 47.543,
    "country": "France"
  },
  {
    "name": "le_havre_",
    "lon": 0.106,
    "lat": 49.482,
    "country": "France"
  },
  {
    "name": "le_pellerin_",
    "lon": -1.7651,
    "lat": 47.205,
    "country": "France"
  },
  {
    "name": "le_robert_270a_france",
    "lon": -60.933,
    "lat": 14.683,
    "country": "France"
  },
  {
    "name": "lianyungang_639a_china",
    "lon": 119.42,
    "lat": 34.75,
    "country": "China"
  },
  {
    "name": "limetree_bay_254a_usa",
    "lon": -64.753,
    "lat": 17.697,
    "country": "United States"
  },
  {
    "name": "limon_b_268b_costa_rica",
    "lon": -83.033,
    "lat": 10,
    "country": "Costa Rica"
  },
  {
    "name": "livorno_livorno_italy",
    "lon": 10.299,
    "lat": 43.546,
    "country": "Italy"
  },
  {
    "name": "llandudno_p007_uk",
    "lon": -3.8252,
    "lat": 53.332,
    "country": "United Kingdom"
  },
  {
    "name": "lobito_237a_angola",
    "lon": 13.558,
    "lat": -12.333,
    "country": "Angola"
  },
  {
    "name": "lobos_de_afuera_084a_peru",
    "lon": -80.717,
    "lat": -6.9333,
    "country": "Peru"
  },
  {
    "name": "lombrum_400a_papua_new_guinea",
    "lon": 147.37,
    "lat": -2.0333,
    "country": "Papua New Guinea"
  },
  {
    "name": "lord_howe_b_399b_australia",
    "lon": 159.07,
    "lat": -31.517,
    "country": "Australia"
  },
  {
    "name": "loreto_319a_mexico",
    "lon": -111.37,
    "lat": 26.017,
    "country": "Mexico"
  },
  {
    "name": "los_angeles,ca_567a_usa",
    "lon": -118.27,
    "lat": 33.72,
    "country": "United States"
  },
  {
    "name": "lowerescuminac,nb_02000_canada",
    "lon": -64.883,
    "lat": 47.083,
    "country": "Canada"
  },
  {
    "name": "lowestoft_p024_uk",
    "lon": 1.7508,
    "lat": 52.473,
    "country": "United Kingdom"
  },
  {
    "name": "luanda_236a_angola",
    "lon": 13.237,
    "lat": -8.7867,
    "country": "Angola"
  },
  {
    "name": "lubang_655a_philippines",
    "lon": 120.21,
    "lat": 13.82,
    "country": "Philippines"
  },
  {
    "name": "luderitz_702a_south_africa",
    "lon": 15.15,
    "lat": -26.65,
    "country": "Namibia"
  },
  {
    "name": "luis_correia_711a_brazil",
    "lon": -41.672,
    "lat": -2.8667,
    "country": "Brazil"
  },
  {
    "name": "lumut_143a_malaysia",
    "lon": 100.62,
    "lat": 4.2333,
    "country": "Malaysia"
  },
  {
    "name": "lungsurannaga_410a_indonesia",
    "lon": 117.75,
    "lat": 2.1,
    "country": "Indonesia"
  },
  {
    "name": "lusi_a_633a_china",
    "lon": 121.62,
    "lat": 32.133,
    "country": "China"
  },
  {
    "name": "lyttelton_667a_new_zealand",
    "lon": 172.72,
    "lat": -43.6,
    "country": "New Zealand"
  },
  {
    "name": "maaloey_003_norway",
    "lon": 5.1133,
    "lat": 61.934,
    "country": "Norway"
  },
  {
    "name": "macae_719a_brazil",
    "lon": -41.467,
    "lat": -22.233,
    "country": "Brazil"
  },
  {
    "name": "macau_338a_macau",
    "lon": 113.55,
    "lat": 22.167,
    "country": "China"
  },
  {
    "name": "mackay_018_australia",
    "lon": 149.19,
    "lat": -21.143,
    "country": "Australia"
  },
  {
    "name": "macquarie_is._c_680c_australia",
    "lon": 158.97,
    "lat": -54.483,
    "country": "Australia"
  },
  {
    "name": "madang_066a_papua_new_guinea",
    "lon": 145.8,
    "lat": -5.2,
    "country": "Papua New Guinea"
  },
  {
    "name": "madeira_715a_brazil",
    "lon": -44.378,
    "lat": -2.565,
    "country": "Brazil"
  },
  {
    "name": "madero,tampico_277a_mexico",
    "lon": -97.795,
    "lat": 22.262,
    "country": "Mexico"
  },
  {
    "name": "magueyes_island,pr_246a_usa",
    "lon": -67.047,
    "lat": 17.972,
    "country": "United States"
  },
  {
    "name": "mahon_mahon_spain",
    "lon": 4.2706,
    "lat": 39.893,
    "country": "Spain"
  },
  {
    "name": "maisaka_japan",
    "lon": 137.62,
    "lat": 34.683,
    "country": "Japan"
  },
  {
    "name": "maizuru_japan",
    "lon": 135.38,
    "lat": 35.467,
    "country": "Japan"
  },
  {
    "name": "majuro,marshallislands_001",
    "lon": 171.37,
    "lat": 7.1067,
    "country": "Marshall Islands"
  },
  {
    "name": "makurazaki_japan",
    "lon": 130.3,
    "lat": 31.267,
    "country": "Japan"
  },
  {
    "name": "malaga_mala_spain",
    "lon": -4.4167,
    "lat": 36.717,
    "country": "Spain"
  },
  {
    "name": "malakal_b_007b_republic_of_belau",
    "lon": 134.46,
    "lat": 7.33,
    "country": "Palau"
  },
  {
    "name": "male_b,hulule_108b_rep._of_maldives",
    "lon": 73.517,
    "lat": 4.1833,
    "country": "Maldives"
  },
  {
    "name": "malin_head_834a_ireland",
    "lon": -7.3333,
    "lat": 55.367,
    "country": "Ireland"
  },
  {
    "name": "malmo_030_sweden",
    "lon": 13.033,
    "lat": 55.617,
    "country": "Sweden"
  },
  {
    "name": "maniitsoq,greenland_001",
    "lon": -52.905,
    "lat": 65.413,
    "country": "Greenland"
  },
  {
    "name": "manila_b_370b_philippines",
    "lon": 120.97,
    "lat": 14.583,
    "country": "Philippines"
  },
  {
    "name": "manta_b_089b_ecuador",
    "lon": -80.733,
    "lat": -0.95,
    "country": "Ecuador"
  },
  {
    "name": "mantyluoto_007_finland",
    "lon": 21.463,
    "lat": 61.594,
    "country": "Finland"
  },
  {
    "name": "manus_065a_papua_new_guinea",
    "lon": 147.27,
    "lat": -2.0133,
    "country": "Papua New Guinea"
  },
  {
    "name": "manzanillo_b,mexico_001",
    "lon": -104.33,
    "lat": 19.053,
    "country": "Mexico"
  },
  {
    "name": "maputo_190a_mozambique",
    "lon": 32.7,
    "lat": -26.167,
    "country": "Mozambique"
  },
  {
    "name": "maputo_b_190b_mozambique",
    "lon": 32.57,
    "lat": -25.975,
    "country": "Mozambique"
  },
  {
    "name": "marsden_point_398a_new_zealand",
    "lon": 174.5,
    "lat": -35.833,
    "country": "New Zealand"
  },
  {
    "name": "marseille_france",
    "lon": 5.35,
    "lat": 43.3,
    "country": "France"
  },
  {
    "name": "marviken_012_sweden",
    "lon": 16.837,
    "lat": 58.554,
    "country": "Sweden"
  },
  {
    "name": "mar_del_plata_b_729b_argentina",
    "lon": -57.55,
    "lat": -38.05,
    "country": "Argentina"
  },
  {
    "name": "masirah_113a_oman",
    "lon": 58.872,
    "lat": 20.687,
    "country": "Oman"
  },
  {
    "name": "massacre_bay,ak_550a_usa",
    "lon": 173.2,
    "lat": 52.833,
    "country": "United States"
  },
  {
    "name": "matarani_b_094b_peru",
    "lon": -72.117,
    "lat": -17,
    "country": "Peru"
  },
  {
    "name": "matavai_590a_french_polynesia",
    "lon": -149.52,
    "lat": -17.517,
    "country": "France"
  },
  {
    "name": "matsuyama_japan",
    "lon": 132.72,
    "lat": 33.867,
    "country": "Japan"
  },
  {
    "name": "mawson_177a_australia",
    "lon": 62.883,
    "lat": -67.6,
    "country": "Australia"
  },
  {
    "name": "mayaguez,_pr_736a_usa",
    "lon": -67.16,
    "lat": 18.22,
    "country": "United States"
  },
  {
    "name": "mayport,fl_753a_usa",
    "lon": -81.432,
    "lat": 30.395,
    "country": "United States"
  },
  {
    "name": "mazatlan_673a_mexico",
    "lon": -106.42,
    "lat": 23.198,
    "country": "Mexico"
  },
  {
    "name": "melilla_melilla_spain",
    "lon": -2.918,
    "lat": 35.291,
    "country": "Morocco"
  },
  {
    "name": "meneng_158a_indonesia",
    "lon": 114.38,
    "lat": -8.1167,
    "country": "Indonesia"
  },
  {
    "name": "mera_japan",
    "lon": 139.83,
    "lat": 34.917,
    "country": "Japan"
  },
  {
    "name": "messina_messina_italy",
    "lon": 15.563,
    "lat": 38.196,
    "country": "Italy"
  },
  {
    "name": "miami,hauloverpier_001",
    "lon": -80.117,
    "lat": 25.9,
    "country": "United States"
  },
  {
    "name": "miamibeach_usa",
    "lon": -80.132,
    "lat": 25.768,
    "country": "United States"
  },
  {
    "name": "midway_050a_usa_trust",
    "lon": -177.37,
    "lat": 28.217,
    "country": "United States"
  },
  {
    "name": "milfordhaven_p056_uk",
    "lon": -5.0143,
    "lat": 51.702,
    "country": "United Kingdom"
  },
  {
    "name": "millport_p049_uk",
    "lon": -4.9058,
    "lat": 55.75,
    "country": "United Kingdom"
  },
  {
    "name": "minamidaito_japan",
    "lon": 131.23,
    "lat": 25.867,
    "country": "Japan"
  },
  {
    "name": "minamitorishima_japan",
    "lon": 153.98,
    "lat": 24.3,
    "country": "Japan"
  },
  {
    "name": "mina_sulman_182a_bahrain",
    "lon": 50.6,
    "lat": 26.233,
    "country": "Bahrain"
  },
  {
    "name": "miri_388a_malaysia",
    "lon": 113.97,
    "lat": 4.3917,
    "country": "Malaysia"
  },
  {
    "name": "misumi_japan",
    "lon": 130.45,
    "lat": 32.617,
    "country": "Japan"
  },
  {
    "name": "miyakejima_357a_japan",
    "lon": 139.48,
    "lat": 34.067,
    "country": "Japan"
  },
  {
    "name": "miyako_japan",
    "lon": 141.98,
    "lat": 39.65,
    "country": "Japan"
  },
  {
    "name": "mocamedes_238a_angola",
    "lon": 12.145,
    "lat": -15.192,
    "country": "Angola"
  },
  {
    "name": "mokuoloe_061a_usa",
    "lon": -157.8,
    "lat": 21.433,
    "country": "United States"
  },
  {
    "name": "mombasa_101a_kenya",
    "lon": 39.657,
    "lat": -4.07,
    "country": "Kenya"
  },
  {
    "name": "monaco_port_hercule_france",
    "lon": 7.4215,
    "lat": 43.729,
    "country": "Monaco"
  },
  {
    "name": "mona_is.,_pr_267a_usa",
    "lon": -67.938,
    "lat": 18.09,
    "country": "United States"
  },
  {
    "name": "montauk,ny_279a_usa",
    "lon": -71.96,
    "lat": 41.048,
    "country": "United States"
  },
  {
    "name": "monterey,ca_555a_usa",
    "lon": -121.89,
    "lat": 36.605,
    "country": "United States"
  },
  {
    "name": "montoir_de_bretagne_",
    "lon": -2.1084,
    "lat": 47.306,
    "country": "France"
  },
  {
    "name": "morayfirth_p207_uk",
    "lon": -4.0022,
    "lat": 57.599,
    "country": "United Kingdom"
  },
  {
    "name": "mossel_bay_185a_south_africa",
    "lon": 22.133,
    "lat": -34.183,
    "country": "South Africa"
  },
  {
    "name": "motril_motril_spain",
    "lon": -3.524,
    "lat": 36.72,
    "country": "Spain"
  },
  {
    "name": "moulmein_906a_myanmar",
    "lon": 97.622,
    "lat": 16.465,
    "country": "Myanmar"
  },
  {
    "name": "mumbles_p932_uk",
    "lon": -3.9754,
    "lat": 51.57,
    "country": "United Kingdom"
  },
  {
    "name": "murotomisaki_japan",
    "lon": 134.17,
    "lat": 33.267,
    "country": "Japan"
  },
  {
    "name": "muscat_b_110b_oman",
    "lon": 58.565,
    "lat": 23.628,
    "country": "Oman"
  },
  {
    "name": "nagasaki_japan",
    "lon": 129.87,
    "lat": 32.733,
    "country": "Japan"
  },
  {
    "name": "nagoya_japan",
    "lon": 136.88,
    "lat": 35.083,
    "country": "Japan"
  },
  {
    "name": "naha_japan",
    "lon": 127.67,
    "lat": 26.217,
    "country": "Japan"
  },
  {
    "name": "nain,nf_01430_canada",
    "lon": -61.683,
    "lat": 56.55,
    "country": "Canada"
  },
  {
    "name": "nakano_shima_345a_japan",
    "lon": 129.84,
    "lat": 29.842,
    "country": "Japan"
  },
  {
    "name": "nantes_usine_brulee_",
    "lon": -1.5742,
    "lat": 47.204,
    "country": "France"
  },
  {
    "name": "nantucketisland_usa",
    "lon": -70.097,
    "lat": 41.285,
    "country": "United States"
  },
  {
    "name": "naos_b_300b_panama",
    "lon": -79.533,
    "lat": 8.9167,
    "country": "Panama"
  },
  {
    "name": "napier_668a_new_zealand",
    "lon": 176.92,
    "lat": -39.483,
    "country": "New Zealand"
  },
  {
    "name": "naples_usa",
    "lon": -81.807,
    "lat": 26.13,
    "country": "United States"
  },
  {
    "name": "napoli_napoli_italy",
    "lon": 14.269,
    "lat": 40.841,
    "country": "Italy"
  },
  {
    "name": "natal_c_202c_brazil",
    "lon": -35.195,
    "lat": -5.7517,
    "country": "Brazil"
  },
  {
    "name": "nauru_001",
    "lon": 166.91,
    "lat": -0.5283,
    "country": "Nauru"
  },
  {
    "name": "nawiliwili_058a_usa",
    "lon": -159.36,
    "lat": 21.955,
    "country": "United States"
  },
  {
    "name": "naze_359a_japan",
    "lon": 129.5,
    "lat": 28.383,
    "country": "Japan"
  },
  {
    "name": "neah_bay,wa_558a_usa",
    "lon": -124.62,
    "lat": 48.368,
    "country": "United States"
  },
  {
    "name": "nelson_077a_new_zealand",
    "lon": 173.27,
    "lat": -41.267,
    "country": "New Zealand"
  },
  {
    "name": "newcastle_019_australia",
    "lon": 151.78,
    "lat": -32.926,
    "country": "Australia"
  },
  {
    "name": "newhaven_p011_uk",
    "lon": 0.05703,
    "lat": 50.782,
    "country": "United Kingdom"
  },
  {
    "name": "newlondon_usa",
    "lon": -72.09,
    "lat": 41.361,
    "country": "United States"
  },
  {
    "name": "newlyn_p001_uk",
    "lon": -5.5417,
    "lat": 50.102,
    "country": "United Kingdom"
  },
  {
    "name": "newport,ri_253a_usa",
    "lon": -71.327,
    "lat": 41.505,
    "country": "United States"
  },
  {
    "name": "newport_p057_uk",
    "lon": -2.9874,
    "lat": 51.55,
    "country": "United Kingdom"
  },
  {
    "name": "newport_usa",
    "lon": -71.327,
    "lat": 41.505,
    "country": "United States"
  },
  {
    "name": "newwestminster,bc_07654_canada",
    "lon": -122.91,
    "lat": 49.2,
    "country": "Canada"
  },
  {
    "name": "newyork_thebattery__usa",
    "lon": -74.014,
    "lat": 40.701,
    "country": "United States"
  },
  {
    "name": "new_london,ct_744a_usa",
    "lon": -72.087,
    "lat": 41.355,
    "country": "United States"
  },
  {
    "name": "new_york,ny_745a_usa",
    "lon": -74.015,
    "lat": 40.7,
    "country": "United States"
  },
  {
    "name": "nice_france",
    "lon": 7.2853,
    "lat": 43.696,
    "country": "France"
  },
  {
    "name": "nishinoomote_363a_japan",
    "lon": 131,
    "lat": 30.732,
    "country": "Japan"
  },
  {
    "name": "nome,ak_595a_usa",
    "lon": -165.43,
    "lat": 64.5,
    "country": "United States"
  },
  {
    "name": "norfolk_island_b_062b_australia",
    "lon": 167.95,
    "lat": -29.067,
    "country": "Australia"
  },
  {
    "name": "northshields_p032_uk",
    "lon": -1.4398,
    "lat": 55.007,
    "country": "United Kingdom"
  },
  {
    "name": "northsydney,ns_00612_canada",
    "lon": -60.25,
    "lat": 46.217,
    "country": "Canada"
  },
  {
    "name": "nosy_be_150a_madagascar",
    "lon": 48.3,
    "lat": -13.4,
    "country": "Madagascar"
  },
  {
    "name": "noto_japan",
    "lon": 137.15,
    "lat": 37.5,
    "country": "Japan"
  },
  {
    "name": "nouakchott_806a_mauritania",
    "lon": -16.037,
    "lat": 17.99,
    "country": "Mauritania"
  },
  {
    "name": "noumea_b_019b_france",
    "lon": 166.44,
    "lat": -22.292,
    "country": "France"
  },
  {
    "name": "nuku_alofa_038a_tonga",
    "lon": -175.2,
    "lat": -21.133,
    "country": "Tonga"
  },
  {
    "name": "nuku_hiva_031a_french_polynesia",
    "lon": -140.08,
    "lat": -8.93,
    "country": "France"
  },
  {
    "name": "ny_alesund,norway_001",
    "lon": 11.95,
    "lat": 78.933,
    "country": "Norway"
  },
  {
    "name": "odawara_japan",
    "lon": 139.15,
    "lat": 35.233,
    "country": "Japan"
  },
  {
    "name": "ofunato_japan",
    "lon": 141.72,
    "lat": 39.067,
    "country": "Japan"
  },
  {
    "name": "okada_japan",
    "lon": 139.38,
    "lat": 34.783,
    "country": "Japan"
  },
  {
    "name": "olandsnorraudde_013_sweden",
    "lon": 17.097,
    "lat": 57.366,
    "country": "Sweden"
  },
  {
    "name": "omaezaki_japan",
    "lon": 138.22,
    "lat": 34.617,
    "country": "Japan"
  },
  {
    "name": "onahama_japan",
    "lon": 140.9,
    "lat": 36.933,
    "country": "Japan"
  },
  {
    "name": "ortona_ortona_italy",
    "lon": 14.415,
    "lat": 42.356,
    "country": "Italy"
  },
  {
    "name": "osaka_japan",
    "lon": 135.43,
    "lat": 34.65,
    "country": "Japan"
  },
  {
    "name": "oskarshamn_014_sweden",
    "lon": 16.478,
    "lat": 57.275,
    "country": "Sweden"
  },
  {
    "name": "oslo_004_norway",
    "lon": 10.734,
    "lat": 59.909,
    "country": "Norway"
  },
  {
    "name": "otaru_japan",
    "lon": 141,
    "lat": 43.2,
    "country": "Japan"
  },
  {
    "name": "otranto_otranto_italy",
    "lon": 18.497,
    "lat": 40.147,
    "country": "Italy"
  },
  {
    "name": "oulu_008_finland",
    "lon": 25.418,
    "lat": 65.04,
    "country": "Finland"
  },
  {
    "name": "oura_japan",
    "lon": 130.22,
    "lat": 32.983,
    "country": "Japan"
  },
  {
    "name": "owase_japan",
    "lon": 136.22,
    "lat": 34.067,
    "country": "Japan"
  },
  {
    "name": "padang_b_107b_indonesia",
    "lon": 100.37,
    "lat": -1,
    "country": "Indonesia"
  },
  {
    "name": "pago_bay,_guam_037a_usa",
    "lon": 144.8,
    "lat": 13.428,
    "country": "United States"
  },
  {
    "name": "pago_pago_056a_usa_trust",
    "lon": -170.68,
    "lat": -14.283,
    "country": "United States"
  },
  {
    "name": "paimboeuf_",
    "lon": -2.0004,
    "lat": 47.287,
    "country": "France"
  },
  {
    "name": "paita_b_678b_peru",
    "lon": -81.167,
    "lat": -5.0833,
    "country": "Peru"
  },
  {
    "name": "palermo_palermo_italy",
    "lon": 13.371,
    "lat": 38.121,
    "country": "Italy"
  },
  {
    "name": "palinuro_palinuro_italy",
    "lon": 15.275,
    "lat": 40.032,
    "country": "Italy"
  },
  {
    "name": "palma_de_mallorca_palmademallorca_spain",
    "lon": 2.6375,
    "lat": 39.56,
    "country": "Spain"
  },
  {
    "name": "palmeira_235a_portugal",
    "lon": -22.983,
    "lat": 16.755,
    "country": "Cape Verde"
  },
  {
    "name": "palmyra_island_043a_proprietary",
    "lon": -162.09,
    "lat": 5.8833,
    "country": "United States"
  },
  {
    "name": "panama_city_beach_761a_usa",
    "lon": -85.88,
    "lat": 30.213,
    "country": "United States"
  },
  {
    "name": "papeete_b_015b_french_polynesia",
    "lon": -149.57,
    "lat": -17.532,
    "country": "France"
  },
  {
    "name": "pari_159a_indonesia",
    "lon": 106.62,
    "lat": -5.85,
    "country": "Indonesia"
  },
  {
    "name": "patriciabay,bc_07277_canada",
    "lon": -123.45,
    "lat": 48.654,
    "country": "Canada"
  },
  {
    "name": "pemba_c_192c_mozambique",
    "lon": 40.5,
    "lat": -12.967,
    "country": "Mozambique"
  },
  {
    "name": "penang_144a_malaysia",
    "lon": 100.35,
    "lat": 5.4217,
    "country": "Malaysia"
  },
  {
    "name": "penrhyn_024a_cook_islands",
    "lon": -158.05,
    "lat": -8.9767,
    "country": "Cook Islands"
  },
  {
    "name": "pensacola,fl_762a_usa",
    "lon": -87.213,
    "lat": 30.403,
    "country": "United States"
  },
  {
    "name": "penuelas,_pr_243a_usa",
    "lon": -66.762,
    "lat": 17.972,
    "country": "United States"
  },
  {
    "name": "peter___paul_rocks_201a_brazil",
    "lon": -29.343,
    "lat": 0.92,
    "country": "Brazil"
  },
  {
    "name": "philadelphia_pier9n__usa",
    "lon": -75.142,
    "lat": 39.933,
    "country": "United States"
  },
  {
    "name": "pietarsaari_009_finland",
    "lon": 22.69,
    "lat": 63.709,
    "country": "Finland"
  },
  {
    "name": "pisco_b_683b_peru",
    "lon": -76.133,
    "lat": -13.417,
    "country": "Peru"
  },
  {
    "name": "pohnpei_c_001c_fd._st._micronesia",
    "lon": 158.23,
    "lat": 6.9833,
    "country": "Federated States of Micronesia"
  },
  {
    "name": "pointatkinson,bc_07795_canada",
    "lon": -123.25,
    "lat": 49.337,
    "country": "Canada"
  },
  {
    "name": "pointe_a_pitre_272a_france",
    "lon": -61.533,
    "lat": 16.233,
    "country": "France"
  },
  {
    "name": "pointe_noire_b_234b_congo",
    "lon": 11.85,
    "lat": -4.8,
    "country": "Congo-Brazzaville"
  },
  {
    "name": "pointlarue,seychelles_001",
    "lon": 55.528,
    "lat": -4.6717,
    "country": "Seychelles"
  },
  {
    "name": "point_fortin_728a_trinidad_and_tobago",
    "lon": -61.417,
    "lat": 10.1,
    "country": "Trinidad and Tobago"
  },
  {
    "name": "ponta_delgada_211a_portugal",
    "lon": -25.672,
    "lat": 37.735,
    "country": "Portugal"
  },
  {
    "name": "portadelaideouter_020_australia",
    "lon": 138.6,
    "lat": -34.926,
    "country": "Australia"
  },
  {
    "name": "portbury_p341_uk",
    "lon": -2.7285,
    "lat": 51.5,
    "country": "United Kingdom"
  },
  {
    "name": "portelizabeth,southafrica_001",
    "lon": 25.63,
    "lat": -33.96,
    "country": "South Africa"
  },
  {
    "name": "portellen_p202_uk",
    "lon": -6.1901,
    "lat": 55.627,
    "country": "United Kingdom"
  },
  {
    "name": "porterin_p919_uk",
    "lon": -4.7681,
    "lat": 54.085,
    "country": "Isle of Man"
  },
  {
    "name": "porthardy,bc_08408_canada",
    "lon": -127.49,
    "lat": 50.722,
    "country": "Canada"
  },
  {
    "name": "porthedland_022_australia",
    "lon": 118.58,
    "lat": -20.314,
    "country": "Australia"
  },
  {
    "name": "portisabel_usa",
    "lon": -97.215,
    "lat": 26.06,
    "country": "United States"
  },
  {
    "name": "portland,me_252a_usa",
    "lon": -70.247,
    "lat": 43.657,
    "country": "United States"
  },
  {
    "name": "portland,s.aus._129a_australia",
    "lon": 141.6,
    "lat": -38.333,
    "country": "Australia"
  },
  {
    "name": "portland_maine__usa",
    "lon": -70.247,
    "lat": 43.657,
    "country": "United States"
  },
  {
    "name": "portlincoln_023_australia",
    "lon": 135.86,
    "lat": -34.72,
    "country": "Australia"
  },
  {
    "name": "portlonsdale_017_australia",
    "lon": 138.5,
    "lat": -35.099,
    "country": "Australia"
  },
  {
    "name": "portlouis_c,mauritius_001",
    "lon": 57.49,
    "lat": -20.153,
    "country": "Mauritius"
  },
  {
    "name": "portmansfield_usa",
    "lon": -97.422,
    "lat": 26.555,
    "country": "United States"
  },
  {
    "name": "portogrande,capeverde_001",
    "lon": -24.983,
    "lat": 16.867,
    "country": "Cape Verde"
  },
  {
    "name": "porto_empedocle_porto+empedocle_italy",
    "lon": 13.527,
    "lat": 37.286,
    "country": "Italy"
  },
  {
    "name": "porto_grande_216a_portugal",
    "lon": -24.983,
    "lat": 16.867,
    "country": "Cape Verde"
  },
  {
    "name": "porto_torres_porto+torres_italy",
    "lon": 8.4039,
    "lat": 40.842,
    "country": "Italy"
  },
  {
    "name": "portpatrick_p063_uk",
    "lon": -5.12,
    "lat": 54.843,
    "country": "United Kingdom"
  },
  {
    "name": "portpirie_024_australia",
    "lon": 138.01,
    "lat": -33.177,
    "country": "Australia"
  },
  {
    "name": "portrush_p935_uk",
    "lon": -6.6568,
    "lat": 55.207,
    "country": "United Kingdom"
  },
  {
    "name": "portsanluis_usa",
    "lon": -120.76,
    "lat": 35.177,
    "country": "United States"
  },
  {
    "name": "portsmouth_p008_uk",
    "lon": -1.1118,
    "lat": 50.803,
    "country": "United Kingdom"
  },
  {
    "name": "portvictoria_b,seychelles_001",
    "lon": 55.458,
    "lat": -4.6217,
    "country": "Seychelles"
  },
  {
    "name": "portvila_b,vanuatu_001",
    "lon": 168.32,
    "lat": -17.733,
    "country": "Vanuatu"
  },
  {
    "name": "port_allen_553a_usa",
    "lon": -159.6,
    "lat": 21.9,
    "country": "United States"
  },
  {
    "name": "port_angeles,_wa_584a_usa",
    "lon": -123.44,
    "lat": 48.125,
    "country": "United States"
  },
  {
    "name": "port_aux_basques,nf_00665_canada",
    "lon": -59.133,
    "lat": 47.567,
    "country": "Canada"
  },
  {
    "name": "port_bloc_",
    "lon": -1.0616,
    "lat": 45.569,
    "country": "France"
  },
  {
    "name": "port_camargue_france",
    "lon": 4.1264,
    "lat": 43.52,
    "country": "France"
  },
  {
    "name": "port_canaveral,_fl_774a_usa",
    "lon": -80.593,
    "lat": 28.415,
    "country": "United States"
  },
  {
    "name": "port_chalmers_669a_new_zealand",
    "lon": 170.65,
    "lat": -45.817,
    "country": "New Zealand"
  },
  {
    "name": "port_elizabeth_184a_south_africa",
    "lon": 25.63,
    "lat": -33.96,
    "country": "South Africa"
  },
  {
    "name": "port_ferreol_france",
    "lon": 6.7176,
    "lat": 43.359,
    "country": "France"
  },
  {
    "name": "port_hedland_169a_australia",
    "lon": 118.58,
    "lat": -20.318,
    "country": "Australia"
  },
  {
    "name": "port_isabel,tx_772a_usa",
    "lon": -97.215,
    "lat": 26.06,
    "country": "United States"
  },
  {
    "name": "port_kembla_342a_australia",
    "lon": 150.91,
    "lat": -34.473,
    "country": "Australia"
  },
  {
    "name": "port_louis_c_103c_mauritius",
    "lon": 57.49,
    "lat": -20.153,
    "country": "Mauritius"
  },
  {
    "name": "port_moresby_064a_papua_new_guinea",
    "lon": 147.14,
    "lat": -9.4783,
    "country": "Papua New Guinea"
  },
  {
    "name": "port_nolloth_701a_south_africa",
    "lon": 16.867,
    "lat": -29.25,
    "country": "South Africa"
  },
  {
    "name": "port_of_spain_248a_trinidad_and_tobago",
    "lon": -61.517,
    "lat": 10.65,
    "country": "Trinidad and Tobago"
  },
  {
    "name": "port_orford,_or_557a_usa",
    "lon": -124.5,
    "lat": 42.74,
    "country": "United States"
  },
  {
    "name": "port_royal_782a_jamaica",
    "lon": -76.85,
    "lat": 17.933,
    "country": "Jamaica"
  },
  {
    "name": "port_san_luis,_ca_565a_usa",
    "lon": -120.76,
    "lat": 35.177,
    "country": "United States"
  },
  {
    "name": "port_sonara_816a_cameroon",
    "lon": 9.1267,
    "lat": -4.0067,
    "country": "Cameroon"
  },
  {
    "name": "port_stanley_a_290a_united_kingdom",
    "lon": -57.867,
    "lat": -52.7,
    "country": "United Kingdom"
  },
  {
    "name": "port_stanley_b_290b_united_kingdom",
    "lon": -57.933,
    "lat": -51.75,
    "country": "Falkland Islands"
  },
  {
    "name": "port_stanvac_100a_australia",
    "lon": 138.47,
    "lat": -35.108,
    "country": "Australia"
  },
  {
    "name": "port_tudy_",
    "lon": -3.4459,
    "lat": 47.644,
    "country": "France"
  },
  {
    "name": "port_vendres_france",
    "lon": 3.1075,
    "lat": 42.52,
    "country": "France"
  },
  {
    "name": "port_victoria_b_111b_seychelles",
    "lon": 55.458,
    "lat": -4.6217,
    "country": "Seychelles"
  },
  {
    "name": "port_vila_b_046b_vanuatu",
    "lon": 168.32,
    "lat": -17.733,
    "country": "Vanuatu"
  },
  {
    "name": "praia_c,cape_verde_222c_portugal",
    "lon": -23.5,
    "lat": 14.917,
    "country": "Cape Verde"
  },
  {
    "name": "praslin_106a_seychelles",
    "lon": 55.767,
    "lat": -4.3433,
    "country": "Seychelles"
  },
  {
    "name": "prigi_125a_indonesia",
    "lon": 111.73,
    "lat": -8.28,
    "country": "Indonesia"
  },
  {
    "name": "princerupert,bc_09354_canada",
    "lon": -130.33,
    "lat": 54.317,
    "country": "Canada"
  },
  {
    "name": "princerupert,canada_001",
    "lon": -130.17,
    "lat": 54.317,
    "country": "Canada"
  },
  {
    "name": "progreso_c,_yuc._721c_mexico",
    "lon": -89.667,
    "lat": 21.283,
    "country": "Mexico"
  },
  {
    "name": "providence_statepier__usa",
    "lon": -71.401,
    "lat": 41.807,
    "country": "United States"
  },
  {
    "name": "provideniya_b,russia_001",
    "lon": -173.2,
    "lat": 64.4,
    "country": "Russia"
  },
  {
    "name": "prudhoe_bay,_ak_579a_usa",
    "lon": -148.53,
    "lat": 70.4,
    "country": "United States"
  },
  {
    "name": "pt._la_rue_121a_seychelles",
    "lon": 55.528,
    "lat": -4.6717,
    "country": "Seychelles"
  },
  {
    "name": "puertowilliams,chile_001",
    "lon": -67.617,
    "lat": -54.933,
    "country": "Chile"
  },
  {
    "name": "puerto_angel_672a_mexico",
    "lon": -96.493,
    "lat": 15.657,
    "country": "Mexico"
  },
  {
    "name": "puerto_armuelles_b_304b_panama",
    "lon": -82.86,
    "lat": 8.2733,
    "country": "Panama"
  },
  {
    "name": "puerto_castilla_784a_honduras",
    "lon": -86.033,
    "lat": 16.017,
    "country": "Honduras"
  },
  {
    "name": "puerto_cortes_b_780b_honduras",
    "lon": -87.95,
    "lat": 15.833,
    "country": "Honduras"
  },
  {
    "name": "puerto_deseado_b_286b_argentina",
    "lon": -65.917,
    "lat": -47.75,
    "country": "Argentina"
  },
  {
    "name": "puerto_de_la_luz_pluz_spain",
    "lon": -15.417,
    "lat": 28.133,
    "country": "Spain"
  },
  {
    "name": "puerto_madero_318a_mexico",
    "lon": -92.433,
    "lat": 14.717,
    "country": "Mexico"
  },
  {
    "name": "puerto_madryn_731a_argentina",
    "lon": -65.032,
    "lat": -38.763,
    "country": "Argentina"
  },
  {
    "name": "puerto_montt_684a_chile",
    "lon": -72.967,
    "lat": -41.483,
    "country": "Chile"
  },
  {
    "name": "puerto_moreles_860a_mexico",
    "lon": -86.867,
    "lat": 20.868,
    "country": "Mexico"
  },
  {
    "name": "puerto_plata_777a_dominica_republic",
    "lon": -70.702,
    "lat": 19.798,
    "country": "Dominican Republic"
  },
  {
    "name": "puerto_princesa_380a_philippines",
    "lon": 118.73,
    "lat": 9.75,
    "country": "Philippines"
  },
  {
    "name": "puerto_quetzal_301a_guatemala",
    "lon": -90.785,
    "lat": 13.922,
    "country": "Guatemala"
  },
  {
    "name": "puntarenas_396a_costa_rica",
    "lon": -84.833,
    "lat": 9.9667,
    "country": "Costa Rica"
  },
  {
    "name": "punta_cana_776a_dominica_republic",
    "lon": -68.375,
    "lat": 18.505,
    "country": "Dominican Republic"
  },
  {
    "name": "qaqortoq,greenland_001",
    "lon": -46.033,
    "lat": 60.717,
    "country": "Greenland"
  },
  {
    "name": "queencharlottecity,bc_09850_canada",
    "lon": -132.07,
    "lat": 53.252,
    "country": "Canada"
  },
  {
    "name": "quepos,costarica_001",
    "lon": -84.167,
    "lat": 9.4,
    "country": "Costa Rica"
  },
  {
    "name": "qui_nhon_b_381b_vietnam",
    "lon": 109.25,
    "lat": 13.767,
    "country": "Vietnam"
  },
  {
    "name": "raahe_010_finland",
    "lon": 24.407,
    "lat": 64.666,
    "country": "Finland"
  },
  {
    "name": "rabaul,papuanewguinea_001",
    "lon": 152.18,
    "lat": -4.2,
    "country": "Papua New Guinea"
  },
  {
    "name": "rarotonga,cookislands_001",
    "lon": -159.78,
    "lat": -21.207,
    "country": "Cook Islands"
  },
  {
    "name": "ratan_015_sweden",
    "lon": 20.895,
    "lat": 63.986,
    "country": "Sweden"
  },
  {
    "name": "rauma_011_finland",
    "lon": 21.426,
    "lat": 61.133,
    "country": "Finland"
  },
  {
    "name": "ravenna_ravenna_italy",
    "lon": 12.283,
    "lat": 44.492,
    "country": "Italy"
  },
  {
    "name": "recife,uscgs_712a_brazil",
    "lon": -34.867,
    "lat": -8.05,
    "country": "Brazil"
  },
  {
    "name": "reedypoint_usa",
    "lon": -75.573,
    "lat": 39.558,
    "country": "United States"
  },
  {
    "name": "reggio_calabria_reggio+calabria_italy",
    "lon": 15.649,
    "lat": 38.121,
    "country": "Italy"
  },
  {
    "name": "reihoku_japan",
    "lon": 130.03,
    "lat": 32.467,
    "country": "Japan"
  },
  {
    "name": "reunion_164a_france",
    "lon": 55.285,
    "lat": -20.935,
    "country": "France"
  },
  {
    "name": "reykjavik_iceland",
    "lon": -21.933,
    "lat": 64.15,
    "country": "Iceland"
  },
  {
    "name": "richard_s_bay_188a_south_africa",
    "lon": 32.083,
    "lat": -28.8,
    "country": "South Africa"
  },
  {
    "name": "rikitea_016a_french_polynesia",
    "lon": -134.95,
    "lat": -23.125,
    "country": "France"
  },
  {
    "name": "ringhals_016_sweden",
    "lon": 12.113,
    "lat": 57.25,
    "country": "Sweden"
  },
  {
    "name": "rio_de_janeiro,cg_709a_brazil",
    "lon": -43.133,
    "lat": -22.933,
    "country": "Brazil"
  },
  {
    "name": "rio_grande_714a_brazil",
    "lon": -52.103,
    "lat": -32.138,
    "country": "Brazil"
  },
  {
    "name": "rockport,_tx_769a_usa",
    "lon": -97.047,
    "lat": 28.022,
    "country": "United States"
  },
  {
    "name": "rodrigues_105a_mauritius",
    "lon": 63.418,
    "lat": -19.668,
    "country": "Mauritius"
  },
  {
    "name": "roervik_005_norway",
    "lon": 11.23,
    "lat": 64.859,
    "country": "Norway"
  },
  {
    "name": "roscoff_",
    "lon": -3.9657,
    "lat": 48.718,
    "country": "France"
  },
  {
    "name": "rosslyn_bay_330a_australia",
    "lon": 150.79,
    "lat": -23.162,
    "country": "Australia"
  },
  {
    "name": "rothera_uk",
    "lon": -68.133,
    "lat": -67.567,
    "country": "United Kingdom"
  },
  {
    "name": "s.cruz_d._palma_d_206d_spain",
    "lon": -17.75,
    "lat": 28.683,
    "country": "Spain"
  },
  {
    "name": "sabang_123a_indonesia",
    "lon": 95.317,
    "lat": 5.8883,
    "country": "Indonesia"
  },
  {
    "name": "sabine_pass_n,tx_766a_usa",
    "lon": -93.87,
    "lat": 29.73,
    "country": "United States"
  },
  {
    "name": "sado_japan",
    "lon": 138.52,
    "lat": 38.317,
    "country": "Japan"
  },
  {
    "name": "sagunto_sagunto_spain",
    "lon": -0.206,
    "lat": 39.634,
    "country": "Spain"
  },
  {
    "name": "saigo_japan",
    "lon": 133.33,
    "lat": 36.2,
    "country": "Japan"
  },
  {
    "name": "saiki_japan",
    "lon": 131.97,
    "lat": 32.95,
    "country": "Japan"
  },
  {
    "name": "saintjohn,nb_00065_canada",
    "lon": -66.063,
    "lat": 45.251,
    "country": "Canada"
  },
  {
    "name": "saint_gildas_",
    "lon": -2.2464,
    "lat": 47.14,
    "country": "France"
  },
  {
    "name": "saint_jean_de_luz_so_",
    "lon": -1.6816,
    "lat": 43.395,
    "country": "France"
  },
  {
    "name": "saint_malo_",
    "lon": -2.0281,
    "lat": 48.641,
    "country": "France"
  },
  {
    "name": "saint_nazaire_",
    "lon": -2.2016,
    "lat": 47.267,
    "country": "France"
  },
  {
    "name": "saint_paul_179a_france",
    "lon": 77.538,
    "lat": -38.712,
    "country": "France"
  },
  {
    "name": "saipan_b_028b_n._mariana_islands",
    "lon": 145.74,
    "lat": 15.227,
    "country": "United States"
  },
  {
    "name": "sakai_japan",
    "lon": 133.25,
    "lat": 35.55,
    "country": "Japan"
  },
  {
    "name": "salalah_114a_oman",
    "lon": 54,
    "lat": 16.933,
    "country": "Oman"
  },
  {
    "name": "saldahna_bay_703a_south_africa",
    "lon": 17.95,
    "lat": -33.017,
    "country": "South Africa"
  },
  {
    "name": "salerno_salerno_italy",
    "lon": 14.768,
    "lat": 40.672,
    "country": "Italy"
  },
  {
    "name": "salina_cruz_394a_mexico",
    "lon": -95.203,
    "lat": 16.16,
    "country": "Mexico"
  },
  {
    "name": "salvador_b_708b_brazil",
    "lon": -38.517,
    "lat": -12.967,
    "country": "Brazil"
  },
  {
    "name": "sandakan_389a_malaysia",
    "lon": 118.07,
    "lat": 5.81,
    "country": "Malaysia"
  },
  {
    "name": "sandiego_quarantinestation__usa",
    "lon": -117.17,
    "lat": 32.715,
    "country": "United States"
  },
  {
    "name": "sandyhook_usa",
    "lon": -74.009,
    "lat": 40.467,
    "country": "United States"
  },
  {
    "name": "sand_point,ak_574a_usa",
    "lon": -160.5,
    "lat": 55.337,
    "country": "United States"
  },
  {
    "name": "sanfelix,chile_001",
    "lon": -80.133,
    "lat": -26.283,
    "country": "Chile"
  },
  {
    "name": "sanfrancisco_usa",
    "lon": -122.47,
    "lat": 37.807,
    "country": "United States"
  },
  {
    "name": "sanjuan,puertorico,usa_001",
    "lon": -66.117,
    "lat": 18.467,
    "country": "United States"
  },
  {
    "name": "santacruz,galapagos,ecuador_001",
    "lon": -90.312,
    "lat": -0.7533,
    "country": "Ecuador"
  },
  {
    "name": "santamonica_municipalpier__usa",
    "lon": -118.5,
    "lat": 34.008,
    "country": "United States"
  },
  {
    "name": "santana_ssn_b_717b_brazil",
    "lon": -51.18,
    "lat": -0.0567,
    "country": "Brazil"
  },
  {
    "name": "santander_ieo_spain",
    "lon": -3.79,
    "lat": 43.461,
    "country": "Spain"
  },
  {
    "name": "santa_barbara,_ca_577a_usa",
    "lon": -119.69,
    "lat": 34.408,
    "country": "United States"
  },
  {
    "name": "santa_cruz_030a_ecuador",
    "lon": -90.313,
    "lat": -0.755,
    "country": "Ecuador"
  },
  {
    "name": "santa_monica,_ca_578a_usa",
    "lon": -118.5,
    "lat": 34.008,
    "country": "United States"
  },
  {
    "name": "san_andres_737a_colombia",
    "lon": -81.7,
    "lat": 12.583,
    "country": "Colombia"
  },
  {
    "name": "san_carlos_674a_mexico",
    "lon": -112.12,
    "lat": 24.79,
    "country": "Mexico"
  },
  {
    "name": "san_diego_569a_usa",
    "lon": -117.17,
    "lat": 32.713,
    "country": "United States"
  },
  {
    "name": "san_felipe_307a_mexico",
    "lon": -114.82,
    "lat": 31.018,
    "country": "Mexico"
  },
  {
    "name": "san_felix_035a_chile",
    "lon": -80.108,
    "lat": -26.292,
    "country": "Chile"
  },
  {
    "name": "san_francisco,ca_551a_usa",
    "lon": -122.47,
    "lat": 37.807,
    "country": "United States"
  },
  {
    "name": "san_jose_675a_guatemala",
    "lon": -90.833,
    "lat": 13.917,
    "country": "Guatemala"
  },
  {
    "name": "san_juan,pr_245a_usa",
    "lon": -66.117,
    "lat": 18.46,
    "country": "United States"
  },
  {
    "name": "san_juan_b_096b_peru",
    "lon": -75.2,
    "lat": -15.367,
    "country": "Peru"
  },
  {
    "name": "san_quintin_308a_mexico",
    "lon": -115.98,
    "lat": 30.483,
    "country": "Mexico"
  },
  {
    "name": "sao_tome_225a_sao_tome_principe",
    "lon": 6.5133,
    "lat": 0.0167,
    "country": "São Tomé and Príncipe"
  },
  {
    "name": "saumlaki_420a_indonesia",
    "lon": 131.29,
    "lat": -7.9817,
    "country": "Indonesia"
  },
  {
    "name": "scott_base_663a_new_zealand",
    "lon": 166.75,
    "lat": -77.85,
    "country": "New Zealand"
  },
  {
    "name": "seattle_usa",
    "lon": -122.34,
    "lat": 47.603,
    "country": "United States"
  },
  {
    "name": "seaveyisland_usa",
    "lon": -70.742,
    "lat": 43.08,
    "country": "United States"
  },
  {
    "name": "sedili_324a_malaysia",
    "lon": 104.11,
    "lat": 1.9317,
    "country": "Malaysia"
  },
  {
    "name": "seldovia_usa",
    "lon": -151.72,
    "lat": 59.44,
    "country": "United States"
  },
  {
    "name": "sete_france",
    "lon": 3.6991,
    "lat": 43.398,
    "country": "France"
  },
  {
    "name": "settlement_point_b_257b_bahamas",
    "lon": -78.997,
    "lat": 26.71,
    "country": "The Bahamas"
  },
  {
    "name": "seward_c,ak_560c_usa",
    "lon": -149.43,
    "lat": 60.12,
    "country": "United States"
  },
  {
    "name": "sewellspoint,hamptonroads_usa",
    "lon": -76.33,
    "lat": 36.947,
    "country": "United States"
  },
  {
    "name": "shanwei_641a_china",
    "lon": 115.35,
    "lat": 22.75,
    "country": "China"
  },
  {
    "name": "sheerness_p015_uk",
    "lon": 0.74306,
    "lat": 51.442,
    "country": "United Kingdom"
  },
  {
    "name": "shijiusuo_642a_china",
    "lon": 119.55,
    "lat": 35.383,
    "country": "China"
  },
  {
    "name": "shimizuminato_japan",
    "lon": 138.52,
    "lat": 35.017,
    "country": "Japan"
  },
  {
    "name": "shimokita_japan",
    "lon": 141.23,
    "lat": 41.367,
    "country": "Japan"
  },
  {
    "name": "shimonoseki_japan",
    "lon": 130.93,
    "lat": 33.933,
    "country": "Japan"
  },
  {
    "name": "shirahama_japan",
    "lon": 135.38,
    "lat": 33.683,
    "country": "Japan"
  },
  {
    "name": "sibolga_b_122b_indonesia",
    "lon": 98.767,
    "lat": 1.75,
    "country": "Indonesia"
  },
  {
    "name": "siboney,cuba_001",
    "lon": -82.472,
    "lat": 23.092,
    "country": "Cuba"
  },
  {
    "name": "simon_s_town_221a_south_africa",
    "lon": 18.433,
    "lat": -34.183,
    "country": "South Africa"
  },
  {
    "name": "simrishamn_017_sweden",
    "lon": 14.358,
    "lat": 55.557,
    "country": "Sweden"
  },
  {
    "name": "sisimiut,greenland_001",
    "lon": -53.667,
    "lat": 66.933,
    "country": "Greenland"
  },
  {
    "name": "sitka,ak_559a_usa",
    "lon": -135.34,
    "lat": 57.052,
    "country": "United States"
  },
  {
    "name": "skagsudde_018_sweden",
    "lon": 19.012,
    "lat": 63.191,
    "country": "Sweden"
  },
  {
    "name": "skagway_usa",
    "lon": -135.33,
    "lat": 59.45,
    "country": "United States"
  },
  {
    "name": "skanor_019_sweden",
    "lon": 12.829,
    "lat": 55.417,
    "country": "Sweden"
  },
  {
    "name": "smogen_020_sweden",
    "lon": 11.218,
    "lat": 58.354,
    "country": "Sweden"
  },
  {
    "name": "socorro_090a_mexico",
    "lon": -111.02,
    "lat": 18.733,
    "country": "Mexico"
  },
  {
    "name": "solenzara_france",
    "lon": 9.4038,
    "lat": 41.857,
    "country": "France"
  },
  {
    "name": "solomonsisland_biol.lab.__usa",
    "lon": -76.452,
    "lat": 38.317,
    "country": "United States"
  },
  {
    "name": "southcaicos,u.k._001",
    "lon": -72,
    "lat": 22,
    "country": "United Kingdom"
  },
  {
    "name": "south_beach,or_592a_usa",
    "lon": -124.04,
    "lat": 44.625,
    "country": "United States"
  },
  {
    "name": "south_caicos_720a_uk",
    "lon": -71.533,
    "lat": 21.483,
    "country": "United Kingdom"
  },
  {
    "name": "south_pass,_la_764a_usa",
    "lon": -89.14,
    "lat": 28.99,
    "country": "United States"
  },
  {
    "name": "spikarna_021_sweden",
    "lon": 17.531,
    "lat": 62.363,
    "country": "Sweden"
  },
  {
    "name": "split_spli_croatia",
    "lon": 16.442,
    "lat": 43.507,
    "country": "Croatia"
  },
  {
    "name": "springmaidpier_usa",
    "lon": -78.918,
    "lat": 33.655,
    "country": "United States"
  },
  {
    "name": "spring_bay_335a_australia",
    "lon": 147.93,
    "lat": -42.55,
    "country": "Australia"
  },
  {
    "name": "st.croix,_akalimetreebay__001",
    "lon": -64.753,
    "lat": 17.697,
    "country": "United States"
  },
  {
    "name": "st.johns,nf_00905_canada",
    "lon": -52.717,
    "lat": 47.567,
    "country": "Canada"
  },
  {
    "name": "st.paulisland_001",
    "lon": 77.583,
    "lat": -38.717,
    "country": "France"
  },
  {
    "name": "st.petersburg_usa",
    "lon": -82.627,
    "lat": 27.761,
    "country": "United States"
  },
  {
    "name": "st._augustine,fl_262a_usa",
    "lon": -81.262,
    "lat": 29.857,
    "country": "United States"
  },
  {
    "name": "st._helena_292a_united_kingdom",
    "lon": -5.7167,
    "lat": -15.917,
    "country": "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    "name": "st._john_s_b_276b_canada",
    "lon": -52.7,
    "lat": 47.567,
    "country": "Canada"
  },
  {
    "name": "st._petersburg,_fl_759a_usa",
    "lon": -82.627,
    "lat": 27.76,
    "country": "United States"
  },
  {
    "name": "stanley_uk",
    "lon": -57.821,
    "lat": -51.692,
    "country": "Falkland Islands"
  },
  {
    "name": "stenungsund_022_sweden",
    "lon": 11.832,
    "lat": 58.093,
    "country": "Sweden"
  },
  {
    "name": "steveston,bc_07607_canada",
    "lon": -123.18,
    "lat": 49.125,
    "country": "Canada"
  },
  {
    "name": "sthelena_uk",
    "lon": -5.7178,
    "lat": -15.921,
    "country": "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    "name": "sthelier_p074_uk",
    "lon": -2.1167,
    "lat": 49.183,
    "country": "Jersey"
  },
  {
    "name": "stmarys_p231_uk",
    "lon": -6.3164,
    "lat": 49.918,
    "country": "United Kingdom"
  },
  {
    "name": "stockholm_826a_sweden",
    "lon": 18.082,
    "lat": 59.324,
    "country": "Sweden"
  },
  {
    "name": "stornoway_p042_uk",
    "lon": -6.3882,
    "lat": 58.208,
    "country": "United Kingdom"
  },
  {
    "name": "suape_710a_brazil",
    "lon": -34.95,
    "lat": -8.35,
    "country": "Brazil"
  },
  {
    "name": "subic_bay_382a_philippines",
    "lon": 120.25,
    "lat": 14.765,
    "country": "Philippines"
  },
  {
    "name": "sumoto_japan",
    "lon": 134.9,
    "lat": 34.35,
    "country": "Japan"
  },
  {
    "name": "surabaya_160a_indonesia",
    "lon": 112.72,
    "lat": -7.2083,
    "country": "Indonesia"
  },
  {
    "name": "suva,fiji_001",
    "lon": 178.43,
    "lat": -18.132,
    "country": "Fiji"
  },
  {
    "name": "syowa,_antarctica_127a_japan",
    "lon": 39.6,
    "lat": -69,
    "country": "Japan"
  },
  {
    "name": "takamatsu_japan",
    "lon": 134.05,
    "lat": 34.35,
    "country": "Japan"
  },
  {
    "name": "takoradi_c_231c_ghana",
    "lon": -1.75,
    "lat": 4.8833,
    "country": "Ghana"
  },
  {
    "name": "talara_b_092b_peru",
    "lon": -81.282,
    "lat": -4.5817,
    "country": "Peru"
  },
  {
    "name": "tanegashima_japan",
    "lon": 130.97,
    "lat": 30.467,
    "country": "Japan"
  },
  {
    "name": "tanjong_pagar_699a_singapore",
    "lon": 103.85,
    "lat": 1.2617,
    "country": "Singapore"
  },
  {
    "name": "tannowa_japan",
    "lon": 135.18,
    "lat": 34.333,
    "country": "Japan"
  },
  {
    "name": "taranaki_076a_new_zealand",
    "lon": 174.03,
    "lat": -39.05,
    "country": "New Zealand"
  },
  {
    "name": "taranto_taranto_italy",
    "lon": 17.225,
    "lat": 40.475,
    "country": "Italy"
  },
  {
    "name": "tarawa_c_betio_,kiribati_001",
    "lon": 172.94,
    "lat": 1.3583,
    "country": "Kiribati"
  },
  {
    "name": "tarifa_tari_spain",
    "lon": -5.6,
    "lat": 36,
    "country": "Spain"
  },
  {
    "name": "tauranga_073a_new_zealand",
    "lon": 176.18,
    "lat": -37.65,
    "country": "New Zealand"
  },
  {
    "name": "tawau_385a_malaysia",
    "lon": 117.88,
    "lat": 4.2333,
    "country": "Malaysia"
  },
  {
    "name": "teknaf_137a_bangladesh",
    "lon": 92.3,
    "lat": 20.883,
    "country": "Bangladesh"
  },
  {
    "name": "telchac,_yuk._862a_mexico",
    "lon": -89.308,
    "lat": 21.34,
    "country": "Mexico"
  },
  {
    "name": "tenerife_tenerife_spain",
    "lon": -16.24,
    "lat": 28.478,
    "country": "Spain"
  },
  {
    "name": "termisa_284a_brazil",
    "lon": -37.05,
    "lat": -4.8167,
    "country": "Brazil"
  },
  {
    "name": "thevenard_026_australia",
    "lon": 133.65,
    "lat": -32.146,
    "country": "Australia"
  },
  {
    "name": "timaru_665a_new_zealand",
    "lon": 171.25,
    "lat": -44.383,
    "country": "New Zealand"
  },
  {
    "name": "tinian_698a_n._mariana_islands",
    "lon": 145.62,
    "lat": 14.96,
    "country": "United States"
  },
  {
    "name": "tioman_323a_malaysia",
    "lon": 104.14,
    "lat": 2.8067,
    "country": "Malaysia"
  },
  {
    "name": "toba_japan",
    "lon": 136.85,
    "lat": 34.467,
    "country": "Japan"
  },
  {
    "name": "tobermory_p223_uk",
    "lon": -6.0642,
    "lat": 56.623,
    "country": "United Kingdom"
  },
  {
    "name": "tofino,bc_08615_canada",
    "lon": -125.91,
    "lat": 49.154,
    "country": "Canada"
  },
  {
    "name": "tokyo_japan",
    "lon": 139.77,
    "lat": 35.65,
    "country": "Japan"
  },
  {
    "name": "topolobampo_676a_mexico",
    "lon": -109.05,
    "lat": 25.6,
    "country": "Mexico"
  },
  {
    "name": "tosashimizu_japan",
    "lon": 132.97,
    "lat": 32.783,
    "country": "Japan"
  },
  {
    "name": "toulon_france",
    "lon": 5.9131,
    "lat": 43.117,
    "country": "France"
  },
  {
    "name": "townsville_025_australia",
    "lon": 146.83,
    "lat": -19.25,
    "country": "Australia"
  },
  {
    "name": "toyama_japan",
    "lon": 137.23,
    "lat": 36.767,
    "country": "Japan"
  },
  {
    "name": "tregde_006_norway",
    "lon": 7.5666,
    "lat": 58,
    "country": "Norway"
  },
  {
    "name": "trieste_270061_italy",
    "lon": 13.75,
    "lat": 45.65,
    "country": "Italy"
  },
  {
    "name": "truk,fed.micronesia_001",
    "lon": 151.85,
    "lat": 7.45,
    "country": "Federated States of Micronesia"
  },
  {
    "name": "tsushimahitakatsu_japan",
    "lon": 129.48,
    "lat": 34.65,
    "country": "Japan"
  },
  {
    "name": "tsushima_japan",
    "lon": 129.32,
    "lat": 34.267,
    "country": "Japan"
  },
  {
    "name": "tumaco_303a_colombia",
    "lon": -78.73,
    "lat": 1.8167,
    "country": "Colombia"
  },
  {
    "name": "turku_012_finland",
    "lon": 22.101,
    "lat": 60.428,
    "country": "Finland"
  },
  {
    "name": "uchiura_japan",
    "lon": 138.88,
    "lat": 35.017,
    "country": "Japan"
  },
  {
    "name": "ullapool_p043_uk",
    "lon": -5.1579,
    "lat": 57.895,
    "country": "United Kingdom"
  },
  {
    "name": "unalaska_usa",
    "lon": -166.54,
    "lat": 53.88,
    "country": "United States"
  },
  {
    "name": "uno_japan",
    "lon": 133.95,
    "lat": 34.483,
    "country": "Japan"
  },
  {
    "name": "uragami_japan",
    "lon": 135.9,
    "lat": 33.567,
    "country": "Japan"
  },
  {
    "name": "ushuaia_600a_argentina",
    "lon": -68.217,
    "lat": -54.817,
    "country": "Argentina"
  },
  {
    "name": "uwajima_japan",
    "lon": 132.55,
    "lat": 33.233,
    "country": "Japan"
  },
  {
    "name": "vaasa_013_finland",
    "lon": 21.571,
    "lat": 63.081,
    "country": "Finland"
  },
  {
    "name": "valdez,ak_562a_usa",
    "lon": -146.36,
    "lat": 61.125,
    "country": "United States"
  },
  {
    "name": "valencia_valencia_spain",
    "lon": -0.33,
    "lat": 39.46,
    "country": "Spain"
  },
  {
    "name": "vallarta_393a_mexico",
    "lon": -105.25,
    "lat": 20.615,
    "country": "Mexico"
  },
  {
    "name": "valparaiso_081a_chile",
    "lon": -71.633,
    "lat": -33.033,
    "country": "Chile"
  },
  {
    "name": "vancouver,bc_07735_canada",
    "lon": -123.11,
    "lat": 49.287,
    "country": "Canada"
  },
  {
    "name": "varberg1_024_sweden",
    "lon": 12.217,
    "lat": 57.1,
    "country": "Sweden"
  },
  {
    "name": "vardo,norway_001",
    "lon": 31.1,
    "lat": 70.333,
    "country": "Norway"
  },
  {
    "name": "venezia_punta_salute_italy",
    "lon": 12.426,
    "lat": 45.419,
    "country": "Italy"
  },
  {
    "name": "veracruz_b,ver._250b_mexico",
    "lon": -96.133,
    "lat": 19.2,
    "country": "Mexico"
  },
  {
    "name": "vernadsky_a003_uk+ukraine",
    "lon": -64.267,
    "lat": -65.25,
    "country": "United Kingdom + Ukraine"
  },
  {
    "name": "victorharbor_027_australia",
    "lon": 138.62,
    "lat": -35.553,
    "country": "Australia"
  },
  {
    "name": "victoria,bc_543a_canada",
    "lon": -123.37,
    "lat": 48.422,
    "country": "Canada"
  },
  {
    "name": "victoriaharbour,bc_07120_canada",
    "lon": -123.37,
    "lat": 48.425,
    "country": "Canada"
  },
  {
    "name": "victoria_dock_337a_singapore",
    "lon": 103.82,
    "lat": 1.2633,
    "country": "Singapore"
  },
  {
    "name": "vigo_ieo_spain",
    "lon": -8.7333,
    "lat": 42.233,
    "country": "Spain"
  },
  {
    "name": "viken_025_sweden",
    "lon": 12.579,
    "lat": 56.142,
    "country": "Sweden"
  },
  {
    "name": "villagarcia_villagarcia_spain",
    "lon": -8.77,
    "lat": 42.601,
    "country": "Spain"
  },
  {
    "name": "virginia_key,fl_755a_usa",
    "lon": -80.162,
    "lat": 25.732,
    "country": "United States"
  },
  {
    "name": "visby_026_sweden",
    "lon": 18.284,
    "lat": 57.639,
    "country": "Sweden"
  },
  {
    "name": "vung_tau_b_383b_vietnam",
    "lon": 107.07,
    "lat": 10.34,
    "country": "Vietnam"
  },
  {
    "name": "wakayama_japan",
    "lon": 135.15,
    "lat": 34.217,
    "country": "Japan"
  },
  {
    "name": "wake_051a_usa_trust",
    "lon": 166.62,
    "lat": 19.283,
    "country": "United States"
  },
  {
    "name": "wakkanai_japan",
    "lon": 141.68,
    "lat": 45.4,
    "country": "Japan"
  },
  {
    "name": "walvis_bay_220a_namibia",
    "lon": 14.5,
    "lat": -22.95,
    "country": "Namibia"
  },
  {
    "name": "wanganui_075a_new_zealand",
    "lon": 174.99,
    "lat": -39.947,
    "country": "New Zealand"
  },
  {
    "name": "washingtondc_usa",
    "lon": -77.022,
    "lat": 38.873,
    "country": "United States"
  },
  {
    "name": "wellington_071a_new_zealand",
    "lon": 174.78,
    "lat": -41.283,
    "country": "New Zealand"
  },
  {
    "name": "west_port_074a_new_zealand",
    "lon": 171.6,
    "lat": -41.733,
    "country": "New Zealand"
  },
  {
    "name": "wewak_063a_papua_new_guinea",
    "lon": 143.63,
    "lat": -3.57,
    "country": "Papua New Guinea"
  },
  {
    "name": "weymouth_p991_uk",
    "lon": -2.4479,
    "lat": 50.608,
    "country": "United Kingdom"
  },
  {
    "name": "whitby_p174_uk",
    "lon": -0.61417,
    "lat": 54.49,
    "country": "United Kingdom"
  },
  {
    "name": "wick_p035_uk",
    "lon": -3.0863,
    "lat": 58.441,
    "country": "United Kingdom"
  },
  {
    "name": "willapa_bay,_wa_564a_usa",
    "lon": -123.97,
    "lat": 46.708,
    "country": "United States"
  },
  {
    "name": "willemstad_778a_curacao",
    "lon": -68.942,
    "lat": 12.103,
    "country": "Netherlands"
  },
  {
    "name": "willetspoint_usa",
    "lon": -73.782,
    "lat": 40.793,
    "country": "United States"
  },
  {
    "name": "williamstown_028_australia",
    "lon": 144.9,
    "lat": -37.857,
    "country": "Australia"
  },
  {
    "name": "wilmington,nc_750a_usa",
    "lon": -77.953,
    "lat": 34.227,
    "country": "United States"
  },
  {
    "name": "wladyslawowo_wlad_poland",
    "lon": 18.419,
    "lat": 54.797,
    "country": "Poland"
  },
  {
    "name": "woodislands,pei_01630_canada",
    "lon": -62.7,
    "lat": 45.683,
    "country": "Canada"
  },
  {
    "name": "woods_hole,ma_742a_usa",
    "lon": -70.672,
    "lat": 41.523,
    "country": "United States"
  },
  {
    "name": "workington_p217_uk",
    "lon": -3.5676,
    "lat": 54.651,
    "country": "United Kingdom"
  },
  {
    "name": "wyndham_029_australia",
    "lon": 149.65,
    "lat": -36.929,
    "country": "Australia"
  },
  {
    "name": "wyndham_165a_australia",
    "lon": 128.1,
    "lat": -15.453,
    "country": "Australia"
  },
  {
    "name": "xiamen_376a_china",
    "lon": 118.07,
    "lat": 24.45,
    "country": "China"
  },
  {
    "name": "yabucoa_harbor,_pr_734a_usa",
    "lon": -65.832,
    "lat": 18.055,
    "country": "United States"
  },
  {
    "name": "yakutat_usa",
    "lon": -139.74,
    "lat": 59.548,
    "country": "United States"
  },
  {
    "name": "yap_b_008b_fd._st._micronesia",
    "lon": 138.13,
    "lat": 9.5167,
    "country": "Federated States of Micronesia"
  },
  {
    "name": "yarmouth,ns_00365_canada",
    "lon": -66.117,
    "lat": 43.833,
    "country": "Canada"
  },
  {
    "name": "yavaros_677a_mexico",
    "lon": -109.51,
    "lat": 26.703,
    "country": "Mexico"
  },
  {
    "name": "yokohama_japan",
    "lon": 139.63,
    "lat": 35.467,
    "country": "Japan"
  },
  {
    "name": "yonaguni_japan",
    "lon": 122.95,
    "lat": 24.45,
    "country": "Japan"
  },
  {
    "name": "ystad_027_sweden",
    "lon": 13.817,
    "lat": 55.417,
    "country": "Sweden"
  },
  {
    "name": "zanzibar_151a_tanzania",
    "lon": 39.19,
    "lat": -6.155,
    "country": "Tanzania"
  },
  {
    "name": "zhapo_a_635a_china",
    "lon": 111.83,
    "lat": 21.583,
    "country": "China"
  }
 ]

// mongoose validates all the seed files before inserting anything

const seedDB = async () => {
  await TideGauge.deleteMany({}); // clean up old data

  TideGauge.insertMany(seedTGs)
  .then(res => {
      console.log(res)
  })
  .catch(e => {
      console.log(e)
  })
}

seedDB()
.then (() => {
  monggose.connection.close()
})





