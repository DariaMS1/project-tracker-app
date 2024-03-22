var currentDaySelector = $('#currentDay');
var blocksContainer = $('#timeBlocks');
var saveBtn = $('#saveBtn')
var block = $(``)

var currentDayDisplay = dayjs().format("D MMM YYYY, HH:mm");

currentDaySelector.text(currentDayDisplay);

