let body = document.body;
        let gatau = document.getElementById('gatau')
        let hhh = document.getElementById('hhh')
        // let navBawah = document.getElementById('navBawah')
        // let navBawah = document.getElementById('navBawah')

        const limit = 1;
        let counter = 0;
        let sisa;

        navAtas.style.display = "none";
        navBawah.style.display = "none";
        papan.style.display = "none";

        function gaada() {
            if (sisa == 0) {
                gatau.style.display = "none";
                hhh.style.display = "none";
                navAtas.style.display = "block";
                navBawah.style.display = "block";
                papan.style.display = "block";
                return
            }
            counter += 1;
            sisa = limit - counter;
        }
        function reRender() {
            location.reload();
        }