const webDeploy = require('d-deploy')
const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

/**
 *
 * @param log
 */
function writeLog(log) {
  // 生成writeStream
  return new Promise((resolve, reject) => {
    const fullFileName = path.join(__dirname, 'deploy.log')
    const writeStream = fs.createWriteStream(fullFileName, {
      flags: 'a', // 'a'为追加，'w'为覆盖
    })
    // 写入日志
    writeStream.write(`${log}\n`, (err) => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}

const deploy = async () => {
  try {
    const cdnDir = `${pkg.name}/${pkg.version}`
    const deployEnv = await webDeploy(cdnDir)
    await writeLog(`deploy ${deployEnv}: ${pkg.version} at ${new Date().toLocaleString()}`)
    process.exit()
  } catch (error) {
    console.log(`部署失败: ${error.message}`)
    process.exit(1)
  }
}

deploy()
