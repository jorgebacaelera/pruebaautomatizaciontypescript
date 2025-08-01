import { Given, When, Then,setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import NetflixLoginPage from '../pages/NetflixLoginPage';
import dotenv from 'dotenv';
setDefaultTimeout(60 * 1000); // 60 segundos


dotenv.config();

let browser: Browser;
let page: Page;
let netflixPage: NetflixLoginPage;

const USER_EMAIL = process.env.NETFLIX_USER || "TU_EMAIL";
const USER_PASSWORD = process.env.NETFLIX_PASSWORD || "TU_PASSWORD";

Given('que el usuario abre la página de Netflix', async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  netflixPage = new NetflixLoginPage(page);
  await netflixPage.navigateToNetflix();
});

When('ingresa sus credenciales válidas', async () => {
  await netflixPage.login(USER_EMAIL, USER_PASSWORD);
});

Then('toma captura de la página de inicio y muestra títulos de una sección', async () => {
  await page.waitForTimeout(5000);
  await netflixPage.takeScreenshot('home_netflix.png');
  const titles = await netflixPage.getSectionTitles();
  console.log('Títulos encontrados:', titles.slice(0, 5));
  await browser.close();
});
