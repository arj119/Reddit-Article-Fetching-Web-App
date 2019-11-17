import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Home page tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Top Subreddit Viewer');
  });

  it('should display search bar', () => {
    page.navigateTo();
    expect(page.getSearchBar).toEqual('Top Subreddit Viewer');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
