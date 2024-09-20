function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        document.getElementById('result').textContent = 'Please enter a birthdate.';
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();
    
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    let months = today.getMonth() - birthDateObj.getMonth();
    if (months < 0) {
        months += 12;
    }

    let days = today.getDate() - birthDateObj.getDate();
    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days += lastMonth.getDate();
    }

    document.getElementById('result').textContent = `You are ${age} years, ${months} months, and ${days} days old.`;
}
