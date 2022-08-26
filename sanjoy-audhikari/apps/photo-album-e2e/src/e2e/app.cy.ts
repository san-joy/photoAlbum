import { getListOfUsersTitle, getSubTitle } from '../support/app.po';

describe('photo-album', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title "List of users"', () => {
    getListOfUsersTitle().contains("List of users");
  });

  it('should display subtitle "Click each row to check user\'s photo album"', () => {
    getSubTitle().contains("Click each row to check user's photo album");
  });
});
