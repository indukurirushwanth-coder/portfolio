import puppeteer from 'puppeteer-core'

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const url = process.argv[2]
const out = process.argv[3]

if (!url || !out) {
  console.error('Usage: node scripts/capture-live-site.mjs <url> <output.webp>')
  process.exit(1)
}

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ['--disable-gpu', '--hide-scrollbars'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1600, height: 1000, deviceScaleFactor: 0.5 })
await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 })
await page.evaluate(async () => {
  if (document.fonts?.ready) await document.fonts.ready
})
await new Promise((resolve) => setTimeout(resolve, 2000))

console.log('title:', await page.title())
console.log(
  'text:',
  (await page.evaluate(() => document.body.innerText)).slice(0, 400).replace(/\n+/g, ' | '),
)

await page.screenshot({ path: out, type: 'webp', quality: 84 })
console.log(`${out} written`)

await browser.close()
