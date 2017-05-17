import { BeadCalcPage } from './app.po';

describe('bead-calc App', function() {
  let page: BeadCalcPage;

  beforeEach(() => {
    page = new BeadCalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
