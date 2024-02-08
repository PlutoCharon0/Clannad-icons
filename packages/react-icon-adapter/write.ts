const fs = require('fs')

const filePath = './lib/components/stencil-generated/index.ts'
const contentToInsert =
	"\nexport { defineCustomElements } from 'clannad-icon/loader';"

// 读取原文件内容
fs.readFile(filePath, 'utf8', (err, fileContent) => {
	if (err) {
		console.error(err)
		return
	}
	if (
		fileContent.includes(
			"export { defineCustomElements } from 'clannad-icon/loader';"
		)
	)
		return
	// 插入内容
	const updatedContent = fileContent + contentToInsert

	// 写入新文件
	const newFilePath = 'example_new.ts' // 临时文件名
	fs.writeFile(newFilePath, updatedContent, 'utf8', (err) => {
		if (err) {
			console.error(err)
			return
		}

		// 替换原文件
		fs.rename(newFilePath, filePath, (err) => {
			if (err) {
				console.error(err)
				return
			}
			console.log('内容已成功插入到文件中。')
		})
	})
})
