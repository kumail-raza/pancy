import { PancyPage } from './app.po';

describe('pancy App', () => {
  let page: PancyPage;

  beforeEach(() => {
    page = new PancyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
