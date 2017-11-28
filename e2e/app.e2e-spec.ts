import { GreenstandAngularPage } from './app.po';

describe('greenstand-angular App', () => {
  let page: GreenstandAngularPage;

  beforeEach(() => {
    page = new GreenstandAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
