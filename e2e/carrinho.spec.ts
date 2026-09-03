import { test, expect } from '@playwright/test';
import { CamisaModel } from './fixtures/camisa.model';

import {HomePage} from  './support/pages/lojas/homePage'
import {SearchPage} from  './support/pages/lojas/searchPage'
import { CartPage } from './support/pages/lojas/cartPage';

import camisa from './fixtures/camisa.json';


let homePage: HomePage;
let searchPage: SearchPage;
let cartPage: CartPage;

test.beforeEach(({ page }) => {
    //lojasIndexPage = new LojasIndexPage(page);
    homePage = new HomePage(page);
    searchPage = new SearchPage(page);
    cartPage = new CartPage(page);
})

test.describe('Adicionar produto no carrinho', () => {
    test('adicionar ítem no carrinho', async ({ page }) => {

        const camisa_dados = camisa.sucesso as CamisaModel;

        await homePage.goto();
        await homePage.fecharModal();
        await searchPage.pesquisarCamisa(camisa_dados);
        await searchPage.clicarCamisa();
        await cartPage.selecionarTamanhoCamisa();
        await cartPage.clicarNoBotaoComprar();
        await cartPage.preenchimentoCampoCep();
        await cartPage.clicarBotaoConsultarCEP();
    })
})