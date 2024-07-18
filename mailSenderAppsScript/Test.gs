function listProtectedRanges() {
  // Get the active spreadsheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Get all the sheets in the spreadsheet
  var sheets = spreadsheet.getSheets();
  
  // Iterate through each sheet
  sheets.forEach(function(sheet) {
    // Get all the protected ranges in the sheet
    var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
    
    // Print the protected ranges and their editors
    protections.forEach(function(protection) {
      var range = protection.getRange();
      var editors = protection.getEditors().map(function(editor) {
        return editor.getEmail();
      });
      
      Logger.log('Sheet: ' + sheet.getName() + ', Protected Range: ' + range.getA1Notation() + ', Editors: ' + editors.join(', '));
    });
  });
}
