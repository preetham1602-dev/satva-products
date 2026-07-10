 import painOil from "../assets/images/pain-oil.png";
import hairOil from "../assets/images/hair-oil.png";
import stressOil from "../assets/images/stress-oil.png";

const products = [
  {
    id: 1,
    name: "Taniya Pain Relief Oil",
    kannada: "ತನಿಯ ನೋವಿನ ಎಣ್ಣೆ",
    image: painOil,
    sizes: [
      { size: "100 ml", price: 150 },
      { size: "500 ml", price: 950 },
    ],
    benefits: [
      "Quick Relief",
      "Safe and Effective",
      "Most Trusted",
    ],
  },

  {
    id: 2,
    name: "Nellingeri Hair Oil",
    kannada: "ನೆಲ್ಲಿಂಗೇರಿ ಹೇರ್ ಆಯಿಲ್",
    image: hairOil,
    sizes: [
      { size: "100 ml", price: 150 },
      { size: "500 ml", price: 950 },
    ],
    benefits: [
      "Control Hair Fall",
      "Long Hair Growth",
      "Remove Dandruff",
      "Helps Control White Hair"
    ],
  },

  {
    id: 3,
    name: "Avadhoot Stress Relief Oil",
    kannada: "",
    image: stressOil,
    sizes: [
      { size: "100 ml", price: 200 },
    ],
    benefits: [
      "Helps promote relaxation",
      "Suitable for head & body massage",
      "Refreshing herbal aroma",
    ],
  },
];

export default products;