const Categories = [
  {
    id: 1,
    title: `TV`,
    imgUrl: `https://images.pexels.com/photos/6977372/pexels-photo-6977372.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
  },
  {
    id: 2,
    title: `MOBILES`,
    imgUrl: `https://images.pexels.com/photos/3520429/pexels-photo-3520429.jpeg?auto=compress&cs=tinysrgb&w=600`,
  },
  {
    id: 3,
    title: `AIR CONDITIONERS`,
    imgUrl: `https://media.istockphoto.com/id/519620604/photo/air-conditioner-blowing-warm-air.jpg?s=612x612&w=0&k=20&c=NkPhpgxBqORgVmATSha3x6rFsy_ntc95K6KtRu3glGc=`,
  },
  {
    id: 4,
    title: `WASHING MACHINES`,
    imgUrl: `https://images.unsplash.com/photo-1551761429-8232f9f5955c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZyUyMG1hY2hpbmVzfGVufDB8fDB8fHww`,
  },
  {
    id: 5,
    title: `LAPTOPS`,
    imgUrl: `https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D`,
  },
];

const Data = [
  {
    title: `TV`,
    items: [
      {
        id: 1,
        name: `SONY`,
        imageUrl: `https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹30k`,
      },
      {
        id: 2,
        name: `SAMSUNG`,
        imageUrl: `https://img.freepik.com/premium-photo/big-tv-living-room-elegant-living-room-with-big-tv-screen-generative-aixa_174954-227.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹35k`,
      },
      {
        id: 3,
        name: `HAIER`,
        imageUrl: `https://img.freepik.com/premium-photo/widescreen-tv-sideboard-living-room_43614-230.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=sph`,
        price: `₹40k`,
      },
      {
        id: 4,
        name: `LG`,
        imageUrl: `https://img.freepik.com/free-photo/tv-with-city-skyline-illuminated-dusk-with-traffic-motion-generative-ai_188544-19469.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹45k`,
      },
      {
        id: 5,
        name: `HISENSE`,
        imageUrl: `https://img.freepik.com/premium-photo/4k-monitor-isolated-white_93200-1480.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹50k`,
      },
      {
        id: 6,
        name: `PANASONIC`,
        imageUrl: `https://img.freepik.com/premium-photo/big-tv-living-room-elegant-living-room-with-big-tv-screen-generative-aixa_174954-591.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹55k`,
      },
    ],
  },
  {
    title: `MOBILES`,
    items: [
      {
        id: 1,
        name: `MOTOROLA`,
        imageUrl: `https://images.unsplash.com/photo-1681554422431-cda0552f627f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JvbGElMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D`,
        price: `₹30k`,
      },
      {
        id: 2,
        name: `SAMSUNG`,
        imageUrl: `https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww`,
        price: `₹35k`,
      },
      {
        id: 3,
        name: `VIVO`,
        imageUrl: `https://images.unsplash.com/photo-1526404801122-40fc40fca08f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpdm8lMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D`,
        price: `₹40k`,
      },
      {
        id: 4,
        name: `APPLE`,
        imageUrl: `https://images.unsplash.com/photo-1517765371796-5bd3a7d30a29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpdm8lMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D`,
        price: `₹45k`,
      },
      {
        id: 5,
        name: `ONE PLUS`,
        imageUrl: `https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=600`,
        price: `₹50k`,
      },
      {
        id: 6,
        name: `NOKIA`,
        imageUrl: `https://images.pexels.com/photos/19335258/pexels-photo-19335258/free-photo-of-a-nokia-3310-cellular-phone.jpeg?auto=compress&cs=tinysrgb&w=600`,
        price: `₹55k`,
      },
    ],
  },
  {
    title: `AIR CONDITIONER`,
    items: [
      {
        id: 1,
        name: `panasonic`,
        imageUrl: `https://img.freepik.com/free-photo/air-conditioner-mounted-white-wall_53876-128235.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹30k`,
      },
      {
        id: 2,
        name: `DAIKIN`,
        imageUrl: `https://img.freepik.com/free-photo/air-conditioning-decoration-interior_74190-6226.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹40k`,
      },
      {
        id: 3,
        name: `SAMSUNG`,
        imageUrl: `https://img.freepik.com/free-photo/air-conditioner-mounted-white-wall_53876-142862.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹50k`,
      },
      {
        id: 4,
        name: `BLUE STAR`,
        imageUrl: `https://img.freepik.com/premium-photo/air-conditioner-hanging-wall-close-up_77190-8063.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹55k`,
      },
    ],
  },
  {
    title: `WASHING MACHINE`,
    items: [
      {
        id: 1,
        name: `BOSCH`,
        imageUrl: `https://img.freepik.com/free-photo/washing-machine-minimal-laundry-room-interior-design_53876-145501.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹30k`,
      },
      {
        id: 2,
        name: `WHIRLPOOL`,
        imageUrl: `https://img.freepik.com/free-photo/tech-device-with-nature-background_23-2150470421.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹35k`,
      },
      {
        id: 3,
        name: `SAMSUNG`,
        imageUrl: `https://img.freepik.com/premium-photo/washing-machine-two-positions-white-background_508835-4732.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹40k`,
      },
      {
        id: 4,
        name: `HAIER`,
        imageUrl: `https://img.freepik.com/premium-photo/laundry-room-with-washing-machine-against-light-blue-wall-space-text_185193-9999.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹45k`,
      },
    ],
  },
  {
    title: `LAPTOP`,
    items: [
      {
        id: 1,
        name: `DELL`,
        imageUrl: `https://img.freepik.com/free-photo/close-up-laptop-keyboard-colorful-neon-illumination-backlit-keyboard_169016-29227.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹30k`,
      },
      {
        id: 2,
        name: `APPLE`,
        imageUrl: `https://img.freepik.com/premium-photo/purple-laptop-3d-illustration-dark-background-black-desk-laptop-computer-with-color-pink-purple-light-display_37129-947.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹35k`,
      },
      {
        id: 3,
        name: `LENOVO`,
        imageUrl: `https://img.freepik.com/premium-photo/black-desk-laptop-computer-with-color-pink-purple-light-display_37129-941.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹40k`,
      },
      {
        id: 4,
        name: `HP`,
        imageUrl: `https://img.freepik.com/premium-photo/laptop-dark-with-screen_92164-35.jpg?size=626&ext=jpg&ga=GA1.1.825474869.1702125762&semt=ais`,
        price: `₹55k`,
      },
    ],
  },
];
export { Categories,Data };
