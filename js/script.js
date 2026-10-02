const targetDate = new Date("October 30, 2026 00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "The day we've been waiting for has arrived!";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days").textContent=days;
  document.getElementById("hours").textContent=hours;
  document.getElementById("minutes").textContent=minutes;
 
  document.getElementById("countdown") =
    ` ${days} : ${hours}  : ${minutes} `;
}, 1000);
// =========================================================

const date = document.getElementById("date-typing");
const section1 = document.getElementById("date");

const observer1 = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {

        const originalText = date.textContent;
        date.textContent = "";

        let i = 0;

        function typing() {
            if (i < originalText.length) {
                date .textContent += originalText.charAt(i);
                i++;
                setTimeout(typing, 100);
            }
        }

        typing();

        observer1.unobserve(section1);
    }
});

observer1.observe(section1);


// ================================================
const time = document.getElementById("time-typing");
const section2 = document.getElementById("time");

const observer2 = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {

        const originalText = time.textContent;
        time.textContent = "";

        let i = 0;

        function typing() {
            if (i < originalText.length) {
                time.textContent += originalText.charAt(i);
                i++;
                setTimeout(typing, 100);
            }
        }

        typing();

        observer2.unobserve(section2);
    }
});

observer2.observe(section2);
// ================================================
const venue = document.getElementById("venue-typing");
const section3 = document.getElementById("venue");

const observer3 = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {

        const originalText = venue.textContent;
        venue.textContent = "";

        let i = 0;

        function typing() {
            if (i < originalText.length) {
                venue.textContent += originalText.charAt(i);
                i++;
                setTimeout(typing, 100);
            }
        }

        typing();

        observer3.unobserve(section3);
    }
});

observer3.observe(section3);


// =======================================================

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let formData = new FormData(form);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  })
  .then(async (response) => {
    let json = await response.json();
    if (response.status == 200) {
      alert("شكراً لك! تم إرسال تهنئتك بنجاح ❤️");
      form.reset();
    } else {
      console.log(json);
      alert(json.message || "حدث خطأ أثناء الإرسال.");
    }
  })
  .catch(error => {
    console.error("Network / CORS Error:", error);
    alert("تعذر الاتصال بالشبكة، يرجى التأكد من الإنترنت أو إيقاف مانع الإعلانات ثم المحاولة.");
  });
});