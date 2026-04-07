function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const targetInput = document.getElementById("targetDate").value;

    const result = document.getElementById("result");
    const error = document.getElementById("error");

    result.innerHTML = "--";
    error.innerHTML = "";

    if (!dobInput || !targetInput) {
        error.innerHTML = "Please enter both dates.";
        return;
    }

    const dob = new Date(dobInput);
    const targetDate = new Date(targetInput);

    if (dob > targetDate) {
        error.innerHTML = "Date of birth cannot be in the future.";
        return;
    }

    let years = targetDate.getFullYear() - dob.getFullYear();
    let months = targetDate.getMonth() - dob.getMonth();
    let days = targetDate.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `${years} years ${months} months old and ${days} days old`;
}