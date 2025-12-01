import imgBot from "../assets/img-projects/bot.jpg";
import imgNeural from "../assets/img-projects/neural.jpg";
import imgAlgo from "../assets/img-projects/algo.jpg";
import imgNeon from "../assets/img-projects/neon.jpg";

export const projects = [
  {
    titulo: "Multi Bot",
    descripcion: "多功能聊天机器人平台，集成多种 AI 模型。",
    imagen: imgBot.src,
    tecnologias: ["AI", "Bot", "Web"],
    demo: "http://bot.idealx.top",
    codigo: "http://bot.idealx.top",
  },
  {
    titulo: "神经网络可视化",
    imagen: imgNeural.src,
    tecnologias: ["JavaScript", "AI", "Visualization"],
    demo: "https://neural.idealx.top/",
    codigo: "https://neural.idealx.top/",
  },
  {
    titulo: "算法可视化",
    imagen: imgAlgo.src,
    tecnologias: ["JavaScript", "Algorithm", "Visualization"],
    demo: "https://algo.idealx.top/",
    codigo: "https://algo.idealx.top/",
  },
  {
    titulo: "Neon Drive",
    imagen: imgNeon.src,
    tecnologias: ["JavaScript", "Storage", "Web"],
    demo: "https://neon.idealx.top/",
    codigo: "https://neon.idealx.top/",
  },
];
