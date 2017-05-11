function submitBtn() {
    var newText = $("#txtInput").val();

    if (newText) {
        $("#txtOutput").html(newText);
    } else {
        alert("You did not enter any characters. Please try again.");
    }
}