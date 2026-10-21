document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    const dobInput = document.getElementById('dob');
    const calcBtn = document.getElementById('calc-btn');
    const resultDiv = document.getElementById('result');
    
    // মোবাইলে ট্যাপ করলেই যেন ক্যালেন্ডার ওপেন হয়
    dobInput.addEventListener('click', function() {
        if (this.showPicker) {
            this.showPicker();
        }
    });

    calcBtn.addEventListener('click', () => {
        const dobValue = dobInput.value;
        if (!dobValue) { alert("Please select your Date of Birth!"); return; }
        
        const birthDate = new Date(dobValue);
        const today = new Date();
        
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();
        
        if (days < 0) { 
            months--; 
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0); 
            days += lastMonth.getDate(); 
        }
        if (months < 0) { 
            years--; 
            months += 12; 
        }
        
        document.getElementById('years').textContent = years;
        document.getElementById('months').textContent = months;
        document.getElementById('days').textContent = days;
        resultDiv.classList.remove('hidden');
    });

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('span');
            if (answer.style.display === 'block') { 
                answer.style.display = 'none'; 
                icon.textContent = '+'; 
            } else { 
                answer.style.display = 'block'; 
                icon.textContent = '−'; 
            }
        });
    });
});
