 document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        
        // // Закрыть другие аккордеоны
        // document.querySelectorAll('.accordion-item').forEach(item => {
        //     if (item !== accordionItem) {
        //         item.classList.remove('active');
        //     }
        // });
        
        // Переключить состояние текущего аккордеона
        accordionItem.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("scrollToOffice").addEventListener("click", function () {
        window.location.href = "#contact_us"; // Указать нужную страницу и секцию
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.nav__link').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // отступ для фиксированного меню
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const nameInput = form.querySelector("input[type='text']");
    const phoneInput = form.querySelector("input[type='tel']");
    const emailInput = form.querySelector("#email");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Останавливаем стандартную отправку формы

        let isValid = true;

        const nameRegex = /^[А-Яа-яA-Za-z\s]{2,30}$/;
        if (!nameRegex.test(nameInput.value.trim())) {
            showError(nameInput, "Введите корректное имя (только буквы)", form);
            isValid = false;
        } else {
            hideError(nameInput, form);
        }

        const phoneRegex = /^\+375(44|29|33)\d{7}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            showError(phoneInput, "Введите телефон в формате +375(ХХ)XXXXXXX", form);
            isValid = false;
        } else {
            hideError(phoneInput, form);
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, "Введите корректный e-mail", form);
            isValid = false;
        } else {
            hideError(emailInput, form);
        }

        if (isValid) {
            alert("Форма успешно отправлена!");
            form.submit();
        }
    });

    // Форма e-mail отдельно
    const emailForm = document.querySelector(".email-form");
    const emailInputForm = emailForm.querySelector("#email");

    emailForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailInputForm.value.trim())) {
            showError(emailInputForm, "Введите корректный e-mail", emailForm);
        } else {
            hideError(emailInputForm, emailForm);
            alert("Форма e-mail успешно отправлена!");
        }
    });

    function showError(input, message, form) {
        let errorText = input.previousElementSibling; // Теперь ошибка над полем в основной форме
        if (!errorText || !errorText.classList.contains("error")) {
            errorText = document.createElement("div");
            errorText.classList.add("error");
    
            if (form.classList.contains("form")) {
                input.before(errorText); // Ошибка над полем
            } else {
                input.after(errorText); // Ошибка под полем (для email)
            }
        }
        errorText.textContent = message;
        input.classList.add("input-error");
    }
    
    

    function hideError(input, form) {
        let errorText;
        
        if (form.classList.contains("form")) {
            errorText = input.previousElementSibling; // Ошибка над полем
        } else {
            errorText = input.nextElementSibling; // Ошибка под полем (email)
        }
    
        if (errorText && errorText.classList.contains("error")) {
            errorText.remove();
        }
        input.classList.remove("input-error");
    }
    
});


// бургер-меню
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const navMenu = document.getElementById("nav__menu");
    const body = document.body; // Получаем body

    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        navMenu.classList.toggle("active");
        body.classList.toggle("no-scroll"); // Добавляем/убираем класс для блокировки прокрутки
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll(".nav__link").forEach(link => {
        link.addEventListener("click", function () {
            burger.classList.remove("active");
            navMenu.classList.remove("active");
            body.classList.remove("no-scroll"); // Убираем блокировку прокрутки
        });
    });
});



    
