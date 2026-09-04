import { Page, expect, Locator } from '@playwright/test';
import { CamisaModel } from '../../../fixtures/camisa.model';

export class ProductPage{

    readonly page;
    readonly tamanhoCamisa: Locator;


    constructor(page: Page){
        this.page = page;
        this.tamanhoCamisa = page.locator('//*[@class="size__link"]');
    }

    async selecionarTamanhoCamisa(indice: number){
        await this.tamanhoCamisa.nth(indice).click();
    }


}