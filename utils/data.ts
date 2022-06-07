interface Image {
  src: string[];
  type: string;
}

/**
 * 类型与图片后缀映射关系
 * 8: 对应有哪一些特性，比如肩宽，胸围，袖长等等
 */
const IMAGE_MAP_WITH_TYPE = new Map([
  ["tops", ['8', '10', '12', '22']],
  ["bottoms", ['30']],
  ["dresses", ['28']],
  ["all", ['8', '10', '12', '22', '30', '28']]
]);

export { IMAGE_MAP_WITH_TYPE };
