/* here we seed our databases separately from a webapp
   just for development purposes 
   
   place this file in the main folder - not in views

   once connected to mongoose - run it as node seeds.js to seed
*/

// require model created in product.js
const mongoose = require('mongoose');
const TideGauge = require('./models/tideGauge');

mongoose.connect('mongodb://localhost:27017/twcrVald', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongo connection open")
    })
    .catch(err => {
        console.log('oh no mongo connection error')
        console.log(err)
    })

const seedTGs = [
  {
    "name": "aasiaat,greenland_001_glossdm_bodc",
    "lon": -52.883,
    "lat": 68.71,
    "correlation": 0.67468853,
    "rmse": 0.075599284
  },
  {
    "name": "abashiri_japan_jma",
    "lon": 144.28,
    "lat": 44.017,
    "correlation": 0.762237372,
    "rmse": 0.055848639
  },
  {
    "name": "aberdeen_p038_uk_bodc",
    "lon": -2.0745,
    "lat": 57.143,
    "correlation": 0.80298676,
    "rmse": 0.092327473
  },
  {
    "name": "abidjan_vridi_230a_ivory_coast_uhslc",
    "lon": -4,
    "lat": 5.2417,
    "correlation": 0.289104653,
    "rmse": 0.048157954
  },
  {
    "name": "aburatsu_japan_jma",
    "lon": 131.42,
    "lat": 31.567,
    "correlation": 0.609198716,
    "rmse": 0.064886701
  },
  {
    "name": "acajutla_c_082c_el_salvador_uhslc",
    "lon": -89.833,
    "lat": 13.583,
    "correlation": 0.196273312,
    "rmse": 0.065886791
  },
  {
    "name": "acapulco_c,gro._316c_mexico_uhslc",
    "lon": -99.912,
    "lat": 16.84,
    "correlation": 0.318507423,
    "rmse": 0.0599515
  },
  {
    "name": "adak,alaska_040a_usa_uhslc",
    "lon": -176.63,
    "lat": 51.863,
    "correlation": 0.775364271,
    "rmse": 0.079686793
  },
  {
    "name": "aden_172a_yemen,_p.d.r_uhslc",
    "lon": 44.975,
    "lat": 12.788,
    "correlation": 0.344509018,
    "rmse": 0.034395877
  },
  {
    "name": "aguadilla,pr_263a_usa_uhslc",
    "lon": -67.163,
    "lat": 18.457,
    "correlation": 0.400550404,
    "rmse": 0.028995621
  },
  {
    "name": "ajaccio_aspretto_france_med_refmar",
    "lon": 8.7628,
    "lat": 41.923,
    "correlation": 0.738113649,
    "rmse": 0.047850538
  },
  {
    "name": "akabane_japan_jma",
    "lon": 137.18,
    "lat": 34.6,
    "correlation": 0.608856917,
    "rmse": 0.087162699
  },
  {
    "name": "akyab__sittwe__907a_myanmar_uhslc",
    "lon": 92.903,
    "lat": 20.14,
    "correlation": 0.355794298,
    "rmse": 0.137391199
  },
  {
    "name": "alameda_navalairstation__usa_noaa",
    "lon": -122.3,
    "lat": 37.772,
    "correlation": 0.735051854,
    "rmse": 0.049404316
  },
  {
    "name": "albany_001_australia_johnhunter",
    "lon": 117.88,
    "lat": -35.024,
    "correlation": 0.79264204,
    "rmse": 0.067546472
  },
  {
    "name": "alcudia_alcudia_spain_pde",
    "lon": 3.1392,
    "lat": 39.835,
    "correlation": 0.748975228,
    "rmse": 0.051698879
  },
  {
    "name": "alertbay,bc_08280_canada_meds",
    "lon": -126.93,
    "lat": 50.587,
    "correlation": 0.642004082,
    "rmse": 0.094934295
  },
  {
    "name": "alexandria_330071_egypt_noc",
    "lon": 29.917,
    "lat": 31.217,
    "correlation": 0.526732903,
    "rmse": 0.064743813
  },
  {
    "name": "algeciras_alge_spain_ieo",
    "lon": -5.4333,
    "lat": 36.117,
    "correlation": 0.59943732,
    "rmse": 0.071115778
  },
  {
    "name": "almeria_almeria_spain_pde",
    "lon": -2.478,
    "lat": 36.83,
    "correlation": 0.673121115,
    "rmse": 0.050163985
  },
  {
    "name": "alotau_069a_papua_new_guinea_uhslc",
    "lon": 150.45,
    "lat": -10.168,
    "correlation": 0.352594602,
    "rmse": 0.033613688
  },
  {
    "name": "amami_japan_jma",
    "lon": 129.53,
    "lat": 28.317,
    "correlation": 0.511340046,
    "rmse": 0.057090684
  },
  {
    "name": "ambon_b_133b_indonesia_uhslc",
    "lon": 128.18,
    "lat": -3.6833,
    "correlation": 0.593283798,
    "rmse": 0.052246985
  },
  {
    "name": "ammassalik,greenland_001_glossdm_bodc",
    "lon": -37,
    "lat": 65.5,
    "correlation": 0.688188791,
    "rmse": 0.136389401
  },
  {
    "name": "ammassalik_297a_denmark_uhslc",
    "lon": -37,
    "lat": 65.6,
    "correlation": 0.717296272,
    "rmse": 0.122534774
  },
  {
    "name": "anchorage_usa_noaa",
    "lon": -149.89,
    "lat": 61.238,
    "correlation": 0.558738427,
    "rmse": 0.160667763
  },
  {
    "name": "ancona_ancona_italy_idromare",
    "lon": 13.506,
    "lat": 43.625,
    "correlation": 0.745469924,
    "rmse": 0.078874923
  },
  {
    "name": "andenes_001_glossdm_bodc",
    "lon": 16.15,
    "lat": 69.317,
    "correlation": 0.76745269,
    "rmse": 0.088398007
  },
  {
    "name": "anewa_bay_048a_papua_new_guinea_uhslc",
    "lon": 155.88,
    "lat": -6.1833,
    "correlation": 0.215263207,
    "rmse": 0.060590568
  },
  {
    "name": "angra_heroismo_b_215b_portugal_uhslc",
    "lon": -27.24,
    "lat": 38.65,
    "correlation": 0.791741678,
    "rmse": 0.041446128
  },
  {
    "name": "annapolis_navalacademy__usa_noaa",
    "lon": -76.482,
    "lat": 38.983,
    "correlation": 0.751264086,
    "rmse": 0.101554006
  },
  {
    "name": "antalya_anta_turkey_eseas",
    "lon": 30.617,
    "lat": 36.833,
    "correlation": 0.564880804,
    "rmse": 0.069075138
  },
  {
    "name": "antofagasta_080a_chile_uhslc",
    "lon": -70.4,
    "lat": -23.65,
    "correlation": 0.198198342,
    "rmse": 0.046213968
  },
  {
    "name": "apalachicola_usa_noaa",
    "lon": -84.982,
    "lat": 29.727,
    "correlation": 0.788408694,
    "rmse": 0.082047603
  },
  {
    "name": "apia_b_401b_western_samoa_uhslc",
    "lon": -171.75,
    "lat": -13.817,
    "correlation": 0.219139857,
    "rmse": 0.046163781
  },
  {
    "name": "arcachon_eyrac_france_refmar",
    "lon": -1.1636,
    "lat": 44.665,
    "correlation": 0.753661935,
    "rmse": 0.090553707
  },
  {
    "name": "arecibo,_pr_735a_usa_uhslc",
    "lon": -66.702,
    "lat": 18.48,
    "correlation": 0.406550223,
    "rmse": 0.032403502
  },
  {
    "name": "arena_cove,_ca_573a_usa_uhslc",
    "lon": -123.71,
    "lat": 38.913,
    "correlation": 0.748150599,
    "rmse": 0.065377551
  },
  {
    "name": "argentia,nf_00835_canada_meds",
    "lon": -53.983,
    "lat": 47.3,
    "correlation": 0.635486674,
    "rmse": 0.098505545
  },
  {
    "name": "arica_083a_chile_uhslc",
    "lon": -70.333,
    "lat": -18.467,
    "correlation": 0.245855185,
    "rmse": 0.047086728
  },
  {
    "name": "arrecife_arre_spain_ieo",
    "lon": -13.53,
    "lat": 28.972,
    "correlation": 0.382550156,
    "rmse": 0.077078655
  },
  {
    "name": "ascension_uk_noc",
    "lon": -14.417,
    "lat": -7.9167,
    "correlation": 0.211621007,
    "rmse": 0.024154437
  },
  {
    "name": "astoria,or_572a_usa_uhslc",
    "lon": -123.77,
    "lat": 46.208,
    "correlation": 0.762768826,
    "rmse": 0.09259418
  },
  {
    "name": "atlantic_city_264a_usa_uhslc",
    "lon": -74.418,
    "lat": 39.355,
    "correlation": 0.772222189,
    "rmse": 0.103174113
  },
  {
    "name": "auckland_070a_new_zealand_uhslc",
    "lon": 174.77,
    "lat": -36.85,
    "correlation": 0.782306444,
    "rmse": 0.05267406
  },
  {
    "name": "avonmouth_p060_uk_bodc",
    "lon": -2.715,
    "lat": 51.511,
    "correlation": 0.558425165,
    "rmse": 0.20858979
  },
  {
    "name": "awayuki_japan_jma",
    "lon": 134.6,
    "lat": 33.767,
    "correlation": 0.533943391,
    "rmse": 0.073404828
  },
  {
    "name": "ayukawa_japan_jma",
    "lon": 141.5,
    "lat": 38.3,
    "correlation": 0.725392986,
    "rmse": 0.048403752
  },
  {
    "name": "bahia_los_angeles_310a_mexico_uhslc",
    "lon": -113.55,
    "lat": 28.958,
    "correlation": 0.364757769,
    "rmse": 0.051714707
  },
  {
    "name": "bajor_414a_indonesia_uhslc",
    "lon": 117.42,
    "lat": -0.6833,
    "correlation": -0.320384335,
    "rmse": 0.17597656
  },
  {
    "name": "bakar_bakar_I_croatia_university_zagreb",
    "lon": 14.533,
    "lat": 45.3,
    "correlation": 0.774276356,
    "rmse": 0.079883065
  },
  {
    "name": "balboa_302a_panama_uhslc",
    "lon": -79.573,
    "lat": 8.9617,
    "correlation": 0.229853113,
    "rmse": 0.071482547
  },
  {
    "name": "balikpapan_411a_indonesia_uhslc",
    "lon": 116.8,
    "lat": -1.2667,
    "correlation": -0.662674918,
    "rmse": 0.18198191
  },
  {
    "name": "baltimore_usa_noaa",
    "lon": -76.578,
    "lat": 39.267,
    "correlation": 0.746455938,
    "rmse": 0.111751115
  },
  {
    "name": "baltra_b_003b_ecuador_uhslc",
    "lon": -90.285,
    "lat": -0.435,
    "correlation": 0.234587767,
    "rmse": 0.040446215
  },
  {
    "name": "bamfield,bc_08545_canada_meds",
    "lon": -125.14,
    "lat": 48.836,
    "correlation": 0.653901511,
    "rmse": 0.094502358
  },
  {
    "name": "bangor_p662_uk_bodc",
    "lon": -5.6695,
    "lat": 54.665,
    "correlation": 0.796545052,
    "rmse": 0.10900751
  },
  {
    "name": "barbers_point,hi_547a_usa_uhslc",
    "lon": -158.12,
    "lat": 21.32,
    "correlation": 0.416386058,
    "rmse": 0.025006339
  },
  {
    "name": "barcelona_barcelona_spain_pde",
    "lon": 2.163,
    "lat": 41.342,
    "correlation": 0.729629286,
    "rmse": 0.054335205
  },
  {
    "name": "barharbor,frenchmanbay,me_usa_noaa",
    "lon": -68.205,
    "lat": 44.392,
    "correlation": 0.69702157,
    "rmse": 0.088589773
  },
  {
    "name": "bari_bari_italy_idromare",
    "lon": 16.912,
    "lat": 41.137,
    "correlation": 0.527698747,
    "rmse": 0.087337595
  },
  {
    "name": "barmouth_p923_uk_bodc",
    "lon": -4.0452,
    "lat": 52.719,
    "correlation": 0.745802231,
    "rmse": 0.150357464
  },
  {
    "name": "barseback_001_sweden_smhi",
    "lon": 12.903,
    "lat": 55.756,
    "correlation": 0.739078573,
    "rmse": 0.102689267
  },
  {
    "name": "base_prat_b_730b_chile_uhslc",
    "lon": -59.633,
    "lat": -62.483,
    "correlation": 0.769264186,
    "rmse": 0.075315613
  },
  {
    "name": "bayonne_boucau_france_refmar",
    "lon": -1.5148,
    "lat": 43.527,
    "correlation": 0.760864427,
    "rmse": 0.080294811
  },
  {
    "name": "beihai_636a_china_uhslc",
    "lon": 109.08,
    "lat": 21.483,
    "correlation": 0.556556869,
    "rmse": 0.097531399
  },
  {
    "name": "belem,_uscgs_229a_brazil_uhslc",
    "lon": -48.5,
    "lat": -1.45,
    "correlation": 0.211988185,
    "rmse": 0.095008761
  },
  {
    "name": "belize_781a_british_honduras_uhslc",
    "lon": -88.183,
    "lat": 17.5,
    "correlation": 0.367178182,
    "rmse": 0.047532842
  },
  {
    "name": "bellabella,bc_08976_canada_meds",
    "lon": -128.14,
    "lat": 52.163,
    "correlation": 0.624745687,
    "rmse": 0.104389552
  },
  {
    "name": "benoa_b_163b_indonesia_uhslc",
    "lon": 115.21,
    "lat": -8.745,
    "correlation": 0.220520692,
    "rmse": 0.08512849
  },
  {
    "name": "bermuda,st.georgesisland_001_glossdm_bodc",
    "lon": -64.7,
    "lat": 32.4,
    "correlation": 0.528420282,
    "rmse": 0.071728232
  },
  {
    "name": "bilbao_bilbao_spain_pde",
    "lon": -3.05,
    "lat": 43.357,
    "correlation": 0.793439325,
    "rmse": 0.055522842
  },
  {
    "name": "bintulu_387a_malaysia_uhslc",
    "lon": 113.07,
    "lat": 3.2167,
    "correlation": 0.39600922,
    "rmse": 0.050071706
  },
  {
    "name": "bitung_033a_indonesia_uhslc",
    "lon": 125.19,
    "lat": 1.44,
    "correlation": 0.232723912,
    "rmse": 0.037573191
  },
  {
    "name": "bjorn_028_sweden_smhi",
    "lon": 17.967,
    "lat": 60.633,
    "correlation": 0.540037201,
    "rmse": 0.12982388
  },
  {
    "name": "bluff_072a_new_zealand_uhslc",
    "lon": 168.35,
    "lat": -46.6,
    "correlation": 0.83947299,
    "rmse": 0.073205273
  },
  {
    "name": "bonanza_bonanza_spain_pde",
    "lon": -6.34,
    "lat": 36.8,
    "correlation": 0.765108874,
    "rmse": 0.059997424
  },
  {
    "name": "booby_island_336a_australia_uhslc",
    "lon": 141.92,
    "lat": -10.6,
    "correlation": 0.566919078,
    "rmse": 0.091988013
  },
  {
    "name": "boston,ma_741a_usa_uhslc",
    "lon": -71.052,
    "lat": 42.355,
    "correlation": 0.746050816,
    "rmse": 0.090380074
  },
  {
    "name": "boulogne_sur_mer_france_refmar",
    "lon": 1.5777,
    "lat": 50.727,
    "correlation": 0.708442799,
    "rmse": 0.15072004
  },
  {
    "name": "bournemouth_p988_uk_bodc",
    "lon": -1.8749,
    "lat": 50.714,
    "correlation": 0.741239959,
    "rmse": 0.0875014
  },
  {
    "name": "brest_france_refmar",
    "lon": -4.5,
    "lat": 48.383,
    "correlation": 0.764598773,
    "rmse": 0.090799731
  },
  {
    "name": "bridgeport_usa_noaa",
    "lon": -73.182,
    "lat": 41.173,
    "correlation": 0.751859692,
    "rmse": 0.113378748
  },
  {
    "name": "bridgetown_d_249d_barbados_uhslc",
    "lon": -59.617,
    "lat": 13.1,
    "correlation": 0.301642294,
    "rmse": 0.04795401
  },
  {
    "name": "brisbane_002_australia_johnhunter",
    "lon": 153.03,
    "lat": -27.468,
    "correlation": 0.522785324,
    "rmse": 0.066578294
  },
  {
    "name": "brisbane_331a_australia_uhslc",
    "lon": 153.17,
    "lat": -27.367,
    "correlation": 0.517221951,
    "rmse": 0.06589008
  },
  {
    "name": "broome_004_australia_johnhunter",
    "lon": 122.24,
    "lat": -17.955,
    "correlation": 0.290251241,
    "rmse": 0.113372339
  },
  {
    "name": "buenaventura_085a_colombia_uhslc",
    "lon": -77.1,
    "lat": 3.9,
    "correlation": 0.169012593,
    "rmse": 0.099100834
  },
  {
    "name": "buenos_aires_285a_argentina_uhslc",
    "lon": -58.5,
    "lat": -34.667,
    "correlation": 0.662308097,
    "rmse": 0.3572759
  },
  {
    "name": "bunbury_006_australia_johnhunter",
    "lon": 115.64,
    "lat": -33.327,
    "correlation": 0.794523203,
    "rmse": 0.08371412
  },
  {
    "name": "bundaberg_003_australia_johnhunter",
    "lon": 152.35,
    "lat": -24.833,
    "correlation": 0.412317333,
    "rmse": 0.077171877
  },
  {
    "name": "bundaberg_332a_australia_uhslc",
    "lon": 152.38,
    "lat": -24.767,
    "correlation": 0.428189131,
    "rmse": 0.069260315
  },
  {
    "name": "burnie_005_australia_johnhunter",
    "lon": 145.91,
    "lat": -41.053,
    "correlation": 0.632766368,
    "rmse": 0.116812608
  },
  {
    "name": "burnie_344a_australia_uhslc",
    "lon": 145.91,
    "lat": -41.5,
    "correlation": 0.791331032,
    "rmse": 0.064852812
  },
  {
    "name": "cabo_san_lucas_034a_mexico_uhslc",
    "lon": -109.91,
    "lat": 22.88,
    "correlation": 0.335266435,
    "rmse": 0.042025528
  },
  {
    "name": "cadiz_cadi_spain_ieo",
    "lon": -6.2833,
    "lat": 36.533,
    "correlation": 0.681782442,
    "rmse": 0.063853442
  },
  {
    "name": "cagliari_cagliari_italy_idromare",
    "lon": 9.1143,
    "lat": 39.21,
    "correlation": 0.714174314,
    "rmse": 0.053602122
  },
  {
    "name": "cairns_007_australia_johnhunter",
    "lon": 145.78,
    "lat": -16.925,
    "correlation": 0.6203383,
    "rmse": 0.056923725
  },
  {
    "name": "calais_france_refmar",
    "lon": 1.8677,
    "lat": 50.969,
    "correlation": 0.704572643,
    "rmse": 0.150629083
  },
  {
    "name": "caldera,chile_001_glossdm_bodc",
    "lon": -70.833,
    "lat": -27.067,
    "correlation": 0.316468489,
    "rmse": 0.042773277
  },
  {
    "name": "callao_b_093b_peru_uhslc",
    "lon": -77.15,
    "lat": -12.05,
    "correlation": 0.205721493,
    "rmse": 0.05046641
  },
  {
    "name": "cambridgeii_usa_noaa",
    "lon": -76.068,
    "lat": 38.573,
    "correlation": 0.748203262,
    "rmse": 0.096954847
  },
  {
    "name": "campbellriver,bc_08074_canada_meds",
    "lon": -125.25,
    "lat": 50.042,
    "correlation": 0.654398068,
    "rmse": 0.102940714
  },
  {
    "name": "cananeia_281a_brazil_uhslc",
    "lon": -47.925,
    "lat": -25.017,
    "correlation": 0.755505544,
    "rmse": 0.124781887
  },
  {
    "name": "canavieiras,uscgs_707a_brazil_uhslc",
    "lon": -38.967,
    "lat": -15.667,
    "correlation": 0.329738392,
    "rmse": 0.063159352
  },
  {
    "name": "capehatteras,u.s.a._001_glossdm_bodc",
    "lon": -75.635,
    "lat": 35.223,
    "correlation": 0.612599726,
    "rmse": 0.111607108
  },
  {
    "name": "capemay_usa_noaa",
    "lon": -74.96,
    "lat": 38.968,
    "correlation": 0.768142461,
    "rmse": 0.102511421
  },
  {
    "name": "cape_ferguson_343a_australia_uhslc",
    "lon": 147.06,
    "lat": -19.277,
    "correlation": 0.698569519,
    "rmse": 0.062396852
  },
  {
    "name": "cape_may,nj_746a_usa_uhslc",
    "lon": -74.96,
    "lat": 38.968,
    "correlation": 0.770513721,
    "rmse": 0.101312518
  },
  {
    "name": "cape_town_704a_south_africa_uhslc",
    "lon": 18.433,
    "lat": -33.9,
    "correlation": 0.763642823,
    "rmse": 0.061459079
  },
  {
    "name": "carloforte_carloforte_italy_idromare",
    "lon": 8.3095,
    "lat": 39.148,
    "correlation": 0.749153105,
    "rmse": 0.049839216
  },
  {
    "name": "carnarvon_008_australia_johnhunter",
    "lon": 113.66,
    "lat": -24.884,
    "correlation": 0.699226519,
    "rmse": 0.071032814
  },
  {
    "name": "cartagena_b_265b_colombia_uhslc",
    "lon": -75.533,
    "lat": 10.383,
    "correlation": 0.30717014,
    "rmse": 0.041486855
  },
  {
    "name": "cascais_209a_portugal_uhslc",
    "lon": -9.4167,
    "lat": 38.692,
    "correlation": 0.711890293,
    "rmse": 0.056068958
  },
  {
    "name": "casey_130a_australia_uhslc",
    "lon": 110.53,
    "lat": -66.283,
    "correlation": 0.710534632,
    "rmse": 0.074277749
  },
  {
    "name": "castletownsend_835a_ireland_uhslc",
    "lon": -9.1833,
    "lat": 51.533,
    "correlation": 0.75377033,
    "rmse": 0.084392346
  },
  {
    "name": "catalina_b_313b_usa_uhslc",
    "lon": -118.48,
    "lat": 33.45,
    "correlation": 0.384752481,
    "rmse": 0.063373508
  },
  {
    "name": "catania_catania_italy_idromare",
    "lon": 15.094,
    "lat": 37.498,
    "correlation": 0.014588172,
    "rmse": 0.071834402
  },
  {
    "name": "cayenne_227a_france_uhslc",
    "lon": -52.283,
    "lat": 4.85,
    "correlation": 0.529461844,
    "rmse": 0.040946318
  },
  {
    "name": "cebu_379a_philippines_uhslc",
    "lon": 123.92,
    "lat": 10.3,
    "correlation": 0.314473519,
    "rmse": 0.039557243
  },
  {
    "name": "cedarkeyii_usa_noaa",
    "lon": -83.032,
    "lat": 29.135,
    "correlation": 0.762421038,
    "rmse": 0.103156689
  },
  {
    "name": "cedros_island_305a_mexico_uhslc",
    "lon": -115.18,
    "lat": 28.1,
    "correlation": 0.333857476,
    "rmse": 0.04950078
  },
  {
    "name": "celestun_861a_mexico_uhslc",
    "lon": -90.403,
    "lat": 20.858,
    "correlation": 0.492650058,
    "rmse": 0.104491741
  },
  {
    "name": "cendering_320a_malaysia_uhslc",
    "lon": 103.18,
    "lat": 5.2667,
    "correlation": 0.623767448,
    "rmse": 0.069922424
  },
  {
    "name": "centuri_france_med_refmar",
    "lon": 9.3498,
    "lat": 42.966,
    "correlation": 0.724594832,
    "rmse": 0.064785134
  },
  {
    "name": "ceuta_ceta_spain_ieo",
    "lon": -5.3167,
    "lat": 35.9,
    "correlation": 0.729890458,
    "rmse": 0.048224586
  },
  {
    "name": "chabahar_915a_iran_uhslc",
    "lon": 60.603,
    "lat": 25.297,
    "correlation": 0.36199663,
    "rmse": 0.051632518
  },
  {
    "name": "champerico_670a_guatemala_uhslc",
    "lon": -91.917,
    "lat": 14.3,
    "correlation": -0.183145307,
    "rmse": 0.076044673
  },
  {
    "name": "charchanga_138a_bangladesh_uhslc",
    "lon": 91.05,
    "lat": 22.217,
    "correlation": 0.480044597,
    "rmse": 0.171097413
  },
  {
    "name": "charleston,or_575a_usa_uhslc",
    "lon": -124.32,
    "lat": 43.345,
    "correlation": 0.790839939,
    "rmse": 0.071397016
  },
  {
    "name": "charleston,sc_261a_usa_uhslc",
    "lon": -79.925,
    "lat": 32.782,
    "correlation": 0.709581371,
    "rmse": 0.09416221
  },
  {
    "name": "charlottetown,pei_01700_canada_meds",
    "lon": -63.117,
    "lat": 46.233,
    "correlation": 0.610219131,
    "rmse": 0.12836041
  },
  {
    "name": "charlotte_amalie_255a_usa_uhslc",
    "lon": -64.92,
    "lat": 18.335,
    "correlation": 0.306655262,
    "rmse": 0.035064773
  },
  {
    "name": "chatham_079a_new_zealand_uhslc",
    "lon": -176.56,
    "lat": -43.947,
    "correlation": 0.824713174,
    "rmse": 0.05832811
  },
  {
    "name": "cherbourg_france_refmar",
    "lon": -1.6355,
    "lat": 49.651,
    "correlation": 0.752822651,
    "rmse": 0.093595385
  },
  {
    "name": "chesapeake_bbt_749a_usa_uhslc",
    "lon": -76.113,
    "lat": 36.967,
    "correlation": 0.776844118,
    "rmse": 0.100657375
  },
  {
    "name": "chichijima_japan_jma",
    "lon": 142.18,
    "lat": 27.1,
    "correlation": 0.47742969,
    "rmse": 0.060056438
  },
  {
    "name": "chittagong_124a_bangladesh_uhslc",
    "lon": 91.825,
    "lat": 22.247,
    "correlation": 0.498815915,
    "rmse": 0.118242487
  },
  {
    "name": "choshigyoko_japan_jma",
    "lon": 140.87,
    "lat": 35.75,
    "correlation": 0.761805119,
    "rmse": 0.054844997
  },
  {
    "name": "christiansted,vi_258a_usa_uhslc",
    "lon": -64.705,
    "lat": 17.75,
    "correlation": 0.25617322,
    "rmse": 0.037064063
  },
  {
    "name": "christmas_170a_australia_uhslc",
    "lon": 105.67,
    "lat": -10.417,
    "correlation": -0.361723272,
    "rmse": 0.081057236
  },
  {
    "name": "christmas_b,lineis.kiribati_001_glossdm_bodc",
    "lon": -157.48,
    "lat": 1.985,
    "correlation": 0.151890836,
    "rmse": 0.042789548
  },
  {
    "name": "churchill_274a_canada_uhslc",
    "lon": -94.183,
    "lat": 58.767,
    "correlation": 0.663078151,
    "rmse": 0.130708396
  },
  {
    "name": "chuuk_054a_fd._st._micronesia_uhslc",
    "lon": 151.85,
    "lat": 7.45,
    "correlation": 0.22728022,
    "rmse": 0.041193003
  },
  {
    "name": "cilicap_b_162b_indonesia_uhslc",
    "lon": 109.02,
    "lat": -7.7517,
    "correlation": 0.328807426,
    "rmse": 0.099090159
  },
  {
    "name": "ciudad_del_carmen_779a_mexico_uhslc",
    "lon": -91.833,
    "lat": 18.533,
    "correlation": 0.52830143,
    "rmse": 0.079521885
  },
  {
    "name": "civitavecchia_civitavecchia_italy_idromare",
    "lon": 11.79,
    "lat": 42.094,
    "correlation": 0.741850784,
    "rmse": 0.0541367
  },
  {
    "name": "clearwater_bch,fl_773a_usa_uhslc",
    "lon": -82.832,
    "lat": 27.977,
    "correlation": 0.730883403,
    "rmse": 0.078309115
  },
  {
    "name": "cocoa_beach,_fl_754a_usa_uhslc",
    "lon": -80.6,
    "lat": 28.368,
    "correlation": 0.691023059,
    "rmse": 0.075695844
  },
  {
    "name": "cocos_171a_australia_uhslc",
    "lon": 96.883,
    "lat": -12.117,
    "correlation": 0.183800656,
    "rmse": 0.05985649
  },
  {
    "name": "colombo_c_115c_sri_lanka_uhslc",
    "lon": 79.85,
    "lat": 6.9333,
    "correlation": 0.363567635,
    "rmse": 0.047951789
  },
  {
    "name": "concarneau_france_refmar",
    "lon": -3.9072,
    "lat": 47.874,
    "correlation": 0.76025479,
    "rmse": 0.092102311
  },
  {
    "name": "cordemais_france_refmar",
    "lon": -1.8898,
    "lat": 47.277,
    "correlation": 0.648187732,
    "rmse": 0.166534285
  },
  {
    "name": "cordova_b,alaska_583b_usa_uhslc",
    "lon": -145.75,
    "lat": 60.558,
    "correlation": 0.780787245,
    "rmse": 0.096364217
  },
  {
    "name": "corinto_679a_nicaragua_uhslc",
    "lon": -87.117,
    "lat": 12.283,
    "correlation": 0.507982161,
    "rmse": 0.059042569
  },
  {
    "name": "corpus_cristi,tx_770a_usa_uhslc",
    "lon": -97.217,
    "lat": 27.58,
    "correlation": 0.691884506,
    "rmse": 0.081662861
  },
  {
    "name": "coruna_coru_spain_ieo",
    "lon": -8.4,
    "lat": 43.367,
    "correlation": 0.751679976,
    "rmse": 0.073401838
  },
  {
    "name": "cox_s_bazaar_136a_bangladesh_uhslc",
    "lon": 91.833,
    "lat": 21.45,
    "correlation": 0.376575104,
    "rmse": 0.195975161
  },
  {
    "name": "crescent_city,ca_556a_usa_uhslc",
    "lon": -124.18,
    "lat": 41.745,
    "correlation": 0.764650825,
    "rmse": 0.071685393
  },
  {
    "name": "cristobal_266a_panama_uhslc",
    "lon": -79.915,
    "lat": 9.355,
    "correlation": 0.391891976,
    "rmse": 0.033525193
  },
  {
    "name": "cromer_p183_uk_bodc",
    "lon": 1.3016,
    "lat": 52.934,
    "correlation": 0.673781271,
    "rmse": 0.172396345
  },
  {
    "name": "crotone_crotone_italy_idromare",
    "lon": 17.137,
    "lat": 39.082,
    "correlation": 0.672837316,
    "rmse": 0.059637398
  },
  {
    "name": "crozet_b_178b_france_uhslc",
    "lon": 51.87,
    "lat": -46.425,
    "correlation": 0.627429704,
    "rmse": 0.058154307
  },
  {
    "name": "culebra,_pr_219a_usa_uhslc",
    "lon": -65.302,
    "lat": 18.3,
    "correlation": 0.25733059,
    "rmse": 0.032392699
  },
  {
    "name": "currimao_654a_philippines_uhslc",
    "lon": 120.49,
    "lat": 17.988,
    "correlation": 0.46955144,
    "rmse": 0.052935095
  },
  {
    "name": "cuxhaven_germany_bsh",
    "lon": 8.7167,
    "lat": 53.867,
    "correlation": 0.816468538,
    "rmse": 0.234233413
  },
  {
    "name": "dakar_e_223e_senegal_uhslc",
    "lon": -17.43,
    "lat": 14.667,
    "correlation": 0.376459585,
    "rmse": 0.049477145
  },
  {
    "name": "dalian_a_630a_china_uhslc",
    "lon": 121.66,
    "lat": 38.925,
    "correlation": 0.69643631,
    "rmse": 0.111155388
  },
  {
    "name": "dallmann_c_682c_unconfirmed_uhslc",
    "lon": -58.683,
    "lat": -62.233,
    "correlation": 0.776804562,
    "rmse": 0.085500653
  },
  {
    "name": "darwin_009_australia_johnhunter",
    "lon": 130.85,
    "lat": -12.467,
    "correlation": 0.30999189,
    "rmse": 0.090868685
  },
  {
    "name": "dar_es_salaam_102a_tanzania_uhslc",
    "lon": 39.288,
    "lat": -6.82,
    "correlation": 0.088448334,
    "rmse": 0.090532001
  },
  {
    "name": "dauphin_island,_al_763a_usa_uhslc",
    "lon": -88.075,
    "lat": 30.25,
    "correlation": 0.783798627,
    "rmse": 0.076123162
  },
  {
    "name": "davao_b_372b_philippines_uhslc",
    "lon": 125.63,
    "lat": 7.0833,
    "correlation": 0.173607966,
    "rmse": 0.038471936
  },
  {
    "name": "davis,australia_001_glossdm_bodc",
    "lon": 78.5,
    "lat": -68,
    "correlation": 0.698424261,
    "rmse": 0.068809752
  },
  {
    "name": "davis_173a_australia_uhslc",
    "lon": 77.967,
    "lat": -68.45,
    "correlation": 0.71530507,
    "rmse": 0.068036136
  },
  {
    "name": "degerby_001_finland_fmi",
    "lon": 20.385,
    "lat": 60.032,
    "correlation": 0.531758899,
    "rmse": 0.121319329
  },
  {
    "name": "delfzijl_del_nl_rws",
    "lon": 6.9331,
    "lat": 53.326,
    "correlation": 0.806104121,
    "rmse": 0.216843989
  },
  {
    "name": "denhelder_hel_nl_rws",
    "lon": 4.7464,
    "lat": 52.965,
    "correlation": 0.816987932,
    "rmse": 0.160133549
  },
  {
    "name": "devonport_p002_uk_bodc",
    "lon": -4.1852,
    "lat": 50.368,
    "correlation": 0.764075528,
    "rmse": 0.08386116
  },
  {
    "name": "diegogarcia_d,uk_001_glossdm_bodc",
    "lon": 72.433,
    "lat": -7.2333,
    "correlation": 0.293907519,
    "rmse": 0.043690902
  },
  {
    "name": "diegoramirez,chile_001_glossdm_bodc",
    "lon": -68.667,
    "lat": -56.558,
    "correlation": 0.595689227,
    "rmse": 0.139798027
  },
  {
    "name": "diego_garcia_d_104d_united_kingdom_uhslc",
    "lon": 72.433,
    "lat": -7.2333,
    "correlation": 0.240952671,
    "rmse": 0.042242304
  },
  {
    "name": "diego_ramirez_599a_chile_uhslc",
    "lon": -68.715,
    "lat": -56.508,
    "correlation": 0.707368137,
    "rmse": 0.110808971
  },
  {
    "name": "dieppe_france_refmar",
    "lon": 1.0845,
    "lat": 49.929,
    "correlation": 0.703115808,
    "rmse": 0.128531329
  },
  {
    "name": "djibouti_119a_djibouti_uhslc",
    "lon": 43.14,
    "lat": 11.608,
    "correlation": 0.39704503,
    "rmse": 0.035018927
  },
  {
    "name": "donges_france_refmar",
    "lon": -2.0883,
    "lat": 47.306,
    "correlation": 0.776665699,
    "rmse": 0.114782131
  },
  {
    "name": "dongfang_637a_china_uhslc",
    "lon": 108.62,
    "lat": 19.1,
    "correlation": 0.580942539,
    "rmse": 0.068485295
  },
  {
    "name": "dover_p012_uk_bodc",
    "lon": 1.3181,
    "lat": 51.117,
    "correlation": 0.735735428,
    "rmse": 0.122827827
  },
  {
    "name": "draghallan_002_sweden_smhi",
    "lon": 17.533,
    "lat": 62.367,
    "correlation": 0.503828372,
    "rmse": 0.125146742
  },
  {
    "name": "duck_pier,nc_260a_usa_uhslc",
    "lon": -75.74,
    "lat": 36.183,
    "correlation": 0.777633794,
    "rmse": 0.094820014
  },
  {
    "name": "dumont_d_urville_189a_france_uhslc",
    "lon": 140.01,
    "lat": -66.662,
    "correlation": 0.672353635,
    "rmse": 0.07548569
  },
  {
    "name": "dunkerque_france_refmar",
    "lon": 2.3667,
    "lat": 51.048,
    "correlation": 0.735502207,
    "rmse": 0.150275202
  },
  {
    "name": "durban_181a_south_africa_uhslc",
    "lon": 31.05,
    "lat": -29.867,
    "correlation": 0.467588788,
    "rmse": 0.07583357
  },
  {
    "name": "dutch_harbor_b,ak_041b_usa_uhslc",
    "lon": -166.54,
    "lat": 53.88,
    "correlation": 0.785473816,
    "rmse": 0.081859565
  },
  {
    "name": "dzaoudi_155a_mayotte_uhslc",
    "lon": 45.257,
    "lat": -12.78,
    "correlation": -0.047149058,
    "rmse": 0.073860046
  },
  {
    "name": "easter_c_022c_chile_uhslc",
    "lon": -109.45,
    "lat": -27.15,
    "correlation": 0.52819325,
    "rmse": 0.063507115
  },
  {
    "name": "eastport,me_740a_usa_uhslc",
    "lon": -66.985,
    "lat": 44.903,
    "correlation": 0.639336881,
    "rmse": 0.099782018
  },
  {
    "name": "east_london_187a_south_africa_uhslc",
    "lon": 27.917,
    "lat": -33.017,
    "correlation": 0.712947872,
    "rmse": 0.081153185
  },
  {
    "name": "el_hierro_elhierro_spain_pde",
    "lon": -17.9,
    "lat": 27.78,
    "correlation": 0.6653522,
    "rmse": 0.033124273
  },
  {
    "name": "enewetok_b_006b_rep._of_marshall_i_uhslc",
    "lon": 162.39,
    "lat": 11.43,
    "correlation": 0.251302537,
    "rmse": 0.039530517
  },
  {
    "name": "ensenada_317a_mexico_uhslc",
    "lon": -116.63,
    "lat": 31.85,
    "correlation": 0.464475026,
    "rmse": 0.046822778
  },
  {
    "name": "esbjerg_130121_denmark_dmi",
    "lon": 8.4333,
    "lat": 55.467,
    "correlation": 0.821509459,
    "rmse": 0.219748223
  },
  {
    "name": "esmeraldas_098a_ecuador_uhslc",
    "lon": -79.647,
    "lat": 0.9917,
    "correlation": 0.199832371,
    "rmse": 0.061455008
  },
  {
    "name": "esperance_010_australia_johnhunter",
    "lon": 121.89,
    "lat": -33.861,
    "correlation": 0.808452886,
    "rmse": 0.075630687
  },
  {
    "name": "esperanza,argentina_001_glossdm_bodc",
    "lon": -56.995,
    "lat": -63.395,
    "correlation": 0.752274946,
    "rmse": 0.083161898
  },
  {
    "name": "esperanza,_pr_733a_usa_uhslc",
    "lon": -65.47,
    "lat": 18.093,
    "correlation": 0.293427341,
    "rmse": 0.031093994
  },
  {
    "name": "esperence,australia_001_glossdm_bodc",
    "lon": 121.9,
    "lat": -33.867,
    "correlation": 0.815492677,
    "rmse": 0.073319527
  },
  {
    "name": "exuma_cays_256a_bahamas_uhslc",
    "lon": -76.105,
    "lat": 23.773,
    "correlation": 0.619744113,
    "rmse": 0.035979911
  },
  {
    "name": "fajardo_b,pr_783b_usa_uhslc",
    "lon": -65.633,
    "lat": 18.333,
    "correlation": 0.351349297,
    "rmse": 0.033481978
  },
  {
    "name": "fanning_c_012c_rep._of_kiribati_uhslc",
    "lon": -159.39,
    "lat": 3.9067,
    "correlation": 0.264697887,
    "rmse": 0.037014918
  },
  {
    "name": "faraday_700a_united_kingdom_uhslc",
    "lon": -64.267,
    "lat": -65.25,
    "correlation": 0.754495303,
    "rmse": 0.084826614
  },
  {
    "name": "felixstowe_p204_uk_bodc",
    "lon": 1.3484,
    "lat": 51.957,
    "correlation": 0.704509182,
    "rmse": 0.154592451
  },
  {
    "name": "fer._de_noronha_c_203c_brazil_uhslc",
    "lon": -32.403,
    "lat": -3.8283,
    "correlation": 0.356939123,
    "rmse": 0.02303539
  },
  {
    "name": "fernandina_beach_240a_usa_uhslc",
    "lon": -81.467,
    "lat": 30.672,
    "correlation": 0.734689979,
    "rmse": 0.115999863
  },
  {
    "name": "ferrol_ferrol_spain_pde",
    "lon": -8.326,
    "lat": 43.463,
    "correlation": 0.793051007,
    "rmse": 0.065234352
  },
  {
    "name": "fishguard_p055_uk_bodc",
    "lon": -4.9833,
    "lat": 52.014,
    "correlation": 0.783416586,
    "rmse": 0.092714981
  },
  {
    "name": "flores,santa_cruz_210a_portugal_uhslc",
    "lon": -31.168,
    "lat": 39.378,
    "correlation": 0.735139891,
    "rmse": 0.057923139
  },
  {
    "name": "formentera_formentera_spain_pde",
    "lon": 1.4189,
    "lat": 38.735,
    "correlation": 0.728863375,
    "rmse": 0.052568689
  },
  {
    "name": "forsmark_003_sweden_smhi",
    "lon": 18.211,
    "lat": 60.409,
    "correlation": 0.557433873,
    "rmse": 0.129836206
  },
  {
    "name": "fortaleza_c_283c_brazil_uhslc",
    "lon": -38.467,
    "lat": -3.7167,
    "correlation": 0.158714376,
    "rmse": 0.051822017
  },
  {
    "name": "fortdenison_011_australia_johnhunter",
    "lon": 151.23,
    "lat": -33.85,
    "correlation": 0.656217983,
    "rmse": 0.06096951
  },
  {
    "name": "fortmyers_usa_noaa",
    "lon": -81.871,
    "lat": 26.648,
    "correlation": 0.716069028,
    "rmse": 0.079493566
  },
  {
    "name": "fortpulaski_usa_noaa",
    "lon": -80.902,
    "lat": 32.033,
    "correlation": 0.737457024,
    "rmse": 0.102758314
  },
  {
    "name": "fort_denison_333a_australia_uhslc",
    "lon": 151.23,
    "lat": -33.85,
    "correlation": 0.664234638,
    "rmse": 0.059475252
  },
  {
    "name": "fort_de_france_271a_france_uhslc",
    "lon": -61.05,
    "lat": 14.583,
    "correlation": 0.175726149,
    "rmse": 0.037697802
  },
  {
    "name": "fort_pulaski,ga_752a_usa_uhslc",
    "lon": -80.902,
    "lat": 32.033,
    "correlation": 0.735720664,
    "rmse": 0.103155344
  },
  {
    "name": "fos_sur_mer_france_med_refmar",
    "lon": 4.8929,
    "lat": 43.405,
    "correlation": 0.712808671,
    "rmse": 0.066358298
  },
  {
    "name": "freeport_usa_noaa",
    "lon": -95.308,
    "lat": 28.948,
    "correlation": 0.736834371,
    "rmse": 0.086459596
  },
  {
    "name": "fremantle_012_australia_johnhunter",
    "lon": 115.75,
    "lat": -32.053,
    "correlation": 0.723583176,
    "rmse": 0.08849708
  },
  {
    "name": "french_frigate_b_014b_usa_uhslc",
    "lon": -166.29,
    "lat": 23.868,
    "correlation": 0.356053121,
    "rmse": 0.050676916
  },
  {
    "name": "fridayharbor_ocean.labs.__usa_noaa",
    "lon": -123.01,
    "lat": 48.547,
    "correlation": 0.801920506,
    "rmse": 0.075337884
  },
  {
    "name": "fuerteventura_fuerteventura_spain_pde",
    "lon": -13.85,
    "lat": 28.5,
    "correlation": 0.709870543,
    "rmse": 0.027303511
  },
  {
    "name": "fukaura_japan_jma",
    "lon": 139.93,
    "lat": 40.65,
    "correlation": 0.721307878,
    "rmse": 0.062183334
  },
  {
    "name": "fukue_japan_jma",
    "lon": 128.85,
    "lat": 32.7,
    "correlation": 0.535318983,
    "rmse": 0.060175639
  },
  {
    "name": "fulfordharbour,bc_07330_canada_meds",
    "lon": -123.45,
    "lat": 48.769,
    "correlation": 0.661043005,
    "rmse": 0.09264769
  },
  {
    "name": "funafuti,tuvalu_001_glossdm_bodc",
    "lon": 179.19,
    "lat": -8.525,
    "correlation": 0.312510772,
    "rmse": 0.040490316
  },
  {
    "name": "funchal_b_218b_portugal_uhslc",
    "lon": -16.907,
    "lat": 32.64,
    "correlation": 0.746528131,
    "rmse": 0.047469017
  },
  {
    "name": "furuogrund_004_sweden_smhi",
    "lon": 21.231,
    "lat": 64.916,
    "correlation": 0.654480802,
    "rmse": 0.146776851
  },
  {
    "name": "galveston,pier_21_775a_usa_uhslc",
    "lon": -94.79,
    "lat": 29.287,
    "correlation": 0.719591032,
    "rmse": 0.098796788
  },
  {
    "name": "gan_109a_rep._of_maldives_uhslc",
    "lon": 73.152,
    "lat": -0.6867,
    "correlation": 0.312414036,
    "rmse": 0.033783953
  },
  {
    "name": "gandia_gandia_spain_pde",
    "lon": -0.152,
    "lat": 38.995,
    "correlation": 0.724248593,
    "rmse": 0.053720844
  },
  {
    "name": "gedser_837a_denmark_uhslc",
    "lon": 11.933,
    "lat": 54.567,
    "correlation": 0.637220308,
    "rmse": 0.153050282
  },
  {
    "name": "geelong_013_australia_johnhunter",
    "lon": 144.36,
    "lat": -38.147,
    "correlation": 0.821139799,
    "rmse": 0.069272752
  },
  {
    "name": "genova_genova_italy_idromare",
    "lon": 8.9253,
    "lat": 44.41,
    "correlation": 0.692071318,
    "rmse": 0.069095959
  },
  {
    "name": "georgetown_015_australia_johnhunter",
    "lon": 146.85,
    "lat": -41.133,
    "correlation": 0.688993697,
    "rmse": 0.091528493
  },
  {
    "name": "geraldton_014_australia_johnhunter",
    "lon": 114.61,
    "lat": -28.773,
    "correlation": 0.809889122,
    "rmse": 0.071477983
  },
  {
    "name": "geting_326a_malaysia_uhslc",
    "lon": 102.11,
    "lat": 6.2267,
    "correlation": 0.596555439,
    "rmse": 0.088242825
  },
  {
    "name": "gibara_244a_cuba_uhslc",
    "lon": -76.117,
    "lat": 21.117,
    "correlation": 0.281217398,
    "rmse": 0.055116274
  },
  {
    "name": "gibraltar_289a_united_kingdom_uhslc",
    "lon": -5.35,
    "lat": 36.117,
    "correlation": 0.676553586,
    "rmse": 0.053030342
  },
  {
    "name": "gijon_gijon_spain_pde",
    "lon": -5.698,
    "lat": 43.558,
    "correlation": 0.823065945,
    "rmse": 0.056885628
  },
  {
    "name": "gisborne_b_078b_new_zealand_uhslc",
    "lon": 178.03,
    "lat": -38.683,
    "correlation": 0.774710899,
    "rmse": 0.061747799
  },
  {
    "name": "gladstone_p234_uk_bodc",
    "lon": -3.018,
    "lat": 53.45,
    "correlation": 0.760959234,
    "rmse": 0.156116657
  },
  {
    "name": "gloucesterpoint_usa_noaa",
    "lon": -76.5,
    "lat": 37.247,
    "correlation": 0.760713343,
    "rmse": 0.0967694
  },
  {
    "name": "gobo_japan_jma",
    "lon": 135.17,
    "lat": 33.85,
    "correlation": 0.519914955,
    "rmse": 0.078129658
  },
  {
    "name": "gomera_gomera_spain_pde",
    "lon": -17,
    "lat": 28,
    "correlation": 0.573980266,
    "rmse": 0.038718529
  },
  {
    "name": "goteborgtorshamnen_005_sweden_smhi",
    "lon": 11.8,
    "lat": 57.683,
    "correlation": 0.815472717,
    "rmse": 0.108072066
  },
  {
    "name": "grandisle_usa_noaa",
    "lon": -89.957,
    "lat": 29.263,
    "correlation": 0.745642155,
    "rmse": 0.066816461
  },
  {
    "name": "groote_eylandt_145a_australia_uhslc",
    "lon": 136.42,
    "lat": -13.86,
    "correlation": 0.631299291,
    "rmse": 0.092571231
  },
  {
    "name": "guadalupe_036a_mexico_uhslc",
    "lon": -118.3,
    "lat": 28.883,
    "correlation": 0.35563007,
    "rmse": 0.04384409
  },
  {
    "name": "guam_053a_usa_trust_uhslc",
    "lon": 144.65,
    "lat": 13.433,
    "correlation": 0.260445812,
    "rmse": 0.041077774
  },
  {
    "name": "guantanamo_bay_b_251b_cuba_uhslc",
    "lon": -75.147,
    "lat": 19.907,
    "correlation": 0.240117211,
    "rmse": 0.033390091
  },
  {
    "name": "guaymas_397a_mexico_uhslc",
    "lon": -110.9,
    "lat": 27.933,
    "correlation": 0.409759545,
    "rmse": 0.058755879
  },
  {
    "name": "hachinohe_japan_jma",
    "lon": 141.53,
    "lat": 40.533,
    "correlation": 0.706691652,
    "rmse": 0.051774863
  },
  {
    "name": "haikou_638a_china_uhslc",
    "lon": 110.28,
    "lat": 20.017,
    "correlation": 0.617287083,
    "rmse": 0.080767986
  },
  {
    "name": "hakodate_japan_jma",
    "lon": 140.73,
    "lat": 41.783,
    "correlation": 0.741623286,
    "rmse": 0.054461976
  },
  {
    "name": "halifax,ns_00490_canada_meds",
    "lon": -63.583,
    "lat": 44.667,
    "correlation": 0.575530323,
    "rmse": 0.101713497
  },
  {
    "name": "hamada_japan_jma",
    "lon": 132.07,
    "lat": 34.9,
    "correlation": 0.682140174,
    "rmse": 0.061536094
  },
  {
    "name": "hamina_002_finland_fmi",
    "lon": 27.179,
    "lat": 60.563,
    "correlation": 0.640252728,
    "rmse": 0.162340118
  },
  {
    "name": "hanasaki_japan_jma",
    "lon": 145.57,
    "lat": 43.283,
    "correlation": 0.735802424,
    "rmse": 0.05904259
  },
  {
    "name": "hanimaadhoo_b_117b_rep._of_maldives_uhslc",
    "lon": 73.167,
    "lat": 6.7667,
    "correlation": 0.295677228,
    "rmse": 0.041987264
  },
  {
    "name": "hanko_003_finland_fmi",
    "lon": 22.977,
    "lat": 59.823,
    "correlation": 0.596352548,
    "rmse": 0.126625665
  },
  {
    "name": "harvest_oil_p.,ca_594a_usa_uhslc",
    "lon": -120.67,
    "lat": 34.468,
    "correlation": 0.589435985,
    "rmse": 0.03952991
  },
  {
    "name": "harwich_p022_uk_bodc",
    "lon": 1.2845,
    "lat": 51.947,
    "correlation": 0.688070588,
    "rmse": 0.143695435
  },
  {
    "name": "heimsjoe_001_norway_statkart",
    "lon": 9.1014,
    "lat": 63.425,
    "correlation": 0.75909811,
    "rmse": 0.099550348
  },
  {
    "name": "helsinki_004_finland_fmi",
    "lon": 24.956,
    "lat": 60.154,
    "correlation": 0.625569871,
    "rmse": 0.139403366
  },
  {
    "name": "heysham_p050_uk_bodc",
    "lon": -2.9204,
    "lat": 54.032,
    "correlation": 0.763694256,
    "rmse": 0.16340959
  },
  {
    "name": "hillarys_132a_australia_uhslc",
    "lon": 115.74,
    "lat": -31.825,
    "correlation": 0.828799877,
    "rmse": 0.072796365
  },
  {
    "name": "hilo,_hawaii_060a_usa_uhslc",
    "lon": -155.07,
    "lat": 19.733,
    "correlation": 0.353090321,
    "rmse": 0.04120499
  },
  {
    "name": "hinkleypoint_p003_uk_bodc",
    "lon": -3.1343,
    "lat": 51.215,
    "correlation": 0.689622598,
    "rmse": 0.152137891
  },
  {
    "name": "hiron_point_134a_bangladesh_uhslc",
    "lon": 89.467,
    "lat": 21.783,
    "correlation": 0.54629742,
    "rmse": 0.130312756
  },
  {
    "name": "hiva_oa_017a_french_polynesia_uhslc",
    "lon": -139.03,
    "lat": -9.81,
    "correlation": -0.036080261,
    "rmse": 0.035124888
  },
  {
    "name": "hobart_016_australia_johnhunter",
    "lon": 147.33,
    "lat": -42.883,
    "correlation": 0.783352964,
    "rmse": 0.078102974
  },
  {
    "name": "hoekvanholla_hvh_nl_rws",
    "lon": 4.12,
    "lat": 51.977,
    "correlation": 0.784010955,
    "rmse": 0.157635183
  },
  {
    "name": "hofu_japan_jma",
    "lon": 131.58,
    "lat": 34.033,
    "correlation": 0.42656256,
    "rmse": 0.078075907
  },
  {
    "name": "holyhead_p054_uk_bodc",
    "lon": -4.6312,
    "lat": 53.308,
    "correlation": 0.791653235,
    "rmse": 0.106851954
  },
  {
    "name": "hong_kong_b_329b_china_uhslc",
    "lon": 114.2,
    "lat": 22.3,
    "correlation": 0.757626836,
    "rmse": 0.081293823
  },
  {
    "name": "honiara,solomonislands_001_glossdm_bodc",
    "lon": 159.96,
    "lat": -9.425,
    "correlation": 0.210727788,
    "rmse": 0.038959901
  },
  {
    "name": "honmoku_japan_jma",
    "lon": 139.67,
    "lat": 35.433,
    "correlation": 0.542554383,
    "rmse": 0.078108308
  },
  {
    "name": "honningsvaag_002_norway_statkart",
    "lon": 25.973,
    "lat": 70.98,
    "correlation": 0.736955432,
    "rmse": 0.089779719
  },
  {
    "name": "honolulu_b,hawaii_057b_usa_uhslc",
    "lon": -157.86,
    "lat": 21.295,
    "correlation": 0.333233584,
    "rmse": 0.032679018
  },
  {
    "name": "hon_dau_b_650b_vietnam_uhslc",
    "lon": 106.82,
    "lat": 20.667,
    "correlation": 0.463477871,
    "rmse": 0.098509244
  },
  {
    "name": "hornbaek_838a_denmark_uhslc",
    "lon": 12.467,
    "lat": 56.1,
    "correlation": 0.803669414,
    "rmse": 0.12419248
  },
  {
    "name": "horta,azores_212a_portugal_uhslc",
    "lon": -28.622,
    "lat": 38.533,
    "correlation": 0.743515312,
    "rmse": 0.047622095
  },
  {
    "name": "hosojima_358a_japan_uhslc",
    "lon": 131.68,
    "lat": 32.417,
    "correlation": 0.571519277,
    "rmse": 0.069949071
  },
  {
    "name": "huelva_huelva_spain_pde",
    "lon": -6.834,
    "lat": 37.132,
    "correlation": 0.777178608,
    "rmse": 0.053871434
  },
  {
    "name": "humboldt_bay,_ca_576a_usa_uhslc",
    "lon": -124.22,
    "lat": 40.767,
    "correlation": 0.78790176,
    "rmse": 0.055837842
  },
  {
    "name": "ibiza_ibiza_spain_pde",
    "lon": 1.4497,
    "lat": 38.911,
    "correlation": 0.745135766,
    "rmse": 0.048976161
  },
  {
    "name": "ile_royale_850a_france_uhslc",
    "lon": -52.585,
    "lat": 5.285,
    "correlation": 0.225881384,
    "rmse": 0.040200321
  },
  {
    "name": "ilfracombe_p061_uk_bodc",
    "lon": -4.1109,
    "lat": 51.211,
    "correlation": 0.76594499,
    "rmse": 0.099553797
  },
  {
    "name": "ilha_fiscal,rj_280a_brazil_uhslc",
    "lon": -43.165,
    "lat": -22.897,
    "correlation": 0.676436936,
    "rmse": 0.106053293
  },
  {
    "name": "ilulissat,greenland_001_glossdm_bodc",
    "lon": -51.1,
    "lat": 69.217,
    "correlation": 0.717709947,
    "rmse": 0.077530973
  },
  {
    "name": "imbituba_718a_brazil_uhslc",
    "lon": -48.4,
    "lat": -28.133,
    "correlation": 0.769602051,
    "rmse": 0.114086535
  },
  {
    "name": "immingham_p026_uk_bodc",
    "lon": -0.18603,
    "lat": 53.631,
    "correlation": 0.685144079,
    "rmse": 0.141890119
  },
  {
    "name": "imperia_imperia_italy_idromare",
    "lon": 8.0188,
    "lat": 43.878,
    "correlation": 0.758838792,
    "rmse": 0.047511357
  },
  {
    "name": "irouzaki_japan_jma",
    "lon": 138.85,
    "lat": 34.617,
    "correlation": 0.61337696,
    "rmse": 0.069345817
  },
  {
    "name": "isabel_segunda,_pr_732a_usa_uhslc",
    "lon": -65.443,
    "lat": 18.152,
    "correlation": 0.406165449,
    "rmse": 0.032896019
  },
  {
    "name": "ishigaki_japan_jma",
    "lon": 124.15,
    "lat": 24.333,
    "correlation": 0.483429872,
    "rmse": 0.063850618
  },
  {
    "name": "isladapascua_e,chile_001_glossdm_bodc",
    "lon": -109.45,
    "lat": -27.15,
    "correlation": 0.595672589,
    "rmse": 0.057580178
  },
  {
    "name": "iwasaki_japan_jma",
    "lon": 139.92,
    "lat": 40.583,
    "correlation": 0.579416515,
    "rmse": 0.083723388
  },
  {
    "name": "i_royal,anselegoff_851a_france_uhslc",
    "lon": -52.587,
    "lat": 5.2883,
    "correlation": 0.249100298,
    "rmse": 0.044863178
  },
  {
    "name": "jackson_403a_new_zealand_uhslc",
    "lon": 168.62,
    "lat": -43.983,
    "correlation": 0.840185623,
    "rmse": 0.067934954
  },
  {
    "name": "jakarta_161a_indonesia_uhslc",
    "lon": 106.85,
    "lat": -6.1167,
    "correlation": 0.286540237,
    "rmse": 0.06884539
  },
  {
    "name": "johnston_052a_usa_trust_uhslc",
    "lon": -169.53,
    "lat": 16.738,
    "correlation": 0.209041808,
    "rmse": 0.071674299
  },
  {
    "name": "johor_baharu_321a_malaysia_uhslc",
    "lon": 103.79,
    "lat": 1.4617,
    "correlation": 0.527428419,
    "rmse": 0.068720176
  },
  {
    "name": "jolo_373a_philippines_uhslc",
    "lon": 121,
    "lat": 6.0667,
    "correlation": 0.290017651,
    "rmse": 0.031237666
  },
  {
    "name": "juan_fernandez_b_021b_chile_uhslc",
    "lon": -78.833,
    "lat": -33.622,
    "correlation": 0.600948124,
    "rmse": 0.045241708
  },
  {
    "name": "juneau_usa_noaa",
    "lon": -134.41,
    "lat": 58.298,
    "correlation": 0.771969001,
    "rmse": 0.091953515
  },
  {
    "name": "kagoshima_japan_jma",
    "lon": 130.57,
    "lat": 31.583,
    "correlation": 0.558819414,
    "rmse": 0.068563028
  },
  {
    "name": "kahului_059a_usa_uhslc",
    "lon": -156.47,
    "lat": 20.9,
    "correlation": 0.415221925,
    "rmse": 0.03322288
  },
  {
    "name": "kalix_006_sweden_smhi",
    "lon": 23.096,
    "lat": 65.697,
    "correlation": 0.678432379,
    "rmse": 0.162521741
  },
  {
    "name": "kanmen_a_632a_china_uhslc",
    "lon": 121.28,
    "lat": 28.088,
    "correlation": 0.766006302,
    "rmse": 0.090712
  },
  {
    "name": "kanton_b,kiribati_001_glossdm_bodc",
    "lon": -171.72,
    "lat": -2.81,
    "correlation": 0.223592668,
    "rmse": 0.036198571
  },
  {
    "name": "kaohsiung_340a_republic_of_china_uhslc",
    "lon": 120.29,
    "lat": 22.615,
    "correlation": 0.489338829,
    "rmse": 0.05498693
  },
  {
    "name": "kapingamarangi_029a_fd._st._micronesia_uhslc",
    "lon": 154.78,
    "lat": 1.0983,
    "correlation": 0.451180059,
    "rmse": 0.055196854
  },
  {
    "name": "karachi_b_147b_pakistan_uhslc",
    "lon": 66.967,
    "lat": 24.8,
    "correlation": 0.221229137,
    "rmse": 0.132208746
  },
  {
    "name": "kaskinen_005_finland_fmi",
    "lon": 21.215,
    "lat": 62.344,
    "correlation": 0.595217522,
    "rmse": 0.132830961
  },
  {
    "name": "kaumalapau,_hi_548a_usa_uhslc",
    "lon": -156.9,
    "lat": 20.78,
    "correlation": 0.282793176,
    "rmse": 0.025549128
  },
  {
    "name": "kavieng_068a_papua_new_guinea_uhslc",
    "lon": 150.79,
    "lat": -2.585,
    "correlation": 0.253613459,
    "rmse": 0.033417085
  },
  {
    "name": "kawaihae_552a_usa_uhslc",
    "lon": -155.83,
    "lat": 20.033,
    "correlation": 0.261032991,
    "rmse": 0.038761288
  },
  {
    "name": "kawasaki_japan_jma",
    "lon": 139.75,
    "lat": 35.517,
    "correlation": 0.621745488,
    "rmse": 0.072995065
  },
  {
    "name": "keelung_341a_republic_of_china_uhslc",
    "lon": 121.75,
    "lat": 25.157,
    "correlation": 0.631710362,
    "rmse": 0.057328938
  },
  {
    "name": "kelang_140a_malaysia_uhslc",
    "lon": 101.36,
    "lat": 3.05,
    "correlation": 0.395487229,
    "rmse": 0.072379397
  },
  {
    "name": "keling_141a_malaysia_uhslc",
    "lon": 102.15,
    "lat": 2.215,
    "correlation": 0.31553765,
    "rmse": 0.054624779
  },
  {
    "name": "kemi_006_finland_fmi",
    "lon": 24.515,
    "lat": 65.673,
    "correlation": 0.693303471,
    "rmse": 0.170865894
  },
  {
    "name": "keppel_harbour_327a_singapore_uhslc",
    "lon": 103.82,
    "lat": 1.2633,
    "correlation": 0.429192311,
    "rmse": 0.060847883
  },
  {
    "name": "kerguelen_001_glossdm_bodc",
    "lon": 70.167,
    "lat": -48.858,
    "correlation": 0.699660495,
    "rmse": 0.076892466
  },
  {
    "name": "kerguelen_180a_france_uhslc",
    "lon": 70.22,
    "lat": -49.345,
    "correlation": 0.713891125,
    "rmse": 0.07697108
  },
  {
    "name": "ketchikan,ak_571a_usa_uhslc",
    "lon": -131.63,
    "lat": 55.333,
    "correlation": 0.742629075,
    "rmse": 0.101359477
  },
  {
    "name": "key_west,fl_242a_usa_uhslc",
    "lon": -81.808,
    "lat": 24.553,
    "correlation": 0.449603611,
    "rmse": 0.051312698
  },
  {
    "name": "khal_#10_135a_bangladesh_uhslc",
    "lon": 91.817,
    "lat": 22.267,
    "correlation": 0.511655857,
    "rmse": 0.157252558
  },
  {
    "name": "khepupara_139a_bangladesh_uhslc",
    "lon": 89.833,
    "lat": 21.833,
    "correlation": 0.428173374,
    "rmse": 0.196519742
  },
  {
    "name": "kingedwardpoint_uk_noc",
    "lon": -36.497,
    "lat": -54.283,
    "correlation": 0.779375929,
    "rmse": 0.070757049
  },
  {
    "name": "kinlochbervi_p918_uk_bodc",
    "lon": -5.0504,
    "lat": 58.457,
    "correlation": 0.815147517,
    "rmse": 0.113869276
  },
  {
    "name": "kiptopekebeach_usa_noaa",
    "lon": -75.988,
    "lat": 37.165,
    "correlation": 0.78484431,
    "rmse": 0.087981225
  },
  {
    "name": "klagshamn_007_sweden_smhi",
    "lon": 12.894,
    "lat": 55.522,
    "correlation": 0.57924067,
    "rmse": 0.126779111
  },
  {
    "name": "knysna_186a_south_africa_uhslc",
    "lon": 23.033,
    "lat": -32.033,
    "correlation": 0.806738786,
    "rmse": 0.078413862
  },
  {
    "name": "kobe_japan_jma",
    "lon": 135.18,
    "lat": 34.683,
    "correlation": 0.604943664,
    "rmse": 0.076847465
  },
  {
    "name": "kochi_japan_jma",
    "lon": 133.57,
    "lat": 33.5,
    "correlation": 0.549201042,
    "rmse": 0.077787212
  },
  {
    "name": "kodiak_isl.,alaska_039a_usa_uhslc",
    "lon": -152.51,
    "lat": 57.732,
    "correlation": 0.765534194,
    "rmse": 0.083285353
  },
  {
    "name": "komatsushima_japan_jma",
    "lon": 134.58,
    "lat": 34.017,
    "correlation": 0.574613813,
    "rmse": 0.074436333
  },
  {
    "name": "kota_kinabalu_386a_malaysia_uhslc",
    "lon": 116.07,
    "lat": 5.9833,
    "correlation": 0.471950967,
    "rmse": 0.050197068
  },
  {
    "name": "ko_lak_328a_thailand_uhslc",
    "lon": 99.817,
    "lat": 11.795,
    "correlation": 0.509427492,
    "rmse": 0.101911536
  },
  {
    "name": "ko_taphao_noi_148a_thailand_uhslc",
    "lon": 98.425,
    "lat": 7.8317,
    "correlation": 0.236982976,
    "rmse": 0.067861096
  },
  {
    "name": "kuantan_322a_malaysia_uhslc",
    "lon": 103.43,
    "lat": 3.975,
    "correlation": 0.574088103,
    "rmse": 0.06684966
  },
  {
    "name": "kuchinotsu_japan_jma",
    "lon": 130.2,
    "lat": 32.6,
    "correlation": 0.545489248,
    "rmse": 0.068181762
  },
  {
    "name": "kukup_325a_malaysia_uhslc",
    "lon": 103.44,
    "lat": 1.325,
    "correlation": 0.344094542,
    "rmse": 0.065134802
  },
  {
    "name": "kumano_japan_jma",
    "lon": 136.17,
    "lat": 33.933,
    "correlation": 0.611029043,
    "rmse": 0.064959202
  },
  {
    "name": "kungsholmsfort_008_sweden_smhi",
    "lon": 15.589,
    "lat": 56.105,
    "correlation": 0.592847199,
    "rmse": 0.120877641
  },
  {
    "name": "kungsvik_009_sweden_smhi",
    "lon": 11.127,
    "lat": 58.997,
    "correlation": 0.802119198,
    "rmse": 0.119838365
  },
  {
    "name": "kushimoto_japan_jma",
    "lon": 135.78,
    "lat": 33.467,
    "correlation": 0.589334516,
    "rmse": 0.071737722
  },
  {
    "name": "kushiro_japan_jma",
    "lon": 144.38,
    "lat": 42.967,
    "correlation": 0.739626409,
    "rmse": 0.056331929
  },
  {
    "name": "kwajalein_055a_rep._of_marshall_i_uhslc",
    "lon": 167.73,
    "lat": 8.7333,
    "correlation": 0.239568814,
    "rmse": 0.035795444
  },
  {
    "name": "l._cornwallis_i._705a_canada_uhslc",
    "lon": -96.95,
    "lat": 75.383,
    "correlation": 0.717159167,
    "rmse": 0.066150819
  },
  {
    "name": "lae_067a_papua_new_guinea_uhslc",
    "lon": 146.98,
    "lat": -6.7333,
    "correlation": 0.370798909,
    "rmse": 0.033033357
  },
  {
    "name": "lagos,_algarve_723a_portugal_uhslc",
    "lon": -8.6683,
    "lat": 37.098,
    "correlation": 0.662953023,
    "rmse": 0.066152405
  },
  {
    "name": "lagos_c_233c_nigeria_uhslc",
    "lon": 3.45,
    "lat": 6.4167,
    "correlation": 0.096130516,
    "rmse": 0.063735168
  },
  {
    "name": "lajolla_scrippspier__usa_noaa",
    "lon": -117.26,
    "lat": 32.867,
    "correlation": 0.499717438,
    "rmse": 0.042717826
  },
  {
    "name": "lameshur_bay,_vi_214a_usa_uhslc",
    "lon": -64.723,
    "lat": 18.317,
    "correlation": 0.338182242,
    "rmse": 0.028083279
  },
  {
    "name": "lampedusa_lampedusa_italy_idromare",
    "lon": 12.604,
    "lat": 35.5,
    "correlation": 0.58655248,
    "rmse": 0.072516149
  },
  {
    "name": "lamu_b_149b_kenya_uhslc",
    "lon": 40.903,
    "lat": -2.2717,
    "correlation": 0.312369244,
    "rmse": 0.039118458
  },
  {
    "name": "landsortnorra_010_sweden_smhi",
    "lon": 17.865,
    "lat": 58.742,
    "correlation": 0.521067653,
    "rmse": 0.112969224
  },
  {
    "name": "langkawi_142a_malaysia_uhslc",
    "lon": 99.765,
    "lat": 6.4317,
    "correlation": 0.350407906,
    "rmse": 0.061161117
  },
  {
    "name": "laohutan_a_631a_china_uhslc",
    "lon": 121.68,
    "lat": 38.867,
    "correlation": 0.706394924,
    "rmse": 0.104416008
  },
  {
    "name": "las_palmas_laspalmas_spain_pde",
    "lon": -15.412,
    "lat": 28.141,
    "correlation": 0.733237831,
    "rmse": 0.028303416
  },
  {
    "name": "lautoka_402a_fiji_uhslc",
    "lon": 177.43,
    "lat": -17.6,
    "correlation": 0.358337661,
    "rmse": 0.035677593
  },
  {
    "name": "la_coruna_830a_spain_uhslc",
    "lon": -8.4,
    "lat": 43.367,
    "correlation": 0.75198827,
    "rmse": 0.073183108
  },
  {
    "name": "la_figueirette_france_med_refmar",
    "lon": 6.9349,
    "lat": 43.483,
    "correlation": 0.658603391,
    "rmse": 0.055643705
  },
  {
    "name": "la_guaira_247a_venezuela_uhslc",
    "lon": -66.933,
    "lat": 10.617,
    "correlation": 0.389470199,
    "rmse": 0.043753037
  },
  {
    "name": "la_jolla,ca_554a_usa_uhslc",
    "lon": -117.26,
    "lat": 32.867,
    "correlation": 0.500121817,
    "rmse": 0.04241489
  },
  {
    "name": "la_libertad_091a_ecuador_uhslc",
    "lon": -80.917,
    "lat": -2.2,
    "correlation": 0.201155291,
    "rmse": 0.055463578
  },
  {
    "name": "la_palma_lapalma_spain_pde",
    "lon": -17.768,
    "lat": 28.678,
    "correlation": 0.66002698,
    "rmse": 0.04191611
  },
  {
    "name": "la_paz_671a_mexico_uhslc",
    "lon": -110.34,
    "lat": 24.162,
    "correlation": 0.37759859,
    "rmse": 0.038246777
  },
  {
    "name": "la_rochelle_la_palli_france_refmar",
    "lon": -1.2206,
    "lat": 46.158,
    "correlation": 0.749415709,
    "rmse": 0.097683468
  },
  {
    "name": "la_union_b_086b_el_salvador_uhslc",
    "lon": -87.817,
    "lat": 13.333,
    "correlation": 0.259335198,
    "rmse": 0.052643594
  },
  {
    "name": "legaspi_371a_philippines_uhslc",
    "lon": 123.75,
    "lat": 13.15,
    "correlation": 0.339411786,
    "rmse": 0.05234104
  },
  {
    "name": "leith_p034_uk_bodc",
    "lon": -3.1817,
    "lat": 55.99,
    "correlation": 0.769663054,
    "rmse": 0.099624629
  },
  {
    "name": "lembar_419a_indonesia_uhslc",
    "lon": 116.07,
    "lat": -8.7317,
    "correlation": 0.464143407,
    "rmse": 0.041430445
  },
  {
    "name": "lerwick_p041_uk_bodc",
    "lon": -1.1333,
    "lat": 60.15,
    "correlation": 0.810584328,
    "rmse": 0.076085742
  },
  {
    "name": "les_sables_d_olonne_france_refmar",
    "lon": -1.7935,
    "lat": 46.497,
    "correlation": 0.770776042,
    "rmse": 0.089031074
  },
  {
    "name": "lewes,de_747a_usa_uhslc",
    "lon": -75.12,
    "lat": 38.782,
    "correlation": 0.788709377,
    "rmse": 0.104925428
  },
  {
    "name": "le_conquet_france_refmar",
    "lon": -4.7807,
    "lat": 48.359,
    "correlation": 0.782489992,
    "rmse": 0.083243082
  },
  {
    "name": "le_crouesty_france_refmar",
    "lon": -2.8952,
    "lat": 47.543,
    "correlation": 0.783805614,
    "rmse": 0.088991217
  },
  {
    "name": "le_havre_france_refmar",
    "lon": 0.106,
    "lat": 49.482,
    "correlation": 0.732386545,
    "rmse": 0.116473243
  },
  {
    "name": "le_pellerin_france_refmar",
    "lon": -1.7651,
    "lat": 47.205,
    "correlation": 0.46399163,
    "rmse": 0.280314744
  },
  {
    "name": "le_robert_270a_france_uhslc",
    "lon": -60.933,
    "lat": 14.683,
    "correlation": 0.363040562,
    "rmse": 0.033041922
  },
  {
    "name": "lianyungang_639a_china_uhslc",
    "lon": 119.42,
    "lat": 34.75,
    "correlation": 0.642523516,
    "rmse": 0.137281912
  },
  {
    "name": "limetree_bay_254a_usa_uhslc",
    "lon": -64.753,
    "lat": 17.697,
    "correlation": 0.255325022,
    "rmse": 0.033027778
  },
  {
    "name": "limon_b_268b_costa_rica_uhslc",
    "lon": -83.033,
    "lat": 10,
    "correlation": 0.352880292,
    "rmse": 0.036392994
  },
  {
    "name": "livorno_livorno_italy_idromare",
    "lon": 10.299,
    "lat": 43.546,
    "correlation": 0.338871805,
    "rmse": 0.079725383
  },
  {
    "name": "llandudno_p007_uk_bodc",
    "lon": -3.8252,
    "lat": 53.332,
    "correlation": 0.646558271,
    "rmse": 0.200220934
  },
  {
    "name": "lobito_237a_angola_uhslc",
    "lon": 13.558,
    "lat": -12.333,
    "correlation": -0.35309073,
    "rmse": 0.066285917
  },
  {
    "name": "lobos_de_afuera_084a_peru_uhslc",
    "lon": -80.717,
    "lat": -6.9333,
    "correlation": 0.201547534,
    "rmse": 0.057302713
  },
  {
    "name": "lombrum_400a_papua_new_guinea_uhslc",
    "lon": 147.37,
    "lat": -2.0333,
    "correlation": 0.221095565,
    "rmse": 0.034686095
  },
  {
    "name": "lord_howe_b_399b_australia_uhslc",
    "lon": 159.07,
    "lat": -31.517,
    "correlation": 0.530569522,
    "rmse": 0.120480968
  },
  {
    "name": "loreto_319a_mexico_uhslc",
    "lon": -111.37,
    "lat": 26.017,
    "correlation": 0.37289959,
    "rmse": 0.038727486
  },
  {
    "name": "los_angeles,ca_567a_usa_uhslc",
    "lon": -118.27,
    "lat": 33.72,
    "correlation": 0.546807819,
    "rmse": 0.04063439
  },
  {
    "name": "lowerescuminac,nb_02000_canada_meds",
    "lon": -64.883,
    "lat": 47.083,
    "correlation": 0.5668942,
    "rmse": 0.131404556
  },
  {
    "name": "lowestoft_p024_uk_bodc",
    "lon": 1.7508,
    "lat": 52.473,
    "correlation": 0.733743915,
    "rmse": 0.149599212
  },
  {
    "name": "luanda_236a_angola_uhslc",
    "lon": 13.237,
    "lat": -8.7867,
    "correlation": 0.204998609,
    "rmse": 0.043619812
  },
  {
    "name": "lubang_655a_philippines_uhslc",
    "lon": 120.21,
    "lat": 13.82,
    "correlation": 0.517149934,
    "rmse": 0.033805936
  },
  {
    "name": "luderitz_702a_south_africa_uhslc",
    "lon": 15.15,
    "lat": -26.65,
    "correlation": 0.585875133,
    "rmse": 0.052034478
  },
  {
    "name": "luis_correia_711a_brazil_uhslc",
    "lon": -41.672,
    "lat": -2.8667,
    "correlation": 0.176569617,
    "rmse": 0.0682187
  },
  {
    "name": "lumut_143a_malaysia_uhslc",
    "lon": 100.62,
    "lat": 4.2333,
    "correlation": 0.345528535,
    "rmse": 0.059747669
  },
  {
    "name": "lungsurannaga_410a_indonesia_uhslc",
    "lon": 117.75,
    "lat": 2.1,
    "correlation": 0.055475359,
    "rmse": 0.077816935
  },
  {
    "name": "lusi_a_633a_china_uhslc",
    "lon": 121.62,
    "lat": 32.133,
    "correlation": 0.717974629,
    "rmse": 0.139979713
  },
  {
    "name": "lyttelton_667a_new_zealand_uhslc",
    "lon": 172.72,
    "lat": -43.6,
    "correlation": 0.801030095,
    "rmse": 0.0685385
  },
  {
    "name": "maaloey_003_norway_statkart",
    "lon": 5.1133,
    "lat": 61.934,
    "correlation": 0.782501876,
    "rmse": 0.089795556
  },
  {
    "name": "macae_719a_brazil_uhslc",
    "lon": -41.467,
    "lat": -22.233,
    "correlation": 0.639292721,
    "rmse": 0.09501139
  },
  {
    "name": "macau_338a_macau_uhslc",
    "lon": 113.55,
    "lat": 22.167,
    "correlation": 0.685999613,
    "rmse": 0.106607141
  },
  {
    "name": "mackay_018_australia_johnhunter",
    "lon": 149.19,
    "lat": -21.143,
    "correlation": 0.560149432,
    "rmse": 0.100777421
  },
  {
    "name": "macquarie_is._c_680c_australia_uhslc",
    "lon": 158.97,
    "lat": -54.483,
    "correlation": 0.685056181,
    "rmse": 0.098616737
  },
  {
    "name": "madang_066a_papua_new_guinea_uhslc",
    "lon": 145.8,
    "lat": -5.2,
    "correlation": 0.445130974,
    "rmse": 0.029938239
  },
  {
    "name": "madeira_715a_brazil_uhslc",
    "lon": -44.378,
    "lat": -2.565,
    "correlation": 0.158649349,
    "rmse": 0.154678686
  },
  {
    "name": "madero,tampico_277a_mexico_uhslc",
    "lon": -97.795,
    "lat": 22.262,
    "correlation": 0.460243608,
    "rmse": 0.07774925
  },
  {
    "name": "magueyes_island,pr_246a_usa_uhslc",
    "lon": -67.047,
    "lat": 17.972,
    "correlation": 0.29477109,
    "rmse": 0.029752579
  },
  {
    "name": "mahon_mahon_spain_pde",
    "lon": 4.2706,
    "lat": 39.893,
    "correlation": 0.740953405,
    "rmse": 0.052113094
  },
  {
    "name": "maisaka_japan_jma",
    "lon": 137.62,
    "lat": 34.683,
    "correlation": 0.672612254,
    "rmse": 0.076659648
  },
  {
    "name": "maizuru_japan_jma",
    "lon": 135.38,
    "lat": 35.467,
    "correlation": 0.715397642,
    "rmse": 0.058034906
  },
  {
    "name": "majuro,marshallislands_001_glossdm_bodc",
    "lon": 171.37,
    "lat": 7.1067,
    "correlation": 0.199120967,
    "rmse": 0.043475001
  },
  {
    "name": "makurazaki_japan_jma",
    "lon": 130.3,
    "lat": 31.267,
    "correlation": 0.597528812,
    "rmse": 0.065395298
  },
  {
    "name": "malaga_mala_spain_ieo",
    "lon": -4.4167,
    "lat": 36.717,
    "correlation": 0.690959846,
    "rmse": 0.055004391
  },
  {
    "name": "malakal_b_007b_republic_of_belau_uhslc",
    "lon": 134.46,
    "lat": 7.33,
    "correlation": 0.264291187,
    "rmse": 0.046248103
  },
  {
    "name": "male_b,hulule_108b_rep._of_maldives_uhslc",
    "lon": 73.517,
    "lat": 4.1833,
    "correlation": 0.326170823,
    "rmse": 0.035126105
  },
  {
    "name": "malin_head_834a_ireland_uhslc",
    "lon": -7.3333,
    "lat": 55.367,
    "correlation": 0.699844301,
    "rmse": 0.134568773
  },
  {
    "name": "malmo_030_sweden_smhi",
    "lon": 13.033,
    "lat": 55.617,
    "correlation": 0.63966534,
    "rmse": 0.11499771
  },
  {
    "name": "maniitsoq,greenland_001_glossdm_bodc",
    "lon": -52.905,
    "lat": 65.413,
    "correlation": 0.679636859,
    "rmse": 0.076207
  },
  {
    "name": "manila_b_370b_philippines_uhslc",
    "lon": 120.97,
    "lat": 14.583,
    "correlation": 0.457084199,
    "rmse": 0.058619017
  },
  {
    "name": "manta_b_089b_ecuador_uhslc",
    "lon": -80.733,
    "lat": -0.95,
    "correlation": 0.184524118,
    "rmse": 0.078139909
  },
  {
    "name": "mantyluoto_007_finland_fmi",
    "lon": 21.463,
    "lat": 61.594,
    "correlation": 0.584164139,
    "rmse": 0.129700931
  },
  {
    "name": "manus_065a_papua_new_guinea_uhslc",
    "lon": 147.27,
    "lat": -2.0133,
    "correlation": 0.264758481,
    "rmse": 0.03579064
  },
  {
    "name": "manzanillo_b,mexico_001_glossdm_bodc",
    "lon": -104.33,
    "lat": 19.053,
    "correlation": 0.32843654,
    "rmse": 0.060728911
  },
  {
    "name": "maputo_190a_mozambique_uhslc",
    "lon": 32.7,
    "lat": -26.167,
    "correlation": 0.54908812,
    "rmse": 0.085779098
  },
  {
    "name": "maputo_b_190b_mozambique_uhslc",
    "lon": 32.57,
    "lat": -25.975,
    "correlation": 0.317047047,
    "rmse": 0.122420201
  },
  {
    "name": "marsden_point_398a_new_zealand_uhslc",
    "lon": 174.5,
    "lat": -35.833,
    "correlation": 0.755247135,
    "rmse": 0.051529021
  },
  {
    "name": "marseille_france_med_refmar",
    "lon": 5.35,
    "lat": 43.3,
    "correlation": 0.776836559,
    "rmse": 0.064079134
  },
  {
    "name": "marviken_012_sweden_smhi",
    "lon": 16.837,
    "lat": 58.554,
    "correlation": 0.529536339,
    "rmse": 0.112282319
  },
  {
    "name": "mar_del_plata_b_729b_argentina_uhslc",
    "lon": -57.55,
    "lat": -38.05,
    "correlation": 0.751219427,
    "rmse": 0.185294351
  },
  {
    "name": "masirah_113a_oman_uhslc",
    "lon": 58.872,
    "lat": 20.687,
    "correlation": 0.51339202,
    "rmse": 0.038063493
  },
  {
    "name": "massacre_bay,ak_550a_usa_uhslc",
    "lon": 173.2,
    "lat": 52.833,
    "correlation": 0.754092181,
    "rmse": 0.080138118
  },
  {
    "name": "matarani_b_094b_peru_uhslc",
    "lon": -72.117,
    "lat": -17,
    "correlation": 0.179611647,
    "rmse": 0.056601385
  },
  {
    "name": "matavai_590a_french_polynesia_uhslc",
    "lon": -149.52,
    "lat": -17.517,
    "correlation": 0.287564488,
    "rmse": 0.031056098
  },
  {
    "name": "matsuyama_japan_jma",
    "lon": 132.72,
    "lat": 33.867,
    "correlation": 0.580781707,
    "rmse": 0.070097513
  },
  {
    "name": "mawson_177a_australia_uhslc",
    "lon": 62.883,
    "lat": -67.6,
    "correlation": 0.733268608,
    "rmse": 0.06564318
  },
  {
    "name": "mayaguez,_pr_736a_usa_uhslc",
    "lon": -67.16,
    "lat": 18.22,
    "correlation": 0.408071168,
    "rmse": 0.02939514
  },
  {
    "name": "mayport,fl_753a_usa_uhslc",
    "lon": -81.432,
    "lat": 30.395,
    "correlation": 0.737098292,
    "rmse": 0.08643626
  },
  {
    "name": "mazatlan_673a_mexico_uhslc",
    "lon": -106.42,
    "lat": 23.198,
    "correlation": 0.367105573,
    "rmse": 0.061890095
  },
  {
    "name": "melilla_melilla_spain_pde",
    "lon": -2.918,
    "lat": 35.291,
    "correlation": 0.700753997,
    "rmse": 0.050107986
  },
  {
    "name": "meneng_158a_indonesia_uhslc",
    "lon": 114.38,
    "lat": -8.1167,
    "correlation": 0.473876811,
    "rmse": 0.067865258
  },
  {
    "name": "mera_japan_jma",
    "lon": 139.83,
    "lat": 34.917,
    "correlation": 0.637964616,
    "rmse": 0.067009018
  },
  {
    "name": "messina_messina_italy_idromare",
    "lon": 15.563,
    "lat": 38.196,
    "correlation": -0.160607822,
    "rmse": 0.070580941
  },
  {
    "name": "miami,hauloverpier_001_glossdm_bodc",
    "lon": -80.117,
    "lat": 25.9,
    "correlation": 0.403843336,
    "rmse": 0.073186975
  },
  {
    "name": "miamibeach_usa_noaa",
    "lon": -80.132,
    "lat": 25.768,
    "correlation": 0.506441316,
    "rmse": 0.0580789
  },
  {
    "name": "midway_050a_usa_trust_uhslc",
    "lon": -177.37,
    "lat": 28.217,
    "correlation": 0.617734924,
    "rmse": 0.062321612
  },
  {
    "name": "milfordhaven_p056_uk_bodc",
    "lon": -5.0143,
    "lat": 51.702,
    "correlation": 0.780714643,
    "rmse": 0.100347067
  },
  {
    "name": "millport_p049_uk_bodc",
    "lon": -4.9058,
    "lat": 55.75,
    "correlation": 0.797726533,
    "rmse": 0.133273019
  },
  {
    "name": "minamidaito_japan_jma",
    "lon": 131.23,
    "lat": 25.867,
    "correlation": 0.286765297,
    "rmse": 0.090124013
  },
  {
    "name": "minamitorishima_japan_jma",
    "lon": 153.98,
    "lat": 24.3,
    "correlation": 0.60205281,
    "rmse": 0.175760377
  },
  {
    "name": "mina_sulman_182a_bahrain_uhslc",
    "lon": 50.6,
    "lat": 26.233,
    "correlation": 0.630223649,
    "rmse": 0.072884561
  },
  {
    "name": "miri_388a_malaysia_uhslc",
    "lon": 113.97,
    "lat": 4.3917,
    "correlation": 0.461289994,
    "rmse": 0.047602279
  },
  {
    "name": "misumi_japan_jma",
    "lon": 130.45,
    "lat": 32.617,
    "correlation": 0.555769458,
    "rmse": 0.070017155
  },
  {
    "name": "miyakejima_357a_japan_uhslc",
    "lon": 139.48,
    "lat": 34.067,
    "correlation": 0.308795001,
    "rmse": 0.1448994
  },
  {
    "name": "miyako_japan_jma",
    "lon": 141.98,
    "lat": 39.65,
    "correlation": 0.730506262,
    "rmse": 0.048927395
  },
  {
    "name": "mocamedes_238a_angola_uhslc",
    "lon": 12.145,
    "lat": -15.192,
    "correlation": 0.35206766,
    "rmse": 0.033234816
  },
  {
    "name": "mokuoloe_061a_usa_uhslc",
    "lon": -157.8,
    "lat": 21.433,
    "correlation": 0.402144399,
    "rmse": 0.035141637
  },
  {
    "name": "mombasa_101a_kenya_uhslc",
    "lon": 39.657,
    "lat": -4.07,
    "correlation": 0.316521787,
    "rmse": 0.039979249
  },
  {
    "name": "monaco_port_hercule_france_med_refmar",
    "lon": 7.4215,
    "lat": 43.729,
    "correlation": 0.743993491,
    "rmse": 0.048882812
  },
  {
    "name": "mona_is.,_pr_267a_usa_uhslc",
    "lon": -67.938,
    "lat": 18.09,
    "correlation": 0.243305441,
    "rmse": 0.055298007
  },
  {
    "name": "montauk,ny_279a_usa_uhslc",
    "lon": -71.96,
    "lat": 41.048,
    "correlation": 0.756861974,
    "rmse": 0.092649253
  },
  {
    "name": "monterey,ca_555a_usa_uhslc",
    "lon": -121.89,
    "lat": 36.605,
    "correlation": 0.718296437,
    "rmse": 0.044018818
  },
  {
    "name": "montoir_de_bretagne_france_refmar",
    "lon": -2.1084,
    "lat": 47.306,
    "correlation": 0.680198824,
    "rmse": 0.126654867
  },
  {
    "name": "morayfirth_p207_uk_bodc",
    "lon": -4.0022,
    "lat": 57.599,
    "correlation": 0.816550998,
    "rmse": 0.085176507
  },
  {
    "name": "mossel_bay_185a_south_africa_uhslc",
    "lon": 22.133,
    "lat": -34.183,
    "correlation": 0.787906308,
    "rmse": 0.083735408
  },
  {
    "name": "motril_motril_spain_pde",
    "lon": -3.524,
    "lat": 36.72,
    "correlation": 0.696734318,
    "rmse": 0.047336673
  },
  {
    "name": "moulmein_906a_myanmar_uhslc",
    "lon": 97.622,
    "lat": 16.465,
    "correlation": 0.258597554,
    "rmse": 0.233019244
  },
  {
    "name": "mumbles_p932_uk_bodc",
    "lon": -3.9754,
    "lat": 51.57,
    "correlation": 0.763987311,
    "rmse": 0.112446224
  },
  {
    "name": "murotomisaki_japan_jma",
    "lon": 134.17,
    "lat": 33.267,
    "correlation": 0.566219742,
    "rmse": 0.074270092
  },
  {
    "name": "muscat_b_110b_oman_uhslc",
    "lon": 58.565,
    "lat": 23.628,
    "correlation": 0.231517795,
    "rmse": 0.060664954
  },
  {
    "name": "nagasaki_japan_jma",
    "lon": 129.87,
    "lat": 32.733,
    "correlation": 0.569588937,
    "rmse": 0.060492238
  },
  {
    "name": "nagoya_japan_jma",
    "lon": 136.88,
    "lat": 35.083,
    "correlation": 0.649973565,
    "rmse": 0.080751402
  },
  {
    "name": "naha_japan_jma",
    "lon": 127.67,
    "lat": 26.217,
    "correlation": 0.539208892,
    "rmse": 0.052625575
  },
  {
    "name": "nain,nf_01430_canada_meds",
    "lon": -61.683,
    "lat": 56.55,
    "correlation": 0.620328984,
    "rmse": 0.112760552
  },
  {
    "name": "nakano_shima_345a_japan_uhslc",
    "lon": 129.84,
    "lat": 29.842,
    "correlation": 0.387566183,
    "rmse": 0.08539475
  },
  {
    "name": "nantes_usine_brulee_france_refmar",
    "lon": -1.5742,
    "lat": 47.204,
    "correlation": 0.396364696,
    "rmse": 0.341969033
  },
  {
    "name": "nantucketisland_usa_noaa",
    "lon": -70.097,
    "lat": 41.285,
    "correlation": 0.77760176,
    "rmse": 0.079798815
  },
  {
    "name": "naos_b_300b_panama_uhslc",
    "lon": -79.533,
    "lat": 8.9167,
    "correlation": 0.216894719,
    "rmse": 0.07254131
  },
  {
    "name": "napier_668a_new_zealand_uhslc",
    "lon": 176.92,
    "lat": -39.483,
    "correlation": 0.801810661,
    "rmse": 0.056333129
  },
  {
    "name": "naples_usa_noaa",
    "lon": -81.807,
    "lat": 26.13,
    "correlation": 0.647386598,
    "rmse": 0.072772765
  },
  {
    "name": "napoli_napoli_italy_idromare",
    "lon": 14.269,
    "lat": 40.841,
    "correlation": 0.718577502,
    "rmse": 0.050168006
  },
  {
    "name": "natal_c_202c_brazil_uhslc",
    "lon": -35.195,
    "lat": -5.7517,
    "correlation": 0.562412473,
    "rmse": 0.026505348
  },
  {
    "name": "nauru_001_glossdm_bodc",
    "lon": 166.91,
    "lat": -0.5283,
    "correlation": 0.44787471,
    "rmse": 0.063899179
  },
  {
    "name": "nawiliwili_058a_usa_uhslc",
    "lon": -159.36,
    "lat": 21.955,
    "correlation": 0.393736902,
    "rmse": 0.036824799
  },
  {
    "name": "naze_359a_japan_uhslc",
    "lon": 129.5,
    "lat": 28.383,
    "correlation": 0.513879745,
    "rmse": 0.054981027
  },
  {
    "name": "neah_bay,wa_558a_usa_uhslc",
    "lon": -124.62,
    "lat": 48.368,
    "correlation": 0.791793779,
    "rmse": 0.082532679
  },
  {
    "name": "nelson_077a_new_zealand_uhslc",
    "lon": 173.27,
    "lat": -41.267,
    "correlation": 0.7778892,
    "rmse": 0.063363112
  },
  {
    "name": "newcastle_019_australia_johnhunter",
    "lon": 151.78,
    "lat": -32.926,
    "correlation": 0.625266014,
    "rmse": 0.066934888
  },
  {
    "name": "newhaven_p011_uk_bodc",
    "lon": 0.05703,
    "lat": 50.782,
    "correlation": 0.743876812,
    "rmse": 0.094914924
  },
  {
    "name": "newlondon_usa_noaa",
    "lon": -72.09,
    "lat": 41.361,
    "correlation": 0.75067851,
    "rmse": 0.095420277
  },
  {
    "name": "newlyn_p001_uk_bodc",
    "lon": -5.5417,
    "lat": 50.102,
    "correlation": 0.780526153,
    "rmse": 0.080132867
  },
  {
    "name": "newport,ri_253a_usa_uhslc",
    "lon": -71.327,
    "lat": 41.505,
    "correlation": 0.723165513,
    "rmse": 0.089065681
  },
  {
    "name": "newport_p057_uk_bodc",
    "lon": -2.9874,
    "lat": 51.55,
    "correlation": 0.564198949,
    "rmse": 0.200742629
  },
  {
    "name": "newport_usa_noaa",
    "lon": -71.327,
    "lat": 41.505,
    "correlation": 0.721143668,
    "rmse": 0.091022849
  },
  {
    "name": "newwestminster,bc_07654_canada_meds",
    "lon": -122.91,
    "lat": 49.2,
    "correlation": 0.527590934,
    "rmse": 0.163638569
  },
  {
    "name": "newyork_thebattery__usa_noaa",
    "lon": -74.014,
    "lat": 40.701,
    "correlation": 0.759392588,
    "rmse": 0.111224329
  },
  {
    "name": "new_london,ct_744a_usa_uhslc",
    "lon": -72.087,
    "lat": 41.355,
    "correlation": 0.752107738,
    "rmse": 0.095027568
  },
  {
    "name": "new_york,ny_745a_usa_uhslc",
    "lon": -74.015,
    "lat": 40.7,
    "correlation": 0.754607578,
    "rmse": 0.110945985
  },
  {
    "name": "nice_france_med_refmar",
    "lon": 7.2853,
    "lat": 43.696,
    "correlation": 0.751487531,
    "rmse": 0.0493282
  },
  {
    "name": "nishinoomote_363a_japan_uhslc",
    "lon": 131,
    "lat": 30.732,
    "correlation": 0.477287627,
    "rmse": 0.069956535
  },
  {
    "name": "nome,ak_595a_usa_uhslc",
    "lon": -165.43,
    "lat": 64.5,
    "correlation": 0.813296714,
    "rmse": 0.193771853
  },
  {
    "name": "norfolk_island_b_062b_australia_uhslc",
    "lon": 167.95,
    "lat": -29.067,
    "correlation": 0.613123835,
    "rmse": 0.05626662
  },
  {
    "name": "northshields_p032_uk_bodc",
    "lon": -1.4398,
    "lat": 55.007,
    "correlation": 0.7671251,
    "rmse": 0.105715634
  },
  {
    "name": "northsydney,ns_00612_canada_meds",
    "lon": -60.25,
    "lat": 46.217,
    "correlation": 0.630139548,
    "rmse": 0.095446951
  },
  {
    "name": "nosy_be_150a_madagascar_uhslc",
    "lon": 48.3,
    "lat": -13.4,
    "correlation": 0.263990262,
    "rmse": 0.076870383
  },
  {
    "name": "noto_japan_jma",
    "lon": 137.15,
    "lat": 37.5,
    "correlation": 0.784606131,
    "rmse": 0.076263407
  },
  {
    "name": "nouakchott_806a_mauritania_uhslc",
    "lon": -16.037,
    "lat": 17.99,
    "correlation": 0.460451206,
    "rmse": 0.04466132
  },
  {
    "name": "noumea_b_019b_france_uhslc",
    "lon": 166.44,
    "lat": -22.292,
    "correlation": 0.657036611,
    "rmse": 0.04040737
  },
  {
    "name": "nuku_alofa_038a_tonga_uhslc",
    "lon": -175.2,
    "lat": -21.133,
    "correlation": 0.387586502,
    "rmse": 0.041177502
  },
  {
    "name": "nuku_hiva_031a_french_polynesia_uhslc",
    "lon": -140.08,
    "lat": -8.93,
    "correlation": 0.207806208,
    "rmse": 0.031629076
  },
  {
    "name": "ny_alesund,norway_001_glossdm_bodc",
    "lon": 11.95,
    "lat": 78.933,
    "correlation": 0.732668065,
    "rmse": 0.069245859
  },
  {
    "name": "odawara_japan_jma",
    "lon": 139.15,
    "lat": 35.233,
    "correlation": 0.528453545,
    "rmse": 0.071473933
  },
  {
    "name": "ofunato_japan_jma",
    "lon": 141.72,
    "lat": 39.067,
    "correlation": 0.715494838,
    "rmse": 0.050066552
  },
  {
    "name": "okada_japan_jma",
    "lon": 139.38,
    "lat": 34.783,
    "correlation": 0.636301696,
    "rmse": 0.059935942
  },
  {
    "name": "olandsnorraudde_013_sweden_smhi",
    "lon": 17.097,
    "lat": 57.366,
    "correlation": 0.572693335,
    "rmse": 0.117743005
  },
  {
    "name": "omaezaki_japan_jma",
    "lon": 138.22,
    "lat": 34.617,
    "correlation": 0.635141334,
    "rmse": 0.067653008
  },
  {
    "name": "onahama_japan_jma",
    "lon": 140.9,
    "lat": 36.933,
    "correlation": 0.745424246,
    "rmse": 0.048786341
  },
  {
    "name": "ortona_ortona_italy_idromare",
    "lon": 14.415,
    "lat": 42.356,
    "correlation": 0.712217009,
    "rmse": 0.074498992
  },
  {
    "name": "osaka_japan_jma",
    "lon": 135.43,
    "lat": 34.65,
    "correlation": 0.597101296,
    "rmse": 0.083303491
  },
  {
    "name": "oskarshamn_014_sweden_smhi",
    "lon": 16.478,
    "lat": 57.275,
    "correlation": 0.55358058,
    "rmse": 0.116998519
  },
  {
    "name": "oslo_004_norway_statkart",
    "lon": 10.734,
    "lat": 59.909,
    "correlation": 0.796131966,
    "rmse": 0.129692032
  },
  {
    "name": "otaru_japan_jma",
    "lon": 141,
    "lat": 43.2,
    "correlation": 0.752306917,
    "rmse": 0.060895811
  },
  {
    "name": "otranto_otranto_italy_idromare",
    "lon": 18.497,
    "lat": 40.147,
    "correlation": 0.620148266,
    "rmse": 0.070891653
  },
  {
    "name": "oulu_008_finland_fmi",
    "lon": 25.418,
    "lat": 65.04,
    "correlation": 0.68268207,
    "rmse": 0.166776239
  },
  {
    "name": "oura_japan_jma",
    "lon": 130.22,
    "lat": 32.983,
    "correlation": 0.524125082,
    "rmse": 0.079265176
  },
  {
    "name": "owase_japan_jma",
    "lon": 136.22,
    "lat": 34.067,
    "correlation": 0.648158766,
    "rmse": 0.066609092
  },
  {
    "name": "padang_b_107b_indonesia_uhslc",
    "lon": 100.37,
    "lat": -1,
    "correlation": 0.28376121,
    "rmse": 0.077588922
  },
  {
    "name": "pago_bay,_guam_037a_usa_uhslc",
    "lon": 144.8,
    "lat": 13.428,
    "correlation": 0.470234294,
    "rmse": 0.042866568
  },
  {
    "name": "pago_pago_056a_usa_trust_uhslc",
    "lon": -170.68,
    "lat": -14.283,
    "correlation": 0.250761717,
    "rmse": 0.033009107
  },
  {
    "name": "paimboeuf_france_refmar",
    "lon": -2.0004,
    "lat": 47.287,
    "correlation": 0.659983147,
    "rmse": 0.13768016
  },
  {
    "name": "paita_b_678b_peru_uhslc",
    "lon": -81.167,
    "lat": -5.0833,
    "correlation": 0.163543216,
    "rmse": 0.075991701
  },
  {
    "name": "palermo_palermo_italy_idromare",
    "lon": 13.371,
    "lat": 38.121,
    "correlation": 0.723652142,
    "rmse": 0.050082384
  },
  {
    "name": "palinuro_palinuro_italy_idromare",
    "lon": 15.275,
    "lat": 40.032,
    "correlation": 0.684664757,
    "rmse": 0.05295551
  },
  {
    "name": "palma_de_mallorca_palmademallorca_spain_pde",
    "lon": 2.6375,
    "lat": 39.56,
    "correlation": 0.741872169,
    "rmse": 0.049655789
  },
  {
    "name": "palmeira_235a_portugal_uhslc",
    "lon": -22.983,
    "lat": 16.755,
    "correlation": 0.426550198,
    "rmse": 0.024534488
  },
  {
    "name": "palmyra_island_043a_proprietary_uhslc",
    "lon": -162.09,
    "lat": 5.8833,
    "correlation": 0.347494834,
    "rmse": 0.041610152
  },
  {
    "name": "panama_city_beach_761a_usa_uhslc",
    "lon": -85.88,
    "lat": 30.213,
    "correlation": 0.774074282,
    "rmse": 0.084161206
  },
  {
    "name": "papeete_b_015b_french_polynesia_uhslc",
    "lon": -149.57,
    "lat": -17.532,
    "correlation": 0.384866963,
    "rmse": 0.034022478
  },
  {
    "name": "pari_159a_indonesia_uhslc",
    "lon": 106.62,
    "lat": -5.85,
    "correlation": 0.417761877,
    "rmse": 0.060932224
  },
  {
    "name": "patriciabay,bc_07277_canada_meds",
    "lon": -123.45,
    "lat": 48.654,
    "correlation": 0.656931906,
    "rmse": 0.092916618
  },
  {
    "name": "pemba_c_192c_mozambique_uhslc",
    "lon": 40.5,
    "lat": -12.967,
    "correlation": 0.442887274,
    "rmse": 0.067881506
  },
  {
    "name": "penang_144a_malaysia_uhslc",
    "lon": 100.35,
    "lat": 5.4217,
    "correlation": 0.354369378,
    "rmse": 0.063641021
  },
  {
    "name": "penrhyn_024a_cook_islands_uhslc",
    "lon": -158.05,
    "lat": -8.9767,
    "correlation": 0.278349635,
    "rmse": 0.041664525
  },
  {
    "name": "pensacola,fl_762a_usa_uhslc",
    "lon": -87.213,
    "lat": 30.403,
    "correlation": 0.795060551,
    "rmse": 0.065983013
  },
  {
    "name": "penuelas,_pr_243a_usa_uhslc",
    "lon": -66.762,
    "lat": 17.972,
    "correlation": 0.29753802,
    "rmse": 0.03793687
  },
  {
    "name": "peter___paul_rocks_201a_brazil_uhslc",
    "lon": -29.343,
    "lat": 0.92,
    "correlation": 0.163274734,
    "rmse": 0.026347822
  },
  {
    "name": "philadelphia_pier9n__usa_noaa",
    "lon": -75.142,
    "lat": 39.933,
    "correlation": 0.698101046,
    "rmse": 0.131893836
  },
  {
    "name": "pietarsaari_009_finland_fmi",
    "lon": 22.69,
    "lat": 63.709,
    "correlation": 0.652243386,
    "rmse": 0.139344098
  },
  {
    "name": "pisco_b_683b_peru_uhslc",
    "lon": -76.133,
    "lat": -13.417,
    "correlation": 0.155440839,
    "rmse": 0.062827314
  },
  {
    "name": "pohnpei_c_001c_fd._st._micronesia_uhslc",
    "lon": 158.23,
    "lat": 6.9833,
    "correlation": 0.150585491,
    "rmse": 0.053387382
  },
  {
    "name": "pointatkinson,bc_07795_canada_meds",
    "lon": -123.25,
    "lat": 49.337,
    "correlation": 0.659951176,
    "rmse": 0.100973337
  },
  {
    "name": "pointe_a_pitre_272a_france_uhslc",
    "lon": -61.533,
    "lat": 16.233,
    "correlation": 0.206746181,
    "rmse": 0.036191596
  },
  {
    "name": "pointe_noire_b_234b_congo_uhslc",
    "lon": 11.85,
    "lat": -4.8,
    "correlation": 0.229229885,
    "rmse": 0.050209695
  },
  {
    "name": "pointlarue,seychelles_001_glossdm_bodc",
    "lon": 55.528,
    "lat": -4.6717,
    "correlation": 0.199991063,
    "rmse": 0.049210647
  },
  {
    "name": "point_fortin_728a_trinidad_and_tobago_uhslc",
    "lon": -61.417,
    "lat": 10.1,
    "correlation": 0.295226322,
    "rmse": 0.049665678
  },
  {
    "name": "ponta_delgada_211a_portugal_uhslc",
    "lon": -25.672,
    "lat": 37.735,
    "correlation": 0.779178918,
    "rmse": 0.041201947
  },
  {
    "name": "port_aux_basques,nf_00665_canada_meds",
    "lon": -59.133,
    "lat": 47.567,
    "correlation": 0.590928644,
    "rmse": 0.099761787
  },
  {
    "name": "port_bloc_france_refmar",
    "lon": -1.0616,
    "lat": 45.569,
    "correlation": 0.781717591,
    "rmse": 0.08273736
  },
  {
    "name": "port_camargue_france_med_refmar",
    "lon": 4.1264,
    "lat": 43.52,
    "correlation": 0.795105383,
    "rmse": 0.078624389
  },
  {
    "name": "port_tudy_france_refmar",
    "lon": -3.4459,
    "lat": 47.644,
    "correlation": 0.76834054,
    "rmse": 0.082417854
  },
  {
    "name": "port_vendres_france_med_refmar",
    "lon": 3.1075,
    "lat": 42.52,
    "correlation": 0.762634082,
    "rmse": 0.059334814
  },
  {
    "name": "portadelaideouter_020_australia_johnhunter",
    "lon": 138.6,
    "lat": -34.926,
    "correlation": 0.817095596,
    "rmse": 0.131857226
  },
  {
    "name": "portbury_p341_uk_bodc",
    "lon": -2.7285,
    "lat": 51.5,
    "correlation": 0.517150289,
    "rmse": 0.197750023
  },
  {
    "name": "portelizabeth,southafrica_001_glossdm_bodc",
    "lon": 25.63,
    "lat": -33.96,
    "correlation": 0.762461943,
    "rmse": 0.076705488
  },
  {
    "name": "portellen_p202_uk_bodc",
    "lon": -6.1901,
    "lat": 55.627,
    "correlation": 0.812363457,
    "rmse": 0.116474716
  },
  {
    "name": "porterin_p919_uk_bodc",
    "lon": -4.7681,
    "lat": 54.085,
    "correlation": 0.79595553,
    "rmse": 0.110464257
  },
  {
    "name": "porthardy,bc_08408_canada_meds",
    "lon": -127.49,
    "lat": 50.722,
    "correlation": 0.654927216,
    "rmse": 0.090594533
  },
  {
    "name": "porthedland_022_australia_johnhunter",
    "lon": 118.58,
    "lat": -20.314,
    "correlation": 0.549751983,
    "rmse": 0.080852719
  },
  {
    "name": "portisabel_usa_noaa",
    "lon": -97.215,
    "lat": 26.06,
    "correlation": 0.670377733,
    "rmse": 0.072523182
  },
  {
    "name": "portland,me_252a_usa_uhslc",
    "lon": -70.247,
    "lat": 43.657,
    "correlation": 0.694182093,
    "rmse": 0.094874999
  },
  {
    "name": "portland,s.aus._129a_australia_uhslc",
    "lon": 141.6,
    "lat": -38.333,
    "correlation": 0.818607233,
    "rmse": 0.064777901
  },
  {
    "name": "portland_maine__usa_noaa",
    "lon": -70.247,
    "lat": 43.657,
    "correlation": 0.702266014,
    "rmse": 0.094056599
  },
  {
    "name": "portlincoln_023_australia_johnhunter",
    "lon": 135.86,
    "lat": -34.72,
    "correlation": 0.837397064,
    "rmse": 0.089683879
  },
  {
    "name": "portlonsdale_017_australia_johnhunter",
    "lon": 138.5,
    "lat": -35.099,
    "correlation": 0.811369633,
    "rmse": 0.077554255
  },
  {
    "name": "portlouis_c,mauritius_001_glossdm_bodc",
    "lon": 57.49,
    "lat": -20.153,
    "correlation": 0.263069277,
    "rmse": 0.056905894
  },
  {
    "name": "portmansfield_usa_noaa",
    "lon": -97.422,
    "lat": 26.555,
    "correlation": 0.563048651,
    "rmse": 0.082080823
  },
  {
    "name": "portogrande,capeverde_001_glossdm_bodc",
    "lon": -24.983,
    "lat": 16.867,
    "correlation": 0.510885489,
    "rmse": 0.022411076
  },
  {
    "name": "porto_empedocle_porto+empedocle_italy_idromare",
    "lon": 13.527,
    "lat": 37.286,
    "correlation": 0.388798282,
    "rmse": 0.07611257
  },
  {
    "name": "porto_grande_216a_portugal_uhslc",
    "lon": -24.983,
    "lat": 16.867,
    "correlation": 0.51753903,
    "rmse": 0.022438287
  },
  {
    "name": "porto_torres_porto+torres_italy_idromare",
    "lon": 8.4039,
    "lat": 40.842,
    "correlation": 0.752774117,
    "rmse": 0.047819546
  },
  {
    "name": "portpatrick_p063_uk_bodc",
    "lon": -5.12,
    "lat": 54.843,
    "correlation": 0.801681236,
    "rmse": 0.116149908
  },
  {
    "name": "portpirie_024_australia_johnhunter",
    "lon": 138.01,
    "lat": -33.177,
    "correlation": 0.771781267,
    "rmse": 0.170085204
  },
  {
    "name": "portrush_p935_uk_bodc",
    "lon": -6.6568,
    "lat": 55.207,
    "correlation": 0.805555115,
    "rmse": 0.106381349
  },
  {
    "name": "portsanluis_usa_noaa",
    "lon": -120.76,
    "lat": 35.177,
    "correlation": 0.597005905,
    "rmse": 0.051569542
  },
  {
    "name": "portsmouth_p008_uk_bodc",
    "lon": -1.1118,
    "lat": 50.803,
    "correlation": 0.727741808,
    "rmse": 0.09517593
  },
  {
    "name": "portvictoria_b,seychelles_001_glossdm_bodc",
    "lon": 55.458,
    "lat": -4.6217,
    "correlation": 0.10393265,
    "rmse": 0.042843088
  },
  {
    "name": "portvila_b,vanuatu_001_glossdm_bodc",
    "lon": 168.32,
    "lat": -17.733,
    "correlation": 0.324633336,
    "rmse": 0.042534939
  },
  {
    "name": "port_allen_553a_usa_uhslc",
    "lon": -159.6,
    "lat": 21.9,
    "correlation": 0.384798815,
    "rmse": 0.039855264
  },
  {
    "name": "port_angeles,_wa_584a_usa_uhslc",
    "lon": -123.44,
    "lat": 48.125,
    "correlation": 0.786178891,
    "rmse": 0.079501027
  },
  {
    "name": "port_canaveral,_fl_774a_usa_uhslc",
    "lon": -80.593,
    "lat": 28.415,
    "correlation": 0.650526602,
    "rmse": 0.077045982
  },
  {
    "name": "port_chalmers_669a_new_zealand_uhslc",
    "lon": 170.65,
    "lat": -45.817,
    "correlation": 0.840240395,
    "rmse": 0.058722015
  },
  {
    "name": "port_elizabeth_184a_south_africa_uhslc",
    "lon": 25.63,
    "lat": -33.96,
    "correlation": 0.782936825,
    "rmse": 0.072727265
  },
  {
    "name": "port_ferreol_france_med_refmar",
    "lon": 6.7176,
    "lat": 43.359,
    "correlation": 0.64649958,
    "rmse": 0.058558926
  },
  {
    "name": "port_hedland_169a_australia_uhslc",
    "lon": 118.58,
    "lat": -20.318,
    "correlation": 0.544656655,
    "rmse": 0.066385909
  },
  {
    "name": "port_isabel,tx_772a_usa_uhslc",
    "lon": -97.215,
    "lat": 26.06,
    "correlation": 0.666286051,
    "rmse": 0.07140347
  },
  {
    "name": "port_kembla_342a_australia_uhslc",
    "lon": 150.91,
    "lat": -34.473,
    "correlation": 0.716735759,
    "rmse": 0.054329949
  },
  {
    "name": "port_louis_c_103c_mauritius_uhslc",
    "lon": 57.49,
    "lat": -20.153,
    "correlation": 0.247799448,
    "rmse": 0.052197459
  },
  {
    "name": "port_moresby_064a_papua_new_guinea_uhslc",
    "lon": 147.14,
    "lat": -9.4783,
    "correlation": 0.29652488,
    "rmse": 0.045829827
  },
  {
    "name": "port_nolloth_701a_south_africa_uhslc",
    "lon": 16.867,
    "lat": -29.25,
    "correlation": 0.61519923,
    "rmse": 0.064092984
  },
  {
    "name": "port_of_spain_248a_trinidad_and_tobago_uhslc",
    "lon": -61.517,
    "lat": 10.65,
    "correlation": 0.245170714,
    "rmse": 0.04463141
  },
  {
    "name": "port_orford,_or_557a_usa_uhslc",
    "lon": -124.5,
    "lat": 42.74,
    "correlation": 0.788892833,
    "rmse": 0.075310743
  },
  {
    "name": "port_royal_782a_jamaica_uhslc",
    "lon": -76.85,
    "lat": 17.933,
    "correlation": 0.265519605,
    "rmse": 0.033286084
  },
  {
    "name": "port_san_luis,_ca_565a_usa_uhslc",
    "lon": -120.76,
    "lat": 35.177,
    "correlation": 0.588282332,
    "rmse": 0.051240477
  },
  {
    "name": "port_sonara_816a_cameroon_uhslc",
    "lon": 9.1267,
    "lat": -4.0067,
    "correlation": 0.187826273,
    "rmse": 0.044293561
  },
  {
    "name": "port_stanley_a_290a_united_kingdom_uhslc",
    "lon": -57.867,
    "lat": -52.7,
    "correlation": 0.735484128,
    "rmse": 0.071306388
  },
  {
    "name": "port_stanley_b_290b_united_kingdom_uhslc",
    "lon": -57.933,
    "lat": -51.75,
    "correlation": 0.805800075,
    "rmse": 0.064351616
  },
  {
    "name": "port_stanvac_100a_australia_uhslc",
    "lon": 138.47,
    "lat": -35.108,
    "correlation": 0.847727197,
    "rmse": 0.109825934
  },
  {
    "name": "port_victoria_b_111b_seychelles_uhslc",
    "lon": 55.458,
    "lat": -4.6217,
    "correlation": 0.105472777,
    "rmse": 0.0431072
  },
  {
    "name": "port_vila_b_046b_vanuatu_uhslc",
    "lon": 168.32,
    "lat": -17.733,
    "correlation": 0.318147129,
    "rmse": 0.039834698
  },
  {
    "name": "praia_c,cape_verde_222c_portugal_uhslc",
    "lon": -23.5,
    "lat": 14.917,
    "correlation": -0.042501403,
    "rmse": 0.032489271
  },
  {
    "name": "praslin_106a_seychelles_uhslc",
    "lon": 55.767,
    "lat": -4.3433,
    "correlation": -0.140705047,
    "rmse": 0.041411524
  },
  {
    "name": "prigi_125a_indonesia_uhslc",
    "lon": 111.73,
    "lat": -8.28,
    "correlation": 0.292321021,
    "rmse": 0.081925443
  },
  {
    "name": "princerupert,bc_09354_canada_meds",
    "lon": -130.33,
    "lat": 54.317,
    "correlation": 0.594740636,
    "rmse": 0.11528142
  },
  {
    "name": "princerupert,canada_001_glossdm_bodc",
    "lon": -130.17,
    "lat": 54.317,
    "correlation": 0.702884608,
    "rmse": 0.103068856
  },
  {
    "name": "progreso_c,_yuc._721c_mexico_uhslc",
    "lon": -89.667,
    "lat": 21.283,
    "correlation": 0.532238924,
    "rmse": 0.072848959
  },
  {
    "name": "providence_statepier__usa_noaa",
    "lon": -71.401,
    "lat": 41.807,
    "correlation": 0.681576456,
    "rmse": 0.107090145
  },
  {
    "name": "provideniya_b,russia_001_glossdm_bodc",
    "lon": -173.2,
    "lat": 64.4,
    "correlation": 0.588807574,
    "rmse": 0.148029236
  },
  {
    "name": "prudhoe_bay,_ak_579a_usa_uhslc",
    "lon": -148.53,
    "lat": 70.4,
    "correlation": 0.704273775,
    "rmse": 0.107973076
  },
  {
    "name": "pt._la_rue_121a_seychelles_uhslc",
    "lon": 55.528,
    "lat": -4.6717,
    "correlation": 0.191048453,
    "rmse": 0.040140769
  },
  {
    "name": "puertowilliams,chile_001_glossdm_bodc",
    "lon": -67.617,
    "lat": -54.933,
    "correlation": 0.713283925,
    "rmse": 0.132597728
  },
  {
    "name": "puerto_angel_672a_mexico_uhslc",
    "lon": -96.493,
    "lat": 15.657,
    "correlation": 0.18751557,
    "rmse": 0.065196811
  },
  {
    "name": "puerto_armuelles_b_304b_panama_uhslc",
    "lon": -82.86,
    "lat": 8.2733,
    "correlation": 0.201403804,
    "rmse": 0.08239561
  },
  {
    "name": "puerto_castilla_784a_honduras_uhslc",
    "lon": -86.033,
    "lat": 16.017,
    "correlation": 0.466527908,
    "rmse": 0.04278648
  },
  {
    "name": "puerto_cortes_b_780b_honduras_uhslc",
    "lon": -87.95,
    "lat": 15.833,
    "correlation": 0.345659949,
    "rmse": 0.038215599
  },
  {
    "name": "puerto_deseado_b_286b_argentina_uhslc",
    "lon": -65.917,
    "lat": -47.75,
    "correlation": 0.568419704,
    "rmse": 0.177431176
  },
  {
    "name": "puerto_de_la_luz_pluz_spain_ieo",
    "lon": -15.417,
    "lat": 28.133,
    "correlation": 0.571229996,
    "rmse": 0.054803294
  },
  {
    "name": "puerto_madero_318a_mexico_uhslc",
    "lon": -92.433,
    "lat": 14.717,
    "correlation": 0.315648444,
    "rmse": 0.061339752
  },
  {
    "name": "puerto_madryn_731a_argentina_uhslc",
    "lon": -65.032,
    "lat": -38.763,
    "correlation": 0.55467578,
    "rmse": 0.199188904
  },
  {
    "name": "puerto_montt_684a_chile_uhslc",
    "lon": -72.967,
    "lat": -41.483,
    "correlation": 0.610976947,
    "rmse": 0.093047018
  },
  {
    "name": "puerto_moreles_860a_mexico_uhslc",
    "lon": -86.867,
    "lat": 20.868,
    "correlation": 0.337190713,
    "rmse": 0.057517367
  },
  {
    "name": "puerto_plata_777a_dominica_republic_uhslc",
    "lon": -70.702,
    "lat": 19.798,
    "correlation": 0.546223289,
    "rmse": 0.036676943
  },
  {
    "name": "puerto_princesa_380a_philippines_uhslc",
    "lon": 118.73,
    "lat": 9.75,
    "correlation": 0.206113412,
    "rmse": 0.043254089
  },
  {
    "name": "puerto_quetzal_301a_guatemala_uhslc",
    "lon": -90.785,
    "lat": 13.922,
    "correlation": 0.249003393,
    "rmse": 0.171219527
  },
  {
    "name": "puntarenas_396a_costa_rica_uhslc",
    "lon": -84.833,
    "lat": 9.9667,
    "correlation": 0.229235978,
    "rmse": 0.055798339
  },
  {
    "name": "punta_cana_776a_dominica_republic_uhslc",
    "lon": -68.375,
    "lat": 18.505,
    "correlation": 0.539925887,
    "rmse": 0.035637694
  },
  {
    "name": "qaqortoq,greenland_001_glossdm_bodc",
    "lon": -46.033,
    "lat": 60.717,
    "correlation": 0.697631124,
    "rmse": 0.093040006
  },
  {
    "name": "queencharlottecity,bc_09850_canada_meds",
    "lon": -132.07,
    "lat": 53.252,
    "correlation": 0.556252772,
    "rmse": 0.1067098
  },
  {
    "name": "quepos,costarica_001_glossdm_bodc",
    "lon": -84.167,
    "lat": 9.4,
    "correlation": 0.178501392,
    "rmse": 0.057084034
  },
  {
    "name": "qui_nhon_b_381b_vietnam_uhslc",
    "lon": 109.25,
    "lat": 13.767,
    "correlation": 0.605793487,
    "rmse": 0.059862975
  },
  {
    "name": "raahe_010_finland_fmi",
    "lon": 24.407,
    "lat": 64.666,
    "correlation": 0.675323505,
    "rmse": 0.152748462
  },
  {
    "name": "rabaul,papuanewguinea_001_glossdm_bodc",
    "lon": 152.18,
    "lat": -4.2,
    "correlation": 0.322212735,
    "rmse": 0.032229855
  },
  {
    "name": "rarotonga,cookislands_001_glossdm_bodc",
    "lon": -159.78,
    "lat": -21.207,
    "correlation": 0.376882708,
    "rmse": 0.052816654
  },
  {
    "name": "ratan_015_sweden_smhi",
    "lon": 20.895,
    "lat": 63.986,
    "correlation": 0.646670669,
    "rmse": 0.136970042
  },
  {
    "name": "rauma_011_finland_fmi",
    "lon": 21.426,
    "lat": 61.133,
    "correlation": 0.576721377,
    "rmse": 0.128114269
  },
  {
    "name": "ravenna_ravenna_italy_idromare",
    "lon": 12.283,
    "lat": 44.492,
    "correlation": 0.718690482,
    "rmse": 0.089942071
  },
  {
    "name": "recife,uscgs_712a_brazil_uhslc",
    "lon": -34.867,
    "lat": -8.05,
    "correlation": 0.192289743,
    "rmse": 0.046998114
  },
  {
    "name": "reedypoint_usa_noaa",
    "lon": -75.573,
    "lat": 39.558,
    "correlation": 0.743021251,
    "rmse": 0.114743249
  },
  {
    "name": "reggio_calabria_reggio+calabria_italy_idromare",
    "lon": 15.649,
    "lat": 38.121,
    "correlation": 0.639214184,
    "rmse": 0.058181735
  },
  {
    "name": "reihoku_japan_jma",
    "lon": 130.03,
    "lat": 32.467,
    "correlation": 0.431246442,
    "rmse": 0.063361978
  },
  {
    "name": "reunion_164a_france_uhslc",
    "lon": 55.285,
    "lat": -20.935,
    "correlation": 0.180301783,
    "rmse": 0.052603713
  },
  {
    "name": "reykjavik_iceland_coastguard",
    "lon": -21.933,
    "lat": 64.15,
    "correlation": 0.661507085,
    "rmse": 0.114044155
  },
  {
    "name": "richard_s_bay_188a_south_africa_uhslc",
    "lon": 32.083,
    "lat": -28.8,
    "correlation": 0.461676951,
    "rmse": 0.090623412
  },
  {
    "name": "rikitea_016a_french_polynesia_uhslc",
    "lon": -134.95,
    "lat": -23.125,
    "correlation": 0.48462096,
    "rmse": 0.039546697
  },
  {
    "name": "ringhals_016_sweden_smhi",
    "lon": 12.113,
    "lat": 57.25,
    "correlation": 0.806253433,
    "rmse": 0.104660077
  },
  {
    "name": "rio_de_janeiro,cg_709a_brazil_uhslc",
    "lon": -43.133,
    "lat": -22.933,
    "correlation": 0.62690534,
    "rmse": 0.104425899
  },
  {
    "name": "rio_grande_714a_brazil_uhslc",
    "lon": -52.103,
    "lat": -32.138,
    "correlation": 0.647348103,
    "rmse": 0.137994623
  },
  {
    "name": "rockport,_tx_769a_usa_uhslc",
    "lon": -97.047,
    "lat": 28.022,
    "correlation": 0.693177614,
    "rmse": 0.074472644
  },
  {
    "name": "rodrigues_105a_mauritius_uhslc",
    "lon": 63.418,
    "lat": -19.668,
    "correlation": 0.272670739,
    "rmse": 0.061873892
  },
  {
    "name": "roervik_005_norway_statkart",
    "lon": 11.23,
    "lat": 64.859,
    "correlation": 0.767416103,
    "rmse": 0.096486261
  },
  {
    "name": "roscoff_france_refmar",
    "lon": -3.9657,
    "lat": 48.718,
    "correlation": 0.726342644,
    "rmse": 0.091261273
  },
  {
    "name": "rosslyn_bay_330a_australia_uhslc",
    "lon": 150.79,
    "lat": -23.162,
    "correlation": 0.583635563,
    "rmse": 0.063903121
  },
  {
    "name": "rothera_uk_noc",
    "lon": -68.133,
    "lat": -67.567,
    "correlation": 0.768377879,
    "rmse": 0.077935059
  },
  {
    "name": "s.cruz_d._palma_d_206d_spain_uhslc",
    "lon": -17.75,
    "lat": 28.683,
    "correlation": 0.515865658,
    "rmse": 0.054143688
  },
  {
    "name": "sabang_123a_indonesia_uhslc",
    "lon": 95.317,
    "lat": 5.8883,
    "correlation": 0.24222522,
    "rmse": 0.091084906
  },
  {
    "name": "sabine_pass_n,tx_766a_usa_uhslc",
    "lon": -93.87,
    "lat": 29.73,
    "correlation": 0.726478997,
    "rmse": 0.09365541
  },
  {
    "name": "sado_japan_jma",
    "lon": 138.52,
    "lat": 38.317,
    "correlation": 0.682771923,
    "rmse": 0.058338737
  },
  {
    "name": "sagunto_sagunto_spain_pde",
    "lon": -0.206,
    "lat": 39.634,
    "correlation": 0.719469828,
    "rmse": 0.053815628
  },
  {
    "name": "saigo_japan_jma",
    "lon": 133.33,
    "lat": 36.2,
    "correlation": 0.651489569,
    "rmse": 0.055050753
  },
  {
    "name": "saiki_japan_jma",
    "lon": 131.97,
    "lat": 32.95,
    "correlation": 0.484589291,
    "rmse": 0.069289665
  },
  {
    "name": "saint_gildas_france_refmar",
    "lon": -2.2464,
    "lat": 47.14,
    "correlation": 0.754252801,
    "rmse": 0.097093371
  },
  {
    "name": "saint_jean_de_luz_so_france_refmar",
    "lon": -1.6816,
    "lat": 43.395,
    "correlation": 0.770381679,
    "rmse": 0.061921606
  },
  {
    "name": "saint_malo_france_refmar",
    "lon": -2.0281,
    "lat": 48.641,
    "correlation": 0.71584874,
    "rmse": 0.101736003
  },
  {
    "name": "saint_nazaire_france_refmar",
    "lon": -2.2016,
    "lat": 47.267,
    "correlation": 0.776055619,
    "rmse": 0.105007917
  },
  {
    "name": "saintjohn,nb_00065_canada_meds",
    "lon": -66.063,
    "lat": 45.251,
    "correlation": 0.418680007,
    "rmse": 0.132427471
  },
  {
    "name": "saint_paul_179a_france_uhslc",
    "lon": 77.538,
    "lat": -38.712,
    "correlation": 0.698950882,
    "rmse": 0.071718072
  },
  {
    "name": "saipan_b_028b_n._mariana_islands_uhslc",
    "lon": 145.74,
    "lat": 15.227,
    "correlation": 0.400401175,
    "rmse": 0.046637225
  },
  {
    "name": "sakai_japan_jma",
    "lon": 133.25,
    "lat": 35.55,
    "correlation": 0.728188108,
    "rmse": 0.06110402
  },
  {
    "name": "salalah_114a_oman_uhslc",
    "lon": 54,
    "lat": 16.933,
    "correlation": 0.46524313,
    "rmse": 0.040205518
  },
  {
    "name": "saldahna_bay_703a_south_africa_uhslc",
    "lon": 17.95,
    "lat": -33.017,
    "correlation": 0.694146404,
    "rmse": 0.069280928
  },
  {
    "name": "salerno_salerno_italy_idromare",
    "lon": 14.768,
    "lat": 40.672,
    "correlation": 0.675834706,
    "rmse": 0.059736648
  },
  {
    "name": "salina_cruz_394a_mexico_uhslc",
    "lon": -95.203,
    "lat": 16.16,
    "correlation": 0.539904225,
    "rmse": 0.071975614
  },
  {
    "name": "salvador_b_708b_brazil_uhslc",
    "lon": -38.517,
    "lat": -12.967,
    "correlation": 0.372693294,
    "rmse": 0.042465188
  },
  {
    "name": "sandakan_389a_malaysia_uhslc",
    "lon": 118.07,
    "lat": 5.81,
    "correlation": 0.358232514,
    "rmse": 0.054053831
  },
  {
    "name": "sandiego_quarantinestation__usa_noaa",
    "lon": -117.17,
    "lat": 32.715,
    "correlation": 0.566184727,
    "rmse": 0.041765344
  },
  {
    "name": "sandyhook_usa_noaa",
    "lon": -74.009,
    "lat": 40.467,
    "correlation": 0.745927228,
    "rmse": 0.118366401
  },
  {
    "name": "sand_point,ak_574a_usa_uhslc",
    "lon": -160.5,
    "lat": 55.337,
    "correlation": 0.769748336,
    "rmse": 0.099823696
  },
  {
    "name": "sanfelix,chile_001_glossdm_bodc",
    "lon": -80.133,
    "lat": -26.283,
    "correlation": 0.304966864,
    "rmse": 0.041648213
  },
  {
    "name": "sanfrancisco_usa_noaa",
    "lon": -122.47,
    "lat": 37.807,
    "correlation": 0.703997771,
    "rmse": 0.054220978
  },
  {
    "name": "sanjuan,puertorico,usa_001_glossdm_bodc",
    "lon": -66.117,
    "lat": 18.467,
    "correlation": 0.438991008,
    "rmse": 0.033257029
  },
  {
    "name": "santacruz,galapagos,ecuador_001_glossdm_bodc",
    "lon": -90.312,
    "lat": -0.7533,
    "correlation": 0.240269668,
    "rmse": 0.04348054
  },
  {
    "name": "santamonica_municipalpier__usa_noaa",
    "lon": -118.5,
    "lat": 34.008,
    "correlation": 0.538280191,
    "rmse": 0.039681639
  },
  {
    "name": "santana_ssn_b_717b_brazil_uhslc",
    "lon": -51.18,
    "lat": -0.0567,
    "correlation": 0.151441727,
    "rmse": 0.221311025
  },
  {
    "name": "santander_ieo_spain",
    "lon": -3.79,
    "lat": 43.461,
    "correlation": 0.757027873,
    "rmse": 0.066944149
  },
  {
    "name": "santa_barbara,_ca_577a_usa_uhslc",
    "lon": -119.69,
    "lat": 34.408,
    "correlation": 0.489317101,
    "rmse": 0.04673142
  },
  {
    "name": "santa_cruz_030a_ecuador_uhslc",
    "lon": -90.313,
    "lat": -0.755,
    "correlation": 0.262067729,
    "rmse": 0.03933552
  },
  {
    "name": "santa_monica,_ca_578a_usa_uhslc",
    "lon": -118.5,
    "lat": 34.008,
    "correlation": 0.494703596,
    "rmse": 0.05112771
  },
  {
    "name": "san_andres_737a_colombia_uhslc",
    "lon": -81.7,
    "lat": 12.583,
    "correlation": 0.292094448,
    "rmse": 0.05323794
  },
  {
    "name": "san_carlos_674a_mexico_uhslc",
    "lon": -112.12,
    "lat": 24.79,
    "correlation": 0.32262108,
    "rmse": 0.0508323
  },
  {
    "name": "san_diego_569a_usa_uhslc",
    "lon": -117.17,
    "lat": 32.713,
    "correlation": 0.553440605,
    "rmse": 0.041405642
  },
  {
    "name": "san_felipe_307a_mexico_uhslc",
    "lon": -114.82,
    "lat": 31.018,
    "correlation": 0.361776526,
    "rmse": 0.068142178
  },
  {
    "name": "san_felix_035a_chile_uhslc",
    "lon": -80.108,
    "lat": -26.292,
    "correlation": 0.338535131,
    "rmse": 0.041047731
  },
  {
    "name": "san_francisco,ca_551a_usa_uhslc",
    "lon": -122.47,
    "lat": 37.807,
    "correlation": 0.690784293,
    "rmse": 0.053470606
  },
  {
    "name": "san_jose_675a_guatemala_uhslc",
    "lon": -90.833,
    "lat": 13.917,
    "correlation": 0.202361795,
    "rmse": 0.062100308
  },
  {
    "name": "san_juan,pr_245a_usa_uhslc",
    "lon": -66.117,
    "lat": 18.46,
    "correlation": 0.340383977,
    "rmse": 0.034758064
  },
  {
    "name": "san_juan_b_096b_peru_uhslc",
    "lon": -75.2,
    "lat": -15.367,
    "correlation": 0.152488521,
    "rmse": 0.067702589
  },
  {
    "name": "san_quintin_308a_mexico_uhslc",
    "lon": -115.98,
    "lat": 30.483,
    "correlation": 0.621013015,
    "rmse": 0.040162519
  },
  {
    "name": "sao_tome_225a_sao_tome_principe_uhslc",
    "lon": 6.5133,
    "lat": 0.0167,
    "correlation": 0.038377983,
    "rmse": 0.050234251
  },
  {
    "name": "saumlaki_420a_indonesia_uhslc",
    "lon": 131.29,
    "lat": -7.9817,
    "correlation": 0.434844874,
    "rmse": 0.02551902
  },
  {
    "name": "scott_base_663a_new_zealand_uhslc",
    "lon": 166.75,
    "lat": -77.85,
    "correlation": 0.742033606,
    "rmse": 0.059524962
  },
  {
    "name": "seattle_usa_noaa",
    "lon": -122.34,
    "lat": 47.603,
    "correlation": 0.786778963,
    "rmse": 0.073294534
  },
  {
    "name": "seaveyisland_usa_noaa",
    "lon": -70.742,
    "lat": 43.08,
    "correlation": 0.605929457,
    "rmse": 0.086140183
  },
  {
    "name": "sedili_324a_malaysia_uhslc",
    "lon": 104.11,
    "lat": 1.9317,
    "correlation": 0.560222202,
    "rmse": 0.07086797
  },
  {
    "name": "seldovia_usa_noaa",
    "lon": -151.72,
    "lat": 59.44,
    "correlation": 0.764446254,
    "rmse": 0.09951461
  },
  {
    "name": "sete_france_med_refmar",
    "lon": 3.6991,
    "lat": 43.398,
    "correlation": 0.790085512,
    "rmse": 0.066884637
  },
  {
    "name": "settlement_point_b_257b_bahamas_uhslc",
    "lon": -78.997,
    "lat": 26.71,
    "correlation": 0.476506317,
    "rmse": 0.048598697
  },
  {
    "name": "seward_c,ak_560c_usa_uhslc",
    "lon": -149.43,
    "lat": 60.12,
    "correlation": 0.802870402,
    "rmse": 0.089967454
  },
  {
    "name": "sewellspoint,hamptonroads_usa_noaa",
    "lon": -76.33,
    "lat": 36.947,
    "correlation": 0.780257423,
    "rmse": 0.10253133
  },
  {
    "name": "shanwei_641a_china_uhslc",
    "lon": 115.35,
    "lat": 22.75,
    "correlation": 0.754590139,
    "rmse": 0.084186276
  },
  {
    "name": "sheerness_p015_uk_bodc",
    "lon": 0.74306,
    "lat": 51.442,
    "correlation": 0.656407052,
    "rmse": 0.174177737
  },
  {
    "name": "shijiusuo_642a_china_uhslc",
    "lon": 119.55,
    "lat": 35.383,
    "correlation": 0.667654863,
    "rmse": 0.109703631
  },
  {
    "name": "shimizuminato_japan_jma",
    "lon": 138.52,
    "lat": 35.017,
    "correlation": 0.639136865,
    "rmse": 0.065171414
  },
  {
    "name": "shimokita_japan_jma",
    "lon": 141.23,
    "lat": 41.367,
    "correlation": 0.729213448,
    "rmse": 0.053738564
  },
  {
    "name": "shimonoseki_japan_jma",
    "lon": 130.93,
    "lat": 33.933,
    "correlation": 0.619834622,
    "rmse": 0.058470994
  },
  {
    "name": "shirahama_japan_jma",
    "lon": 135.38,
    "lat": 33.683,
    "correlation": 0.569508664,
    "rmse": 0.073707024
  },
  {
    "name": "sibolga_b_122b_indonesia_uhslc",
    "lon": 98.767,
    "lat": 1.75,
    "correlation": 0.285205099,
    "rmse": 0.064573833
  },
  {
    "name": "siboney,cuba_001_glossdm_bodc",
    "lon": -82.472,
    "lat": 23.092,
    "correlation": 0.376905053,
    "rmse": 0.120680773
  },
  {
    "name": "simon_s_town_221a_south_africa_uhslc",
    "lon": 18.433,
    "lat": -34.183,
    "correlation": 0.712506577,
    "rmse": 0.060760296
  },
  {
    "name": "simrishamn_017_sweden_smhi",
    "lon": 14.358,
    "lat": 55.557,
    "correlation": 0.574882279,
    "rmse": 0.128640003
  },
  {
    "name": "sisimiut,greenland_001_glossdm_bodc",
    "lon": -53.667,
    "lat": 66.933,
    "correlation": 0.660256695,
    "rmse": 0.094508558
  },
  {
    "name": "sitka,ak_559a_usa_uhslc",
    "lon": -135.34,
    "lat": 57.052,
    "correlation": 0.792254875,
    "rmse": 0.082646168
  },
  {
    "name": "skagsudde_018_sweden_smhi",
    "lon": 19.012,
    "lat": 63.191,
    "correlation": 0.552372864,
    "rmse": 0.130937462
  },
  {
    "name": "skagway_usa_noaa",
    "lon": -135.33,
    "lat": 59.45,
    "correlation": 0.760806831,
    "rmse": 0.104822056
  },
  {
    "name": "skanor_019_sweden_smhi",
    "lon": 12.829,
    "lat": 55.417,
    "correlation": 0.550683322,
    "rmse": 0.144854273
  },
  {
    "name": "smogen_020_sweden_smhi",
    "lon": 11.218,
    "lat": 58.354,
    "correlation": 0.803390182,
    "rmse": 0.109338564
  },
  {
    "name": "socorro_090a_mexico_uhslc",
    "lon": -111.02,
    "lat": 18.733,
    "correlation": 0.356238241,
    "rmse": 0.081061271
  },
  {
    "name": "solenzara_france_med_refmar",
    "lon": 9.4038,
    "lat": 41.857,
    "correlation": 0.71277026,
    "rmse": 0.054469925
  },
  {
    "name": "solomonsisland_biol.lab.__usa_noaa",
    "lon": -76.452,
    "lat": 38.317,
    "correlation": 0.758028371,
    "rmse": 0.088631419
  },
  {
    "name": "southcaicos,u.k._001_glossdm_bodc",
    "lon": -72,
    "lat": 22,
    "correlation": 0.472421111,
    "rmse": 0.144033325
  },
  {
    "name": "south_beach,or_592a_usa_uhslc",
    "lon": -124.04,
    "lat": 44.625,
    "correlation": 0.795667063,
    "rmse": 0.083017294
  },
  {
    "name": "south_caicos_720a_uk_uhslc",
    "lon": -71.533,
    "lat": 21.483,
    "correlation": 0.54536655,
    "rmse": 0.104312022
  },
  {
    "name": "south_pass,_la_764a_usa_uhslc",
    "lon": -89.14,
    "lat": 28.99,
    "correlation": 0.661639869,
    "rmse": 0.072811587
  },
  {
    "name": "spikarna_021_sweden_smhi",
    "lon": 17.531,
    "lat": 62.363,
    "correlation": 0.568798471,
    "rmse": 0.126885216
  },
  {
    "name": "split_spli_croatia_eseas",
    "lon": 16.442,
    "lat": 43.507,
    "correlation": 0.565854297,
    "rmse": 0.097797083
  },
  {
    "name": "springmaidpier_usa_noaa",
    "lon": -78.918,
    "lat": 33.655,
    "correlation": 0.701194936,
    "rmse": 0.091908365
  },
  {
    "name": "spring_bay_335a_australia_uhslc",
    "lon": 147.93,
    "lat": -42.55,
    "correlation": 0.839267772,
    "rmse": 0.058538551
  },
  {
    "name": "st.croix,_akalimetreebay__001_glossdm_bodc",
    "lon": -64.753,
    "lat": 17.697,
    "correlation": 0.296142555,
    "rmse": 0.036204431
  },
  {
    "name": "st.johns,nf_00905_canada_meds",
    "lon": -52.717,
    "lat": 47.567,
    "correlation": 0.673302286,
    "rmse": 0.10062287
  },
  {
    "name": "st.paulisland_001_glossdm_bodc",
    "lon": 77.583,
    "lat": -38.717,
    "correlation": 0.682024147,
    "rmse": 0.067796712
  },
  {
    "name": "st.petersburg_usa_noaa",
    "lon": -82.627,
    "lat": 27.761,
    "correlation": 0.761012385,
    "rmse": 0.073761722
  },
  {
    "name": "st._augustine,fl_262a_usa_uhslc",
    "lon": -81.262,
    "lat": 29.857,
    "correlation": 0.724195798,
    "rmse": 0.091150682
  },
  {
    "name": "st._helena_292a_united_kingdom_uhslc",
    "lon": -5.7167,
    "lat": -15.917,
    "correlation": 0.260600274,
    "rmse": 0.022614677
  },
  {
    "name": "st._john_s_b_276b_canada_uhslc",
    "lon": -52.7,
    "lat": 47.567,
    "correlation": 0.722043245,
    "rmse": 0.095460796
  },
  {
    "name": "st._petersburg,_fl_759a_usa_uhslc",
    "lon": -82.627,
    "lat": 27.76,
    "correlation": 0.757524157,
    "rmse": 0.074086805
  },
  {
    "name": "stanley_uk_noc",
    "lon": -57.821,
    "lat": -51.692,
    "correlation": 0.809252682,
    "rmse": 0.063515947
  },
  {
    "name": "stenungsund_022_sweden_smhi",
    "lon": 11.832,
    "lat": 58.093,
    "correlation": 0.796360578,
    "rmse": 0.122320501
  },
  {
    "name": "steveston,bc_07607_canada_meds",
    "lon": -123.18,
    "lat": 49.125,
    "correlation": 0.631638545,
    "rmse": 0.106376359
  },
  {
    "name": "sthelena_uk_noc",
    "lon": -5.7178,
    "lat": -15.921,
    "correlation": 0.259191961,
    "rmse": 0.022634789
  },
  {
    "name": "sthelier_p074_uk_bodc",
    "lon": -2.1167,
    "lat": 49.183,
    "correlation": 0.758734327,
    "rmse": 0.098849973
  },
  {
    "name": "stmarys_p231_uk_bodc",
    "lon": -6.3164,
    "lat": 49.918,
    "correlation": 0.807610025,
    "rmse": 0.070512211
  },
  {
    "name": "stockholm_826a_sweden_uhslc",
    "lon": 18.082,
    "lat": 59.324,
    "correlation": 0.510867439,
    "rmse": 0.117431902
  },
  {
    "name": "stornoway_p042_uk_bodc",
    "lon": -6.3882,
    "lat": 58.208,
    "correlation": 0.818601293,
    "rmse": 0.095086439
  },
  {
    "name": "suape_710a_brazil_uhslc",
    "lon": -34.95,
    "lat": -8.35,
    "correlation": 0.343199976,
    "rmse": 0.080332359
  },
  {
    "name": "subic_bay_382a_philippines_uhslc",
    "lon": 120.25,
    "lat": 14.765,
    "correlation": 0.479670519,
    "rmse": 0.035481976
  },
  {
    "name": "sumoto_japan_jma",
    "lon": 134.9,
    "lat": 34.35,
    "correlation": 0.600990967,
    "rmse": 0.072526119
  },
  {
    "name": "surabaya_160a_indonesia_uhslc",
    "lon": 112.72,
    "lat": -7.2083,
    "correlation": 0.243010494,
    "rmse": 0.099533123
  },
  {
    "name": "suva,fiji_001_glossdm_bodc",
    "lon": 178.43,
    "lat": -18.132,
    "correlation": 0.501543833,
    "rmse": 0.042834256
  },
  {
    "name": "syowa,_antarctica_127a_japan_uhslc",
    "lon": 39.6,
    "lat": -69,
    "correlation": 0.655394163,
    "rmse": 0.07064709
  },
  {
    "name": "takamatsu_japan_jma",
    "lon": 134.05,
    "lat": 34.35,
    "correlation": 0.612002454,
    "rmse": 0.07171947
  },
  {
    "name": "takoradi_c_231c_ghana_uhslc",
    "lon": -1.75,
    "lat": 4.8833,
    "correlation": 0.201818643,
    "rmse": 0.050373884
  },
  {
    "name": "talara_b_092b_peru_uhslc",
    "lon": -81.282,
    "lat": -4.5817,
    "correlation": 0.164100476,
    "rmse": 0.063468497
  },
  {
    "name": "tanegashima_japan_jma",
    "lon": 130.97,
    "lat": 30.467,
    "correlation": 0.58061571,
    "rmse": 0.068894163
  },
  {
    "name": "tanjong_pagar_699a_singapore_uhslc",
    "lon": 103.85,
    "lat": 1.2617,
    "correlation": 0.464473523,
    "rmse": 0.063265156
  },
  {
    "name": "tannowa_japan_jma",
    "lon": 135.18,
    "lat": 34.333,
    "correlation": 0.596617075,
    "rmse": 0.072851874
  },
  {
    "name": "taranaki_076a_new_zealand_uhslc",
    "lon": 174.03,
    "lat": -39.05,
    "correlation": 0.82826102,
    "rmse": 0.059914482
  },
  {
    "name": "taranto_taranto_italy_idromare",
    "lon": 17.225,
    "lat": 40.475,
    "correlation": 0.655654148,
    "rmse": 0.065699867
  },
  {
    "name": "tarawa_c_betio_,kiribati_001_glossdm_bodc",
    "lon": 172.94,
    "lat": 1.3583,
    "correlation": 0.239170897,
    "rmse": 0.044506323
  },
  {
    "name": "tarifa_tari_spain_ieo",
    "lon": -5.6,
    "lat": 36,
    "correlation": 0.634244968,
    "rmse": 0.060387463
  },
  {
    "name": "tauranga_073a_new_zealand_uhslc",
    "lon": 176.18,
    "lat": -37.65,
    "correlation": 0.797234519,
    "rmse": 0.047715164
  },
  {
    "name": "tawau_385a_malaysia_uhslc",
    "lon": 117.88,
    "lat": 4.2333,
    "correlation": 0.210387502,
    "rmse": 0.045392896
  },
  {
    "name": "teknaf_137a_bangladesh_uhslc",
    "lon": 92.3,
    "lat": 20.883,
    "correlation": 0.577403551,
    "rmse": 0.100821582
  },
  {
    "name": "telchac,_yuk._862a_mexico_uhslc",
    "lon": -89.308,
    "lat": 21.34,
    "correlation": 0.58259482,
    "rmse": 0.07137442
  },
  {
    "name": "tenerife_tenerife_spain_pde",
    "lon": -16.24,
    "lat": 28.478,
    "correlation": 0.712400661,
    "rmse": 0.029038455
  },
  {
    "name": "termisa_284a_brazil_uhslc",
    "lon": -37.05,
    "lat": -4.8167,
    "correlation": 0.015215465,
    "rmse": 0.037984954
  },
  {
    "name": "thevenard_026_australia_johnhunter",
    "lon": 133.65,
    "lat": -32.146,
    "correlation": 0.807928131,
    "rmse": 0.12350459
  },
  {
    "name": "timaru_665a_new_zealand_uhslc",
    "lon": 171.25,
    "lat": -44.383,
    "correlation": 0.804878142,
    "rmse": 0.07405949
  },
  {
    "name": "tinian_698a_n._mariana_islands_uhslc",
    "lon": 145.62,
    "lat": 14.96,
    "correlation": 0.314665775,
    "rmse": 0.056783548
  },
  {
    "name": "tioman_323a_malaysia_uhslc",
    "lon": 104.14,
    "lat": 2.8067,
    "correlation": 0.572795254,
    "rmse": 0.065227505
  },
  {
    "name": "toba_japan_jma",
    "lon": 136.85,
    "lat": 34.467,
    "correlation": 0.623788559,
    "rmse": 0.075531676
  },
  {
    "name": "tobermory_p223_uk_bodc",
    "lon": -6.0642,
    "lat": 56.623,
    "correlation": 0.802678675,
    "rmse": 0.117679735
  },
  {
    "name": "tofino,bc_08615_canada_meds",
    "lon": -125.91,
    "lat": 49.154,
    "correlation": 0.641712087,
    "rmse": 0.102664895
  },
  {
    "name": "tokyo_japan_jma",
    "lon": 139.77,
    "lat": 35.65,
    "correlation": 0.64750779,
    "rmse": 0.080253666
  },
  {
    "name": "topolobampo_676a_mexico_uhslc",
    "lon": -109.05,
    "lat": 25.6,
    "correlation": 0.37360413,
    "rmse": 0.066683327
  },
  {
    "name": "tosashimizu_japan_jma",
    "lon": 132.97,
    "lat": 32.783,
    "correlation": 0.575782863,
    "rmse": 0.072263236
  },
  {
    "name": "toulon_france_med_refmar",
    "lon": 5.9131,
    "lat": 43.117,
    "correlation": 0.717923207,
    "rmse": 0.053406618
  },
  {
    "name": "townsville_025_australia_johnhunter",
    "lon": 146.83,
    "lat": -19.25,
    "correlation": 0.605624399,
    "rmse": 0.087062882
  },
  {
    "name": "toyama_japan_jma",
    "lon": 137.23,
    "lat": 36.767,
    "correlation": 0.663746812,
    "rmse": 0.056152742
  },
  {
    "name": "tregde_006_norway_statkart",
    "lon": 7.5666,
    "lat": 58,
    "correlation": 0.75656901,
    "rmse": 0.089013206
  },
  {
    "name": "trieste_270061_italy_itt",
    "lon": 13.75,
    "lat": 45.65,
    "correlation": 0.771946438,
    "rmse": 0.089555862
  },
  {
    "name": "truk,fed.micronesia_001_glossdm_bodc",
    "lon": 151.85,
    "lat": 7.45,
    "correlation": 0.225898716,
    "rmse": 0.040885711
  },
  {
    "name": "tsushima_japan_jma",
    "lon": 129.32,
    "lat": 34.267,
    "correlation": 0.537826005,
    "rmse": 0.0549038
  },
  {
    "name": "tsushimahitakatsu_japan_jma",
    "lon": 129.48,
    "lat": 34.65,
    "correlation": 0.490657785,
    "rmse": 0.052879372
  },
  {
    "name": "tumaco_303a_colombia_uhslc",
    "lon": -78.73,
    "lat": 1.8167,
    "correlation": 0.11530387,
    "rmse": 0.096018445
  },
  {
    "name": "turku_012_finland_fmi",
    "lon": 22.101,
    "lat": 60.428,
    "correlation": 0.590004287,
    "rmse": 0.130430045
  },
  {
    "name": "uchiura_japan_jma",
    "lon": 138.88,
    "lat": 35.017,
    "correlation": 0.634531043,
    "rmse": 0.067465071
  },
  {
    "name": "ullapool_p043_uk_bodc",
    "lon": -5.1579,
    "lat": 57.895,
    "correlation": 0.80980176,
    "rmse": 0.111195969
  },
  {
    "name": "unalaska_usa_noaa",
    "lon": -166.54,
    "lat": 53.88,
    "correlation": 0.784167313,
    "rmse": 0.08128241
  },
  {
    "name": "uno_japan_jma",
    "lon": 133.95,
    "lat": 34.483,
    "correlation": 0.619639536,
    "rmse": 0.073542255
  },
  {
    "name": "uragami_japan_jma",
    "lon": 135.9,
    "lat": 33.567,
    "correlation": 0.642218115,
    "rmse": 0.067095777
  },
  {
    "name": "ushuaia_600a_argentina_uhslc",
    "lon": -68.217,
    "lat": -54.817,
    "correlation": 0.800220799,
    "rmse": 0.109924506
  },
  {
    "name": "uwajima_japan_jma",
    "lon": 132.55,
    "lat": 33.233,
    "correlation": 0.56940039,
    "rmse": 0.064975664
  },
  {
    "name": "vaasa_013_finland_fmi",
    "lon": 21.571,
    "lat": 63.081,
    "correlation": 0.605426993,
    "rmse": 0.134745734
  },
  {
    "name": "valdez,ak_562a_usa_uhslc",
    "lon": -146.36,
    "lat": 61.125,
    "correlation": 0.797096265,
    "rmse": 0.087916784
  },
  {
    "name": "valencia_valencia_spain_pde",
    "lon": -0.33,
    "lat": 39.46,
    "correlation": 0.730535636,
    "rmse": 0.051223477
  },
  {
    "name": "vallarta_393a_mexico_uhslc",
    "lon": -105.25,
    "lat": 20.615,
    "correlation": 0.312020157,
    "rmse": 0.065335124
  },
  {
    "name": "valparaiso_081a_chile_uhslc",
    "lon": -71.633,
    "lat": -33.033,
    "correlation": 0.373109731,
    "rmse": 0.048377164
  },
  {
    "name": "vancouver,bc_07735_canada_meds",
    "lon": -123.11,
    "lat": 49.287,
    "correlation": 0.668974944,
    "rmse": 0.09808264
  },
  {
    "name": "varberg1_024_sweden_smhi",
    "lon": 12.217,
    "lat": 57.1,
    "correlation": 0.787932666,
    "rmse": 0.106613742
  },
  {
    "name": "vardo,norway_001_glossdm_bodc",
    "lon": 31.1,
    "lat": 70.333,
    "correlation": 0.706486808,
    "rmse": 0.098837433
  },
  {
    "name": "venezia_punta_salute_italy_comune_venezia",
    "lon": 12.426,
    "lat": 45.419,
    "correlation": 0.766937876,
    "rmse": 0.085919784
  },
  {
    "name": "veracruz_b,ver._250b_mexico_uhslc",
    "lon": -96.133,
    "lat": 19.2,
    "correlation": 0.622579206,
    "rmse": 0.058673368
  },
  {
    "name": "vernadsky_a003_uk+ukraine_noc",
    "lon": -64.267,
    "lat": -65.25,
    "correlation": 0.736949177,
    "rmse": 0.091351253
  },
  {
    "name": "victorharbor_027_australia_johnhunter",
    "lon": 138.62,
    "lat": -35.553,
    "correlation": 0.842764982,
    "rmse": 0.100250767
  },
  {
    "name": "victoria,bc_543a_canada_uhslc",
    "lon": -123.37,
    "lat": 48.422,
    "correlation": 0.795785053,
    "rmse": 0.071819249
  },
  {
    "name": "victoriaharbour,bc_07120_canada_meds",
    "lon": -123.37,
    "lat": 48.425,
    "correlation": 0.656871133,
    "rmse": 0.090116047
  },
  {
    "name": "victoria_dock_337a_singapore_uhslc",
    "lon": 103.82,
    "lat": 1.2633,
    "correlation": 0.4926269,
    "rmse": 0.062443132
  },
  {
    "name": "vigo_ieo_spain",
    "lon": -8.7333,
    "lat": 42.233,
    "correlation": 0.772172338,
    "rmse": 0.070151629
  },
  {
    "name": "viken_025_sweden_smhi",
    "lon": 12.579,
    "lat": 56.142,
    "correlation": 0.794017538,
    "rmse": 0.111737773
  },
  {
    "name": "villagarcia_villagarcia_spain_pde",
    "lon": -8.77,
    "lat": 42.601,
    "correlation": 0.791863296,
    "rmse": 0.072032459
  },
  {
    "name": "virginia_key,fl_755a_usa_uhslc",
    "lon": -80.162,
    "lat": 25.732,
    "correlation": 0.484749674,
    "rmse": 0.063251421
  },
  {
    "name": "visby_026_sweden_smhi",
    "lon": 18.284,
    "lat": 57.639,
    "correlation": 0.499365204,
    "rmse": 0.109242297
  },
  {
    "name": "vung_tau_b_383b_vietnam_uhslc",
    "lon": 107.07,
    "lat": 10.34,
    "correlation": 0.398375572,
    "rmse": 0.104406458
  },
  {
    "name": "wakayama_japan_jma",
    "lon": 135.15,
    "lat": 34.217,
    "correlation": 0.586166662,
    "rmse": 0.073925547
  },
  {
    "name": "wake_051a_usa_trust_uhslc",
    "lon": 166.62,
    "lat": 19.283,
    "correlation": 0.197894031,
    "rmse": 0.062787469
  },
  {
    "name": "wakkanai_japan_jma",
    "lon": 141.68,
    "lat": 45.4,
    "correlation": 0.759416842,
    "rmse": 0.061826851
  },
  {
    "name": "walvis_bay_220a_namibia_uhslc",
    "lon": 14.5,
    "lat": -22.95,
    "correlation": 0.438273429,
    "rmse": 0.065208946
  },
  {
    "name": "wanganui_075a_new_zealand_uhslc",
    "lon": 174.99,
    "lat": -39.947,
    "correlation": 0.530110533,
    "rmse": 0.13183969
  },
  {
    "name": "washingtondc_usa_noaa",
    "lon": -77.022,
    "lat": 38.873,
    "correlation": 0.699407648,
    "rmse": 0.131437584
  },
  {
    "name": "wellington_071a_new_zealand_uhslc",
    "lon": 174.78,
    "lat": -41.283,
    "correlation": 0.80749617,
    "rmse": 0.057969446
  },
  {
    "name": "west_port_074a_new_zealand_uhslc",
    "lon": 171.6,
    "lat": -41.733,
    "correlation": 0.682418621,
    "rmse": 0.096527838
  },
  {
    "name": "wewak_063a_papua_new_guinea_uhslc",
    "lon": 143.63,
    "lat": -3.57,
    "correlation": 0.485683385,
    "rmse": 0.033673047
  },
  {
    "name": "weymouth_p991_uk_bodc",
    "lon": -2.4479,
    "lat": 50.608,
    "correlation": 0.755029826,
    "rmse": 0.085844712
  },
  {
    "name": "whitby_p174_uk_bodc",
    "lon": -0.61417,
    "lat": 54.49,
    "correlation": 0.722985447,
    "rmse": 0.128354435
  },
  {
    "name": "wick_p035_uk_bodc",
    "lon": -3.0863,
    "lat": 58.441,
    "correlation": 0.823189838,
    "rmse": 0.090833004
  },
  {
    "name": "willapa_bay,_wa_564a_usa_uhslc",
    "lon": -123.97,
    "lat": 46.708,
    "correlation": 0.80905123,
    "rmse": 0.111075169
  },
  {
    "name": "willemstad_778a_curacao_uhslc",
    "lon": -68.942,
    "lat": 12.103,
    "correlation": 0.536691819,
    "rmse": 0.038481484
  },
  {
    "name": "willetspoint_usa_noaa",
    "lon": -73.782,
    "lat": 40.793,
    "correlation": 0.736780782,
    "rmse": 0.132941643
  },
  {
    "name": "williamstown_028_australia_johnhunter",
    "lon": 144.9,
    "lat": -37.857,
    "correlation": 0.839953314,
    "rmse": 0.075725577
  },
  {
    "name": "wilmington,nc_750a_usa_uhslc",
    "lon": -77.953,
    "lat": 34.227,
    "correlation": 0.549052539,
    "rmse": 0.098387278
  },
  {
    "name": "wladyslawowo_wlad_poland_eseas",
    "lon": 18.419,
    "lat": 54.797,
    "correlation": 0.659195354,
    "rmse": 0.126128461
  },
  {
    "name": "woodislands,pei_01630_canada_meds",
    "lon": -62.7,
    "lat": 45.683,
    "correlation": 0.589869006,
    "rmse": 0.139070361
  },
  {
    "name": "woods_hole,ma_742a_usa_uhslc",
    "lon": -70.672,
    "lat": 41.523,
    "correlation": 0.736157766,
    "rmse": 0.087344544
  },
  {
    "name": "workington_p217_uk_bodc",
    "lon": -3.5676,
    "lat": 54.651,
    "correlation": 0.784253752,
    "rmse": 0.14845026
  },
  {
    "name": "wyndham_029_australia_johnhunter",
    "lon": 149.65,
    "lat": -36.929,
    "correlation": 0.149324602,
    "rmse": 0.108507968
  },
  {
    "name": "wyndham_165a_australia_uhslc",
    "lon": 128.1,
    "lat": -15.453,
    "correlation": 0.370617661,
    "rmse": 0.099478486
  },
  {
    "name": "xiamen_376a_china_uhslc",
    "lon": 118.07,
    "lat": 24.45,
    "correlation": 0.800064648,
    "rmse": 0.105283888
  },
  {
    "name": "yabucoa_harbor,_pr_734a_usa_uhslc",
    "lon": -65.832,
    "lat": 18.055,
    "correlation": 0.363095906,
    "rmse": 0.029758717
  },
  {
    "name": "yakutat_usa_noaa",
    "lon": -139.74,
    "lat": 59.548,
    "correlation": 0.788644948,
    "rmse": 0.094332397
  },
  {
    "name": "yap_b_008b_fd._st._micronesia_uhslc",
    "lon": 138.13,
    "lat": 9.5167,
    "correlation": 0.244883627,
    "rmse": 0.048985862
  },
  {
    "name": "yarmouth,ns_00365_canada_meds",
    "lon": -66.117,
    "lat": 43.833,
    "correlation": 0.56649898,
    "rmse": 0.105183975
  },
  {
    "name": "yavaros_677a_mexico_uhslc",
    "lon": -109.51,
    "lat": 26.703,
    "correlation": 0.341986402,
    "rmse": 0.065924903
  },
  {
    "name": "yokohama_japan_jma",
    "lon": 139.63,
    "lat": 35.467,
    "correlation": 0.642937062,
    "rmse": 0.068778875
  },
  {
    "name": "yonaguni_japan_jma",
    "lon": 122.95,
    "lat": 24.45,
    "correlation": 0.496005762,
    "rmse": 0.06484255
  },
  {
    "name": "ystad_027_sweden_smhi",
    "lon": 13.817,
    "lat": 55.417,
    "correlation": 0.579320017,
    "rmse": 0.133549535
  },
  {
    "name": "zanzibar_151a_tanzania_uhslc",
    "lon": 39.19,
    "lat": -6.155,
    "correlation": 0.262805026,
    "rmse": 0.038406322
  },
  {
    "name": "zhapo_a_635a_china_uhslc",
    "lon": 111.83,
    "lat": 21.583,
    "correlation": 0.727661702,
    "rmse": 0.096437402
  }
 ]

// mongoose validates all the seed files before inserting anything
TideGauge.insertMany(seedTGs)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})