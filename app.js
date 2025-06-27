$("#btn1").click(function(){
alert("welcome to our returant");
});
$("#btn2").click(function(){
    alert("if you already have an account use log in");
    });




    $(document).ready(function () {
        $('#exampleInputEmail1').on('input', function () {
            limitLabel($(this));
        });
    });
    
    function limitLabel(input) {
        const maxLength = 20;
        let inputValue = input.val();
    
        // Trim the input to the maximum allowed characters
        if (inputValue.length > maxLength) {
            inputValue = inputValue.slice(0, maxLength);
            input.val(inputValue);
        }
    
        // Remove leading and trailing white spaces
        input.val(input.val().trim());
    }




    $(document).ready(function () {
        $('#pass').on('input', function () {
            limitPassword($(this));
        });
    });
    
    function limitPassword(input) {
        const maxLength = 10;
        let inputValue = input.val();
    
        // Trim the input to the maximum allowed characters
        if (inputValue.length > maxLength) {
            inputValue = inputValue.slice(0, maxLength);
            input.val(inputValue);
        }
    }
 
    $(document).ready(function () {
        $('#form3Example4cd').on('input', function () {
            limitPassword($(this));
        });
    });
    
    function limitPassword(input) {
        const maxLength = 10;
        let inputValue = input.val();
    
        // Trim the input to the maximum allowed characters
        if (inputValue.length > maxLength) {
            inputValue = inputValue.slice(0, maxLength);
            input.val(inputValue);
        }
    }
    $(document).ready(function () {
        $('#form2Example3c').on('input', function () {
            limitPassword($(this));
        });
    });
    
    function limitPassword(input) {
        const maxLength = 10;
        let inputValue = input.val();
    
        // Trim the input to the maximum allowed characters
        if (inputValue.length > maxLength) {
            inputValue = inputValue.slice(0, maxLength);
            input.val(inputValue);
        }
    }
