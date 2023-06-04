export class BannerButtons {

    getStartTradingBtnOnMainBanner = () => cy.get('.btn--darkText');
    getTryDemoBtnOnMainBanner = () => cy.get('.btn--emptyblack');
    getTradeBtnOnWidgetMostTraded = () => cy.get('a[href="/trading/platform/spotlight/27045129890124996?side=buy"]')

    // Footer
    getDownloadOnAppStoreBtn = () => cy.get('.store-apple');
    getDownloadOnGooglePlayLink = () => cy.get('.store-google')
    getExploreWebPlatformLink = () => cy.get('.badge-platform')
    getCreateAndVerifyBtn = () => cy.get('.regSteps__shape > .js_signup')


    // methods
    clickStartTradingBtnOnMainBanner() {
        this.getStartTradingBtnOnMainBanner().realHover().click()
        return this;
    }

    clickDownloadOnAppStoreBtn() {
        this.getDownloadOnAppStoreBtn().realHover().click();
    }

    clickCreateAndVerifyBtn() {
        this.getCreateAndVerifyBtn().click();
    }

    clickDownloadOnGooglePlayLink() {
        this.getDownloadOnGooglePlayLink().realHover().click();
    }

    clickExploreWebPlatformLink() {
        this.getExploreWebPlatformLink().realHover().click();
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