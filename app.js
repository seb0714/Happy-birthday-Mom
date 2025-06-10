const song = new Audio('source/hbd.mp3');

function showMessage() {
    const outside = document.getElementById('outside');
    const inside = document.getElementById('inside');
    const body = document.body;

    outside.style.display = 'none';
    console.log('Happy Birthday, Mom!');
    alert('Happy Birthday, Mom! -Seb.');

    inside.innerHTML = `
        <div class="letter">
            <h2>Dear Mommy,</h2>
            <p>Happy Birthday, Mom! We just want to say thank you for everything mhie, for everything that you've done to us such as taking care of us since we were kids, loving us despite our stubbornness, and most importantly, making us happy no matter how hard our life hits us.</p>
            <p>We apologize for being lazy, unpredictable, stubborn, and disobedient sons. Thank you for sacrificing your life out there for us, we really appreciate all the things that you've been doing behind the scenes.</p>
            <p>We'll work hard on our academics and work our way up to our dreams, then, we will enjoy our lives together. Sounds like a big dream no? haha, don't worry, we'll try our best to achieve that dream. We still have to fly across the world together.</p>
            <p>Again, Happy birthday, Mom. We love you so much, so much more than ourselves. It may not look like it but trust me, that's what we feel deep inside us.</p>
            <p>Enjoy your day and don't push yourself too hard out there alright? Have fun on your day!</p>
            <p><strong>WE LOVE YOUU MHIEEE!</strong></p>
            <p style="margin-top: 40px;">- Seb, Joshua, Joaquin.</p>
        </div>
    `;

    inside.style.display = 'flex';
    body.style.backgroundColor = '#fff4e6';
    song.play();
}