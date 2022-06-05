var tasks = [];

// save tasks to local storage
var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

// edit tasks
$("#list1").on("click", function () {
    var text = $(this).text().trim();
    console.log(text);

    var textInput = $("<textarea>").addClass("h-100").val(text);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});

$("#save1").on("click", function () {
    saveTasks();
    console.log("task saved");
})















//create tasks
// var createTask = function (taskText, taskList) {
//     var taskLi = $("<li>").addClass("list-item");
//     var taskP = $("p").addClass("m-1").text(taskText);

//     taskLi.append(taskP);

//     $("#list1" + taskList).append(taskLi);

// };

// var loadTasks = function () {
//     tasks = JSON.parse(localStorage.getItem("tasks"));

//     // if nothing in localStorage, create a new object to track all task status arrays
//     // if (!tasks) {
//     //   tasks = {
//     //     toDo: [],
//     //     inProgress: [],
//     //     inReview: [],
//     //     done: []
//     //   };
//     // }

//     // loop over object properties
//     $.each(tasks, function (list, arr) {
//         console.log(list, arr);
//         // then loop over sub-array
//         arr.forEach(function (task) {
//             createTask(task.text, task.date, list);
//         });
//     });
// };





// var colorCode = function () {
//     $(".time-block").each(function () {
//         var currentTime = moment().hours();
//         var timeBlock = parseInt($(this).attr("id").split("-")[1]);
//         if (timeBlock < currentTime) {
//             $(this).addClass("past");
//             $(this).removeClass("present");
//             $(this).removeClass("future");
//         }
//         else if (hourBlock === currentHour) {
//             $(this).addClass("present");
//             $(this).removeClass("past");
//             $(this).removeClass("future");
//         }
//         else {
//             $(this).addClass("future");
//             $(this).removeClass("past");
//             $(this).removeClass("present");
//         }
//     });
// }