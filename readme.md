## Bring The Band!
Theoretical local music venue asked to build a promotional app called Bring The Band. This app allows users to vote for musicians they want to see at the venue. The venue hopes to gain a following, and boost their patron engagement by tracking popular bands and trends in their market share.

#### Basic Mode
- Using React components, created 2 Pages, Search Page and a Votes Page.
  - There will also be a login/sign up functionality
- Search Page should include a Search Field and Search Button
- Search Field should query Spotify if the user presses "enter" or clicks the Search Button
- The results of the Spotify search should be displayed as a list of bands.
  - For each band in the list, display an image, band name, and a button allowing the user to vote for them.
- If user votes for a band, save that band to your backend
- Votes page should display all bands that have been voted for so far.
  - For each band in in the list, display an image and band name.
- Write tests AT LEAST for any custom functions created on components and actions.

#### Notes
- Spotify API allows anyone to search their database. No need for API key
- Make a table on backend for the voted bands and a model in your app to represent that.
- Table for search results of bands not needed but can be made

##### Checklist
Login/Sign Up
- [ ] Login Button, on Click ->
- [ ] Hides login/signup buttons
  - [ ] Displays email, pw inputs, submit button
  - [ ]
  - [ ]

- [ ] Sign up Button, on Click ->
  - [ ] Hides login/signup buttons
  - [ ] Displays username, email, pw inputs, submit button
  - [ ]
  - [ ]

---
Search Page
- [X] Input: Search Field
- [X] Button: submits Input with "ENTER" or "onClick"
- [ ] Results: List of bands
  - [ ] Each Band: Display IMAGE and BAND NAME
  - [ ] Tests for any custom functions created on components and actions
  - [ ] Should be able to vote for band when band is displayed
  - [ ] When voted for, save band to server
---
Votes Page
- [ ] Display: Bands that have been voted for
  - [ ] Each Band: Display IMAGE and BAND NAME
  - [ ] Tests for any custom functions created on components and actions
- [ ]
- [ ]
---
Models
- [ ] Bands Voted for kept in Backendless server
- [ ] User info kept in server

##### User Stories
- As a User, I can search for bands
- As a User, I can sign up for a new account
- As a User, I can log in
- As a User, I can log out
- As a User, I can vote for band after I search
- As a User,

##### Time Management

Monday
- [ ] Login/Sign up Functionality
- [X] Search Page with buttons and input
- [ ] Populate some data
Tues
- [ ] Results Page
- [ ] Voting Functionality
- [ ] Band Cards
Wednesday

Thurs
- [ ] Polish code
- [ ] Polish CSS
