import pinyin from 'pinyin';
import * as fs from 'fs';
import * as path from 'path';

const testIsFile = (file: string) =>
  new Promise(resolve => {
    fs.stat(file, (err, data) => {
      if (data.isFile()) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
const getFiles = (root: string) =>
  new Promise<string[]>(resolve => {
    fs.readdir(root, async (err, files) => {
      const onlyfile: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const isFile = await testIsFile(path.join(root, file));
        if (isFile) {
          onlyfile.push(file);
        }
      }
      return resolve(onlyfile);
    });
  });
const main = async () => {
  const fpath = 'C:/Users/Administrator/Desktop/助贷产品1.74';
  let files = await getFiles(fpath);
  files = files.map(name => {
    const pyname = pinyin(name, { style: pinyin.STYLE_NORMAL });
    return pyname.join('_');
  });
  console.log(files);
};

main();
