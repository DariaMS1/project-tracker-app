var currentDaySelector = $('#currentDay');

function printTime() {
    var currentDayDisplay = dayjs().format("DD MMM YYYY [at] hh:mm:ss" );
    currentDaySelector.text(currentDayDisplay);
}
setInterval(printTime, 1000);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
      let inputValue = $(this).siblings(".description").val();
      let keyValue = $(this).parent().attr("id");
      console.log(inputValue, keyValue);
      localStorage.setItem(keyValue, inputValue);
    });
    console.log($(this));
  
    $(".time-block").each(function () {
      let hourBlock = parseInt($(this).attr("id").split("-").pop());
      let time = dayjs().hour();
  
      if (hourBlock < time) {
        $(this).addClass('past');
      }
      else if (hourBlock > time) {
        $(this).addClass('future');
      }
      else {
        $(this).addClass('present');
      }
      
      let key = $(this).attr("id");
      $(this).children(".description").val(localStorage.getItem(key));
    });
});