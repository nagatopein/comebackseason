// var tasks = [];

// var createTask = function (taskText, taskList) {
//     var taskLi = $("<li>").addClass("list-item");
//     var taskP = $("p").addClass("m-1").text(taskText);

//     taskLi.append(taskP);

//     $("#list1" + taskList).append(taskLi);
// };

// // edit tasks feature
// $("#list1").on("click", function () {
//     var text = $(this).text().trim();
//     console.log(text);

//     var textInput = $("<textarea>").addClass("h-100").val(text);

//     $(this).replaceWith(textInput);

//     textInput.trigger("focus");
// });