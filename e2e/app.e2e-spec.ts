import { MicrofilmSearchPage } from './app.po';

describe('microfilm-search App', () => {
  let page: MicrofilmSearchPage;

  beforeEach(() => {
    page = new MicrofilmSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
