const products = [
  {
    name: "PlayStation 5",
    category: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: 499,
    countInStock: 15,
  },
  {
    name: "Iphone 12",
    category: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
  },
  {
    name: "Cannon EOS-1D",
    category: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
  },
  {
    name: "Amazon Alexa",
    category: "Home Care",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50,
    countInStock: 25,
  },
  {
    name: "Audio Technica Headphones",
    category: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
    countInStock: 4,
  },
  {
    name: "JBL FLIP 4",
    category: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 10,
  },
  {
    name: "Apples",
    category: "Fruits and Vegetables",
    imageUrl:
      "https://th.bing.com/th/id/OIP.WQN8te9aZAtH1I7Gdou-uAHaE8?w=285&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Fresh apples straight from farms",
    price: 10,
    countInStock: 500,
  },
  {
    name: "Oranges",
    category: "Fruits and Vegetables",
    imageUrl:
      "https://th.bing.com/th/id/OIP.BZBK4VBCzR6qxH_61Y0zLQHaFj?w=211&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Fresh oranges straight from farms",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Carrots",
    category: "Fruits and Vegetables",
    imageUrl:
      "https://th.bing.com/th/id/OIP.-zj15yj7c7oV4Z7F7z43rgHaGL?w=219&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Fresh carrots straight from farms",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Onions",
    category: "Fruits and Vegetables",
    imageUrl:
      "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/12/11/Pictures/_a5d43284-1c17-11ea-9a53-e5149fe5d3ed.jpg",
    description:
      "Fresh onions straight from farms",
    price: 40,
    countInStock: 50,
  },
  {
    name: "Tomatoes",
    category: "Fruits and Vegetables",
    imageUrl:
      "https://www.abelandcole.co.uk/media/7344_15922_z.jpg",
    description:
      "Fresh tomatoes straight from farms",
    price: 30,
    countInStock: 50,
  },
  {
    name: "Eggs Tray",
    category: "Eggs Meat and Seafood",
    imageUrl:
    "https://th.bing.com/th/id/OIP.JVMTh7m3GdGG-K-iGkiovQHaJ4?w=150&h=199&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Fresh Eggs : Half Dozen",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Prawns",
    category: "Eggs Meat and Seafood",
    imageUrl:
      "https://th.bing.com/th/id/OIP.ULu2ZxFqA6MdpGGzBMY64gHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Prawns",
    price: 20,
    countInStock: 150,
  },
  {
    name: "Chicken",
    category: "Eggs Meat and Seafood",
    imageUrl:
      "https://th.bing.com/th/id/OIP.ZSER8_mL8O2sdY2W8_5XSgHaE8?pid=ImgDet&w=229&h=152&c=7&dpr=1.5",
    description:
      "Chicken meat",
    price: 20,
    countInStock: 100,
  },
  {
    name: "Chicken Nuggets",
    category: "Eggs Meat and Seafood",
    imageUrl:
      "https://n3.sdlcdn.com/imgs/c/3/8/Venky-s-Chicken-Sausages-1000-SDL573290461-1-c3630.jpg",
    description:
      "Chicken Nuggets",
    price: 125,
    countInStock: 80,
  },
  {
    name: "Chicken Burger Patty",
    category: "Eggs Meat and Seafood",
    imageUrl:
      "https://wagonbasket.com/wp-content/uploads/2021/01/Venkys-Crispy-Chicken-Burger-Patty-900g-2.jpg",
    description:
      "Chicken Burger Patty",
    price: 160,
    countInStock: 70,
  },
  {
    name: "Milk Packet",
    category: "Dairy Products",
    imageUrl:
    "https://th.bing.com/th/id/OIP.KNLbEPYNjKmyaqMinvoOGQAAAA?w=236&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Packaged Milk : 2ltrs",
    price: 5,
    countInStock: 100,
  },
  {
    name: "Packaged Butter",
    category: "Dairy Products",
    imageUrl:
      "https://th.bing.com/th/id/OIP.Kv3U4QR6AOLwlxMCeOtbiQHaFW?w=228&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Packaged Butter 100g",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Ice Cream Pack",
    category: "Dairy Products",
    imageUrl:
      "https://th.bing.com/th/id/OIP.ceG79PQ_p3C4gVt2tuT4kwHaF1?w=229&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Ice Cream Pack 500g",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Cheese Slices",
    category: "Dairy Products",
    imageUrl:
      "https://www.rationatmydoor.com/wp-content/uploads/2019/02/amul-cheese-slices.jpg",
    description:
      "Cheese Slices 500g",
    price: 255,
    countInStock: 50,
  },
  {
    name: "Frozen Paneer",
    category: "Dairy Products",
    imageUrl:
      "https://www.luluhypermarket.com/medias/234188-01.jpg-515Wx515H?context=bWFzdGVyfGltYWdlc3w2NzgyOXxpbWFnZS9qcGVnfGg2NC9oY2YvMTA0MTUxNjY1NTQxNDIvMjM0MTg4LTAxLmpwZ181MTVXeDUxNUh8NzM0YjQxYjk2MWNiYzVkNjg2NDI4Y2Y2NzRjMmE4MWJiNWI2NmRjN2IyYjBjZTdlNmFlZjQ4YzE1MDBjYWU0MA",
    description:
      "Frozen Paneer 1kg",
    price: 330,
    countInStock: 30,
  },
  {
    name: "Amul Cheese Spread",
    category: "Dairy Products",
    imageUrl:
      "https://img.dmart.in/images/rwd/products/K/C/H/KCHEESE200gmAmul14xx110219_2_B.jpg",
    description:
      "Cheese Spread 400g",
    price: 90,
    countInStock: 30,
  },
  {
    name: "Sunscreen",
    category: "Skin Care",
    imageUrl:
      "https://th.bing.com/th/id/OIP.SD5YErktV9KH1yJ57Anj8gHaMn?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Sunscreen SPF 45",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Face wash",
    category: "Skin Care",
    imageUrl:
    "https://th.bing.com/th/id/OIP.FSLwIBH3GXOX4rydDaPkuQHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Face wash 100ml",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Body Soap",
    category: "Skin Care",
    imageUrl:
    "https://th.bing.com/th/id/OIP.yUorqEWPAsZZBjCnuRi3aQAAAA?w=256&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Body Soap 200gms",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Nivea Men Gas Deodrant",
    category: "Skin Care",
    imageUrl:
    "https://n4.sdlcdn.com/imgs/a/m/q/Nivea-Spray-SDL664639969-1-e73e9.jpg",
    description:
      "Gas Deodrant ",
    price: 110,
    countInStock: 50,
  },
  {
    name: "Dermicool Talcum Powder",
    category: "Skin Care",
    imageUrl:
    "https://tse3.mm.bing.net/th/id/OIP.SVN4z27AuzZQCgk57KBMqwHaHa?pid=ImgDet&rs=1",
    description:
      "Prickly heat menthol powder ",
    price: 105,
    countInStock: 30,
  },
  {
    name: "Instant Coffee",
    category: "Beverages",
    imageUrl:
      "https://th.bing.com/th/id/OIP.Qjr8zJ7qTmFZB6B2S7jU3gHaGh?w=186&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Coffee powder to make instant Coffee ",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Horlicks",
    category: "Beverages",
    imageUrl:
      "https://tse3.mm.bing.net/th/id/OIP.qV1tF2oDvUZHv_8YW2GgyQHaIq?pid=ImgDet&w=164&h=164&c=7&dpr=1.5",
    description:
      "Horlicks A healthy and nutritious drink ",
    price: 110,
    countInStock: 50, 
  },
  {
    name: "CocaCola",
    category: "Beverages",
imageUrl:
"https://th.bing.com/th/id/R.0ce7a8d2d64228b5c1bfbb45b95b1331?rik=bjmKNzILW73mLw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-YNZjHI3Osvw%2fT5KujtJ5IVI%2fAAAAAAAACXo%2fQmF8g-RkWZo%2fs320%2fpica%2b210420121209.jpg&ehk=7Oiih%2b0Yxn1A61zUfhzds0RuGUpdJsgsZ2imehCdmPc%3d&risl=&pid=ImgRaw&r=0",
description:
      "CocaCola Refresh the World ",
    price: 20,
    countInStock: 40, 
  },
  {
    name: "Fanta",
    category: "Beverages",
imageUrl:
"https://5.imimg.com/data5/WK/KU/TW/SELLER-59097240/fanta-can-cold-drink-500x500.jpg",
description:
      "Fruit-Flavoured Carbonated Soft Drinks ",
    price: 20,
    countInStock: 40, 
  },
  {
    name: "Ice Tea",
    category: "Beverages",
    imageUrl:
      "https://th.bing.com/th/id/OIP.7SQrX4Mua8AR5vL6Akr1qgHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Ice tea",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Lays Potato Chips",
    category: "Packaged Food",
    imageUrl:
      "https://th.bing.com/th/id/OIP.mX85Y8RCIQSsxZel7MjjfwHaKN?w=132&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Potato Chips",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Tasties Biscuits",
    category: "Packaged Food",
    imageUrl:
      "https://th.bing.com/th/id/OIP.5FqTb-knwlyasuxU9vkVvQHaFc?w=277&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Biscuit Packet",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Kurkure",
    category: "Packaged Food",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2020/9/BH/CE/XF/3103965/81c7xenl-ml-sy679-.jpg",
    description:
      "Kurkure Masala Munch",
    price: 20,
    countInStock: 50,
  },
  {
    name: "Kelloggs CornFlakes",
    category: "Packaged Food",
    imageUrl:
    "https://tse1.mm.bing.net/th/id/OIP.4yRAnCiR5RjPsLBUjI7POgHaHa?pid=ImgDet&rs=1",
    description:
      "CornFlakes Original",
    price: 335,
    countInStock: 50,
  },
  {
    name: "Maggi Masala",
    category: "Packaged Food",
    imageUrl:
      "https://n4.sdlcdn.com/imgs/e/r/c/maggi70g-b2345.jpg",
    description:
      "Maggi Masala",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Pencil Pouch",
    category: "Kids",
    imageUrl:
      "https://th.bing.com/th/id/OIP.uu6MXTXf2TnC-IoA9as7ogHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Pencil Pouch",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Teddy Bear",
    category: "Kids",
    imageUrl:
      "https://th.bing.com/th/id/OIP.RRifpndC9vIKgfL879G5ewHaE6?w=301&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Doll",
    price: 10,
    countInStock: 50,
  },
  {
    name: "White Strips blue T-shirt",
    category: "Kids",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/A13f6q6fkbL._AC_UX522_.jpg",
    description:
      "T-shirt",
    price: 700,
    countInStock: 10,
  },
  {
    name: "Dark Blue Frock",
    category: "Kids",
    imageUrl:
      "https://n4.sdlcdn.com/imgs/g/q/z/Cute-Fashion-Baby-Girl-s-SDL446279408-1-7c57e.jpg",
    description:
      "Dark Blue Part Wear Frock",
    price: 800,
    countInStock: 5,
  },
  {
    name: "Body and Hair Wash",
    category: "Kids",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.k7ckuPfyIk-Ox4Rg4IHOgQHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Dial Hair and Body Wash",
    price: 2990,
    countInStock: 15,
  },
  {
    name: "T-shirts",
    category: "Men",
    imageUrl:
      "https://th.bing.com/th/id/OIP.sAetjRQQ8XKV2a2h2yTmsgHaJ-?w=148&h=199&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Cotton T-shirt",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Hair Styling Gel",
    category: "Men",
    imageUrl:
      "https://th.bing.com/th/id/OIP.F30DATOhg7NTSPFRqARhfgHaHa?w=206&h=206&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Hair Styling Gel",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Gillete Shaving Cream",
    category: "Men",
    imageUrl:
      "https://pics.drugstore.com/prodimg/40143/900.jpg",
    description:
      "Foam Regular Shaving Cream",
    price: 170,
    countInStock: 20,
  },
  {
    name: "Formal Shirt",
    category: "Men",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.Ux_jTkfHROxXArH6uQhqeQHaHa?pid=ImgDet&rs=1",
    description:
      "White Coloured Office Wear",
    price: 1000,
    countInStock: 10,
  },
  {
    name: "Men Face Wash",
    category: "Men",
    imageUrl:
      "https://tse4.mm.bing.net/th/id/OIP.gtz3_UOCuDYzPCHUj1SicwHaHa?pid=ImgDet&rs=1",
    description:
      "Nivea Men Face Wash with Aloevera",
    price: 210,
    countInStock: 90,
  },
  {
    name: "Cardigan Sweaters",
    category: "Women",
    imageUrl:
      "https://th.bing.com/th/id/OIP.xPfX-5mITfx0lUT_0g3CaAHaK3?w=200&h=293&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Sweaters",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Nail Polish",
    category: "Women",
    imageUrl:
      "https://th.bing.com/th/id/OIP.V3mTyUvor2OsPbE_WL37ZQHaFF?w=255&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Nail Polish",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Sports Joggers",
    category: "Women",
    imageUrl:
      "https://www.olympiasports.net/dw/image/v2/BDWW_PRD/on/demandware.static/-/Sites-olympia-master-catalog/default/dw0810e711/images/large/M0937PM3.1.400.jpeg?sw=600",
    description:
      "Fleece Sports Joggers",
    price: 800,
    countInStock: 20,
  },
  {
    name: "Women Kurta",
    category: "Women",
    imageUrl:
      "https://th.bing.com/th/id/R.dd583ef60283dca81b7364a61d99860e?rik=AREkVjbFqAyr9g&riu=http%3a%2f%2fafashionz.com%2fwp-content%2fuploads%2f2016%2f06%2fWomen-Kurta-Design-2015-2016-in-Pakistan-13.jpg&ehk=R5GU3FOlZoYZAdgcBAJHYZ26jvtDgMFx3d39D6Zz0TA%3d&risl=&pid=ImgRaw&r=0",
    description:
      "Eid Kurta Design",
    price: 1200,
    countInStock: 10,
  },
  {
    name: "Women Tops",
    category: "Women",
    imageUrl:
      "https://cdnb.lystit.com/photos/f604-2015/03/02/free-people-dove-grey-embellished-banded-open-shoulder-top-gray-product-1-946030646-normal.jpeg",
    description:
      "Shoulder Top",
    price: 1400,
    countInStock: 10,
  },
  {
    name: "Mugs",
    category: "Home Care",
    imageUrl:
      "https://th.bing.com/th/id/OIP.SUDPnTYUXxKsNAOUcvYA_wAAAA?w=283&h=205&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Ceramic Mugs",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Cleaning Kit",
    category: "Home Care",
    imageUrl:
      "https://th.bing.com/th/id/OIP.1aXqwQQJJ72mNdc7NIzcjgHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Kit with cleaning items",
    price: 10,
    countInStock: 50,
  },
  {
    name: "Dettol Liquid Handwash",
    category: "Home Care",
    imageUrl:
      "https://5.imimg.com/data5/MJ/LU/GLADMIN-13987401/dettol-original-everyday-protection-liquid-handwash-225-ml-250x250.png",
    description:
      "Liquid Hnadwash Original",
    price: 180,
    countInStock: 50,
  },
  {
    name: "Dove Soap Cream",
    category: "Home Care",
    imageUrl:
      "https://www.degrocery.com/de-grocery/2019/09/2.DOVE-BEAUTY-CREAM-BAR-100G.jpg",
    description:
      "Beauty Cream Bar",
    price: 3600,
    countInStock: 50,
  },
    
];

module.exports = products;
