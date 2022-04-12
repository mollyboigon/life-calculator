function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //then, round the number to the nearest integer
    num = Math.round(num);

    //then move the decimal back two places
    num = num / 100;

    // handle trailing zeroes
    num = num.toFixed(2);

    return num;
}
//get all the calculator inputs
const inputs = document.querySelectorAll("[name='qty']"); /*attribute and value*/
//evaluate all the inputs
inputs.forEach(function (input) { /* input is gonna be the fruit*/
//for each individual input, listen for change
    input.addEventListener("change", function(e) {
//we need to know which fruit or piece of fruit had its value change we need event to tell us where we are
        const this_input = e.target;
        const qty = parseFloat(e.target.value);
        const this_row = this_input.closest(".row") //closest looks at element first then element's parent if it doesn't match the selector, then grandparent, so forth, till it gets a match
        //will keep working up until it finds div class row
        const sleep = this_row.querySelector(".sleep"); //will find all descendants of this row with the class amazon on them;
            const sleep_span = sleep.querySelector("span"); // amazon span = go inside of it and find that span that's inside of it
            const sleep_rate = parseFloat(sleep.dataset.rate);  //amazon.dataset.price captures dataset as a string, parselfoat turns it into float 
                const sleep_years = qty * sleep_rate;
                sleep_span.innerHTML = round_number(sleep_years); 
                sleep.classList.add("active");//telling javascript to update node so that content is whatever you put on the other side of the equals sign

        const work = this_row.querySelector(".work");
            const work_span = work.querySelector("span");
            const work_rate = parseFloat(work.dataset.rate);
            const work_years = qty * work_rate;
                work_span.innerHTML = round_number(work_years);
                work.classList.add("active");

        const tv = this_row.querySelector(".tv");
            const tv_span = tv.querySelector("span");
            const tv_rate = parseFloat(tv.dataset.rate);
            const tv_years = qty * tv_rate;
                tv_span.innerHTML = round_number(tv_years);
                tv.classList.add("active");

        const eating = this_row.querySelector(".eating");
            const eating_span = eating.querySelector("span");
            const eating_rate = parseFloat(eating.dataset.rate);
            const eating_years = qty * eating_rate;
                    eating_span.innerHTML = round_number(eating_years);
                    eating.classList.add("active");
        
        });
    });