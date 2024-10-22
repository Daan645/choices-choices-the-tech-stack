import "../../styles/footer.css"; 
export default function Footer() {
  return (
<footer class="footer">
    <div class="footer__grid">
        <enhanced:img src="/img/Veronica.png" class="footer__veronica" alt="logo van veronica in footer" width="200px" height="200px" />
        <h2 class="footer__h2">We. Love. Music</h2>
        <ul class="footer__socials">
            <h3 class="footer__h3">volg ons op social media</h3>
            <ul class="footer__socials-icons">
                <li class="footer__icons"><a href="/"><enhanced:img src="/img/Facebook.png"  alt="socials icoon Facebook" width="200px" height="200px"/></a></li>
                <li class="footer__icons"><a href="/"><enhanced:img src="/img/X.png" alt="socials icoon X" width="200px" height="200px"/></a></li>
                <li class="footer__icons"><a href="/"><enhanced:img src="/img/Youtube.png" alt="social icoon Youtube" width="200px" height="200px"/></a></li>
                <li class="footer__icons"><a href="/"><enhanced:img src="/img/Instagram.png" alt="social icoon Instagram" width="200px" height="200px"/></a></li>
            </ul>
        </ul>
        <ul class="footer__radio-veronica">
            <h3 class="footer__h3">Radio Veronica</h3>
            <li class="footer__radio-links"><a href="/">Home</a></li>
            <li class="footer__radio-links"><a href="/">Programmering</a></li>
            <li class="footer__radio-links"><a href="/">Ontdek</a></li>
            <li class="footer__radio-links"><a href="/">Acties</a></li>
        </ul>
        <ul class="footer__algemeen">
            <h3 class="footer__h3">Algemeen</h3>
            <li class="footer__algemeen-links"><a href="/">Frequenties</a></li>
            <li class="footer__algemeen-links"><a href="/">Alle programma's</a></li>
            <li class="footer__algemeen-links"><a href="/">DJ overzichtAlle programma's</a></li>
            <li class="footer__algemeen-links"><a href="/">Pers</a></li>
        </ul>
        <span class="footer__underline"></span>
        <p class="footer__copyright">&copy; Mediahuis 2024</p>
        <ul class="footer__FAQ">
            <li class="footer__FAQ-links"><a href="/">Privacy verklaring</a></li>
            <li class="footer__FAQ-links"><a href="/">Gebruiksvoorwaarden</a></li>
            <li class="footer__FAQ-links"><a href="/">Cookieverklaring</a></li>
            <li class="footer__FAQ-links"><a href="/">Cookie voorkeuren</a></li>
        </ul>
    </div>
</footer>
  );
}


