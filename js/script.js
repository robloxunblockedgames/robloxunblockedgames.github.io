// ============================================
// Fullscreen Mode Button Functionality
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  const fullscreenModeBtn = document.getElementById("fullscreenModeBtn")

  if (fullscreenModeBtn) {
    fullscreenModeBtn.addEventListener("click", () => {
      const documentElement = document.documentElement
      if (documentElement.requestFullscreen) {
        documentElement.requestFullscreen().catch((err) => {
          console.warn("Fullscreen request failed:", err)
        })
      } else if (documentElement.webkitRequestFullscreen) {
        documentElement.webkitRequestFullscreen()
      }
    })
  }

  // Exit fullscreen on Escape key
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      console.log("Exited fullscreen mode")
    }
  })

  // ============================================
  // Smooth Scroll for Internal Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#") {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })
})
