function Overall() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName('Student. Info.'); 
  var sheet2 = ss.getSheetByName('Global Summary');  
  var data1 = sheet1.getDataRange().getValues();
  var data2 = sheet2.getDataRange().getValues();
  var unit = ' جمع بندی شده' ; // Second. edit subject persian name here, dont forget space after name of unit
  var subject = '  نمرات' + unit + ' درس ریاضیات گسسته'
  var titles = ["شمارش مقدماتی" , "شمارش پیشرفته" , "منطق" ,"استقرا" , "گراف مقدماتی", "گراف پیشرفته", "درخت" , "روابط بازگشتی" , "نظریه اعداد" ]
  for (var i = 1; i < data1.length; i++) {
    var oskol = 0;
    var email = data1[i][0];
    var sid = data1[i][1];
    console.log(sid);
    var scores = '';
    for (var j = 2; j < data2.length ; j+=1) {
      if (data1[i][1] == data2[j][0]) {
        scores += 'نمرات تمارین مقدماتی شما به شرح زیر است:\n'  ; 
        for (var title_idx = 0 ; title_idx < 9  ; title_idx ++ ){
          scores += titles[title_idx];
          scores += "\n";
          if ((data2[j][title_idx + 2] != "") && (data2[j][title_idx + 2] != " ") && (data2[j][title_idx + 2] != null)){
            var scoreValue = parseFloat(data2[j][title_idx + 2]).toFixed(3);
            scores += scoreValue + '\n';
          }
          else{
            scores += "0.0" + '\n';
          }
        }
        scores += "\n";
        scores += "مجموع نمرات شما " ;
        scores += parseFloat(data2[j][title_idx + 2]).toFixed(3) ;
        scores += " از 2.7 می باشد." + '\n';
        scores += "_____________________________________________\n\n"
        scores += 'نمرات تمارین پیشرفته شما به شرح زیر است:\n'  ; 
        scores += "اثبات نویسی" + "\n"  ; 
        scores += parseFloat(data2[j][title_idx + 3]).toFixed(3) ;
        scores += "\n";
        for (var title_idx = 0 ; title_idx < 9  ; title_idx ++ ){
          scores += titles[title_idx];
          scores += "\n";
          if ((data2[j][title_idx + 12] != "") && (data2[j][title_idx + 12] != " ") && (data2[j][title_idx + 12] != null)){
            var scoreValue = parseFloat(data2[j][title_idx + 12]).toFixed(3);
            scores += scoreValue + '\n';
          } 
          else{
            scores += "0.0" + '\n';
          }
        }
        scores += "\n";
        scores += "مجموع نمرات شما " ;
        scores += parseFloat(data2[j][title_idx + 13]).toFixed(3);
        scores += " از 4 می باشد." + '\n';
        scores += "_____________________________________________\n"
        scores += 'نمرات کوئیزهای شما به شرح زیر است:\n'  ; 
        for (var title_idx = 0 ; title_idx < 9  ; title_idx ++ ){
          scores += titles[title_idx];
          scores += "\n";
          if ((data2[j][title_idx + 23] != "") && (data2[j][title_idx + 23] != " ") && (data2[j][title_idx + 23] != null)){
            var scoreValue = parseFloat(data2[j][title_idx + 23]).toFixed(3);
            scores += scoreValue + '\n';
          }
          else{
            scores += "0.0" + '\n';
          }
        }
        scores += "\n";
        scores += "مجموع نمرات شما " ;
        scores += parseFloat(data2[j][title_idx + 23]).toFixed(3);
        scores += " از 2.7 می باشد." + '\n';
        scores += "_____________________________________________\n";
        scores += "مجموع نمرات حضور در کلاس شما "
        scores += parseFloat(data2[j][title_idx + 27]).toFixed(3);
        scores += " از 1 می باشد." + '\n\n';
        scores += "مجموع نمرات حل سوالات کلاسی شما "
        scores += parseFloat(data2[j][title_idx + 28]).toFixed(3);
        scores += " از 2.7 می باشد." + '\n';
        scores += "_____________________________________________\n";
        scores += "نمره آزمون میانترم شما "
        scores += parseFloat(data2[j][title_idx + 24]).toFixed(3);
        scores += " از 4 می باشد." + '\n\n';
        scores += "نمره آزمون پایانترم شما "
        scores += parseFloat(data2[j][title_idx + 25]).toFixed(3);
        scores += " از 6 می باشد." + '\n';
        if (data2[j][title_idx + 25] == 0){
          oskol = 1;
        }
        scores += "_____________________________________________\n";
        scores += "نمره کسب شده شما از کانتست درس "
        scores += parseFloat(data2[j][title_idx + 26]).toFixed(3);
        scores += " از 1.25 می باشد." + '\n';
        scores += "_____________________________________________\n";
        scores += "نمره نهایی شما در مجموع ";
        scores += parseFloat(data2[j][title_idx + 29]).toFixed(3);
        scores += " از 20 می باشد." + '\n\n';
        scores += "شما رتبه ";
        scores += data2[j][title_idx + 32];
        scores += " از مجموع 113 دانشجوی فعال درس کسب کرده‌اید." + '\n\n';
        scores += "نمره نهایی شما پس از اسکیل نمرات و محاسبه نمرات امتیازی "
        scores += parseFloat(data2[j][title_idx + 31]).toFixed(3);
        scores += "از 20 می باشد که این نمره در سامانه بهستان وارد خواهد شد." + '\n\n';
      }
    }
      var message = 'نمرات ' + unit + ' ' +
  'شما به شرح زیر است:\n\n' + scores + 
  'برای شما در تمامی مراحل زندگی آرزوی موفقیت و سربلندی داریم.' + 
   '\nبا آرزوی بهترین ها برای شما ,\nتیم دستیاران آموزشی درس ریاضیات گسسته';

    if (!oskol){
      //console.log(message);
      MailApp.sendEmail(email, subject, message);
    }
    

  }

  // var message = 'نمرات مبحث' + unit + ' ' +
  // 'شما به شرح زیر است:\n\n' + scores + 
  // 'در صورت وجود هرگونه ابهام، با ایمیل دستیار آموزشی مربوط به هر تمرین که در سربرگ تمرین مندرج است، در ارتباط باشید.\n'+
  //  '\nبا آرزوی بهترین ها برای شما ,\nتیم دستیاران آموزشی درس ریاضیات گسسته';
  
  //MailApp.sendEmail("mohammadamanlou2@gmail.com", subject, message);
}

