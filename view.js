class View {
    constructor() {
        this.app = document.querySelector('#applicants-container');
        this.totalApplicants = document.querySelector('#total-applicants');
    }

    displayApplicants(applicants) {
        this.app.innerHTML = '';
        applicants.forEach((applicant, index) => {
            const applicantCard = document.createElement('div');
            applicantCard.classList.add('applicant-card');
            applicantCard.innerHTML = `
                <div>
                    <p>ФИО: ${applicant.fullname}</p>
                    <p>Email: ${applicant.email}</p>
                    <p>Телефон: ${applicant.phone}</p>
                    <p>Факультет: ${applicant.faculty}</p>
                </div>
                <button class="delete-btn" data-index="${index}">Удалить</button>
            `;
            this.app.appendChild(applicantCard);
        });
        this.totalApplicants.textContent = applicants.length;
    }

    bindAddApplicant(handler) {
        document.querySelector('#applicant-form').addEventListener('submit', event => {
            event.preventDefault();
            const fullname = document.querySelector('#fullname').value;
            const email = document.querySelector('#email').value;
            const phone = document.querySelector('#phone').value;
            const faculty = document.querySelector('#faculty').value;
            handler({ fullname, email, phone, faculty });
        });
    }

    bindDeleteApplicant(handler) {
        this.app.addEventListener('click', event => {
            if (event.target.classList.contains('delete-btn')) {
                const index = event.target.getAttribute('data-index');
                handler(index);
            }
        });
    }

    bindFilterApplicants(handler) {
        document.querySelector('#faculty-filter').addEventListener('change', event => {
            const faculty = event.target.value;
            handler(faculty);
        });

        document.querySelector('#search-input').addEventListener('input', event => {
            const searchTerm = event.target.value;
            handler(searchTerm);
        });
    }
}
