// Navbar menu toggle
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menu && navbar) {
  menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
}

// Typed.js animation
if (document.querySelector('.multiple-text')) {
  new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Yoga', 'Fat Loss'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });
}

// DOMContentLoaded for physical fitness toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".physical-fitness .toggle-btn");
  const subOptions = document.querySelector(".physical-fitness .sub-options");
  const muscleInfo = document.getElementById("muscle-info");

  // Show/hide muscle options
  if (toggleBtn && subOptions) {
    toggleBtn.addEventListener("click", () => {
      const isVisible = subOptions.style.display === "block";
      subOptions.style.display = isVisible ? "none" : "block";
    });
  }

  // Show info for selected muscle
  if (subOptions && muscleInfo) {
    const options = subOptions.querySelectorAll("li");

    options.forEach(option => {
      option.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent the toggleBtn click from triggering
        const muscle = option.dataset.muscle;
        const info = getMuscleInfo(muscle);
        muscleInfo.innerHTML = `<strong>${info.title}</strong><p>${info.desc}</p>`;
        muscleInfo.style.display = "block";
      });
    });
  }

  // Info map for each muscle
  function getMuscleInfo(muscle) {
    const infoMap = {
      chest: {
        title: "Chest",
        desc: "Push-ups, bench press, and chest fly are great chest exercises."
      },
      back: {
        title: "Back",
        desc: "Pull-ups, rows, and lat pulldowns strengthen your back."
      },
      legs: {
        title: "Legs",
        desc: "Squats, lunges, and leg presses help build strong legs."
      },
      biceps: {
        title: "Biceps",
        desc: "Curls and chin-ups are effective for biceps growth."
      },
      triceps: {
        title: "Triceps",
        desc: "Tricep dips and pushdowns work your triceps well."
      },
      shoulders: {
        title: "Shoulders",
        desc: "Shoulder presses and lateral raises target deltoids effectively."
      }
    };
    return infoMap[muscle] || { title: "Muscle Group", desc: "More info coming soon." };
  }
});
