### Creation of main GSheet that will be the library with the main code for other copies (MAIN FILE)

- Open the Google Sheet file
- Go to Extensions -> App Script
- Remove everything from the Code Editor, and copy paste the given code ( **main_library.js** )
- If you want to add more onwers other than the file owner:
    - in Code Editor -> find `let owners = [];` and inside the brackets, add their emails inside single quotes, comma separated (if there are going to be more than 1)

**To Deploy as Library**

From the Code Editor:
- Go to upper right -> Click 'Deploy' option
- Select 'New Deployment'
- On the 'Select type' option -> choose Library
- Set Description to 'MainGSheet' -> click 'Deploy'
- On the main menu on the left -> click 'Project Settings' -> copy the Scipt ID that appears (this will be needed later)

### To use the library on a new file (e.g copy of the original one) (COPY FILE 1)

1. Go to Extensions -> App Script
2. Remove everything from the Code Editor, and copy paste the given code ( **new_file.js** )
3. Follow these steps below (for version, choose '1')
![image](https://github.com/Suite5/Gsheet---Timesheets/assets/59557373/f3d621db-3794-4a3d-a818-45c00483a104)

4. Then, to apply changes immediately (locking/unlocking the relevant columns), from the menu above, select the `manageSpreadsheetProtection` function, and click Run (see below screenshot)
NOTE : You can proceed to the next step in case you don't want to apply the changes immediately

![Screenshot 2023-06-20 at 2 46 59 PM](https://github.com/Suite5/Gsheet---Timesheets/assets/59557373/df82832c-4cae-43df-857d-d714abcefe86)

5. To enable/create the trigger that will be called automatically each day to manage which columns will be protected and which will be unlocked, select the `createTriggerForSpreadsheetProtection` function, and click Run (see below screenshot)
![image](https://github.com/Suite5/Gsheet---Timesheets/assets/59557373/9993a46c-fae9-4cf5-aab8-9044cc372706)

6. Once you share the file with Edit Permission to a user, the user will be able to edit only the column related to current date.

If you share the file with only View Permission, the user will ONLY be able to view the file.

### For each new file that you want to create

- Make a copy of the above file (COPY FILE 1)
- Importing the library again won't be needed (since it was done once on the initial copy), so follow only steps 4 - 6
