### Creation of main GSheet that will be the library with the main code for other copies (MAIN FILE)

- Go to Extensions -> App Script
- copy paste the given code for the **main library**

**To Deploy as Library**
- Go to upper right -> Click 'Deploy' option
- Select type -> choose Library
- set Description to 'MainGSheet' -> click 'Deploy'
- on the main menu on the left -> click 'Project Settings' -> copy the Scipt ID that appears (this will be needed later)

### To use the library on a new file (e.g copy of the original one) (COPY FILE 1)

**To use the Library on a copied file**
1. Go to Extensions -> App Script
2. Copy paste the given code for a **copied file**
4. Follow these steps below
![image](https://github.com/Suite5/Gsheet---Timesheets/assets/59557373/f3d621db-3794-4a3d-a818-45c00483a104)

5. Then, to apply changes immediately, from the menu above, select the `manageSpreadsheetProtection` function, and click run (see below screenshot)
NOTE : You can proceed to the next step in case you don't want to apply the changes immediately
![Screenshot 2023-06-20 at 2 46 59 PM](https://github.com/Suite5/Gsheet---Timesheets/assets/59557373/df82832c-4cae-43df-857d-d714abcefe86)

6. To enable/create the trigger that will be called automatically each day to manage which columns will be protected and which will be unlocked, select the `createTriggerForSpreadsheetProtection` function, and click run
![image](https://github.com/Suite5/Gsheet---Timesheets/assets/59557373/9993a46c-fae9-4cf5-aab8-9044cc372706)

- Once you share the file with Edit Permissions to a user, the user will be able to edit only the column related to current date.

### For each new file that you want to create

- Make a copy of the above file (COPY FILE 1)
- Importing the library again won't be needed (since it was done once on the initial copy), so follow only steps 5 - 6