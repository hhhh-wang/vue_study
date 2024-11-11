const fs = require('fs');
const path = require('path');

// 要替换的目录路径
const directoryPath = 'E:\\前端'; // 修改为你的目录路径

// 要去除的文本
const textToRemove = '【认准一手V：it1646】';

// 递归函数：遍历目录并重命名文件
function renameFilesInDirectory(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return console.error('无法读取目录:', err);
        }

        files.forEach((file) => {
            const filePath = path.join(dir, file);

            fs.stat(filePath, (err, stats) => {
                if (err) {
                    return console.error('无法获取文件信息:', err);
                }

                // 如果是目录，则递归调用
                if (stats.isDirectory()) {
                    renameFilesInDirectory(filePath);
                } else {
                    // 如果是文件且包含要去除的文本，重命名文件
                    if (file.includes(textToRemove)) {
                        const newFileName = file.replace(textToRemove, '');
                        const newFilePath = path.join(dir, newFileName);

                        fs.rename(filePath, newFilePath, (err) => {
                            if (err) {
                                console.error('无法重命名文件:', err);
                            } else {
                                console.log(`文件已重命名: ${filePath} -> ${newFilePath}`);
                            }
                        });
                    }
                }
            });
        });
    });
}

// 开始递归重命名文件
renameFilesInDirectory(directoryPath);