function updateClock() {
      const now = new Date();

      // Time
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";

      

      // Date
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      const currentDate = now.toLocaleDateString(undefined, options);

      // Display
      document.getElementById("time").textContent =
        `${hours}:${minutes}:${seconds} ${ampm}`;

      document.getElementById("date").textContent = currentDate;
    }

    // Update immediately & every second
    updateClock();
    setInterval(updateClock, 1000);
