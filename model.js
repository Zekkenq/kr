class Model {
    constructor() {
        this.applicants = [];
    }

    addApplicant(applicant) {
        this.applicants.push(applicant);
    }

    removeApplicant(index) {
        this.applicants.splice(index, 1);
    }

    getApplicants() {
        return this.applicants;
    }
}
