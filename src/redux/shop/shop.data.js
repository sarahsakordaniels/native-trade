const SHOP_DATA = {
  kitchen: {
    id: 1,
    title: 'Kitchen',
    routeName: 'kitchen',
    items: [
      {
        id: 1,
        name: 'Jars',
        imageUrl: 'https://i.ibb.co/88zhw9h/ehud-neuhaus-s-HRw6n0n-LRw-unsplash.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Wooden Spoon',
        imageUrl: 'https://i.ibb.co/txPsrFq/louis-hansel-shotsoflouis-Hw-In-I4-ZRYrk-unsplash.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Wooden Spoon Set',
        imageUrl: 'https://i.ibb.co/hc73Vnm/teodor-drobota-5-R88-J-g6-Ja-U-unsplash.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Wooden Charcuterie Board',
        imageUrl: 'https://i.ibb.co/CWw5tWv/rezel-apacionado-Vqhe74-B7yiw-unsplash.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Utensil Set',
        imageUrl: 'https://i.ibb.co/bKwSW4q/maria-ilves-XXRyh-ybx-Ds-unsplash.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Storage Set',
        imageUrl: 'https://i.ibb.co/DMp8C7K/ecopanda-u4h6-Vu-YYEB8-unsplash.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'Grocery Bag',
        imageUrl: 'https://i.ibb.co/S5mMMcb/kelly-sikkema-1-Pgq9-Zp-Iat-I-unsplash.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Biodegradable Straws',
        imageUrl: 'https://i.ibb.co/RDd5fvF/biodegradable-paper-straws-alink.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'Reusable Cup',
        imageUrl: 'https://i.ibb.co/fMvCZ33/reusable-coffee-cup-glass-keepcup.jpg',
        price: 16
      }
    ]
  },
  bathroom: {
    id: 2,
    title: 'Bathroom',
    routeName: 'bathroom',
    items: [
      {
        id: 10,
        name: 'Soap',
        imageUrl: 'https://i.ibb.co/sbvKyRw/heather-ford-Fbr-DS0j-Y-Hw-unsplash.jpg',
        price: 22
      },
      {
        id: 11,
        name: 'Washcloths',
        imageUrl: 'https://i.ibb.co/TwPpDFh/mel-poole-4by-Bt-Nu-Iy-Ig-unsplash.jpg',
        price: 28
      },
      {
        id: 12,
        name: 'Biodegradable Silk Floss',
        imageUrl: 'https://i.ibb.co/ZN2bBWS/biodegradable-dental-floss-refillable-compostable-zero-waste.jpg',
        price: 11
      },
      {
        id: 13,
        name: 'Bamboo Swabs',
        imageUrl: 'https://i.ibb.co/T8MJTQc/Bamboo-Cotton-Swabs-disposable.jpg',
        price: 16
      },
      {
        id: 15,
        name: 'Bamboo Makeup Brushes',
        imageUrl: 'https://i.ibb.co/5knptt3/7-piece-bamboo-makeup-brush-set.jpg',
        price: 16
      },
      {
        id: 16,
        name: 'Natural Wooden Hair Brush',
        imageUrl: 'https://i.ibb.co/xsL8wHD/natural-wooden-hair-brush-zero-waste.jpg',
        price: 19
      }
    ]
  },
  cleaning: {
    id: 3,
    title: 'Cleaning',
    routeName: 'cleaning',
    items: [
      {
        id: 18,
        name: 'Compostable Trash Bags',
        imageUrl: 'https://i.ibb.co/HNPQ1n4/compostable-trash-bags-2-6-gallon.jpg',
        price: 12
      },
      {
        id: 19,
        name: 'Bamboo Brush',
        imageUrl: 'https://i.ibb.co/0JWN4Ym/eco-clean-banboo-dish-brush-lola.jpg',
        price: 9
      },
      {
        id: 20,
        name: 'Reusable Scouring Pads',
        imageUrl: 'https://i.ibb.co/ZTRY99t/kitchen-scouring-pad-skoy-scrub-reusable.jpg',
        price: 9
      },
      {
        id: 22,
        name: 'Glass Spray Bottles',
        imageUrl: 'https://i.ibb.co/zQJBmZF/Screen-Shot-2020-03-08-at-2-32-04-PM.png',
        price: 18
      },
      {
        id: 21,
        name: 'Wooden Toilet Brush',
        imageUrl: 'https://i.ibb.co/0Qf74Ch/toilet-brush-beechwood-handle-redecker.jpg',
        price: 16
      }
    ]
  },
  baby: {
    id: 4,
    title: 'Baby',
    routeName: 'baby',
    items: [
      {
        id: 23,
        name: 'Reusable Glass Bottles',
        imageUrl: 'https://i.ibb.co/CzRQqX0/Screen-Shot-2020-03-08-at-2-14-26-PM.png',
        price: 25
      },
      {
        id: 24,
        name: 'Bamboo Utensils',
        imageUrl: 'https://i.ibb.co/ypzNb3K/Screen-Shot-2020-03-08-at-2-14-46-PM.png',
        price: 13
      },
      {
        id: 25,
        name: 'Fruit Toys',
        imageUrl: 'https://i.ibb.co/zrnzhHg/Screen-Shot-2020-03-08-at-2-15-31-PM.png',
        price: 8
      },
      {
        id: 26,
        name: 'Biodegradable Diapers',
        imageUrl: 'https://i.ibb.co/pPnP6dL/Screen-Shot-2020-03-08-at-2-15-55-PM.png',
        price: 28
      },
      {
        id: 27,
        name: 'Bottle Brush',
        imageUrl: 'https://i.ibb.co/d4cMfw5/Screen-Shot-2020-03-08-at-2-16-40-PM.png',
        price: 4
      }
    ]
  },
  clothing: {
    id: 5,
    title: 'Clothing',
    routeName: 'clothing',
    items: [
      {
        id: 30,
        name: 'White Button Up',
        imageUrl: 'https://i.ibb.co/nw8CNWG/Screen-Shot-2020-03-08-at-2-18-06-PM.png',
        price: 32
      },
      {
        id: 31,
        name: 'Striped T-Shirt',
        imageUrl: 'https://i.ibb.co/jkvz91s/Screen-Shot-2020-03-08-at-2-19-30-PM.png',
        price: 20
      },
      {
        id: 32,
        name: 'Grey Pullover',
        imageUrl: 'https://i.ibb.co/TLx6vKx/Screen-Shot-2020-03-08-at-2-19-23-PM.png',
        price: 25
      },
      {
        id: 33,
        name: 'Bike Socks',
        imageUrl: 'https://i.ibb.co/MphZ8pW/Screen-Shot-2020-03-08-at-2-20-03-PM.png',
        price: 20
      },
      {
        id: 34,
        name: 'Ankle Socks',
        imageUrl: 'https://i.ibb.co/b59twTW/Screen-Shot-2020-03-08-at-2-20-10-PM.png',
        price: 14
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;