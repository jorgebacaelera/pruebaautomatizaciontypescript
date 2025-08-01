import { Page } from '@playwright/test';
import NetflixLocators from './NetflixLocators';

export default class NetflixLoginPage {
    constructor(private page: Page) {}

    async navigateToNetflix() {
        await this.page.goto('https://www.netflix.com/login');
        await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.waitForTimeout(5000);
    }

    async login(email: string, password: string) {
        await this.page.fill(NetflixLocators.EMAIL_INPUT, email);
        await this.page.fill(NetflixLocators.PASSWORD_INPUT, password);
        await this.page.click(NetflixLocators.LOGIN_BUTTON);
        await this.page.waitForTimeout(5000);
    }

    async takeScreenshot(filename: string) {
        await this.page.screenshot({ path: filename, fullPage: true });
    }

    async getSectionTitles() {
        return this.page.$$eval(NetflixLocators.SECTION_TITLES, elements =>
            elements.map(e => e.textContent?.trim() || '')
        );
    }
}
