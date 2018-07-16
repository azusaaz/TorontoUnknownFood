import { TorontounknownfoodPage } from './app.po';

describe('torontounknownfood App', () => {
  let page: TorontounknownfoodPage;

  beforeEach(() => {
    page = new TorontounknownfoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
