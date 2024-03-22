var currentDaySelector = $('#currentDay');
var blocksContainer = $('#timeBlocks');
var timeBlocks = $('.time-block')
var selectedTimeBlock
var saveBtn = $('#saveBtn')
var block = $(``)

function printTime() {
    var currentDayDisplay = dayjs().format("DD MMM YYYY [at] hh:mm:ss" );
    currentDaySelector.text(currentDayDisplay);
}
setInterval(printTime, 1000);
