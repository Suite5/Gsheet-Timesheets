function createTriggerForSpreadsheetProtection() {
  deleteAllTriggers_();

  let triggerBuilder = ScriptApp.newTrigger("manageSpreadsheetProtection")
    .timeBased()
    .everyDays(1)
    .atHour(00)
    .nearMinute(05);

  triggerBuilder.create();
}

function deleteAllTriggers_() {
  var allTriggers = ScriptApp.getProjectTriggers();

  for (var i = 0; i < allTriggers.length; i++) {
    var trigger = allTriggers[i];

    ScriptApp.deleteTrigger(trigger);
  }
}

function manageSpreadsheetProtection() {
  let sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  let sheet, protection;

  const todayDateSheetNameFormat = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "y.MM"
  );

  //loop through all sheets
  for (let i = 0; i < sheets.length; i++) {
    sheet = sheets[i];

    //protect sheet
    protection = sheet.protect();

    //apply unprotect ranges only for sheet belong to today date
    if (sheet.getName() === todayDateSheetNameFormat) {
      //find column that corresponds to today date
      let todayDateColumn = getTodayDateColumn_(sheet);

      //loop through rows and columns of today date sheet
      //and unprotect the cells that belong to today date column and their value = ""
      let dataRange = sheet.getDataRange();
      let values = dataRange.getValues();
      let unprotected = [];

      for (let row = 0; row < values.length; row++) {
        for (let col = 0; col < values[row].length; col++) {
          if (col !== todayDateColumn) {
            continue;
          }

          if (values[row][col].toString() === "") {
            unprotected.push(sheet.getRange(row + 1, col + 1));
          }
        }
      }
      protection.setUnprotectedRanges(unprotected);
    }

    manageUsersProtection_(protection);
  }
}

function getTodayDateColumn_(sheet) {
  const todayDate = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "E MMM d y"
  );

  let dataRange = sheet.getDataRange();
  let values = dataRange.getValues();

  for (let row = 0; row < values.length; row++) {
    for (let col = 0; col < values[row].length; col++) {
      if (values[row][col].toString().includes(todayDate)) {
        return col;
      }
    }
  }
}

function manageUsersProtection_(protection) {
  //users that will have permissions to edit everything
  let owners = [];

  // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
  // permission comes from a group, the script throws an exception upon removing the group.
  let me = Session.getEffectiveUser();
  protection.removeEditors(protection.getEditors());

  //Add users who can edit the protected range
  protection.addEditors([me].concat(owners));

  //remove edit permission from users in the domain that owns the spreadsheet
  if (protection.canDomainEdit()) {
    protection.setDomainEdit(false);
  }
}
