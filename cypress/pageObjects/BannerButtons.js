export class BannerButtons {

    getStartTradingBtnOnMainBanner = () => cy.get('.btn--darkText');
    getTryDemoBtnOnMainBanner = () => cy.get('.btn--emptyblack');
    getTradeBtnOnWidgetMostTraded = () => cy.get('.mostTraded__box--expanded > .mostTraded__market > .mostTraded__btn')

    // methods
    clickStartTradingBtnOnMainBanner() {
        this.getStartTradingBtnOnMainBanner().realHover().click()
        return this;
    }

    clickTryDemoBtnOnMainBanner() {
        this.getTryDemoBtnOnMainBanner().realHover().click()
        return this;
    }

    clickTradeBtnOnWidgetMostTraded() {
        this.getTradeBtnOnWidgetMostTraded().realHover().click()
        return this;
    }
}

export const bannerBtn = new BannerButtons();