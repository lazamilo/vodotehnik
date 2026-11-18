// Vsebina izdelkov, prevzeta z vodotehnik.si
window.VT_PRODUCTS = [
  {
    id: 'nadzemni-hidrant',
    name: 'Nadzemni hidrant',
    cat: 'Hidranti',
    range: 'DN 80',
    price: '538,00 €',
    img: 'assets/img/p-hidrant.png',
    hero: 'assets/img/hidrant.jpg',
    lead: 'Hidrant za oskrbo z vodo v primeru požara, izdelan v skladu s standardom SIST EN 14384:2005. Odpira se navzdol, kar preprečuje poškodbe pri nanosu kamenja med zapiralni element.',
    body: [
      'Glava hidranta je vrtljiva za 360°, kar omogoča enostavno nastavitev položaja glave pri urbani gradnji. Vsi notranji materiali so odporni na korozijo, kar zagotavlja dolgo življenjsko dobo hidranta. Klin hidranta je dodatno voden, kar zagotavlja enostavno in hitro zapiranje.',
      'Opremljen je z zračnim ventilom pod pokrovom zapiralnega elementa, kar zagotavlja nemoten iztok vode iz ohišja v primeru hitrega zapiranja spojk.',
      'Pri lomljivi izvedbi je hidrant deljen na sredini povezovalne cevi. Spoj tvorita dve prirobnici s posebnimi vijaki, ki se pri prekomerni sili odlomijo. Zapiralni del ostane na svojem mestu, zato ne pride do nekontroliranega iztoka vode. Za ponovno namestitev je treba zamenjati samo vijake.'
    ],
    pros: [
      'Narejeno v Sloveniji',
      'Glava in spodnje ohišje iz nodularne litine GGG 50',
      'Vsi notranji deli iz nerjavnih materialov (medenina, nerjavno jeklo)',
      'Posebna konstrukcija omogoča popoln iztok vode iz hidranta',
      'Pri lomu ostane zapiralo ventila na mestu',
      'Pridobljen CE certifikat',
      'Ohišje in glava zaščitena po EWS postopku z GSK certifikatom',
      'Glava hidranta vrtljiva za 360°',
      'Servisiranje hidranta brez izkopa'
    ],
    gallery: ['assets/img/p-hidrant.png', 'assets/src/hidrant_nz_1.jpg', 'assets/src/hidrant_nz_3.jpg']
  },
  {
    id: 'navrtni-zasun',
    name: 'Navrtni zasun',
    cat: 'Zasuni',
    range: 'DN 65 do 500',
    price: '138,90 €',
    img: 'assets/img/p-navrtni-zasun.png',
    hero: 'assets/img/zasun.jpg',
    lead: 'Za hiter priklop uporabnika na glavni cevovod pod tlakom. Primeren za priključevanje na PE, PVC in LTŽ cevi.',
    body: [
      'Zasun ima vgrajeno drsno ploščo, ki z zasukom za 180° preko vretena omogoča enostavno zapiranje in odpiranje. Navrtni zasun omogoča montažo različnih priključnih kolen dimenzij od DN 25 do DN 63.',
      'Skupaj s teleskopsko vgradbeno garnituro je primeren za podzemno vgradnjo. Higiensko neoporečnost potrjujeta certifikata DVGW in GSK.'
    ],
    pros: [
      'Proizveden v Sloveniji',
      'Ohišje iz nodularne litine GGG50',
      'Epoksi prašno zaščiteno po EWS postopku',
      'Primeren za vgradnjo pod tlakom',
      'Integrirana zapora v ohišju',
      'Različni priključki: navojni 1”, 6/4”, ZIK 32, ZIK 46',
      'Enostavna vgradnja brez dodatnega orodja',
      'Pridobljen DVGW in GSK certifikat',
      'Streme iz nerjavnega jekla, vulkanizirano v gumo',
      'Tesnila iz EPDM gume po DVGW W270'
    ],
    tables: [
      {
        title: 'Za LTŽ cevi',
        head: ['DN', 'Izhod DN1'],
        rows: [65, 80, 100, 125, 150, 200, 250, 300, 400, 500].map(d => [d, '1”, 6/4”, ZIK 32, ZIK 46'])
      },
      {
        title: 'Za PE / PVC cevi',
        head: ['d (mm)', 'Izhod DN1'],
        rows: [63, 90, 110, 125, 140, 160, 180, 225, 250].map(d => [d, '1”, 6/4”, ZIK 32, ZIK 46'])
      }
    ]
  },
  {
    id: 'ev-zasun',
    name: 'EV zasun',
    cat: 'Zasuni',
    range: 'DN 50 do 400',
    price: '64,69 €',
    img: 'assets/img/p-ev-zasun.png',
    lead: 'Zasuni za sisteme oskrbe s pitno vodo. Ohišje in pokrov iz nodularne litine GGG50, prašno barvana po EWS postopku z GSK certifikatom.',
    body: [
      'Dobavljivi so v dimenzijah od DN 50 do DN 400. Upravljanje je možno preko vgradne garniture ali z ročnim kolesom pri nadzemni vgradnji. EV zasuni so na voljo v vgradnih različicah F4 in F5.'
    ],
    pros: [
      'Narejeni v Sloveniji',
      'Ohišje in kapa zaščitena po EWS postopku z GSK certifikatom',
      'Tesnila iz EPDM gume po DVGW W270',
      'Klin zasuna s POM vodili za lažje odpiranje in zapiranje',
      '100% vodotesnost PN 16',
      'Ohišje in kapa sestavljena brezvijačno',
      'Enostavna in hitra montaža'
    ],
    tables: [
      {
        title: 'Dimenzije',
        head: ['DN', 'PN (bar)', 'L (mm)', 'F (mm)', 'H (mm)', 'A × B (mm)', 'Teža (kg)'],
        rows: [
          [50, '16', 150, 165, 215, '90 × 90', '9,0'],
          [65, '16', 170, 185, 285, '122 × 144', '14,0'],
          [80, '16', 180, 200, 300, '135 × 164', '18,0'],
          [100, '16', 190, 220, 325, '146 × 186', '23,0'],
          [125, '16', 200, 250, 370, '160 × 225', '28,0'],
          [150, '16', 210, 285, 405, '180 × 275', '36,0'],
          [200, '10 / 16', 230, 340, 530, '194 × 330', '63,0'],
          [250, '10 / 16', 250, 400, 625, '235 × 412', '99,0'],
          [300, '10 / 16', 270, 455, 700, '260 × 480', '135,0'],
          [350, '10 / 16', 290, 580, 980, '240 × 580', '210,0'],
          [400, '10 / 16', 310, 640, 1120, '240 × 580', '290,0']
        ]
      }
    ]
  },
  {
    id: 'prikljucna-kolena',
    name: 'Priključna kolena za navrtni zasun',
    short: 'Priključna kolena',
    cat: 'Priključki',
    range: 'DN 25 do 63',
    price: '39,46 €',
    img: 'assets/img/p-kolena.png',
    lead: 'Vrtljivo koleno za montažo na navrtni zasun, za priključne cevi od DN 25 do DN 63.',
    body: [
      'Vsa kolena so primerna za podzemno vgradnjo, saj so zaščitena po EWS postopku z GSK certifikatom, ki dokazuje kakovost nanosa najmanj 250 μm. Omogočajo enostavno in hitro montažo brez posebnega orodja. Spoj je 100% vodotesen, kar zagotavljajo vgrajena O-tesnila na kolenu.'
    ],
    pros: [
      'Proizvedeno v Sloveniji',
      'Material GGG50, epoksi prašno barvano po EWS postopku z GSK certifikatom',
      'Hitra in enostavna vgradnja',
      'Dobavljivo v različnih dimenzijah',
      'Primerno za podzemno vgradnjo',
      'Vrtljivo koleno ZIG 34–46 (za cevi PE DN 25–63)',
      'Vrtljivo koleno z navojem (za cevi PE DN 25–63)',
      'Koleno z navojem 1/2”–6/4” (za cevi PE DN 25–63)',
      'Koleno vrtljivo PE (za cevi PE DN 25–63)'
    ]
  },
  {
    id: 'podzemni-zracnik',
    name: 'Teleskopski podzemni zračnik',
    short: 'Podzemni zračnik',
    cat: 'Zračniki',
    range: 'DN 50',
    price: '865,00 €',
    img: 'assets/img/p-zracnik.png',
    lead: 'Za podzemno vgradnjo na cevovode. Omogoča zračenje in odzračevanje cevovodov brez potrebe po jašku.',
    body: [
      'Prilagoditev višine na terenu je enostavna, saj je zračnik teleskopske izvedbe in dobavljiv v različnih vgradbenih globinah. Ohišje je iz nodularne litine, zaščiteno po postopku EWS z GSK certifikatom.',
      'Vgrajeno zapiralo omogoča, da zračnik pri tlačnih preizkusih zapremo in tako brez težav opravimo tlačni preizkus.'
    ],
    pros: [
      'Narejeno v Sloveniji',
      'Teleskopsko nastavljiv',
      'Vgrajen zapiralni element ON / OFF',
      'Omogoča podzemno vgradnjo',
      'Samodejno delovanje na principu vzgona zraka',
      'Zapiranje preko vgradbene garniture',
      '100% vodotesnost PN 16'
    ],
    tables: [
      {
        title: 'Izvedbe',
        head: ['Šifra', 'DN', 'PN (bar)', 'H1 min (mm)', 'H1 max (mm)', 'Teža (kg)'],
        rows: [
          ['226', 50, '10 / 16', '1.100', '1.300', '21,5'],
          ['227', 50, '10 / 16', 'po dogovoru', 'po dogovoru', '—']
        ]
      }
    ]
  },
  {
    id: 'plombe',
    name: 'Vodomerne in plinske plombe',
    short: 'Plombe',
    cat: 'Plombe',
    range: '1/2” do 1”',
    price: '0,73 €',
    img: 'assets/img/p-plombe.png',
    lead: 'Plombe iz UV odpornega polipropilena za zaščito merilnih mest pred nepooblaščenim posegom.',
    body: [
      'Sestavljene so iz treh elementov: ohišja, prozornega zapiralnega elementa in blokirnega zatiča. Na voljo so v dimenzijah 1/2”, 3/4” in 1”, z izbiro barve po lestvici RAL. Na ohišju je odtisnjeno opozorilo »Poškodovanje plombe je kaznivo«.',
      'Prozorni zapiralni element omogoča trobarvni odtis vašega logotipa ali lasersko gravuro serijske številke za lažji nadzor.'
    ],
    pros: [
      'Narejeno v Sloveniji',
      'Tisk logotipa po želji naročnika',
      'Enostavna in hitra montaža',
      'Nadzor pred nepooblaščenim posegom v merilno mesto',
      'UV obstojnost'
    ]
  },
  {
    id: 'termo-jasek',
    name: 'Vodomerni termo jašek',
    short: 'Termo jašek',
    cat: 'Jaški',
    range: 'Po meri',
    price: null,
    img: 'assets/img/p-termo-jasek.png',
    hero: 'assets/img/zima.jpg',
    lead: 'Jašek za vgradnjo vodomerov individualnih uporabnikov, ki vodomer varuje pred mrazom tudi v ekstremnih zimskih razmerah.',
    body: [
      'Jašek je brez dna, kar omogoča prehod talne toplote pod termo pokrov, kjer se toplota akumulira in preprečuje zamrznitev vodomera. Dobavljiv je v različnih dimenzijah, oprema in izvedba inštalacij pa se prilagodita željam naročnika.'
    ],
    pros: [
      'Narejen v Sloveniji',
      'Lahek dostop, zaščita in odčitavanje vodomera',
      'Telo iz dvoslojne PP cevi temenske togosti SN 8',
      'Izolacijski plašč po 2/3 višine jaška',
      'Izolacijski pokrov z vgrajenim ročajem',
      'Izvedba po želji naročnika, različnih dimenzij in opreme',
      'Preizkušena povoznost in toplotna izolativnost (ZAG)',
      'Možnost vgradnje regulatorja tlaka brez posega v inštalacijo',
      'Pokrovi v obremenitvenih razredih A15, B125 in D400',
      'Rebrasta cev dodatno varuje pred zmrzaljo (zrak v rebrih)'
    ]
  },
  {
    id: 'jasek-1000-pp',
    name: 'Vodomerni jašek 1000 PP',
    short: 'Jašek 1000 PP',
    cat: 'Jaški',
    range: 'Ø 1000',
    price: null,
    img: 'assets/img/p-jasek-1000.png',
    lead: 'Za vgradnjo vodomera zunaj stanovanjskega ali poslovnega objekta.',
    body: [],
    pros: [
      'Lahek dostop, zaščita in nadzor nad števcem',
      'Enostavno vzdrževanje in odčitavanje stanja števca',
      'PP rebrasto telo za toplotno izolacijo in dobro obodno togost',
      'PP talna plošča in prehodi Vodoflex za 100% tesnenje pred vdorom tekočin',
      'Za povozne površine na voljo z obbetoniranim LTŽ pokrovom 600 × 600'
    ]
  },
  {
    id: 'jasek-1200',
    name: 'Vodomerni jašek 1200 z litoželeznim pokrovom',
    short: 'Jašek 1200',
    cat: 'Jaški',
    range: 'DN 50 do 100',
    price: null,
    img: 'assets/img/p-jasek-1200.png',
    lead: 'Za vgradnjo vodomera ali regulatorja tlaka zunaj objekta.',
    body: [],
    pros: [
      'Lahek dostop, zaščita in nadzor nad vodovodno opremo',
      'Dvoslojno rebrasto telo iz polipropilena za toplotno izolacijo in obodno togost',
      'Talna plošča iz polipropilena in tesnilni prehodi skozi steno za vodotesnost',
      'PEHD pokrov za nepovozne površine ali obbetoniran LTŽ pokrov 600 × 600',
      'Jašek za regulator tlaka DN 50, 65, 80, 100',
      'Jašek za kombiniran vodomer DN 50, 65, 80, 100'
    ]
  },
  {
    id: 'jasek-lezeci',
    name: 'Vodomerni jašek ležeči 2000, 2200',
    short: 'Jašek ležeči',
    cat: 'Jaški',
    range: '2000 / 2200',
    price: null,
    img: 'assets/img/p-jasek-lezeci.png',
    lead: 'Za vgradnjo vodomera ali armatur po želji naročnika.',
    body: [],
    pros: [
      'Enostavna vgradnja brez betona',
      'Troslojna spiralna cev iz polipropilena za veliko obodno togost',
      'PEHD pokrov za nepovozne površine, INOX povozni pokrov ali LTŽ pokrov'
    ]
  }
];
