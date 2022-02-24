const fs = require("fs");
const fse = require("fs-extra");


const dirName = process.argv[2];

//需要拷贝的文件路径
const copyPaths = [
  {
    from: `${__dirname}/../widgets/.template`,
    to: `${__dirname}/../widgets/${dirName}`,
  },
];

//遍历拷贝
(async () => {
  console.log(`开始创建widget 【${dirName}】`);
  try{
    for (let copyPath of copyPaths) {
      const { from, to } = copyPath;
      const existfrom = fs.existsSync(from);
      if (!existfrom) {
        continue;
      }
      fse.copySync(from, to);
      console.log(`✅ widget 【${dirName}】 创建成功！请在widgets/index.tsx中导出`);
    }
  }catch(err) {
    console.error(`✅ widget 【${dirName}】 创建失败`);
  }
  
})();
