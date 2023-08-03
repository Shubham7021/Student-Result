document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  var userId = document.getElementById("userId").value;
  var dob = document.getElementById("dob").value;

  // Perform your conditions
  if (userId === "" || dob === "") {
    alert("Please enter both User ID and Date of Birth");
  } else {
    // Check the user's result based on conditions
    var result = "";

    // Example condition: if User ID is "123" and Date of Birth is "2000-01-01", show "Pass", otherwise show "Fail"
    
    
     if (userId === "123" && dob === "2000-01-01") {
      result = "Pass";
    } 
    else if (userId === "124" && dob === "2000-02-01") {
      result= "Fail";
    } else if (userId === "125" && dob === "2000-03-01") {
      result= "Pass";
    } else if (userId === "126" && dob === "2000-04-01") {
      resulr = "Fail";
    }else{
      result= "Fail";
    }
    


    

    // Display the result
    document.getElementById("result").innerHTML = "Result: " + result;
    document.getElementById("resultContainer").style.display = "block";
  }
});

