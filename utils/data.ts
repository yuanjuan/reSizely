interface Image {
  src: string[];
  type: string;
}

/**
 * 类型与图片后缀映射关系
 * 8: 对应有哪一些特性，比如肩宽，胸围，袖长等等
 */
const IMAGE_MAP_WITH_TYPE = new Map([
  [
    "tops",
    [
      { type: "8", feature: ["袖长", "胸围", "臂展"] },
      { type: "10", feature: ["修长"] },
      { type: "12", feature: ["胸围"] },
      { type: "22", feature: ["臂展"] },
    ],
  ],
  ["bottoms", [{ type: "30", feature: ["裤长"] }]],
  ["dresses", [{ type: "28", feature: ["腰围"] }]],
  [
    "all",
    [
      { type: "8", feature: ["袖长", "胸围", "臂展"] },
      { type: "10", feature: ["修长"] },
      { type: "12", feature: ["胸围"] },
      { type: "22", feature: ["臂展"] },
      { type: "30", feature: ["裤长"] },
      { type: "28", feature: ["腰围"] }
    ],
  ],
]);

export { IMAGE_MAP_WITH_TYPE };
