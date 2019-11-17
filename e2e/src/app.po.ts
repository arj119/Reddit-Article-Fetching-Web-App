import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-home-page')).getText() as Promise<string>;
  }

  getSearchBar() {
    return element(by.css('app-search-bar .keyword-wrapper')).getText() as Promise<string>;
  }
}
