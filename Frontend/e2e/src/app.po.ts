import { browser, by, element } from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  static getTitleText() {
    return element(by.css('app-home-page')).getText() as Promise<string>;
  }

  static getSearchBar() {
    return element(by.id('search-bar'));
  }

  static getSearchBarInput() {
    return element(by.id('keyword'));
  }

  static getFirstSearchResult() {
    var results = element.all(by.id('search-result')).all(by.id('result-name'));
    return results.get(0);
  }

  static getSearchResults() {
    return element.all(by.id('search-result'));
  }
}
