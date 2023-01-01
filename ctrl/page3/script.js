var content = document.querySelector('.courses');

function creationCours(path, title, price, container, category) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2');
    div.setAttribute('data-category', category);
    let img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');
    img.src = path;
    img.setAttribute('class', 'card-img');
    let contenu = document.createTextNode(title);
    p.appendChild(contenu);
    p.setAttribute('class', 'card-tilte');
    let contenu2 = document.createTextNode(price);
    span.appendChild(contenu2);
    span.setAttribute('class', 'card-text')
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    container.append(div);
}

courses.forEach(function(element) {
    creationCours(element.image, element.title, element.price, content, element.category);
});

function filterCourses(category) {
    // Hide all courses
    content.querySelectorAll('.card').forEach(function(card) {
        card.style.display = 'none';
    });

    // Show courses in the specified category
    content.querySelectorAll('.card').forEach(function(card) {
        if (card.dataset.category === category) {
            card.style.display = 'block';
        }
    });
}
