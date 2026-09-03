import { Page, expect, Locator } from '@playwright/test';
import { CamisaModel } from '../../../fixtures/camisa.model';

export class LojasIndexPage {

    readonly page;
    readonly modal: Locator;
    readonly campoBusca: Locator;
    readonly botaoBusca: Locator;
    readonly primeiraCamisa: Locator;
    readonly validaNomeCamisa: Locator;
    readonly mensagemErro: Locator;
    readonly tamanhoCamisa: Locator;
    readonly botaoComprar: Locator;
    readonly campoCEP: Locator;
    readonly botaoConsultarCEP: Locator;
     

    constructor(page: Page) {
        this.page = page;
        this.modal = page.locator('.bGGcZJZR7IsEsQjTbspD-html-close-button > svg');
        this.campoBusca = page.locator('#search');
        this.botaoBusca = page.locator('//*[@class="search__button"]');
        this.primeiraCamisa = page.locator('//*[@class="card__link"]').first();
        this.validaNomeCamisa = page.locator('//*[@class="features--title"]');
        this.mensagemErro = page.locator('//*[@id="content"]/section/div[1]/h1');
        this.tamanhoCamisa = page.locator('//*[@class="size__link"]').nth(3);
        this.botaoComprar = page.locator('//*[@class="action-buttons-main__cart"]');
        this.campoCEP = page.locator('//*[@id="cep"]');
        this.botaoConsultarCEP = page.locator('//*[@class="freight-form__button"]');
    }


    async goto() {
        await this.page.goto('/');
    }


    async fecharModal() {
         await this.modal.click();
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