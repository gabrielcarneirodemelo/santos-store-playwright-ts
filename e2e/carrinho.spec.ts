import { test, expect } from '@playwright/test';
import { CamisaModel } from './fixtures/camisa.model';

import { HomePage } from './support/pages/lojas/homePage'
import { SearchPage } from './support/pages/lojas/searchPage'
import { CartPage } from './support/pages/lojas/cartPage';
import { ProductPage } from './support/pages/lojas/productPage';

import camisa from './fixtures/camisa.json';


let homePage: HomePage;
let searchPage: SearchPage;
let cartPage: CartPage;
let productPage: ProductPage;

test.beforeEach(({ page }) => {
    //lojasIndexPage = new LojasIndexPage(page);
    homePage = new HomePage(page);
    searchPage = new SearchPage(page);
    cartPage = new CartPage(page);
    productPage = new ProductPage(page);
})

test.describe('Adicionar produtos no carrinho', () => {
    test('adicionar ítens no carrinho', async ({ page }) => {

        const camisa1 = camisa.camisa1 as CamisaModel;
        const camisa2 = camisa.camisa2 as CamisaModel;

        await homePage.goto();
        await homePage.fecharModal();
        await searchPage.pesquisarCamisa(camisa1);
        await searchPage.clicarCamisa(0);
        await productPage.selecionarTamanhoCamisa(3);
        await cartPage.clicarNoBotaoComprar();
        await cartPage.preenchimentoCampoCep();
        await cartPage.clicarBotaoConsultarCEP();
        await cartPage.validarProdutoNoCarrinho();
            await cartPage.validarValorTotal1Produto(camisa1);
        await cartPage.clicarAdicionarMaisProdutos();
        await searchPage.clicarCamisa(1);
        await productPage.selecionarTamanhoCamisa(0);
        await cartPage.clicarNoBotaoComprar();
        await cartPage.validarValorTotal2Produtos();
        await cartPage.validarNomeCamisaNoCarrinho(camisa1, 0);
        await cartPage.validarNomeCamisaNoCarrinho(camisa2, 1);
        await cartPage.removerProdutoDoCarrinho();
        await cartPage.validarValorTotal1Produto(camisa1);
    })
})