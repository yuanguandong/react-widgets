const fs = require('fs');
const fse = require('fs-extra');
const ora = require('ora');
const chalk = require('chalk');
const widgetID = process.argv[2];
const { spawn, log } = require('./utils');
const opener = require('opener');
const clear = require('clear');

//需要拷贝的文件路径
const copyPaths = [
  {
    from: `${__dirname}/../widgets/.template`,
    to: `${__dirname}/../widgets/${widgetID}`,
  },
];

//入口处理
const addWidgetExport = () => {
  const widgetExportContent = fs.readFileSync(
    `${__dirname}/../widgets/index.tsx`,
    'utf-8',
  );
  let newStr = widgetExportContent.replace(
    `export default {`,
    `import ${widgetID} from './${widgetID}';\nexport default {`,
  );
  newStr = newStr.replace(`} as WidgetsIF;`, `  ${widgetID},\n} as WidgetsIF;`);
  fs.writeFileSync(`${__dirname}/../widgets/index.tsx`, newStr);
};

//创建处理
const createWidget = () => {
  for (let copyPath of copyPaths) {
    const { from, to } = copyPath;
    const existfrom = fs.existsSync(from);
    if (!existfrom) {
      continue;
    }
    fse.copySync(from, to);
  }
};

//启动
const start = async () => {
  // setTimeout(() => {
  //   opener(`http://localhot:8000#dev?id=${widgetID}`);
  // }, 10000);
  // spawn('npm', ['run', 'dev']);
  var spawnSync = require('child_process').spawnSync;
  spawnSync('npm', ['run', 'start']);
  opener(`http://localhot:8000#dev?id=${widgetID}`);
  // var child = fork('./dev', [], {
  //   stdio: 'pipe'
  // });
};

//主流程
const main = async () => {
  //清屏
  clear();
  console.log(`starting create widget 【${widgetID}】`);
  try {
    createWidget();
    addWidgetExport();
    console.log(`\n✅ widget 【${widgetID}】 created\n\please run: `);
    log(`\nnpm run dev --id=${widgetID}\n`);
    // start();
  } catch (err) {
    console.error(`✅ widget 【${widgetID}】 创建失败`);
  }
};

main();
