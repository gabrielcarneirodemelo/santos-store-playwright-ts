import { Page, expect, Locator } from '@playwright/test';
import { CamisaModel } from '../../../fixtures/camisa.model';

export class SearchPage{

    readonly page;
    readonly campoBusca: Locator;
    readonly botaoBusca: Locator;
    readonly primeiraCamisa: Locator;
    readonly validaNomeCamisa: Locator;
    readonly mensagemErro: Locator;

    constructor(page: Page){
        this.page = page;
        this.campoBusca = page.locator('//*[@id="search"]');
        this.botaoBusca = page.locator('//*[@class="search__button"]');
        this.primeiraCamisa = page.locator('//*[@class="card__link"]').first();
        this.validaNomeCamisa = page.locator('//*[@class="features--title"]');
        this.mensagemErro = page.locator('//*[@id="content"]/section/div[1]/h1');
    }

     async pesquisarCamisa(camisa:CamisaModel) {

        await this.campoBusca.fill(camisa.name);
        
        await this.botaoBusca.click();
    }

    async clicarCamisa() {
        await this.primeiraCamisa.click();
    }

    async validarDescricaoProduto() {
        await expect(this.validaNomeCamisa).toHaveText('Descrição do produto');
        await expect(this.validaNomeCamisa).toBeVisible();
    }

    async validarMensagemErro(camisa: CamisaModel) {
        await expect(this.mensagemErro).toHaveText(`Não encontramos resultados para "${camisa.name}"`);
    }

}