class Presenter {
    constructor(model, view) {
        this.model = model; 
        this.view = view;

        this.view.bindAddApplicant(this.handleAddApplicant.bind(this));
        this.view.bindDeleteApplicant(this.handleDeleteApplicant.bind(this));
        this.view.bindFilterApplicants(this.handleFilterApplicants.bind(this));

        this.view.displayApplicants(this.model.getApplicants());
    }

    handleAddApplicant(applicant) {
        if (this.validateApplicant(applicant)) {
            this.model.addApplicant(applicant);
            this.view.displayApplicants(this.model.getApplicants());
        } else {
            alert('Пожалуйста, заполните все поля корректно.');
        }
    }

    handleDeleteApplicant(index) {
        this.model.removeApplicant(index);
        this.view.displayApplicants(this.model.getApplicants());
    }

    handleFilterApplicants(filter) {
        const filteredApplicants = this.model.getApplicants().filter(applicant => {
            const searchTerm = filter.toLowerCase();
            return applicant.faculty.toLowerCase().includes(searchTerm) ||
                   applicant.fullname.toLowerCase().includes(searchTerm);
        });
        this.view.displayApplicants(filteredApplicants);
    }

    validateApplicant(applicant) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^8 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        return applicant.fullname && applicant.email && applicant.phone && applicant.faculty &&
               emailPattern.test(applicant.email) && phonePattern.test(applicant.phone);
    }
}
