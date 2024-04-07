const bannerImages = [
    "/images/cb350rs-campaign-banner_new9_LE_auto_x2.jpg",
    "/images/cb350_web_banner_new6_LE_auto_x2.jpg",
    "/images/CB350RS_desk_banner_dev3_LE_auto_custom.jpg",
    "/images/cb350_desk_homebanner_dev7.jpg"
];


const bikeImages = [
    {
        id: 1,
        image: "/bikes/cb300f.png",
        title: "Honda CD",
    },
    {
        id: 2,
        image: "/bikes/blue_bike.webp",
        title: "Honda Dio"
    },
    {
        id: 3,
        image: "/bikes/green.png",
        title: "Honda Sp"
    },
    {
        id: 4,
        image: "/bikes/grand_white.png",
        title: "Honda CB200X"
    },
    {
        id: 5,
        image: "/bikes/grand_red.png",
        title: "Honda Goldwing"
    },
    {
        id: 6,
        image: "/bikes/gray.png",
        title: "Honda CB350RS"
    }
];

const gallaryImage = [
    {
        image: "/gallary/div.elementor-widget-wrap-1.png",
    },
    {
        image: "/gallary/div.elementor-widget-wrap-2.png",
    },
    {
        image: "/gallary/div.elementor-widget-wrap-3.png",
    },
    {
        image: "/gallary/div.elementor-widget-wrap.png"
    },
    {
        image: "/gallary/div.elementor-widget-wrap.png"
    }, {
        image: "/gallary/div.elementor-widget-wrap.png"
    }

];

const bikeData = [
    {
        id: 1,
        model: "CB300F",
        specifications: [
            {
                engine: {
                    "type": "286cc single-cylinder",
                    "torque": "20 lb-ft",
                    "power": "30 hp",
                    "type1": "286cc single-cylinder",
                    "power1": "30 hp",
                    "torque1": "20 lb-ft",
                    "torque2": "20 lb-ft"
                },
            }, {
                dimensions: {
                    "length": "2166mm",
                    "width": "4562mm",
                    "heigth": "988mm",
                    "length1": "2166mm",
                    "width1": "4562mm",
                    "heigth1": "988mm"
                },
            },
            {
                suspension: {
                    "Frame Type": "Half Duplex Cardle",
                    "Front Suspension": "Telescopic",
                    "Rare Suspension": "Twin - Hydraulic"
                }
            }

        ],
        price: "$12.327",
        variants: [
            {
                name: "DLX",
                colors: [
                    {
                        color: "GRAND PRIX RED",
                        link: "/bikes/grand_red.png"
                    },
                    {
                        color: "GRAND PRIX Gray",
                        link: "/bikes/grand_gray.png"
                    },
                    {
                        color: "GRAND PRIX White",
                        link: "/bikes/grand_white.png"
                    },
                ],
               
            },
            {
                name: "DLX PRO",
                colors: [
                    {
                        color: "Athletic Blue Metallic",
                        link: "/bikes/cb300f.png"
                    },
                    {
                        color: "Precious gray Metallic",
                        link: "/bikes/gray.png"
                    },
                ],
            },
            {
                name: "DLX PRO CHROME",
                colors: [
                    {
                        color: "Athletic Green Metallic",
                        link: "/bikes/green.png"
                    },
                    {
                        color: "Precious Red Metallic",
                        link: "/bikes/red_bike.webp"
                    },
                    {
                        color: "Pearl Nightstar blue",
                        link: "/bikes/blue_bike.webp"
                    },
                ],
            },
            {
                name: "CUSTOMISATION",
                colors: [
                    {
                        color: "Pearl Igneous Black",
                        link: "/bikes/black.png"
                    },
                ],
            },
        ]
    },
];


export { bannerImages, bikeImages, gallaryImage, bikeData };
