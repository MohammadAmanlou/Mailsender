function Exams() {
  var num_questions = 7; // third edit num of each parts questions

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet1 = ss.getSheetByName('Student. Info.'); 
var sheet2 = ss.getSheetByName('Final.');  // first edit subject here
var data1 = sheet1.getDataRange().getValues();
var data2 = sheet2.getDataRange().getValues();
var unit = 'پایانترم' ; // Second. edit subject persian name here, dont forget space after name of unit
var subject = 'نمرات اصلاح شده آزمون ' + unit + ' درس ریاضیات گسسته'
var correctors = [ "" , "" ] 
var baroms = ["10" , "15" , "15" , "15" , "15" , "20" , "20"]

for (var i = 1; i < data1.length; i++) {
  var oskol = 0 ;
  var email = data1[i][0];
  var sid = data1[i][1];
  var scores = '';
  for (var j = 3; j < data2.length -1; j+=2) {
    if (data1[i][1] == data2[j][0]) {
      var q = 0;
      scores += '**نمرات سوالات:**\n'
      var num_q = 1
      for (q ; q < num_questions * 2  ; q +=2 ){
        scores += "شماره سوال:"
        scores += num_q + "\n"
        if(data2[j][q + 2] == "Yes"){
          scores += "تقلب!\n";
          scores += data2[j][q + 3] + '\n';
        }
        else if ((data2[j+1][q + 2] != "") && (data2[j+1][q + 2] != " ") && (data2[j+1][q + 2] != null)){
          scores += "شما نمره " + data2[j+1][q + 2] + " " + " را از " + baroms[num_q - 1] + " کسب کرده‌اید"+'\n\n';
          //scores += "توضیحات: " + data2[j+1][q + 3] + '\n\n';
        }
        else if ((data2[j+1][q+2] == "0") || (data2[j+1][q+2] == "0 ")){
          scores += "شما نمره " + data2[j+1][q + 2] + " " + " را از " + baroms[num_q - 1] + " کسب کرده‌اید"+'\n\n';
          //scores += "توضیحات: " + data2[j+1][q + 3] + '\n\n';
        }
        else{
          scores += '0' + '\n\n';
        }
        num_q += 1
      }
      if(num_questions > 0){
        scores += "مجموع از ۱۰۰ نمره\n";
        var sum = data2[j][data2[j].length-2];
        if(sum == 0 || sum == "0"){
          oskol = 1;
        }
        scores += sum;
        scores += '\n\n';
      }
    }
  }


          var message = 'نمرات ' + unit + ' ' +
'شما به شرح زیر است:\n\n' + scores + 
//'در صورت وجود هرگونه ابهام، در زمان تعیین شده برای بازبینی برگه‌ خود حضور پیدا کنید.\n' + 
  '\nبا آرزوی بهترین ها برای شما ،\nتیم دستیاران آموزشی درس ریاضیات گسسته';
  console.log(message)
  if(oskol == 0){
    console.log(message)
    //MailApp.sendEmail(email, subject, message);
  }

}


}
