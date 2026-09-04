import { test, expect } from '@playwright/test';

import { CamisaModel } from './fixtures/camisa.model';

//import { LojasIndexPage } from './support/pages/lojas/index';

import {HomePage} from  './support/pages/lojas/homePage'

import {SearchPage} from  './support/pages/lojas/searchPage'

import camisa from './fixtures/camisa.json';

let homePage: HomePage;
let searchPage: SearchPage;

test.beforeEach(({ page }) => {
    //lojasIndexPage = new LojasIndexPage(page);
    homePage = new HomePage(page);
    searchPage = new SearchPage(page);
})

test.describe('Testes de pesquisa de item que existe', () => {

    test('deve ser possivel pesquisar item', async ({ page }) => {

        const camisa_dados = camisa.camisa1 as CamisaModel;

        await homePage.goto();
        await homePage.fecharModal();
        await searchPage.pesquisarCamisa(camisa_dados);
        await searchPage.clicarCamisa(0);
        await searchPage.validarDescricaoProduto();

    })
})

test.describe('Testes de pesquisa de item que não existe', () => {
    test('ítem pesquisado não existe', async ({ page }) => {

        const camisa_dados = camisa.erro as CamisaModel;

        await homePage.goto();
        await homePage.fecharModal();
        await searchPage.pesquisarCamisa(camisa_dados);
        await searchPage.validarMensagemErro(camisa_dados);

    })
})

