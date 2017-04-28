import { TabunganEmasPage } from './app.po';

describe('tabungan-emas App', () => {
  let page: TabunganEmasPage;

  beforeEach(() => {
    page = new TabunganEmasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
