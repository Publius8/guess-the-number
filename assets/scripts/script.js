var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        numbers.sort(function() { return Math.random() - 0.5; }); 
        var index = 0;
        var score = 0;

        document.getElementById('current-number').innerText = "Present number: " + numbers[index];

        function guess(choice) {
            var currentNumber = numbers[index];
            var nextNumber = numbers[index + 1];

            if ((choice === 'higher' && nextNumber > currentNumber) || (choice === 'lower' && nextNumber < currentNumber)) {
                score++;
                document.getElementById('result').innerText = "Correct!";
            } else {
                document.getElementById('result').innerText = "Wrong! Next number is: " + nextNumber;
            }

            index++;
            if (index < numbers.length - 1) {
                document.getElementById('current-number').innerText = "Present number: " + numbers[index];
            } else {
                document.getElementById('current-number').innerText = "Game over";
                var buttons = document.querySelectorAll("button");
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = true;
                }
            }
            

            document.getElementById('score').innerText = "Score: " + score;
        }