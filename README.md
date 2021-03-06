# Random Password Generator

## User sets criteria for password to be printed in text box.

# Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

(![image](https://user-images.githubusercontent.com/71037699/104265448-41546200-5453-11eb-8579-ba2472033b08.png)

# Link to Password Generator
(https://fthompson24.github.io/Password/)

# Issues
Generator will sometimes not listen to criteria. Example: When selecting only number and choosing password length of 22, the password generated contained multiple upper and lower case letters. Debugging ongoing..