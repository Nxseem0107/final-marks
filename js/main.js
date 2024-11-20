const marks = document.querySelectorAll('input[type="number"]');

marks.forEach(mark => {
    mark.addEventListener('input', () => {
        const row = mark.closest('tr');
        const resultCell = row.querySelector('td:nth-child(5)');
        const explanationCell = row.querySelector('td:nth-child(6)');

        // Update the result and explanation based on the mark
        if (mark.value >= 50) {
            resultCell.textContent = 'P';
            explanationCell.textContent = 'Pass';
        } else {
            resultCell.textContent = 'F';
            explanationCell.textContent = 'Fail';
        }
    });
});
