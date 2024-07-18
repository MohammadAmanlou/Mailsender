function cutoff() {

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet1 = ss.getSheetByName('Student. Info.'); 
var sheet2 = ss.getSheetByName('Global.');  // first edit subject here
var data1 = sheet1.getDataRange().getValues();
var data2 = sheet2.getDataRange().getValues();
var subject = "نتیجه بررسی کات‌آف درس ریاضیات گسسته"
for (var i = 1; i < data1.length; i++) {
  var message = "با سلام و احترام \n\n با توجه به نهایی شدن نمرات نیمه اول ترم، به اطلاع می‌رساند \n"
  var oskol = 0;
  var email = data1[i][0];
  var sid = data1[i][1];
  var scores = '';
  for (var j = 3; j < data2.length -1; j+=1) {
    if (data1[i][1] == data2[j][0]) {
      if (data2[j][8] == "No"){
        oskol = 1;
        message += "نمره میانترم شما از نیمی از نمرات اخذ شده در تمارین(مقدماتی و پیشرفته) نیمه اول ترم بیشتر بوده است؛ از همین رو شما کف کات‌آف را رد نمی‌کنید و نیاز است که درس را حذف کنید. توجه کنید در صورتی که درس را حذف نکنید، فارغ از اینکه در نیمه دوم ترم چه عملکردی داشته باشید، موفق به کسب نمره قبولی درس نخواهید شد. \n"
        
      }
      if (data2[j][3] < 3.5){
        oskol = 1;
        message += "نمره شما در نیمه اول ترم "
        message += String(data2[j][3]).slice(0, 5)
        message += " ";
        message += "از 8 شده است و توصیه می‌شود در بازه حذف اضطراری، درس ریاضیات گسسته را حذف کنید. \n توصیه مطرح شده به این دلیل است که شما در نیمه اول ترم مقدار قابل توجهی نمره از دست داده ‌اید و برای گذراندن درس مسیر بسیار سختی را در پیش دارید."
      }
    }
  }
  message += "\n";
  message += 'در صورت وجود هرگونه ابهام، با دستیار آموزشی ارشد درس (خانم پیش‌بین) در ارتباط باشید.\n' ;
  message += "تیم دستیاران آموزشی درس ریاضیات گسسته \n";
  message += "با آرزوی بهترین‌ها برای شما"
  
  if(oskol == 1){
    //MailApp.sendEmail(email, subject, message);
    console.log(message);
  }
}
}
