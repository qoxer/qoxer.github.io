document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const sections = document.querySelectorAll(".content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(item => item.classList.remove("active"));
            tab.classList.add("active");

            sections.forEach(section => {
                section.classList.remove("active");
                if (section.id === tab.dataset.tab) {
                    section.classList.add("active");
                }
            });
        });
    });
});
