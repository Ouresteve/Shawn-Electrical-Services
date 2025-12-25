const counters=document.querySelectorAll('.count');

counters.forEach(counter=> {
    counter.innerText='0';
    const updateCounter= ()=> {
        const target= +counter.getAttribute('data-target');
        const current= +counter.innerText;
        const increment = target/200;
        if(current<target) {
            counter.innerText=`${Math.ceil(current+increment)}`;
            setTimeout(updateCounter,15);
        }else{
            counter.innerText=target;
        }

    };

    const observer = new IntersectionObserver (entries=> {
        entries.forEach (entry=> {
            if(entry.isIntersecting) {
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, {threshold: 0.5});
    observer.observe(counter);
});