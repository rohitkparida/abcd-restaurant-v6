import { expect,test } from '@playwright/test';
test('homepage matches approved 1380px mockup',async({page})=>{await page.goto('/',{waitUntil:'networkidle'});await expect(page).toHaveScreenshot('home-1380-css.png',{fullPage:true,animations:'disabled',maxDiffPixelRatio:.01,threshold:.2})});
