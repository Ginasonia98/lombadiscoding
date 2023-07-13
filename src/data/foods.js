const foods = [
  {
    imageUrl: 'https://www.warisankuliner.com/gfx/recipes/1362376252.jpg',
    name: 'Mi Aceh',
    origin: 'Nanggroe Aceh Darussalam',
  },
  {
    imageUrl: 'https://img.okezone.com/content/2020/06/12/298/2229217/cara-membuat-bika-ambon-khas-medan-lembut-di-mulut-HWbOWCuHyP.jpg',
    name: 'Bika Ambon',
    origin: 'Sumatera Utara',},
  {
    imageUrl: 'https://ik.trn.asia/uploads/2022/10/1665275306623.png',
    name: 'Rendang',
    origin: 'Sumatera Barat',
  },
  {
    imageUrl: 'https://www.masakapahariini.com/wp-content/uploads/2020/04/Gulai-Ikan-Patin-500x300.jpg',
    name: 'Gulai Pindang Patin',
    origin: 'Jambi',
  },
  {
    imageUrl: 'https://balitteknologikaret.co.id/wp-content/uploads/2023/04/Resep-Empek-Empek-Tenggiri.jpg',
    name: 'Empek-empek',
    origin: 'Sumatera Selatan',
  },
  {
    imageUrl: 'https://asset.kompas.com/crops/4UfXhXtR7hK2atnUpqKRHGbhFuk=/3x0:700x465/750x500/data/photo/2021/02/16/602b2a91ca7f1.jpg',
    name: 'Satai Bandeng',
    origin: 'Banten',
  },
  {
    imageUrl: 'https://asset.kompas.com/crops/vJPlamN3s9o9DX_lb8RdL2Xn--M=/32x22:1000x667/750x500/data/photo/2022/03/06/622484bdc0cf8.jpg',
    name: 'Kerak Telur',
    origin: 'DKI Jakarta',
  },
  {
    imageUrl: 'https://img-global.cpcdn.com/recipes/4a2a38f7022bc085/680x482cq70/serabi-kuah-kinca-durian-foto-resep-utama.jpg',
    name: 'Serabi',
    origin: 'Jawa Barat',
  },
  {
    imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/03/04/lumpia-semarang_43.jpeg?w=1200',
    name: 'Lumpia',
    origin: 'Jawa Tengah',
  },
  {
    imageUrl: 'https://cdn-1.timesmedia.co.id/images/2022/12/21/gudeg-2.jpg',
    name: 'Gudeg',
    origin: 'Yogyakarta',
  },
  {
    imageUrl: 'https://asset.kompas.com/crops/dcFNlU98F0bRk5ZrSrV5PVivpc8=/129x0:858x486/750x500/data/photo/2021/05/15/609fbcd2ed6d9.jpg',
    name: 'Rujak Cingur',
    origin: 'Jawa Timur',
  },
  {
    imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2021/08/27/resep-ayam-betutu-gilimanuk_43.jpeg?w=1200',
    name: 'Ayam Betutu',
    origin: 'Bali',
  },
  {
    imageUrl: 'https://img.kurio.network/iU_q9ETZ3iZ-w6SfPw80coAjVv8=/1200x675/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/16/f247ea21-347b-47cd-b8fa-5bfdaf6a5855.jpe',
    name: 'Ayam Taliwang',
    origin: 'Nusa Tenggara Barat',
  },
  {
    imageUrl: 'https://assets-a1.kompasiana.com/items/album/2020/02/29/muthiatarya09-catemak-jagung-5e5a0c29d541df6edf4c39f2.jpg',
    name: 'Catemak Jagung',
    origin: 'Nusa Tenggara Timur',
  },
  {
    imageUrl: 'https://kate.id/wp-content/uploads/2020/03/Bubbor-Paddas.jpg',
    name: 'Bubur Pedas Sambas',
    origin: 'Kalimantan Barat',
  },
  {
    imageUrl: 'https://img-global.cpcdn.com/recipes/fcadf259eab64fb1/1200x630cq70/photo.jpg',
    name: 'Juhu Singkah',
    origin: 'Kalimantan Tengah',
  },
  {
    imageUrl: 'https://cdn0-production-images-kly.akamaized.net/VI_p5hyAivPK-9r99b1QBh-SpIE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/962766/original/052673800_1440157100-20150822-Soto-Banjar.jpg',
    name: 'Soto Banjar',
    origin: 'Kalimantan Selatan',
  },
  {
    imageUrl: 'https://cdn.idntimes.com/content-images/community/2019/06/images57-d8ff594d1deb1d93abad3aea6079dc42_600x400.jpeg',
    name: 'Ayam Cincane',
    origin: 'Kalimantan Timur',
  },
  {
    imageUrl: 'https://img.okezone.com/content/2017/01/30/298/1604982/saran-chef-kepiting-soka-enaknya-dimasak-seperti-ini-w49k99VOeV.jpg',
    name: 'Kepiting Soka',
    origin: 'Kalimantan Utara',
  },
  {
    imageUrl: 'https://asset.kompas.com/crops/t9vL2Z6ZAjt7cnpl05cuYOfd2k4=/129x72:651x420/750x500/data/photo/2020/07/30/5f22636a0e7e0.jpg',
    name: 'Sup Konro',
    origin: 'Sulawesi Selatan',
  },
  {
    imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/01/19/resep-sayur-gurih-jantung-pisang_43.jpeg?w=1200',
    name: 'Ikan Jantung Pisang',
    origin: 'Sulawesi Tengah',
  },
  {
    imageUrl: 'data:image/jpeg;base64,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',
    name: 'Lapa-lapa',
    origin: 'Sulawesi Tenggara',
  },
  {
    imageUrl: 'https://www.kabartravel.id/wp-content/uploads/2020/12/binte-biluhuta.jpg',
    name: 'Binte Biluhuta',
    origin: 'Gorontalo',
  },
  {
    imageUrl: 'https://www.goodnewsfromindonesia.id/uploads/post/large-shutterstock-1990956131-fdca6077e61fa78ac4eed782fdd86070.jpg',
    name: 'Tilutuan',
    origin: 'Sulawesi Utara',
  },
  {
    imageUrl: 'https://indonesiakaya.com/wp-content/uploads/2020/10/ikan_asar_1200.jpg',
    name: 'Ikan Asar',
    origin: 'Maluku',
  },
  {
    imageUrl: 'https://www.primarasa.co.id/images/images/Gohu%20Ikan%20-%20Resep.jpg',
    name: 'Gohu Ikan',
    origin: 'Maluku Utara',
  },
  {
    imageUrl: 'https://www.unileverfoodsolutions.co.id/dam/ufs-id/marketo/bango/02_IKAN_BAKAR_MANOKWARI.jpg',
    name: 'Ikan Bakar Manokrawi',
    origin: 'Papua Barat',
  },
  {
    imageUrl: 'https://i0.wp.com/www.cakefever.com/wp-content/uploads/rsz_unknown_187780537_492967188795850_1371196946421020494_n.jpg?fit=900%2C600&ssl=1',
    name: 'Kue Sagu',
    origin: 'Papua Tengah',
  },
  {
    imageUrl: 'https://bangunpapua.com/storage/2022/07/Ilustrasi-Papeda.jpg',
    name: 'Papeda',
    origin: 'Papua Timur',
  },
  {
    imageUrl: 'https://cdn.idntimes.com/content-images/post/20211026/232759361-2923398851247669-553568940418521674-n-d1c9b326fdb8148927dc8ed4203d62f9.jpg',
    name: 'Mi Bangka',
    origin: 'Bangka Belitung',
  },
  {
    imageUrl: 'https://ik.trn.asia/uploads/2021/09/1631283526307.jpeg',
    name: 'Seruit',
    origin: 'Bandar Lampung',
  },
  {
    imageUrl: 'https://www.dapurkintamani.com/wp-content/uploads/2021/07/soto-medan.webp',
    name: 'Soto Medan',
    origin: 'Sumatera Utara',
  },
  {
    imageUrl: 'https://assets.ayobandung.com/crop/0x475:1280x1382/750x500/webp/photo/2023/01/16/2221082752.jpg',
    name: 'Sate Padang',
    origin: 'Sumatera Barat',
  },
  {
    imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2021/05/01/roti-jala-kuah-durian.jpeg?w=600&q=90',
    name: 'Roti Jala',
    origin: 'Riau',
  },
  {
    imageUrl: 'https://rakyatempatlawang.disway.id/upload/adc711eeaf8bb6505672e02eaed13f9f.jpeg',
    name: 'Tempoyak',
    origin: 'Jambi',
  },
  {
    imageUrl: 'https://www.masakapahariini.com/wp-content/uploads/2020/02/soto-kudus-7.jpg',
    name: 'Soto Kudus',
    origin: 'Jawa Tengah',
  },
  {
    imageUrl: 'https://www.masakapahariini.com/wp-content/uploads/2018/09/mangut-lele-bumbu-pedas-500x300.jpg',
    name: 'Mangut Lele',
    origin: 'Yogyakarta',
  },
  {
    imageUrl: 'https://asset.kompas.com/crops/ljY1r3f3HJaNEuLip3iARQOaK-E=/0x1226:3000x3226/750x500/data/photo/2021/06/11/60c2acf88c6f0.jpg',
    name: 'Coto Makassar',
    origin: 'Sulawesi Selatan',
  },
];

export default foods;
