// Fonction pour animer le compteur
function animateCounter(element, start, end, duration) {
    let startTime = null;

    // La fonction qui met à jour le compteur
    const updateCounter = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min((elapsedTime / duration), 1);

        const currentCount = Math.floor(progress * (end - start) + start);
        element.text(currentCount);

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.text(end); // Assurez-vous d'afficher la valeur finale
        }
    };

    requestAnimationFrame(updateCounter);
}

$(document).ready(function() {
    // Activez cette partie pour chaque compteur sur la page
    $('.counter').each(function() {
        const $this = $(this);
        const countTo = parseInt($this.attr('data-count'));

        animateCounter($this, 0, countTo, 2000); // 2000 ms = 2 secondes
    });
});
