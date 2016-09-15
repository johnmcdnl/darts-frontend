import { DartsPage } from './app.po';

describe('darts App', function() {
  let page: DartsPage;

  beforeEach(() => {
    page = new DartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
