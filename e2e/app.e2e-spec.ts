import { AbhiesinghportfolioPage } from './app.po';

describe('abhiesinghportfolio App', function() {
  let page: AbhiesinghportfolioPage;

  beforeEach(() => {
    page = new AbhiesinghportfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
