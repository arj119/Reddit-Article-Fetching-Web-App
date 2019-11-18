import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('Home page tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    AppPage.navigateTo();
    expect(AppPage.getTitleText()).toEqual('Top Subreddit Viewer');
  });

  it('should display search bar', () => {
    AppPage.navigateTo();
    expect(element(by.id('search-bar')).isDisplayed()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

describe('Search bar tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('search bar should show results from query as typed', () => {
    AppPage.navigateTo();
    AppPage.getSearchBarInput().sendKeys('a');
    var result1 = AppPage.getFirstSearchResult();
    AppPage.getSearchBarInput().sendKeys('w');
    var result2 = AppPage.getFirstSearchResult();
    AppPage.getSearchBarInput().sendKeys('w');
    !expect(result1.getText()).toEqual(result2.getText());
    expect(AppPage.getFirstSearchResult().getText()).toEqual('aww');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

describe('Subreddit Top Posts Tests', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });

  it('search result when clicked should display name of subreddit', () => {
    AppPage.navigateTo();
    browser.wait(AppPage.getSearchBarInput().sendKeys('aww'), 10 * 1000, 'Search results should show within 5 seconds');
    AppPage.getSearchResults().get(0).click();
    expect(element(by.id('searched-subreddit')).getText()).toEqual('r/aww');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
