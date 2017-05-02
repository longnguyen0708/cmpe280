import { Cmpe280Page } from './app.po';

describe('cmpe280 App', () => {
  let page: Cmpe280Page;

  beforeEach(() => {
    page = new Cmpe280Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
