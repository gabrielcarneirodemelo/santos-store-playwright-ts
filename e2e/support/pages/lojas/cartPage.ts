import { Page, expect, Locator } from '@playwright/test';
import { CamisaModel } from '../../../fixtures/camisa.model';

export class CartPage{

    readonly page;
    readonly tamanhoCamisa: Locator;
    readonly botaoComprar: Locator;
    readonly campoCEP: Locator;
    readonly botaoConsultarCEP: Locator;

    constructor(page: Page){
        this.page = page;
        this.tamanhoCamisa = page.locator('//*[@class="size__link"]').nth(3);
        this.botaoComprar = page.locator('//*[@class="action-buttons-main__cart"]');
        this.campoCEP = page.locator('//*[@id="cep"]');
        this.botaoConsultarCEP = page.locator('//*[@class="freight-form__button"]');
    }

    async selecionarTamanhoCamisa(){
        await this.tamanhoCamisa.click();
    }

    async clicarNoBotaoComprar(){
        await this.botaoComprar.click();
    }

    async preenchimentoCampoCep(){
        await this.campoCEP.fill('06184-250');
    }

    async clicarBotaoConsultarCEP(){
        await this.botaoConsultarCEP.click();
    }

}