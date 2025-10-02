document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const modalCloseBtn = document.querySelector('.modal-close');
    const modalCloseFooterBtn = document.querySelector('.modal-close-btn');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const formData = collectFormData();
        displayModal(formData);
    });

    function validateForm() {
        const requiredFields = [
            { id: 'date', name: 'Date' },
            { id: 'timeRange', name: 'Time Range' },
            { id: 'patientName', name: 'Patient Name' },
            { id: 'phone', name: 'Phone' },
            { id: 'doctor', name: 'Doctor' },
            { id: 'liveConsultant', name: 'Live Consultant' }
        ];

        for (let field of requiredFields) {
            const element = document.getElementById(field.id);
            if (!element.value.trim()) {
                alert(`Please fill in the required field: ${field.name}`);
                element.focus();
                return false;
            }
        }

        const email = document.getElementById('email').value;
        if (email && !isValidEmail(email)) {
            alert('Please enter a valid email address');
            document.getElementById('email').focus();
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function collectFormData() {
        const doctorSelect = document.getElementById('doctor');
        const doctorText = doctorSelect.options[doctorSelect.selectedIndex].text;

        const countryCode = document.getElementById('countryCode').value;
        const phoneNumber = document.getElementById('phone').value;
        const fullPhone = `${countryCode} ${phoneNumber}`;

        return {
            'Select Patient': document.getElementById('selectPatient').options[document.getElementById('selectPatient').selectedIndex].text,
            'Date': document.getElementById('date').value,
            'Time Range': document.getElementById('timeRange').value,
            'Patient Name': document.getElementById('patientName').value,
            'Gender': document.getElementById('gender').options[document.getElementById('gender').selectedIndex].text,
            'Email': document.getElementById('email').value || 'N/A',
            'Phone': fullPhone,
            'Doctor': doctorText,
            'Appointment Priority': document.getElementById('priority').options[document.getElementById('priority').selectedIndex].text,
            'Live Consultant (On Video Conference)': document.getElementById('liveConsultant').options[document.getElementById('liveConsultant').selectedIndex].text,
            'Symptoms': document.getElementById('symptoms').value || 'N/A',
            'Status': document.getElementById('status').options[document.getElementById('status').selectedIndex].text,
            'Nurse': document.getElementById('nurse').value || 'N/A',
            'Case ID': document.getElementById('caseId').value,
            'Encounter ID': document.getElementById('encounterId').value,
            'Payment Mode': document.getElementById('paymentMode').options[document.getElementById('paymentMode').selectedIndex].text,
            'Payment Status': document.getElementById('paymentStatus').options[document.getElementById('paymentStatus').selectedIndex].text
        };
    }

    function displayModal(data) {
        modalBody.innerHTML = '';

        for (let [label, value] of Object.entries(data)) {
            const row = document.createElement('div');
            row.className = 'detail-row';

            const labelDiv = document.createElement('div');
            labelDiv.className = 'detail-label';
            labelDiv.textContent = label + ':';

            const valueDiv = document.createElement('div');
            valueDiv.className = 'detail-value';
            valueDiv.textContent = value;

            row.appendChild(labelDiv);
            row.appendChild(valueDiv);
            modalBody.appendChild(row);
        }

        modal.classList.add('show');
    }

    function closeModal() {
        modal.classList.remove('show');
    }

    modalCloseBtn.addEventListener('click', closeModal);
    modalCloseFooterBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    const closeFormBtn = document.querySelector('.close-btn');
    closeFormBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to close this form?')) {
            window.close();
        }
    });

    const newPatientBtn = document.querySelector('.new-patient-btn');
    newPatientBtn.addEventListener('click', function() {
        alert('New Patient functionality would be implemented here');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    const modal = document.getElementById('modal');
    const modalCloseBtn = document.querySelector('.modal-close');
    const modalCloseFooterBtn = document.querySelector('.modal-close-btn');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
        alert("Saved successfully!");
    });

    function validateForm() {
        const requiredFields = [
            { id: 'date', name: 'Date' },
            { id: 'timeRange', name: 'Time Range' },
            { id: 'patientName', name: 'Patient Name' },
            { id: 'phone', name: 'Phone' },
            { id: 'doctor', name: 'Doctor' },
            { id: 'liveConsultant', name: 'Live Consultant' }
        ];

        for (let field of requiredFields) {
            const element = document.getElementById(field.id);
            if (!element.value.trim()) {
                alert(`Please fill in the required field: ${field.name}`);
                element.focus();
                return false;
            }
        }

        const email = document.getElementById('email').value;
        if (email && !isValidEmail(email)) {
            alert('Please enter a valid email address');
            document.getElementById('email').focus();
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function closeModal() {
        modal.classList.remove('show');
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalCloseFooterBtn) modalCloseFooterBtn.addEventListener('click', closeModal);

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    const closeFormBtn = document.querySelector('.close-btn');
    if (closeFormBtn) {
        closeFormBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to close this form?')) {
                window.close();
            }
        });
    }

    const newPatientBtn = document.querySelector('.new-patient-btn');
    if (newPatientBtn) {
        newPatientBtn.addEventListener('click', function() {
            alert('New Patient functionality would be implemented here');
        });
    }
});






