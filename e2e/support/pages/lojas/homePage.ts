import { Page, expect, Locator } from '@playwright/test';
import { CamisaModel } from '../../../fixtures/camisa.model';

export class HomePage{

    readonly page;
    readonly modal: Locator;

    constructor(page: Page) {
        this.page = page;
        this.modal = page.locator('.bGGcZJZR7IsEsQjTbspD-html-close-button > svg');
    }

    async goto() {
        await this.page.goto('/');
    }


    async fecharModal() {
         await this.modal.click();
    }
}