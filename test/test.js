const puppeteer = require('puppeteer');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const fs = require('fs');

const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const { testUrl, sizes, routes, testRoot } = require('./test-config.js');

const baseDir = testRoot+"base";
const testDir = testRoot+"test";
const diffDir = testRoot+"diff";

describe('compare screenshots...', function() {
  let browser, page;

  before(async function() {

    if (!fs.existsSync(testRoot)) fs.mkdirSync(testRoot);
    if (!fs.existsSync(testDir)) fs.mkdirSync(testDir);
    if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir);
    // if (!fs.existsSync(diffDir)) fs.mkdirSync(diffDir);

    browser = await puppeteer.launch();
    page = await browser.newPage();

  });


  sizes.forEach((size)=>{
    describe(size.name, ()=>{

      beforeEach(async ()=>{
        return page.setViewport({
          width: size.width, 
          height: size.height
        });
      });

      routes.forEach((route)=>{

        it(`${route} base exists`, async ()=>{
          return baseExists(page, route, size.name)
        });

        it(`${route} matches base`, async ()=>{
          return takeAndCompareScreenshot(page, route, size.name)
        });

      })
    })
  })

  after(() => browser.close());

});

async function baseExists(page, route, filePrefix) {
  let fileName = (route != '/' ? route : '/top');
  fileName = fileName.replace(/\//g, '__');
  fileName = filePrefix + fileName;
  try {
    fs.accessSync(`${baseDir}/${fileName}.png`, fs.constants.R_OK)
    return assert.isTrue(true)
  } catch (err) {
    return assert.isTrue(false)
  }
}

async function takeAndCompareScreenshot(page, route, filePrefix) {
  let fileName = (route != '/' ? route : '/top');
  fileName = fileName.replace(/\//g, '__');
  fileName = filePrefix + fileName;

  await page.goto(testUrl + route);

  try {

    fs.accessSync(`${baseDir}/${fileName}.png`, fs.constants.R_OK)

    // take screenshot
    await takeScreenshot(page, `${testDir}/${fileName}.png`);
    return compareScreenshots(fileName);

  } catch (err) {

    // take screenshot
    await takeScreenshot(page, `${baseDir}/${fileName}.png`);
    assert.isTrue(true, `new golden image ${fileName} created`);

  }

}

async function takeScreenshot(page, path) {

  await page.addStyleTag({content:'.v-scroll-reveal{opacity:1!important; transition: opacity 0, transform 0!important; transform:translateY(0)!important} #breakpoint{display:none!important}'});
  await page.waitFor(1000);

  const bodyHandle = await page.$('body');
  const { width, height } = await bodyHandle.boundingBox(); 
  await bodyHandle.dispose();

  return await page.screenshot({
    path,
    clip: {
      x: 0,
      y: 0,
      width,
      height
    }
  });

}

function compareScreenshots(fileName) {
  return new Promise((resolve, reject) => {

    const img1 = fs.createReadStream(`${testDir}/${fileName}.png`).pipe(new PNG()).on('parsed', doneReading);
    const img2 = fs.createReadStream(`${baseDir}/${fileName}.png`).pipe(new PNG()).on('parsed', doneReading);

    let filesRead = 0;
    function doneReading() {
      // Wait until both files are read.
      if (++filesRead < 2) return;

      // Do the visual diff.
      const diff = new PNG({width: img1.width, height: img2.height});
      const numDiffPixels = pixelmatch(
          img1.data, img2.data, diff.data, img1.width, img1.height,
          {threshold: 0.1});

      if(numDiffPixels){
        if (!fs.existsSync(diffDir)) fs.mkdirSync(diffDir);
        diff.pack().pipe(fs.createWriteStream(`${diffDir}/${fileName}.png`))
      }

      // The files should look the same.
      expect(numDiffPixels, 'number of different pixels').equal(0);

      resolve();
    }
  });
}

