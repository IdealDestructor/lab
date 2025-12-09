import imgBot from "../assets/img-projects/bot.idealx.top_.png";
import imgOneprompt from "../assets/img-projects/prompt.idealx.top_.png";
import imgAlgo from "../assets/img-projects/algo.idealx.top_.png";
import imgVoid from "../assets/img-projects/void.idealx.top_.png";

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
    titulo: "One Prompt",
    descripcion:
      "AI 提示词工具，帮助用户优化和管理 AI 对话提示词。",
    imagen: imgOneprompt.src,
    tecnologias: ["AI", "JavaScript", "Web"],
    demo: "https://prompt.idealx.top/",
    codigo: "https://prompt.idealx.top/",
    categoria: "frontend",
  },
  {
    titulo: "算法可视化",
    imagen: imgAlgo.src,
    tecnologias: ["JavaScript", "Algorithm", "Visualization"],
    demo: "https://algo.idealx.top/",
    codigo: "https://algo.idealx.top/",
  },
  {
    titulo: "Void Browser",
    descripcion:
      "自定义起始页，提供简洁高效的浏览体验。",
    imagen: imgVoid.src,
    tecnologias: ["JavaScript", "Browser", "Web"],
    demo: "http://void.idealx.top",
    codigo: "http://void.idealx.top",
  },
];
