import { Page, expect, Locator } from '@playwright/test';
import { CamisaModel } from '../../../fixtures/camisa.model';

export class CartPage{

    readonly page;
    readonly botaoComprar: Locator;
    readonly campoCEP: Locator;
    readonly botaoConsultarCEP: Locator;
    readonly produtoNoCarrinho: Locator;
    readonly validaValorTotalProduto: Locator;
    readonly adicionarMaisProdutos: Locator;
    readonly adicionarCamisa2: Locator;

    constructor(page: Page){
        this.page = page;
        this.botaoComprar = page.locator('//*[@class="action-buttons-main__cart"]');
        this.campoCEP = page.locator('//*[@id="cep"]');
        this.botaoConsultarCEP = page.locator('//*[@class="freight-form__button"]');
        this.produtoNoCarrinho = page.locator('//*[@class="product-item"]');
        this.validaValorTotalProduto = page.locator('//*[@class="summary__item-value"]').nth(0);
        this.adicionarMaisProdutos = page.locator('//*[@class="seller-tooltip__link"]');
        this.adicionarCamisa2 = page.locator('//*[@class="card__description--name"]').nth(1);
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

    async validarProdutoNoCarrinho(){
        await expect(this.produtoNoCarrinho).toBeVisible();
    }

    async validarValorTotal1Produto(){
        await expect(this.validaValorTotalProduto).toHaveText('R$ 249,99');
    }

    async clicarAdicionarMaisProdutos(){
        await this.adicionarMaisProdutos.click();
    }

    async clicarAdicionarCamisa2(){
        await this.adicionarCamisa2.click();
    }

    async validarValorTotal2Produtos(){
        await expect(this.validaValorTotalProduto).toHaveText('R$ 499,98');
    }

}