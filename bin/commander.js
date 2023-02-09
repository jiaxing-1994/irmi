#!/usr/bin/env node

const { Command } = require('commander');
const tag = require('../src/command/tag/tag.js');
const push = require('../src/command/push/push.js');
const config = require('../src/command/config/config');
const {
  showProject,
  delProject,
} = require('../src/command/projects/project');
const customStep = require('../src/command/customStep/customStep');
const {
  yellow,
} = require('../src/utils/utils');

const logo = `
*****************************
 ____  ____  __  __  ____ 
(_  _)(  _ \\(  \\/  )(_  _)
 _)(_  )   / )    (  _)(_ 
(____)(_)\\_)(_/\\/\\_)(____)   
 
*****************************
`;
// yellow(logo);
const program = new Command();
program.version('1.1.1');

program
  .command('config <filePath>')
  .option('-d, --del', '删除项目')
  .description('配置项目文件路径(多个项目逗号隔开)')
  .action((filePath, options) => {
    config(filePath, options);
  })

program
  .command('push')
  .option('-c, --choose [projectName]', 'choose project by yourself')
  .description('代码提交相关')
  .action((options) => {
    push(options);
  });

program
  .command('tag')
  .description('打标签相关')
  .action(() => {
    tag();
  });

program
  .command('show')
  .description('展示已有项目')
  .action(() => {
    showProject();
  });

program
  .command('del')
  .description('删除已有项目')
  .action(async () => {
    await delProject();
  });

program
  .command('step')
  .description('自定义步骤')
  .action(async () => {
    await customStep();
  });

program.parse();
