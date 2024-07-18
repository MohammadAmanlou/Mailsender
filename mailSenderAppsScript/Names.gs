function updateData() {
  var sourceSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Student. Info.");
  var destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Attendance & Bonus.");
  
  var sourceData = sourceSheet.getRange("B:C").getValues(); // Modify "A:B" to specify the desired columns
  
  var destinationData = [];
  destinationData.push([sourceData[0][0], sourceData[0][1]]);
  destinationData.push([sourceData[0][0], sourceData[0][1]]);
  destinationData.push([sourceData[0][0], sourceData[0][1]]);
  for (var i = 1; i < sourceData.length; i++) {
    destinationData.push([sourceData[i][0], sourceData[i][1]]);
    //destinationData.push([sourceData[i][0], sourceData[i][1]]);
  }
  
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationData = [];
  
  for (var i = 1; i < sourceData.length; i++) {
    destinationData.push([sourceData[i][0], sourceData[i][1]]);
  }
  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Global.");
  destinationSheet.getRange(5, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationData = [];
  for (var i = 0; i < sourceData.length; i++) {
    destinationData.push([sourceData[i][0], sourceData[i][1]]);
    destinationData.push([sourceData[i][0], sourceData[i][1]]);
  }

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Wri. Pro.");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Int. Count.");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Adv. Count.");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Logic.");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Induc.");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Int. Graph.");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Adv. Graph.");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Tree.");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Rec. Rel.");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Numb. Theo.");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Midterm.");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Final.");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Temp");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

  destinationSheet = SpreadsheetApp.openById("1Wfro0UAVz0wKgC-OZRCzKpi_kSsBRcE72Nyb-_6PqFk").getSheetByName("Temp-Exam");
  destinationSheet.getRange(1, 1, destinationData.length, destinationData[0].length).setValues(destinationData);

}

