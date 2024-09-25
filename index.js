const container = document.querySelector(".data-container");

function generatebars(num = 20) {
    // Clear existing bars
    container.innerHTML = '';

    
    for (let i = 0; i < num; i++) {
        const value = Math.floor(Math.random() * 100) + 1;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        bar.style.transform = `translateX(${i * 30}px)`;

        const barLabel = document.createElement("label");
        barLabel.classList.add("bar_id");
        barLabel.innerText = value;
        bar.appendChild(barLabel);

        container.appendChild(bar);
    }
}

// Asynchronous function to perform Bubble Sort
async function BubbleSort(delay = 300) {
    const bars = document.querySelectorAll(".bar");

    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            await new Promise(resolve => setTimeout(resolve, delay));

            const val1 = parseInt(bars[j].querySelector(".bar_id").innerText);
            const val2 = parseInt(bars[j + 1].querySelector(".bar_id").innerText);

            if (val1 > val2) {
                
                const tempHeight = bars[j].style.height;
                const tempText = bars[j].querySelector(".bar_id").innerText;

                bars[j].style.height = bars[j + 1].style.height;
                bars[j].querySelector(".bar_id").innerText = bars[j + 1].querySelector(".bar_id").innerText;

                bars[j + 1].style.height = tempHeight;
                bars[j + 1].querySelector(".bar_id").innerText = tempText;
            }

            bars[j].style.backgroundColor = "rgb(24, 190, 255)";
            bars[j + 1].style.backgroundColor = "rgb(24, 190, 255)";
        }
        bars[bars.length - i - 1].style.backgroundColor = "rgb(49, 226, 13)";
    }

    
    const btn1 = document.getElementById("Button1");
    const btn2 = document.getElementById("Button2");
    btn1.disabled = false;
    btn1.style.backgroundColor = "#6f459e";
    btn2.disabled = false;
    btn2.style.backgroundColor = "#6f459e";
}


function disable() {
    const btn1 = document.getElementById("Button1");
    const btn2 = document.getElementById("Button2");
    btn1.disabled = true;
    btn1.style.backgroundColor = "#d8b6ff";
    btn2.disabled = true;
    btn2.style.backgroundColor = "#d8b6ff";
}


generatebars();

function generate() {
    generatebars();
}


document.getElementById("Button1").addEventListener("click", generate);
document.getElementById("Button2").addEventListener("click", () => {
    disable();
    BubbleSort();
});
