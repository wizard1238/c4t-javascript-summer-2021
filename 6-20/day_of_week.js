window.onload = function() {
    document.getElementById("submit").addEventListener('click', function() {
        var day_num = document.getElementById('day_num').value
        var day_name = ""

        // put code to convert day_num to name of the day of the week here
        // set the variable `day_name` to the correct name

        //uses ===
        switch (day_num) {
            case "1":
                day_name = 'monday'
            default:
                day_name = "pls enter smth"
        }



        // -------------------------------------------

        alert(day_name)
        document.getElementById('day_num').value = ""
    })
}