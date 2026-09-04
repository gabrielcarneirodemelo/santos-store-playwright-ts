import { Page, expect, Locator } from '@playwright/test';
import { CamisaModel } from '../../../fixtures/camisa.model';

export class CartPage {

    readonly page;
    readonly botaoComprar: Locator;
    readonly campoCEP: Locator;
    readonly botaoConsultarCEP: Locator;
    readonly produtoNoCarrinho: Locator;
    readonly validaValorTotalProduto: Locator;
    readonly adicionarMaisProdutos: Locator;
    readonly camisaNomeCarrinho: Locator;
    readonly iconeDeRemoverProdutoDoCarrinho: Locator;

    constructor(page: Page) {
        this.page = page;
        this.botaoComprar = page.locator('//*[@class="action-buttons-main__cart"]');
        this.campoCEP = page.locator('//*[@id="cep"]');
        this.botaoConsultarCEP = page.locator('//*[@class="freight-form__button"]');
        this.produtoNoCarrinho = page.locator('//*[@class="product-item"]');
        this.validaValorTotalProduto = page.locator('//*[@class="summary__item-value"]').nth(0);
        this.adicionarMaisProdutos = page.locator('//*[@class="seller-tooltip__link"]');
        this.camisaNomeCarrinho = page.locator('//*[@qa-auto="product-name"]');
        this.iconeDeRemoverProdutoDoCarrinho = page.locator('//*[@qa-auto="product-btn-remove"]').nth(1);
    }



    async clicarNoBotaoComprar() {
        await this.botaoComprar.click();
    }

    async preenchimentoCampoCep() {
        await this.campoCEP.fill('06184-250');
    }

    async clicarBotaoConsultarCEP() {
        await this.botaoConsultarCEP.click();
    }

    async validarProdutoNoCarrinho() {
        await expect(this.produtoNoCarrinho).toBeVisible();
    }

    async validarValorTotal1Produto(camisa_dados: CamisaModel) {
        const valorTotal = await this.validaValorTotalProduto.innerText();

        expect(valorTotal.trim()).toBe(`R$ ${camisa_dados.preco}`);
    }

    async clicarAdicionarMaisProdutos() {
        await this.adicionarMaisProdutos.click();
    }

    async validarValorTotal2Produtos() {
        await expect(this.validaValorTotalProduto).toHaveText('R$ 499,98');
    }

    async validarNomeCamisaNoCarrinho(camisa_dados: CamisaModel, indice: number) {
        await expect(this.camisaNomeCarrinho.nth(indice)).toHaveText(camisa_dados.name);
    }

    async removerProdutoDoCarrinho() {
        await this.iconeDeRemoverProdutoDoCarrinho.click();
    }



}