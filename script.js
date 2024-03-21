const quizdata = [
        {
            "question": "Who is often credited with coining the term 'entrepreneur'?",
            "options": ["Jean-Baptiste Say", "Adam Smith", "Karl Marx", "John Maynard Keynes"],
            "answer": "Jean-Baptiste Say"
        },
        {
            "question": "Which entrepreneur founded SpaceX?",
            "options": ["Elon Musk", "Jeff Bezos", "Mark Zuckerberg", "Larry Page"],
            "answer": "Elon Musk"
        },
        {
            "question": "What does 'ROI' stand for in the context of business?",
            "options": ["Return on Investment", "Revenue of Income", "Rate of Increase", "Risk of Inflation"],
            "answer": "Return on Investment"
        },
        {
            "question": "Which entrepreneur famously said, 'The only way to do great work is to love what you do'?",
            "options": ["Steve Jobs", "Bill Gates", "Richard Branson", "Oprah Winfrey"],
            "answer": "Steve Jobs"
        },
        {
            "question": "What does the term 'Bootstrapping' mean in entrepreneurship?",
            "options": ["Starting a business with minimal external help or capital", "Using only software solutions for business operations", "Running a business without a clear plan", "Investing heavily in marketing from the beginning"],
            "answer": "Starting a business with minimal external help or capital"
        },
        {
            "question": "Which entrepreneur is associated with the phrase 'Just do it'?",
            "options": ["Phil Knight", "Warren Buffett", "Michael Dell", "Jack Ma"],
            "answer": "Phil Knight"
        },
        {
            "question": "What is a 'Pivot' in the context of startups?",
            "options": ["A fundamental change in a business strategy", "A type of investment", "A legal document", "A networking event"],
            "answer": "A fundamental change in a business strategy"
        },
        {
            "question": "Who is the founder of Alibaba Group?",
            "options": ["Jack Ma", "Richard Liu", "Ma Huateng", "Jeff Bezos"],
            "answer": "Jack Ma"
        },
        {
            "question": "What is the term for the process of converting an idea or invention into a marketable product or service?",
            "options": ["Commercialization", "Monetization", "Standardization", "Diversification"],
            "answer": "Commercialization"
        },
        {
            "question": "What does the acronym 'MVP' stand for in the context of startups?",
            "options": ["Minimum Viable Product", "Most Valuable Player", "Market Value Potential", "Maximum Value Proposition"],
            "answer": "Minimum Viable Product"
        }   

    ];

        let currentquestion = 0;
        let marks = 0;
        let timeleft=300;
        const timer=document.getElementById('time');
        const timeinterval=setInterval(function(){
            timeleft--;
            timer.textContent=timeleft;

            if (timeleft<=0){
                clearInterval(timeinterval);
                alert('time is over');
            }
        },1000);

        const lenght = quizdata.length;
        // console.log(lenght);

        // console.log(quizdata.length);
        function loadquestion() {
            const question_conatiner = document.getElementById('question_conatiner');
            const option_container = document.getElementById('option_container');
            const number = document.getElementById('number');

            question_conatiner.innerHTML = quizdata[currentquestion].question;

            option_container.innerHTML = '';
            quizdata[currentquestion].options.forEach(option => {
                const button = document.createElement("button");
                button.innerText = option;
                button.addEventListener('click', () => {
                    button.style.backgroundColor = 'rgb(63, 197, 241)';
                    button.style.color = 'white';
                })
                button.addEventListener('click', () => selectanswer(option));
                option_container.appendChild(button);
            })

            number.innerHTML = `${[currentquestion+1]} / ${lenght}`;

           
        }

        function selectanswer(selectedoption) {
            const answer = quizdata[currentquestion].answer;

            if (selectedoption === answer) {

                display.innerHTML = selectedoption + ': <h4>Your Answer is correct</h4>';
                marks++
                const mark = document.getElementById('marks').innerHTML= `${marks} / 10`;
            } else {

                display.innerHTML = selectedoption + ':<h4> Answer is wrong </h4> <br> The correct Answer is :' + answer;
               
            }
            const answerButtons = document.querySelectorAll('#option_container button');
    answerButtons.forEach(button => {
        button.disabled = true;
    });

            currentquestion++;
        }

        const click = document.getElementById('click');
        click.addEventListener('mouseover', () => {
            click.style.backgroundColor = 'rgb(63, 197, 241)';
            click.style.color = 'white';
        })

        click.addEventListener('mouseout', () => {
            click.style.backgroundColor = 'white';
            click.style.color = 'rgb(63, 197, 241)';
        })

        function nextquestion() {

           
            display.innerHTML = '';
            if (currentquestion < quizdata.length) {
                loadquestion();
            } else {
                submitanswer();
            }
        }

        function submitanswer() {
            const printscore = document.getElementById('result');
            printscore.innerhtml=`<h4> your total marks is ${score} out of 10 </h4>`;

        }

        loadquestion();
