document.getElementById("coverForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    const bio = document.getElementById("bio").value;

    const letter = `
Dear Hiring Manager,

I am writing to express my keen interest in the ${position} position at your company. My name is ${name}, and I bring a background in ${bio}.

With a passion for delivering high-quality work and a drive to grow professionally, I believe I would be a great fit for your team. I look forward to the opportunity to contribute my skills and collaborate on impactful projects.

Thank you for considering my application.

Sincerely,  
${name}
    `;

    document.getElementById("letterText").innerText = letter;
});
