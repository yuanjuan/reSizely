/**
 * 类型与图片后缀映射关系
 * 8: 对应有哪一些特性，比如肩宽，胸围，袖长等等
 */
const IMAGE_MAP_WITH_TYPE = new Map([
  [
    "tops",
    [
      { imageType: "8", feature: ["袖长", "胸围", "臂展"] },
      { imageType: "10", feature: ["修长"] },
      { imageType: "12", feature: ["胸围"] },
      { imageType: "22", feature: ["臂展"] },
    ],
  ],
  ["bottoms", [{ imageType: "30", feature: ["裤长"] }]],
  ["dresses", [{ imageType: "28", feature: ["腰围"] }]],
  [
    "all",
    [
      { imageType: "8", feature: ["袖长", "胸围", "臂展"] },
      { imageType: "10", feature: ["修长"] },
      { imageType: "12", feature: ["胸围"] },
      { imageType: "22", feature: ["臂展"] },
      { imageType: "30", feature: ["裤长"] },
      { imageType: "28", feature: ["腰围"] },
    ],
  ],
]);

export { IMAGE_MAP_WITH_TYPE };
