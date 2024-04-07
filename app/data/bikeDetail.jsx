// api.js

const bikeData = [
    {
      id: 1,
      model: "CB300F",
      image: "/bikes/cb300f.png",
      variants: [
        {
          name: "DLX",
          colors: [
            {
              color: "Athletic Blue Metallic",
              link: "/bikes/Transalp-home-slide.png"
            },
            {
              color: "Precious Red Metallic",
              link: "/bikes/Transalp-home-slide.png"
            },
            {
              color: "Pearl Nightstar black",
              link: "/bikes/Transalp-home-slide.png"
            },
          ],
          price: "$4,649",
          specifications: {
            engine: {
              type: "286cc single-cylinder",
              power: "30 hp",
              torque: "20 lb-ft"
            },
            bodyDimensions: {
              length: "",
              width: "",
              height: ""
            },
            frameAndSuspension: {
              "Frame Type": "",
              "Front Suspension": "",
              "Rear Suspension": ""
            }
          }
        },
      ]
    },
  ];
  
  export function fetchBikeDetails(bikeId) {
    const bike = bikeData.find(bike => bike.id === parseInt(bikeId));
    if (!bike) {
      throw new Error(`Bike with ID ${bikeId} not found`);
    }
    return bike;
  }
  