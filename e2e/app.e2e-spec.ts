import { SaveTheFarmerPage } from './app.po';

describe('save-the-farmer App', function() {
  let page: SaveTheFarmerPage;

  beforeEach(() => {
    page = new SaveTheFarmerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
