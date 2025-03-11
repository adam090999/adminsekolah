document.addEventListener("DOMContentLoaded", function () {
  
      // Aktifkan dropdown Bootstrap
    var dropdownElements = document.querySelectorAll(".dropdown-toggle");
    dropdownElements.forEach(function (dropdown) {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault();
            let menu = this.nextElementSibling;
            if (menu.classList.contains("show")) {
                menu.classList.remove("show");
            } else {
              document.querySelectorAll(".dropdown-menu").forEach(function (el) {
                    el.classList.remove("show");
                });
                menu.classList.add("show");
            }
        });
    });

    // Klik di luar dropdown untuk menutupnya
    document.addEventListener("click", function (event) {
        dropdownElements.forEach(function (dropdown) {
            let nextElement = dropdown.nextElementSibling;
            if (nextElement && nextElement.classList.contains("dropdown-menu")) {
                if (!dropdown.contains(event.target) && !nextElement.contains(event.target)) {
                    nextElement.classList.remove("show");
                }
            }
        });
    });

    // Grafik Statistik Siswa
    const ctxSiswa = document.getElementById("chartSiswa").getContext("2d");
    new Chart(ctxSiswa, {
        type: "bar",
        data: {
            labels: ["Kelas 1", "Kelas 2", "Kelas 3", "Kelas 4", "Kelas 5", "Kelas 6"],
            datasets: [{
                label: "Jumlah Siswa",
                data: [50, 45, 60, 55, 65, 70],
                backgroundColor: "rgba(52, 152, 219, 0.7)"
            }]
        }
    });

    // Grafik Statistik Keuangan
    const ctxGuru = document.getElementById("chartGuru").getContext("2d");
    new Chart(ctxGuru, {
        type: "pie",
        data: {
            labels: ["SPP", "Gaji Guru", "Kegiatan", "Sarana"],
            datasets: [{
                label: "Keuangan",
                data: [50000000, 30000000, 15000000, 10000000],
                backgroundColor: ["#1abc9c", "#e74c3c", "#f1c40f", "#8e44ad"]
            }]
        }
    });
});
