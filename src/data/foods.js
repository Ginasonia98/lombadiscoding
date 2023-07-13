const foods = [
  {
    imageUrl: 'https://www.warisankuliner.com/gfx/recipes/1362376252.jpg',
    name: 'Mie Aceh',
    origin: 'Nanggroe Aceh Darussalam',
    ingredients: "Wet yellow noodles, Crab, Shrimp, Beef, Garlic, Onions, Tomato, Leek or celery, Bean sprouts, Cabbage, Sweet soy sauce, Bay leaf, Margarine, Shallots, Large red chilies, Cardamom, Turmeric, Cumin, Ground pepper, Salt, Pickled cucumbers, and Fried onions.",
    sourceUrl : 'https://www.merdeka.com/jabar/cara-membuat-mie-aceh-yang-enak-dan-sederhana-begini-resepnya-kln.html'
  },
  {
    imageUrl: 'https://img.okezone.com/content/2020/06/12/298/2229217/cara-membuat-bika-ambon-khas-medan-lembut-di-mulut-HWbOWCuHyP.jpg',
    name: 'Bika Ambon',
    origin: 'Sumatera Utara',
    ingredients:"Wheat Flour, Fresh Coconut Water, Instant Yeast, Thick Coconut Milk taken from 2 coconuts, Pandan Leaves, Orange Leaves, Lemongrass, Turmeric Powder, Salt, Egg Yolk, Fine Granulated Sugar / Caster Sugar, Vanilli, and Farm Sago",
    sourceUrl : 'https://cookpad.com/id/resep/8529222-bika-ambon-khas-medan'
  },
  {
    imageUrl: 'https://ik.trn.asia/uploads/2022/10/1665275306623.png',
    name: 'Rendang',
    origin: 'Sumatera Barat',
    ingredients:"Beef, coconut, lime leaves, lemongrass, kandis acid, cooking oil,Salt, Shallots, Garlic, Big Red Chilies, Galangal, Candlenuts, and Cloves",
    sourceUrl:'https://food.detik.com/info-kuliner/d-5567228/resep-rendang-sapi-khas-padang-dan-tips-memasaknya'
  },
  {
    imageUrl: 'https://www.masakapahariini.com/wp-content/uploads/2020/04/Gulai-Ikan-Patin-500x300.jpg',
    name: 'Gulai Pindang Patin',
    origin: 'Jambi',
    ingredients:"Catfish, Basil Leaves, Scallions, Pineapple, Cayenne Pepper, Tomato, Belimbing Wuluh, Candlenut, Turmeric, Ginger, Curly Chili, Galangal, Lime Leaves, Bay Leaves, and Lemongrass.",
    sourceUrl:'https://cookpad.com/id/resep/2525910-pindang-patin-khas-palembang'
  },
  {
    imageUrl: 'https://balitteknologikaret.co.id/wp-content/uploads/2023/04/Resep-Empek-Empek-Tenggiri.jpg',
    name: 'Pempek',
    origin: 'Sumatera Selatan',
    ingredients:"Mackerel or Snakehead Fish, Ice Water, Salt, Wheat Flour, Starch Flour, Brown Sugar, Cayenne Pepper, Garlic, White Vinegar, Ebi Powder, and Cucumber",
    sourceUrl:'https://kumparan.com/Resep-makanan/resep-empek-empek-palembang-yang-lezat-disantap-bersama-kuah-cuko-1wvhxaZqDyY'
  },
  {
    imageUrl: 'https://asset.kompas.com/crops/4UfXhXtR7hK2atnUpqKRHGbhFuk=/3x0:700x465/750x500/data/photo/2021/02/16/602b2a91ca7f1.jpg',
    name: 'Satai Bandeng',
    origin: 'Banten',
    ingredients:"Milkfish, Grated Coconut, Salt, AJI-NO-MOTO, Tamarind Water, Egg, Thick Coconut Milk, Oil, Banana Leaves, Bamboo, Curly Red Chili, Coriander, Cumin, Ginger, Galangal, Turmeric, Onion, and Garlic",
    sourceUrl:'https://www.dapurumami.com/resep/sate-bandeng-HATd4',
  },
  {
    imageUrl: 'https://asset.kompas.com/crops/vJPlamN3s9o9DX_lb8RdL2Xn--M=/32x22:1000x667/750x500/data/photo/2022/03/06/622484bdc0cf8.jpg',
    name: 'Kerak Telur',
    origin: 'DKI Jakarta',
    ingredients:"Chicken/Duck Eggs, Fine Garlic, Fine Shallots, White Rice, Salt, Broth Powder, and Pepper, Grated Coconut, Rebon Shrimp, Mushroom Broth, White Sugar, Chili Powder, Coconut Powder, and Fried Onions.",
    sourceUrl:'https://www.happyfresh.id/blog/resep/cara-membuat-kerak-telor/',
  },
  {
    imageUrl: 'https://img-global.cpcdn.com/recipes/4a2a38f7022bc085/680x482cq70/serabi-kuah-kinca-durian-foto-resep-utama.jpg',
    name: 'Serabi',
    origin: 'Jawa Barat',
    ingredients:"Wheat, Rice Flour, Granulated Sugar, Instant Yeast, Baking Powder, Salt, Liquid Coconut Milk, Eggs, and Pandan Paste",
    sourceUrl:'https://www.briliofood.net/resep/8-resep-serabi-enak-lembut-antigagal-dan-mudah-dibuat-2006300.html'
  },
  {
    imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/03/04/lumpia-semarang_43.jpeg?w=1200',
    name: 'Lumpia',
    origin: 'Jawa Tengah',
    ingredients:"Lumpia Skin, Oil, Vegetable Oil, Garlic, Peeled Prawns, Ebi, Chicken Egg, Boiled/Canned Bamboo Shoots, Pepper Powder, Salt, Sweet Soy Sauce, Oyster Sauce, Brown Sugar, Java Sugar, Starch Flour, Chives, Cayenne Pepper, and Pickled Cucumber",
    sourceUrl:'https://food.detik.com/sayur/d-5375524/resep-lumpia-semarang-yang-padat-dan-renyah'
  },
  {
    imageUrl: 'https://cdn-1.timesmedia.co.id/images/2022/12/21/gudeg-2.jpg',
    name: 'Gudeg',
    origin: 'Yogyakarta',
    ingredients:"Young Jackfruit, Chicken Eggs, Bay Leaves, Orange Leaves, Galangal, Javanese Sugar, Coconut Milk, Red Onion, Garlic, Candlenut, Coriander, Shrimp Paste, Cumin, Salt, Fried Sambal Krecek, Opor Chicken, and Sambal Plow.",
    sourceUrl:'https://food.detik.com/sayur/d-5272175/resep-gudeg-jogja-yang-sedap-ngangeni'
  },
  {
    imageUrl: 'https://asset.kompas.com/crops/dcFNlU98F0bRk5ZrSrV5PVivpc8=/129x0:858x486/750x500/data/photo/2021/05/15/609fbcd2ed6d9.jpg',
    name: 'Rujak Cingur',
    origin: 'Jawa Timur',
    ingredients:"Cingur, Bean Sprouts, Kankung, Cucumber, Jicama, Tempeh, Tofu, Cayenne Pepper, Fried Peanuts, Shrimp Paste, Fried Garlic, Tamarind Water, Brown Sugar, Salt, Klutuk/stone Bananas, Lontong, and Crackers",
    sourceUrl:'https://resepkoki.id/resep/resep-rujak-cingur/'
  },
  {
    imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2021/08/27/resep-ayam-betutu-gilimanuk_43.jpeg?w=1200',
    name: 'Ayam Betutu',
    origin: 'Bali',
    ingredients:"Chicken, Lemongrass, Salam Leaves, Shallots, Garlic, Large Chilies, Curly Red Chilies, Candlenuts, Ginger, Turmeric, Galangal, Kencur, Pepper, Coriander, Salt, Brown Sugar, Shrimp Paste, Boiled Vegetables, Fried Peanuts, and Sambal Matah",
    sourceUrl:'https://food.detik.com/resep-pembaca/d-5698302/resep-pembaca-resep-ayam-betutu-gilimanuk-yang-pedas-gurih-berempah'
  },
  {
    imageUrl: 'https://img.kurio.network/iU_q9ETZ3iZ-w6SfPw80coAjVv8=/1200x675/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/16/f247ea21-347b-47cd-b8fa-5bfdaf6a5855.jpe',
    name: 'Ayam Taliwang',
    origin: 'Nusa Tenggara Barat',
    ingredients:"Free-range Chicken, Salt, Lime Juice, Royco Chicken Stock, Coconut Milk, Low Fat Milk, Sweet Soy Sauce, Oil, Honey, Onion, Garlic, Pecan, Curly Red Chili, and Red Cayenne Pepper",
    sourceUrl:'https://www.masakapahariini.com/resep/resep-ayam-taliwang/'
  },
  {
    imageUrl: 'https://assets-a1.kompasiana.com/items/album/2020/02/29/muthiatarya09-catemak-jagung-5e5a0c29d541df6edf4c39f2.jpg',
    name: 'Catemak Jagung',
    origin: 'Nusa Tenggara Timur',
    ingredients:"Corn, Peanuts, Green Beans, Pumpkin Shoots, Sweet Potato Leaves, Mushroom Broth, and Salt",
    sourceUrl:'https://www.yummy.co.id/resep/catemak-jagung'
  },
  {
    imageUrl: 'https://kate.id/wp-content/uploads/2020/03/Bubbor-Paddas.jpg',
    name: 'Bubur Pedas Sambas',
    origin: 'Kalimantan Barat',
    ingredients:"Rice, Grated Coconut, Fried Anchovies, Fried Peanuts, Cooking Oil, Onion, Garlic, Coriander, Ginger, Pepper, Candlenut, Shrimp Paste, Lemongrass, Galangal, Turmeric Leaves, Kesum Leaves, Bean Sprouts, Corn Corn, Carrots, Grafts Sweet, Ferns, Sweet Potatoes, Kale, Long Beans, Sambas Chilli, Salty and Sweet Soy Sauce, and Key Oranges",
    sourceUrl:'https://cookpad.com/id/resep/13739298-bubur-pedas-khas-sambas'
  },
  {
    imageUrl: 'https://img-global.cpcdn.com/recipes/fcadf259eab64fb1/1200x630cq70/photo.jpg',
    name: 'Juhu Singkah',
    origin: 'Kalimantan Tengah',
    ingredients:"Shallots, Garlic, Pecans, Ginger, Turmeric, Galangal, Pepper, and Salt",
    sourceUrl:'https://www.katakini.com/artikel/61710/juhu-singkah-kuliner-khas-suku-dayak-ngaju-simak-asal-usul--resep-membuatnya/'
  },
  {
    imageUrl: 'https://cdn0-production-images-kly.akamaized.net/VI_p5hyAivPK-9r99b1QBh-SpIE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/962766/original/052673800_1440157100-20150822-Soto-Banjar.jpg',
    name: 'Soto Banjar',
    origin: 'Kalimantan Selatan',
    ingredients:"Skinless Chicken Breast, Cardamom, Pekak, Cloves, Nutmeg, Cinnamon Sticks, Royco Chicken Broth, Red Onion, Garlic, Candlenut, Turmeric, Salt, Pepper, Oil, Suun, Egg, Potato, Celery, and Orange Thin",
    sourceUrl:'https://www.masakapahariini.com/resep/resep-soto-banjar/'
  },
  {
    imageUrl: 'https://cdn.idntimes.com/content-images/community/2019/06/images57-d8ff594d1deb1d93abad3aea6079dc42_600x400.jpeg',
    name: 'Ayam Cincane',
    origin: 'Kalimantan Timur',
    ingredients:"Chicken Meat, Shallots, Garlic, Shrimp Paste, Lemongrass, Galangal, Red Chilies, Green Cayenne Peppers, Brown Sugar, Salt, Bay Leaves, Cooking Oil, and Ginger",
    sourceUrl:'https://cookpad.com/id/resep/176969-ayam-cincane-kalimantan-timur'
  },
  {
    imageUrl: 'https://img.okezone.com/content/2017/01/30/298/1604982/saran-chef-kepiting-soka-enaknya-dimasak-seperti-ini-w49k99VOeV.jpg',
    name: 'Kepiting Soka',
    origin: 'Kalimantan Utara',
    ingredients:"Garlic, Pepper, Palm Oil, and Soft Crab",
    sourceUrl:'https://www.momsmoney.id/news/resep-kepiting-soka-goreng-tiram-bisa-dimakan-dengan-cangkangnya'
  },
  {
    imageUrl: 'https://asset.kompas.com/crops/t9vL2Z6ZAjt7cnpl05cuYOfd2k4=/129x72:651x420/750x500/data/photo/2020/07/30/5f22636a0e7e0.jpg',
    name: 'Sup Konro',
    origin: 'Sulawesi Selatan',
    ingredients:"Beef Ribs, Red Onion, Garlic, Kluwak, Candlenut, Coriander, Cumin, Nutmeg Powder, Turmeric, Ginger, Peppercorns, Lemongrass, Bay Leaves, Orange Leaves, Cinnamon, Cardamom, Cloves, Beef Broth Powder, Salt, Fried Onions , and Sliced Scallions",
    sourceUrl:'https://resepkoki.id/resep/resep-sop-konro/'
  },
  {
    imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/01/19/resep-sayur-gurih-jantung-pisang_43.jpeg?w=1200',
    name: 'Ikan Jantung Pisang',
    origin: 'Sulawesi Tengah',
    ingredients:"Snapper Fish Meat, Banana Heart Slices, Tomatoes, Salt, Lime Juice, Lemongrass, Onions, Garlic, Big Red Chilies, and Spices (Pandan Leaves, Basil, Turmeric Leaves)",
    sourceUrl:'https://www.katakini.com/artikel/62031/sop-ikan-jantung-pisang-kuliner-khas-palu-sulawesi-tengah-simak-resep-membuatnya/'
  },
  {
    imageUrl: 'https://www.katakini.com/webmin/images/posts/1/2022/2022-03-08/623104bf2b6e320196bb6b915a357adf_1.jpg',
    name: 'Lapa-lapa',
    origin: 'Sulawesi Tenggara',
    ingredients:"Coconut, White Glutinous Rice, Coconut Leaves, and Salt",
    sourceUrl:'https://resepyou.com/resep-lapa-lapa-khas-sulawesi-tenggara/',
  },
  {
    imageUrl: 'https://www.kabartravel.id/wp-content/uploads/2020/12/binte-biluhuta.jpg',
    name: 'Binte Biluhuta',
    origin: 'Gorontalo',
    ingredients:"Sweet/Pipil Corn, Smoked Cakalang Fish, Peeled Shrimp, Ginger, Coarsely Grated Coconut, Royco Chicken Stock, Basil Leaves, Red Onion, Garlic, Red Chili, and Salt, Bango, Lime, and Chili Cayenne",
    sourceUrl:'https://www.masakapahariini.com/resep/resep-binte-biluhuta-khas-gorontalo/',
  },
  {
    imageUrl: 'https://www.goodnewsfromindonesia.id/uploads/post/large-shutterstock-1990956131-fdca6077e61fa78ac4eed782fdd86070.jpg',
    name: 'Tilutuan',
    origin: 'Sulawesi Utara',
    ingredients:"Rice, Salt, Royco Chicken Stock, Yellow Pumpkin, Sweet Potato, Baby Corn, Spinach, Kale, Basil Stems, Lemongrass Stems, Scallions, Turmeric Leaves, Jambal Salted Fish",
    sourceUrl:'https://www.masakapahariini.com/resep/resep-tinutuan-khas-manado/',
  },
  {
    imageUrl: 'https://indonesiakaya.com/wp-content/uploads/2020/10/ikan_asar_1200.jpg',
    name: 'Ikan Asar',
    origin: 'Maluku',
    ingredients:"Yellow Tail Asar Fish, Padang Red Chili, Cayenne Pepper, Onion, Garlic, Shrimp Paste, Ginger, Brown Sugar/Aren, Granulated Sugar, Salt, Bay Leaves, and Lime Leaves",
    sourceUrl:'https://cookpad.com/id/resep/985001-ikan-asar-rica-rica',
  },
  {
    imageUrl: 'https://www.primarasa.co.id/images/images/Gohu%20Ikan%20-%20Resep.jpg',
    name: 'Gohu Ikan',
    origin: 'Maluku Utara',
    ingredients:"Fresh Tuna, Lemon, Cayenne Pepper, Red Onion, Peanuts, Basil Leaves, Flavoring (Royco), and Cooking Oil",
    sourceUrl:'https://cookpad.com/id/resep/5283256-gohu-ikan-tuna-khas-ternate',
  },
  {
    imageUrl: 'https://www.unileverfoodsolutions.co.id/dam/ufs-id/marketo/bango/02_IKAN_BAKAR_MANOKWARI.jpg',
    name: 'Ikan Bakar Manokrawi',
    origin: 'Papua Barat',
    ingredients:"Banjar Mackerel, Lime, Salt, Garlic, Orange Cayenne Pepper, Red Onion, and Sugar",
    sourceUrl:'https://cookpad.com/id/resep/14011106-ikan-bakar-manokwari',
  },
  {
    imageUrl: 'https://i0.wp.com/www.cakefever.com/wp-content/uploads/rsz_unknown_187780537_492967188795850_1371196946421020494_n.jpg?fit=900%2C600&ssl=1',
    name: 'Kue Sagu/Bagea',
    origin: 'Papua Tengah',
    ingredients:"Sago Flour, Wheat Flour, Coconut Sugar, Walnuts, Vegetable Oil, Eggs, Baking Soda, Cinnamon, and Cloves",
    sourceUrl:'https://www.idntimes.com/food/recipe/gebialya-rahmani-1/cara-membuat-kue-sagu-bagea-c1c2',
  },
  {
    imageUrl: 'https://bangunpapua.com/storage/2022/07/Ilustrasi-Papeda.jpg',
    name: 'Papeda',
    origin: 'Papua Timur',
    ingredients:"Sago Flour, Salt, Little Chicken Stock (Royco Chicken), and Garlic",
    sourceUrl:'https://cookpad.com/id/resep/1927338-papeda-papua',
  },
  {
    imageUrl: 'https://cdn.idntimes.com/content-images/post/20211026/232759361-2923398851247669-553568940418521674-n-d1c9b326fdb8148927dc8ed4203d62f9.jpg',
    name: 'Mi Bangka',
    origin: 'Bangka Belitung',
    ingredients:"Wet/Fresh Egg Noodles, Mustard Greens, Large Bean Sprouts, Vegetable Oil, Sesame Oil, Chicken Meat, Mushroom, Oyster Sauce, Soy Sauce, Sweet Soy Sauce, Pepper Powder, Salt, Chicken Stock, Shallots, and Scallions",
    sourceUrl:'https://www.katakini.com/artikel/60813/mie-bangka-kuliner-khas-belitung-berawal-dari-pertambangan-timah-berikut-resep-membuatnya/',
  },
  {
    imageUrl: 'https://ik.trn.asia/uploads/2021/09/1631283526307.jpeg',
    name: 'Seruit',
    origin: 'Bandar Lampung',
    ingredients:"Sago Flour, Salt, A Little Chicken Stock (Royco Chicken), and Garlic, Shallots, and Salt & Sugar",
    sourceUrl:'https://www.fimela.com/food/read/4654698/resep-seruit-khas-lampung',
  },
  {
    imageUrl: 'https://www.dapurkintamani.com/wp-content/uploads/2021/07/soto-medan.webp',
    name: 'Soto Medan',
    origin: 'Sumatera Utara',
    ingredients:"Chicken, Coconut Milk, Galangal, Lemongrass, Anise, Cardamom, Bay Leaves, Lime Leaves, Sugar, Salt, Cooking Oil, Garlic, Turmeric, Ginger, Coriander, Hazelnut, Pepper, Cumin, Lemon Grass, Eggs, Potatoes, Bean Sprouts, Tomatoes, Celery, Green onions, Fried Shallots, Green Bird's Eye Chilies, and Chip Crackers",
    sourceUrl:'https://resepkoki.id/resep/resep-soto-ayam-santan-medan/',
  },
  {
    imageUrl: 'https://assets.ayobandung.com/crop/0x475:1280x1382/750x500/webp/photo/2023/01/16/2221082752.jpg',
    name: 'Sate Padang',
    origin: 'Sumatera Barat',
    ingredients:"Onion, Garlic, Turmeric, Coriander, Curly Chili, Cumin Ginger, Orange Leaves, Lemongrass Stems, Galangal, Salt, Rice Flour, and Peanuts",
    sourceUrl:'https://www.idntimes.com/food/recipe/putriana-cahya/resep-sate-padang-bumbu-dan-cara-membuatnya',
  },
  {
    imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2021/05/01/roti-jala-kuah-durian.jpeg?w=600&q=90',
    name: 'Roti Jala',
    origin: 'Riau',
    ingredients:"Wheat Flour, Eggs, Pandan Leaves, Salt, Palm Sugar, Thick Coconut Milk, clove seeds, and cinnamon",
    sourceUrl:'https://cookpad.com/id/resep/7135111-roti-jala-khas-riau',
  },
  {
    imageUrl: 'https://rakyatempatlawang.disway.id/upload/adc711eeaf8bb6505672e02eaed13f9f.jpeg',
    name: 'Tempoyak',
    origin: 'Jambi',
    ingredients:"Durian, Red Chili and Salt",
    sourceUrl:'https://www.idntimes.com/food/recipe/reza-iqbal/resep-membuat-tempoyak-khas-jambi',
  },
  {
    imageUrl: 'https://www.masakapahariini.com/wp-content/uploads/2020/02/soto-kudus-7.jpg',
    name: 'Soto Kudus',
    origin: 'Jawa Tengah',
    ingredients:"Free-range Chicken, Galangal, Bay Leaves ,Lemongrass Stems, Salt, Sweet Soy Sauce, Shallots, Garlic Pepper, Bean Sprouts, Chives, Scallions, Celery, Fried Garlic, Fried Shallots, Lime, Potatoes, Boiled Eggs, Shellfish Satay, and Quail Egg Satay",
    sourceUrl:'https://food.detik.com/ayam/d-5219405/resep-soto-kudus-yang-hangat-gurihnya-nagih',
  },
  {
    imageUrl: 'https://www.masakapahariini.com/wp-content/uploads/2018/09/mangut-lele-bumbu-pedas-500x300.jpg',
    name: 'Mangut Lele',
    origin: 'Yogyakarta',
    ingredients:"Catfish, Lime, Garlic, Coconut Milk, Petai, Salam Leaves, Lime Leaves, Lemongrass Stems, Galangal, Large Red Cayenne Pepper, Green Chili, Royco Chicken Stock, Sweet Soy Sauce Bango, Granulated Sugar, Salt ,Vegetable Oil, Shallots, Garlic, Candlenut, Toasted, Coriander, Roasted Red Chilies, Red Cayenne Peppers, and Kencur",
    sourceUrl:'https://www.masakapahariini.com/resep/resep-mangut-lele-bumbu-pedas/',
  },
  {
    imageUrl: 'https://asset.kompas.com/crops/ljY1r3f3HJaNEuLip3iARQOaK-E=/0x1226:3000x3226/750x500/data/photo/2021/06/11/60c2acf88c6f0.jpg',
    name: 'Coto Makassar',
    origin: 'Sulawesi Selatan',
    ingredients:"Beef, Lemongrass Stems, Galangal, Ginger, Bay Leaves, Skinless Fried Peanuts, Royco Beef Broth, Sweet Soy Sauce Bango, Oil, Curly Red Chilies, Taoco, Garlic, Candlenut, Coriander, Roasted, Brown Sugar, Lontong/Burras , Fried Shallots, Celery, and Scallions",
    sourceUrl:'https://www.masakapahariini.com/resep/resep-coto-makassar/',
  },
  {
    imageUrl: 'https://img-global.cpcdn.com/recipes/4de47a13d8c762d6/400x400cq70/photo.jpg',
    name: 'Sate Madura',
    origin: 'Jawa Timur',
    ingredients:"Vegetable Oil, Sweet Soy Sauce, Chicken Fillet, Fried Peanuts, Curly Red Chili, Garlic, Fried Onions, Candlenuts, Pepper Powder, Palm Sugar, Salt, Chili Cayenne Pepper, Red Onion, and Lime",
    sourceUrl:'https://www.fimela.com/food/read/5172086/resep-bumbu-sate-ayam-madura-yang-gurih-dan-manis',
  },
  {
    imageUrl: 'https://cdn1-production-images-kly.akamaized.net/ML5yXISJq14QfrvvZrleNDrkF1Y=/0x127:5472x3211/1200x675/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2994349/original/060995800_1576138374-shutterstock_676622140.jpg',
    name: 'Klapertart',
    origin: 'Sulawesi Utara',
    ingredients:"Cornstarch, Cinnamon Powder Almond Raisins, Young Coconut, Margarine, Eggs, Vanilli, Tart Cream, Granulated Sugar, Coconut Water, Liquid Milk, Egg Yolks, Salt, and Vanilla",
    sourceUrl:'https://www.fimela.com/food/read/4153327/resep-klapertart-manado',
  },
];

export default foods;
