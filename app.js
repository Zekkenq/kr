document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();
    const presenter = new Presenter(model, view);
});
