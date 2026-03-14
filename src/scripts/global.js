if (typeof document !== "undefined") {

    document.addEventListener("DOMContentLoaded", () => {

        const icons = document.querySelectorAll(".tech-icon")
        const cards = document.querySelectorAll(".project-card")
        const projectBtn = document.getElementById("resetFilter")

        icons.forEach(icon => {

            icon.addEventListener("click", () => {

                const tag = icon.dataset.tag

                cards.forEach(card => {

                    const tags = card.dataset.tags

                    if (tags.includes(tag)) {

                        card.style.display = "flex"

                        card.classList.remove("opacity-0", "translate-y-4")
                        card.classList.add("opacity-100", "translate-y-0")

                    } else {

                        card.style.display = "none"

                    }

                })

            })

        })

        if (projectBtn) {

            projectBtn.addEventListener("click", () => {

                cards.forEach(card => {

                    card.style.display = "flex"
                    card.classList.remove("opacity-0", "translate-y-4")
                    card.classList.add("opacity-100", "translate-y-0")

                })

            })

        }

        const navBtn = document.getElementById("navBtn")
        const mobileMenu = document.getElementById("mobileMenu")

        if (navBtn) {

            navBtn.addEventListener("click", () => {
                mobileMenu.classList.toggle("hidden")
            })

            document.querySelectorAll("#mobileMenu a").forEach(link => {

                link.addEventListener("click", () => {
                    mobileMenu.classList.add("hidden")
                })

            })

        }

    })
}