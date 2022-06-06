var tasks = [];
var taskIdCounter = 0;

var currentTime = moment().format("dddd, MMMM Do YYYY, h: mm a");
$("#currentDay").html(currentTime);

// save tasks to local storage
var saveTasks = function () {
    $(".saveBtn").on("click", function () {
        // create array to save tasks
        var newTasks = {
            time: $(this).parent.attr("id"),
            name: $(this).siblings("description").val()
        };

        task.push(saveTasks);
        localStorage.setItem("tasks", JSON.stringify(tasks))
    })

}









// var taskEl = document.querySelector(textarea);
// document.addEventListener('change', taskEl); {
//     console.log(this);
// };



// // edit tasks
// $(".time-block").on("click", function () {
//     // event.preventDefault();
//     var text = $(this).text().trim();
//     console.log(this), text;

//     var textInput = $("<textarea>").attr("taskId", taskIdCounter).addClass("h-100").val(text);
//     console.log(textInput);

//     $(this).replaceWith(textInput);
//     textInput.trigger("focus");

//     //save tasks
//     $(".saveBtn").on("click", function () {
//         tasks.push(textInput);
//         saveTasks(textInput);
//         console.log("task saved");
//     })

//     taskIdCounter++
// });





























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